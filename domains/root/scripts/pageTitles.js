const { readdirSync, writeFileSync } = require('fs')

module.exports = () => {
  writeFileSync(
    'src/assets/page_titles.json',
    JSON.stringify([
      'home',
      ...readdirSync('src/components/pages')
        .filter(fileName => fileName.endsWith('.tsx'))
        .map(fileName => fileName.replace('.tsx', ''))
        .filter(fileName => !['home', 'contact'].includes(fileName)),
      'contact'
    ])
  )
}
