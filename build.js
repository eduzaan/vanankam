const fs = require('fs');
const path = require('path');

const src = 'public';
const dest = '.next';

if (fs.existsSync(src)) {
  fs.readdirSync(src).forEach(item => {
    const srcPath = path.join(src, item);
    const destPath = path.join(dest, item);
    fs.cpSync(srcPath, destPath, { recursive: true, force: true });
  });
}