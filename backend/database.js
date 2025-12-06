import Database from 'better-sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const db = new Database(path.join(__dirname, 'areacodes.db'));

// Create table
db.exec(`
  CREATE TABLE IF NOT EXISTS area_codes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    code TEXT UNIQUE NOT NULL,
    state TEXT NOT NULL,
    cities TEXT NOT NULL,
    timezone TEXT NOT NULL,
    year INTEGER NOT NULL,
    related_codes TEXT NOT NULL
  )
`);

export default db;