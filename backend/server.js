import express from 'express';
import cors from 'cors';
import compression from 'compression';
import db from './database.js';

const app = express();
const PORT = process.env.PORT || 5000;

// ===== PERFORMANCE MIDDLEWARE =====

// Enable Gzip/Brotli compression
app.use(compression({
  level: 6,
  threshold: 1024,
  filter: (req, res) => {
    if (req.headers['x-no-compression']) return false;
    return compression.filter(req, res);
  }
}));

// CORS with caching
app.use(cors({
  origin: ['https://allareacodes.cloud', 'http://localhost:3000'],
  maxAge: 86400 // Cache preflight for 24 hours
}));

app.use(express.json({ limit: '10kb' }));

// ===== IN-MEMORY CACHE =====
const cache = new Map();
const CACHE_TTL = 3600000; // 1 hour

function getCached(key) {
  const item = cache.get(key);
  if (!item) return null;
  if (Date.now() > item.expiry) {
    cache.delete(key);
    return null;
  }
  return item.data;
}

function setCache(key, data, ttl = CACHE_TTL) {
  cache.set(key, { data, expiry: Date.now() + ttl });
}

// ===== OPTIMIZED ENDPOINTS =====

// Get all area codes (with caching)
app.get('/api/area-codes', (req, res) => {
  try {
    const cacheKey = 'all-codes';
    let formatted = getCached(cacheKey);
    
    if (!formatted) {
      const codes = db.prepare('SELECT * FROM area_codes').all();
      formatted = codes.map(code => ({
        ...code,
        cities: JSON.parse(code.cities),
        related_codes: JSON.parse(code.related_codes)
      }));
      setCache(cacheKey, formatted);
    }
    
    // Strong caching headers
    res.set({
      'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
      'ETag': `"codes-${Date.now()}"`,
      'Vary': 'Accept-Encoding'
    });
    
    res.json(formatted);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Search by code (with caching)
app.get('/api/area-codes/search', (req, res) => {
  const { code } = req.query;
  
  if (!code || !/^\d{3}$/.test(code)) {
    return res.status(400).json({ error: 'Valid 3-digit code required' });
  }

  try {
    const cacheKey = `code-${code}`;
    let formatted = getCached(cacheKey);
    
    if (!formatted) {
      const result = db.prepare('SELECT * FROM area_codes WHERE code = ?').get(code);
      
      if (!result) {
        return res.status(404).json({ error: 'Area code not found' });
      }

      formatted = {
        ...result,
        cities: JSON.parse(result.cities),
        related_codes: JSON.parse(result.related_codes)
      };
      setCache(cacheKey, formatted);
    }

    res.set({
      'Cache-Control': 'public, max-age=86400, stale-while-revalidate=604800',
      'Vary': 'Accept-Encoding'
    });

    res.json(formatted);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get codes by state (with caching)
app.get('/api/area-codes/state/:state', (req, res) => {
  const { state } = req.params;
  const normalizedState = state.replace(/-/g, ' ');

  try {
    const cacheKey = `state-${normalizedState}`;
    let formatted = getCached(cacheKey);
    
    if (!formatted) {
      const codes = db.prepare(
        'SELECT * FROM area_codes WHERE LOWER(state) = LOWER(?)'
      ).all(normalizedState);
      
      formatted = codes.map(code => ({
        ...code,
        cities: JSON.parse(code.cities),
        related_codes: JSON.parse(code.related_codes)
      }));
      setCache(cacheKey, formatted);
    }
    
    res.set({
      'Cache-Control': 'public, max-age=86400, stale-while-revalidate=604800',
      'Vary': 'Accept-Encoding'
    });

    res.json(formatted);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Health check (no caching)
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: Date.now() });
});

app.listen(PORT, () => {
  console.log(`🚀 Backend running on http://localhost:${PORT}`);
});