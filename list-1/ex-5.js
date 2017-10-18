function fibRec (n) {
  if (n === 0 || n === 1) return 1
  return fibRec(n - 1) + fibRec (n - 2)
}

function fibIter (n) {
  let f = 1
  let fn = 1
  for (i = 0; i < n; i ++) {
    let t = fn
    fn = f + t
    f = t
  }
  return f
}

console.time("iteration")
console.log(fibIter(100))
console.timeEnd("iteration")

console.time("recursion")
console.log(fibRec(43))
console.timeEnd("recursion")