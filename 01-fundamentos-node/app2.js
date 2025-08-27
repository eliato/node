const fs = require('fs');

const data = fs.readFileSync('README.md', 'utf8');

const newdData = data.replace(/React/ig, 'Angular');
console.log(newdData);
fs.writeFileSync('README-Angular.md', newdData, 'utf8');