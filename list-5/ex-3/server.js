const http = require('http')
const fs = require('fs')

console.log(process.cwd())

http.createServer( (req, res) => {
  res.setHeader('Content-disposition', 'attachment; filename=plik.txt')
  res.write(fs.readFileSync('server.js', 'utf-8'))
  res.end()
}).listen(3000)
