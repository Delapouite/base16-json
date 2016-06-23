const fs = require('fs')
const base16 = require('base16')
const FILE = './base16.json'

// remove artifact
delete base16.__esModule

fs.writeFile(FILE, JSON.stringify(base16, null, 2), (err) => {
  if (err) throw err
  console.log(`${FILE} generated.`)
})
