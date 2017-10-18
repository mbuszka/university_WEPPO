const N = 1000000

let primes = [2]

function divisible (n, k) {
  if (k !== 0) {
    const x = n / k
    return Math.floor(x) === x
  } else {
    return false
  }
}

function addPrime(n) {
  const s = Math.floor(Math.sqrt(n))
  let ok = true
  let i = 0
  while (ok && primes[i] <= s) {
    ok = !divisible(n, primes[i])
    i = i + 1
  }
  if (ok) primes.push(n)
}

const all = Array.from(new Array(N),(val,index)=>index+3).map(addPrime)

console.log(primes.slice(primes.length - 50, primes.length))