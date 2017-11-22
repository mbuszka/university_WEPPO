const readline = require('readline')
const fs = require('fs')

var file = fs.openSync('server.log', 'w')
const ips = ["1", "2", "7", "15", "254", "74", "102"]

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function rand () { return getRandomInt(0, ips.length) }

for (var i = 0; i < 10000; i ++) {
  var t = new Date()
  var str = `${t.getUTCHours()}.${t.getUTCMinutes()}.${t.getUTCSeconds()}` +
            ` ${ips[rand()]}.${ips[rand()]}.${ips[rand()]}` + ' blablalbla\n'
  // console.log(str)
  fs.writeSync(file, str)
}

fs.closeSync(file)
