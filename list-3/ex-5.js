function sum (...ns) {
  let s = 0
  for (i of ns) {
    s += i
  }
  return s
}

console.log(sum(1,2,3,4))
