const { version } = require('../package.json');
const fs = require('fs');
const path = require('path');
// Rewrite version in index.ts with version from package.json
const file = fs.readFileSync(path.join(__dirname, '../typescript/src/index.ts'), 'utf8');
const lines = file.split('\r\n');
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('this.version = ')) {
    lines[i] = `this.version = '${version}';`;
  }
}
fs.writeFileSync(path.join(__dirname, '../typescript/src/index.ts'), lines.join('\r\n'));