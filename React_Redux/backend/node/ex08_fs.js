const fs = require('fs')
const files = fs.readdirSync(_dirname)

files.forEach(f => console.log(f))