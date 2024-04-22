/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.size = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }
    this.size++;
  }

  pop() {
    if (!this.first) throw new Error("Stack is empty");
    const temp = this.first;
    this.first = this.first.next;
    this.size--;
    return temp.val;
  }

  peek() {
    if (!this.first) return null;
    return this.first.val;
  }

  isEmpty() {
    return this.size === 0;
  }
}

module.exports = Stack;
