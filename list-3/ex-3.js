function forEach (a, f) {
  for (i in a) {
    f(a[i])
  }
}

function map (a, f) {
  var acc = []
  forEach (a, (x) => acc.push(f(x)))
  return acc
}

function filter (a, f) {
  var acc = []
  forEach (a, (x) => {
    if (f(x)) {
      acc.push(x)
    }
  })
  return acc
}

arr = [1, 2, 3]
arr[50] = 4

forEach(arr, (x) => console.log(x))
var b = map (arr, function (x) { return x.toString() })
console.log(b)
var c = filter (arr, (x) => x % 2 === 0)
console.log(c)
