var fib = (function () {
  var memo = [0, 1]

  return function (n) {
    if (memo[n] === undefined) {
      memo[n] = fib(n-1) + fib(n-2)
      return memo[n]
    } else {
      return memo[n]
    }
  }
})()

console.time()
console.log(fib(10))

console.timeEnd()
