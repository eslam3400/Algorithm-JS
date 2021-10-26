class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

const a = new Node('a')
const b = new Node('b')
const c = new Node('c')
const d = new Node('d')
const e = new Node('e')
const f = new Node('f')

a.left = b
a.right = c
b.left = d
b.right = e
c.right = f

const breadthFirst = (root, target) => {
  if (!root) return []
  const result = []
  const queue = [root]
  while (queue.length > 0) {
    const current = queue.pop()
    result.push(current.value)
    if (current.value == target) return result
    if (current.left) queue.unshift(current.left)
    if (current.right) queue.unshift(current.right)
  }
  return result;
}

console.log(breadthFirst(a, "e"))