import express from 'express';
import db from '../database.js';

const router = express.Router();

// Create reports table
db.exec(`
  CREATE TABLE IF NOT EXISTS spam_reports (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    area_code TEXT NOT NULL,
    phone_number TEXT,
    report_type TEXT NOT NULL,
    description TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

// Submit spam report
router.post('/report', (req, res) => {
  const { areaCode, phoneNumber, reportType, description } = req.body;

  if (!areaCode || !reportType) {
    return res.status(400).json({ error: 'Area code and report type required' });
  }

  const insert = db.prepare(`
    INSERT INTO spam_reports (area_code, phone_number, report_type, description)
    VALUES (?, ?, ?, ?)
  `);

  try {
    insert.run(areaCode, phoneNumber, reportType, description);
    res.json({ success: true, message: 'Report submitted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get spam statistics for an area code
router.get('/stats/:code', (req, res) => {
  const { code } = req.params;

  const stats = db.prepare(`
    SELECT 
      report_type,
      COUNT(*) as count
    FROM spam_reports
    WHERE area_code = ?
    GROUP BY report_type
  `).all(code);

  res.json(stats);
});

export default router;