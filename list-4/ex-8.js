const fs = require('fs')
const util = require('util')

fs.readFile('ex-4.js', 'utf-8', (err, data) => {
  if (err) {
    throw new Error(err)
  }

  console.log('From callback:')
  console.log(data)
})

function promiseReadFile (name, opts) {
  return new Promise((res, rej) => {
    fs.readFile(name, opts, (err, data) => {
      if (err) rej(err)
      res(data)
    })
  })
}

var prRead = util.promisify(fs.readFile)

prRead('ex-4.js', 'utf-8').then((x) => {
  console.log('From then:')
  console.log(x)
})

async function viewer() {
  var str = await promiseReadFile('ex-4.js', 'utf-8')

  console.log('From viewer')
  console.log(str)
}

viewer()
