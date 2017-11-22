function Tree (left, value, right) {
  this.left = left
  this.value = value
  this.right = right
}

const Leaf = null

var t =
new Tree(
  new Tree(
    new Tree(
      new Tree(Leaf, 1, Leaf),
      2,
      Leaf
    ),
    3,
    Leaf
  ),
  4,
  new Tree(Leaf, 5, Leaf)
)

module.exports = {
  Tree: Tree,
  Leaf: Leaf
}
