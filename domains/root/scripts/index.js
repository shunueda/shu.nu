const { readdirSync } = require('fs')
const { resolve } = require('path')

for (const file of readdirSync('scripts').filter(
  fileName => fileName !== 'index.js'
)) {
  require(`./${file}`)()
}
