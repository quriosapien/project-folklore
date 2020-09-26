const path = require('path')
const fs = require('fs')

const filename = '_redirects'
const content = `
/api/*  http://itunes.apple.com/:splat  200
`

fs.writeFileSync(path.join(__dirname, 'dist', filename), content, err => {
  if (err) throw err
  console.log('Post-Build ran successfully...')
})