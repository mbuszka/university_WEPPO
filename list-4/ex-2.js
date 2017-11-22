var T = require('./ex-1.js')

T.Tree.prototype[Symbol.iterator] = function* () {
  if (this.left !== T.Leaf)
    for (var x of this.left) yield x
  yield this.value
  if (this.right !== T.Leaf)
    for (var x of this.right) yield x
}

var t =
  new T.Tree(
    new T.Tree(
      new T.Tree(
        new T.Tree(T.Leaf, 1, T.Leaf),
        2,
        T.Leaf
      ),
      3,
      T.Leaf
    ),
    4,
    new T.Tree(T.Leaf, 5, T.Leaf)
  )

for (var x of t) console.log(x)
