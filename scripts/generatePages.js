// scripts/generatePages.js

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Load area codes data
const dataPath = path.join(__dirname, '../data/areaCodes.json');
const areaCodes = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

// HTML Template for each area code page
const createPageTemplate = (code) => {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Area Code ${code.code} – ${code.state} Location, Map, and Time Zone</title>
    <meta name="description" content="Learn where area code ${code.code} is located, which cities it serves in ${code.state}, and find who may be calling you.">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f9fafb;
        }
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }
        header {
            background: linear-gradient(135deg, #2563eb, #7c3aed);
            color: white;
            padding: 60px 20px;
            text-align: center;
        }
        h1 {
            font-size: 2.5rem;
            margin-bottom: 10px;
        }
        .subtitle {
            font-size: 1.2rem;
            opacity: 0.9;
        }
        .content {
            background: white;
            padding: 40px;
            margin: 30px 0;
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }
        .info-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            margin: 30px 0;
            padding: 20px;
            background: #eff6ff;
            border-radius: 8px;
        }
        .info-item h3 {
            color: #1e40af;
            margin-bottom: 5px;
        }
        .affiliate-cta {
            background: linear-gradient(135deg, #3b82f6, #8b5cf6);
            color: white;
            padding: 30px;
            border-radius: 10px;
            margin: 30px 0;
        }
        .affiliate-cta h2 {
            margin-bottom: 15px;
        }
        .btn {
            display: inline-block;
            padding: 12px 30px;
            background: white;
            color: #2563eb;
            text-decoration: none;
            border-radius: 6px;
            font-weight: bold;
            margin: 10px 10px 10px 0;
        }
        .btn:hover {
            background: #f0f9ff;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
        }
        th, td {
            padding: 12px;
            text-align: left;
            border-bottom: 1px solid #e5e7eb;
        }
        th {
            background: #f3f4f6;
            font-weight: 600;
        }
        .related-codes {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            margin: 20px 0;
        }
        .code-badge {
            background: #dbeafe;
            color: #1e40af;
            padding: 8px 16px;
            border-radius: 6px;
            text-decoration: none;
            font-weight: 600;
        }
        .code-badge:hover {
            background: #bfdbfe;
        }
        .warning-box {
            background: #fef3c7;
            border-left: 4px solid #f59e0b;
            padding: 20px;
            margin: 20px 0;
            border-radius: 4px;
        }
        .faq {
            margin: 30px 0;
        }
        .faq-item {
            background: white;
            border: 1px solid #e5e7eb;
            padding: 20px;
            margin: 15px 0;
            border-radius: 8px;
        }
        .faq-item h3 {
            color: #1e40af;
            margin-bottom: 10px;
        }
        footer {
            background: #1f2937;
            color: white;
            text-align: center;
            padding: 30px 20px;
            margin-top: 50px;
        }
        .ad-placeholder {
            background: #f3f4f6;
            border: 2px dashed #d1d5db;
            padding: 60px 20px;
            text-align: center;
            margin: 30px 0;
            border-radius: 8px;
            color: #6b7280;
            font-weight: 600;
        }
        @media (max-width: 768px) {
            h1 {
                font-size: 2rem;
            }
            .content {
                padding: 20px;
            }
        }
    </style>
</head>
<body>
    <header>
        <div class="container">
            <h1>Area Code ${code.code}</h1>
            <p class="subtitle">${code.state} | ${code.timezone}</p>
        </div>
    </header>

    <div class="container">
        <div class="content">
            <h2>📍 Where is Area Code ${code.code}?</h2>
            <p style="font-size: 1.1rem; margin: 20px 0;">
                The <strong>${code.code}</strong> area code is located in <strong>${code.state}</strong>, 
                serving major cities such as ${code.cities.join(', ')}. It operates in the 
                <strong>${code.timezone}</strong> time zone and was introduced in <strong>${code.year}</strong>.
            </p>

            <div class="info-grid">
                <div class="info-item">
                    <h3>State</h3>
                    <p>${code.state}</p>
                </div>
                <div class="info-item">
                    <h3>Major Cities</h3>
                    <p>${code.cities.join(', ')}</p>
                </div>
                <div class="info-item">
                    <h3>Time Zone</h3>
                    <p>${code.timezone}</p>
                </div>
                <div class="info-item">
                    <h3>Year Established</h3>
                    <p>${code.year}</p>
                </div>
            </div>
        </div>

        <div class="ad-placeholder">
            [BANNER AD PLACEMENT - 728x90]
        </div>

        <div class="affiliate-cta">
            <h2>🔍 Unknown Caller from ${code.code}?</h2>
            <p>Discover who's calling you with a reverse phone lookup. Get instant results including name, address, and more.</p>
            <a href="https://www.truthfinder.com?aff=YOUR_AFFILIATE_ID" class="btn" target="_blank" rel="nofollow">
                🔎 TruthFinder Lookup →
            </a>
            <a href="https://www.beenverified.com?aff=YOUR_AFFILIATE_ID" class="btn" target="_blank" rel="nofollow">
                ✅ BeenVerified Search →
            </a>
        </div>

        <div class="content">
            <h2>🔔 Is ${code.code} a Scam Number?</h2>
            <div class="warning-box">
                <p><strong>Warning:</strong> Many users report receiving spam calls from the ${code.code} area code. 
                While not all calls from this area code are scams, it's important to be cautious with unknown numbers.</p>
                <ul style="margin: 15px 0 15px 20px;">
                    <li>Never share personal information with unknown callers</li>
                    <li>Don't click links sent via text from unknown numbers</li>
                    <li>Use a reverse lookup tool to identify callers</li>
                    <li>Report suspicious calls to the FTC</li>
                </ul>
            </div>
        </div>

        <div class="content">
            <h2>🕒 Time Zone & Coverage Details</h2>
            <table>
                <thead>
                    <tr>
                        <th>Time Zone</th>
                        <th>State</th>
                        <th>Major Cities</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>${code.timezone}</td>
                        <td>${code.state}</td>
                        <td>${code.cities.join(', ')}</td>
                    </tr>
                </tbody>
            </table>
        </div>

        ${code.related_codes.length > 0 ? `
        <div class="content">
            <h2>🧩 Related Area Codes in ${code.state}</h2>
            <p>These area codes also serve ${code.state} or nearby regions:</p>
            <div class="related-codes">
                ${code.related_codes.map(relCode => 
                    `<a href="/area-code-${relCode}.html" class="code-badge">${relCode}</a>`
                ).join('')}
            </div>
        </div>
        ` : ''}

        <div class="ad-placeholder">
            [SQUARE AD PLACEMENT - 300x250]
        </div>

        <div class="content faq">
            <h2>❓ Frequently Asked Questions</h2>
            
            <div class="faq-item">
                <h3>Where is area code ${code.code}?</h3>
                <p>Area code ${code.code} is in ${code.state}, serving cities including ${code.cities.join(', ')}.</p>
            </div>

            <div class="faq-item">
                <h3>What time zone is ${code.code}?</h3>
                <p>The ${code.code} area code operates in the ${code.timezone} time zone.</p>
            </div>

            <div class="faq-item">
                <h3>Is ${code.code} used for spam calls?</h3>
                <p>Like most area codes, ${code.code} can be used by both legitimate callers and scammers. 
                Use a reverse lookup tool to verify unknown callers before answering.</p>
            </div>

            <div class="faq-item">
                <h3>When was area code ${code.code} established?</h3>
                <p>Area code ${code.code} was introduced in ${code.year}.</p>
            </div>
        </div>
    </div>

    <footer>
        <div class="container">
            <p>&copy; 2025 Area Code Finder. All rights reserved.</p>
            <p style="margin-top: 10px;">
                <a href="/index.html" style="color: #93c5fd; text-decoration: none;">Home</a> | 
                <a href="/all-codes.html" style="color: #93c5fd; text-decoration: none;">All Codes</a> | 
                <a href="/faq.html" style="color: #93c5fd; text-decoration: none;">FAQ</a>
            </p>
        </div>
    </footer>

    <!-- Schema Markup for SEO -->
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Where is area code ${code.code}?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Area code ${code.code} is located in ${code.state}, serving major cities including ${code.cities.join(', ')}."
                }
            },
            {
                "@type": "Question",
                "name": "What time zone is area code ${code.code}?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Area code ${code.code} operates in the ${code.timezone} time zone."
                }
            },
            {
                "@type": "Question",
                "name": "When was area code ${code.code} established?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Area code ${code.code} was introduced in ${code.year}."
                }
            }
        ]
    }
    </script>
