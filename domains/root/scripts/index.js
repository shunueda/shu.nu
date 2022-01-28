const { readdirSync } = require('fs')

for (const file of readdirSync('scripts').filter(
  fileName => fileName !== 'index.js'
)) {
  require(`./${file}`)()
}
