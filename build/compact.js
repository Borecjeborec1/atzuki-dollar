const fs = require('fs');
const path = require('path');

// replace all imports with require
const file = fs.readFileSync(path.join(__dirname, '../typescript/src/index.ts'), 'utf8');
const lines = file.split('\r\n');

const START_TEXT = `/**
* 
* THIS FILE IS BEING BUILT AUTOMATICLY.
* 
* DO NOT EDIT CONTENT IN THIS FILE!
* 
* EVERY AUTOMATION PROCESS IS DONE INSIDE build/compact.js
* 
*/

`


let importNames = []
for (let i = 0; i < lines.length; i++) {
  if (lines[i].startsWith('import ')) {
    let importName = lines[i].match("as .+ from")[0].replace("as ", "").replace(" from", ".ts")
    importNames.push(importName)
    let data = fs.readFileSync(path.join(__dirname, '../typescript/src/lib/' + importName.substring(1)), 'utf8')
    data = data.replace(/export /g, "")
    lines[i] = data;
  }

}
let res = START_TEXT + lines.join('\r\n')
for (let i = 0; i < importNames.length; i++) {
  let regex = new RegExp(importNames[i].replace(".ts", "."), 'g')
  res = res.replace(regex, "")
}
fs.writeFileSync("./typescript/index.ts", res);