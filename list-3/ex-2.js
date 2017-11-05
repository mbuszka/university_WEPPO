var memo = [0, 1]

function fib (n) {
  if (memo[n] === undefined) {
    memo[n] = fib(n-1) + fib(n-2)
    return memo[n]
  } else {
    return memo[n]
  }
}

console.time()
fib(1000)
console.timeEnd()
