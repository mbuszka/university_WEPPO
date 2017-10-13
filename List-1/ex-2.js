function digits (n) {
  let digs = []
  while (n > 0) {
    digs.push(n % 10)
    n = Math.floor(n / 10)
  }
  return digs
}

function divisible (n, k) {
  if (k !== 0) {
    const x = n / k
    return Math.floor(x) === x
  } else {
    return false
  }
}

function divisibleByEach (n, digs) {
  return digs.reduce((acc, d) => acc && divisible(n, d), true)
}

function test (n) {
  const digs = digits(n)
  const sum = digs.reduce((a, b) => a + b, 0)
  return divisibleByEach(n, digs) && divisible(n, sum)
}

console.log(divisibleByEach(10, digits(10)))

const interesting = Array.from(new Array(1000000),(val,index)=>index+1).filter(test)
console.log(interesting.slice(0, 30))
