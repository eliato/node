
const fs = require('fs');

const data = fs.readFileSync('README.md', 'utf8');

const wordCount = data.split(/\s+/).length;
const wordReact = (data.match(/React/gi) ?? []).length;
console.log(`Word count: ${wordCount}`);
console.log(`Word "React" count: ${wordReact}`);