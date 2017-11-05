function createGenerator (n) {
  return function () {
    var _state = 0;
    return {
      next : function () {
        return {
          value : _state,
          done : _state++ >= n
        }
      }
    }
  }
}

var foo = {
  [Symbol.iterator]: createGenerator(5)
}

var foo2 = {
  [Symbol.iterator]: createGenerator(7)
}

for (var f of foo)
    console.log(f)

for (var f of foo2)
  console.log(f)
