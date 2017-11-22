const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('What is your name?\n', function (name) {
  rl.write(`Hello there, ${name}\n`)
  rl.close()
})
