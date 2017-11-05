function fibIter () {
  var _fn = 0
  var _fn1 = 1
  return {
    next: function () {
      var t = _fn + _fn1
      _fn = _fn1
      _fn1 = t
      return {
        value: _fn,
        done: false
      }
    }
  }
}

  // Can be iterated using for-of
function* fibGen () {
  var fn = 0
  var fn1 = 1
  while (true) {
    var t = fn + fn1
    fn = fn1
    fn1 = t
    yield fn
  }
}

exports.fibGen = fibGen
