var num = Array.from(new Array(10), (x, i) => i + 1)
var filtered = num.filter(x => x % 2 === 0)
console.log(filtered)
