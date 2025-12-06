import db from './database.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataPath = path.join(__dirname, '../data/areaCodes.json');

const areaCodes = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

const insert = db.prepare(`
  INSERT OR REPLACE INTO area_codes (code, state, cities, timezone, year, related_codes)
  VALUES (?, ?, ?, ?, ?, ?)
`);

const insertMany = db.transaction((codes) => {
  for (const code of codes) {
    insert.run(
      code.code,
      code.state,
      JSON.stringify(code.cities),
      code.timezone,
      code.year,
      JSON.stringify(code.related_codes)
    );
  }
});

insertMany(areaCodes);
console.log(`✅ Seeded ${areaCodes.length} area codes successfully!`);