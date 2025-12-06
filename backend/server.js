import express from 'express';
import cors from 'cors';
import db from './database.js';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Get all area codes
app.get('/api/area-codes', (req, res) => {
  try {
    const codes = db.prepare('SELECT * FROM area_codes').all();
    const formatted = codes.map(code => ({
      ...code,
      cities: JSON.parse(code.cities),
      related_codes: JSON.parse(code.related_codes)
    }));
    res.json(formatted);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Search by code
app.get('/api/area-codes/search', (req, res) => {
  const { code } = req.query;
  
  if (!code) {
    return res.status(400).json({ error: 'Code parameter required' });
  }

  try {
    const result = db.prepare('SELECT * FROM area_codes WHERE code = ?').get(code);
    
    if (!result) {
      return res.status(404).json({ error: 'Area code not found' });
    }

    const formatted = {
      ...result,
      cities: JSON.parse(result.cities),
      related_codes: JSON.parse(result.related_codes)
    };

    res.json(formatted);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get codes by state
app.get('/api/area-codes/state/:state', (req, res) => {
  const { state } = req.params;

  try {
    const codes = db.prepare('SELECT * FROM area_codes WHERE state = ?').all(state);
    const formatted = codes.map(code => ({
      ...code,
      cities: JSON.parse(code.cities),
      related_codes: JSON.parse(code.related_codes)
    }));
    res.json(formatted);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Backend running on http://localhost:${PORT}`);
});