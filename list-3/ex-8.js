var fibGen = require('./ex-7.js').fibGen

function* take (k, xs) {
  var it = 0
  for (var res; res = xs.next(), !res.done && it < k; ) {
    it ++
    yield res.value
  }
}

for (x of take(10, fibGen()))
  console.log(x)
