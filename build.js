const fs = require('fs');
const path = require('path');

console.log('Starting to copy public folder to .next');

const src = 'public';
const dest = '.next';

if (fs.existsSync(src)) {
  fs.readdirSync(src).forEach(item => {
    const srcPath = path.join(src, item);
    const destPath = path.join(dest, item);
    fs.cpSync(srcPath, destPath, { recursive: true, force: true });
    console.log(`Copied ${item} to .next`);
  });
  console.log('Finished copying public folder');
} else {
  console.log('Public folder not found');
}