</body>
</html>`;
};

// Create output directory
const outputDir = path.join(__dirname, '../generated-pages');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Generate pages for all area codes
console.log('🚀 Starting page generation...\n');

let successCount = 0;
let errorCount = 0;

areaCodes.forEach((code, index) => {
  try {
    const pageContent = createPageTemplate(code);
    const fileName = `area-code-${code.code}.html`;
    const filePath = path.join(outputDir, fileName);
    
    fs.writeFileSync(filePath, pageContent);
    successCount++;
    
    // Show progress
    if ((index + 1) % 50 === 0) {
      console.log(`✅ Generated ${index + 1} pages...`);
    }
  } catch (error) {
    console.error(`❌ Error generating page for ${code.code}:`, error.message);
    errorCount++;
  }
});

// Generate index page
const indexContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Area Code Finder - Lookup Any U.S. Area Code</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: #f9fafb;
        }
        header {
            background: linear-gradient(135deg, #2563eb, #7c3aed);
            color: white;
            padding: 80px 20px;
            text-align: center;
        }
        h1 { font-size: 3rem; margin-bottom: 20px; }
        .container { max-width: 1200px; margin: 0 auto; padding: 20px; }
        .grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
            gap: 15px;
            margin: 40px 0;
        }
        .code-card {
            background: white;
            padding: 20px;
            border-radius: 8px;
            text-align: center;
            text-decoration: none;
            color: #333;
            border: 2px solid #e5e7eb;
            transition: all 0.3s;
        }
        .code-card:hover {
            border-color: #2563eb;
            box-shadow: 0 4px 12px rgba(37,99,235,0.2);
        }
        .code-number {
            font-size: 2rem;
            font-weight: bold;
            color: #2563eb;
            margin-bottom: 5px;
        }
        .code-state {
            font-size: 0.9rem;
            color: #6b7280;
        }
    </style>
</head>
<body>
    <header>
        <h1>📞 Area Code Finder</h1>
        <p>Find any U.S. area code location, cities, and time zones</p>
    </header>
    <div class="container">
        <h2 style="margin: 30px 0 20px 0;">All U.S. Area Codes</h2>
        <div class="grid">
            ${areaCodes.map(code => `
                <a href="area-code-${code.code}.html" class="code-card">
                    <div class="code-number">${code.code}</div>
                    <div class="code-state">${code.state}</div>
                </a>
            `).join('')}
        </div>
    </div>
</body>
</html>`;

fs.writeFileSync(path.join(outputDir, 'index.html'), indexContent);

// Summary
console.log('\n' + '='.repeat(50));
console.log('📊 GENERATION SUMMARY');
console.log('='.repeat(50));
console.log(`✅ Successfully generated: ${successCount} pages`);
console.log(`❌ Errors: ${errorCount}`);
console.log(`📁 Output directory: ${outputDir}`);
console.log('='.repeat(50));

if (successCount > 0) {
  console.log('\n🎉 Page generation complete!');
  console.log(`\n💡 Next steps:`);
  console.log(`   1. Review generated files in: ${outputDir}`);
  console.log(`   2. Update affiliate links with your IDs`);
  console.log(`   3. Replace ad placeholders with real ad code`);
  console.log(`   4. Deploy to your web server\n`);
}

export default { createPageTemplate };