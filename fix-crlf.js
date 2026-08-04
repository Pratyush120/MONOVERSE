// fix-crlf.js — runs before Contentlayer build to strip Windows CRLF line endings
// This is needed because Git on Windows may commit files with CRLF, which breaks
// the YAML frontmatter parser in Contentlayer (it only expects LF).
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'content', 'essays');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.mdx') || f.endsWith('.md'));

let fixed = 0;
files.forEach(f => {
  const p = path.join(dir, f);
  const raw = fs.readFileSync(p);
  if (raw.includes(13)) { // 13 = \r
    fs.writeFileSync(p, raw.toString('binary').replace(/\r\n/g, '\n'), 'binary');
    fixed++;
    console.log('  Fixed CRLF:', f);
  }
});

if (fixed === 0) {
  console.log('  No CRLF issues found.');
} else {
  console.log(`  Fixed ${fixed} file(s).`);
}
