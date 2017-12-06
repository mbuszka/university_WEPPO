const https = require('https')
const fs = require('fs')

https.createServer({
  pfx : fs.readFileSync('cert.pfx'),
  passphrase : ''
}, (req, res) => {
  res.write('Hello secure')
  res.end()
}).listen(3000)
