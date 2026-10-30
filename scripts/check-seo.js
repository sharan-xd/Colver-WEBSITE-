const fs = require('fs');
const path = require('path');

function getFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getFiles(fullPath));
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      results.push(fullPath);
    }
  });
  return results;
}

const allFiles = getFiles(path.join(__dirname, '../app')).concat(getFiles(path.join(__dirname, '../components')));

console.log('--- CHECKING IMAGES FOR ALT ATTRIBUTES ---');
allFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  // Match <Image or <img
  const regex = /<(Image|img)\b([^>]*?)(?:\/?>|>[\s\S]*?<\/(?:Image|img)>)/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    const attrs = match[2];
    if (!attrs.includes('alt=')) {
      console.log('Missing alt attribute in:', file, match[0].slice(0, 80));
    } else {
      const altMatch = attrs.match(/alt=(?:["'`]([^"'`]*?)["'`]|{([^}]*?)})/);
      if (altMatch && ((altMatch[1] !== undefined && altMatch[1].trim() === '') || (altMatch[2] !== undefined && altMatch[2].trim() === '""'))) {
        console.log('Empty alt in:', file, match[0].slice(0, 80));
      }
    }
  }
});

console.log('\n--- CHECKING HEADINGS H1/H2 PER MARKETING PAGE ---');
const pageFiles = getFiles(path.join(__dirname, '../app/(marketing)'));
pageFiles.filter(f => f.endsWith('page.tsx')).forEach(file => {
  const pageName = path.relative(path.join(__dirname, '../app/(marketing)'), file);
  const content = fs.readFileSync(file, 'utf8');
  const hasMetadata = content.includes('export const metadata');
  const titleMatch = content.match(/title:\s*['"`]([^'"`]+)['"`]/);
  const descMatch = content.match(/description:\s*['"`]([^'"`]+)['"`]/);
  
  console.log(`Page: ${pageName}`);
  console.log(`  Title: ${titleMatch ? titleMatch[1] : 'Inherited or dynamic'}`);
  console.log(`  Desc length: ${descMatch ? descMatch[1].length + ' chars' : 'None'}`);
});
