const readline = require('readline')
const fs = require('fs')

const rl = readline.createInterface({
  input: fs.createReadStream('server.log')
})

var counts = {}

rl.on('line', function (line) {
  const strs = line.split(' ')
  // console.log(strs)
  const current = counts[strs[1]]
  counts[strs[1]] = 1 + (current === undefined ? 0 : current)
})

rl.on('close', function () {
  // console.log(counts)
  const top3 = Object.keys(counts).
    map((k) => { return { k: k, v: counts[k] } }).
    sort((a, b) => b.v - a.v).slice(0, 3)
  top3.forEach((v) => console.log(`${v.k} ${v.v}`))
})
