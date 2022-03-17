const fs = require("fs")
const path = require("path")
const functions = {};
const files = fs.readdirSync(path.join(__dirname, '../typescript/src/lib'));
for (const file of files) {
  const filePath = path.join(__dirname, '../typescript/src/lib', file);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const lines = fileContents.split('\r\n');
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('export function ')) {
      const functionName = lines[i].split('export function ')[1].split('(')[0];
      functions[file.replace(".ts", "")] ?
        functions[file.replace(".ts", "")].push(functionName.replace("<T>", "")) : functions[file.replace(".ts", "")] = [functionName.replace("<T>", "")]
    }
  }
}

let data = fs.readFileSync(path.join(__dirname, '../typescript/src/index.ts'), 'utf8').split('\r\n')
for (let j = 0; j < data.length; j++) {
  if (data[j].includes("Function")) {
    const functionName = data[j].split(':')[0].split('public ')[1];
    for (const file in functions) {
      if (functions[file].includes(functionName)) {
        functions[file].splice(functions[file].indexOf(functionName), 1);
      }
    }
    for (const file in functions) {
      if (functions[file].length == 0) {
        delete functions[file];
      }
    }
  }
}
if (Object.keys(functions).length > 0) {
  for (let j = 0; j < data.length; j++) {
    for (const file in functions) {
      if (data[j].toLowerCase().includes("// " + file + " function definition")) {
        for (const functionName of functions[file]) {
          data.splice(j + 1, 0, `  public ${functionName}: Function;`)
          console.log("Added " + functionName)
        }
      }
      if (data[j].includes(" = _" + file + ".")) {
        for (const functionName of functions[file]) {
          data.splice(j + 1, 0, `    this.${functionName} = _${file}.${functionName}`)
        }
        delete functions[file];
      }

    }
  }
  fs.writeFileSync(path.join(__dirname, '../typescript/src/index.ts'), data.join('\r\n'), 'utf8');
} else {
  console.log("No new functions added")
}