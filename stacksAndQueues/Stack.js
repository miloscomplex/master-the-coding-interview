class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(){
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    // see top node
    if (!this.isEmpty()) {
      return this.top
    } else {
      return null
    }
  }

  push(value) {
    const newNode = new Node(value)
    if (this.top) {
      newNode.next = this.top
    } else {
      this.top = newNode
      this.bottom = this.top
    }
    this.top = newNode
    this.length++
    return this
  }

  pop() {
    if (!this.top) return null;
    const tempNode = this.top
    if (tempNode.next === null) {
      this.bottom = null
      this.top = null
    } else {
      this.top = tempNode.next
    }
    this.length--
    return tempNode
  }

  isEmpty() {
    if (this.length === 0) {
      return true
    } else {
      return false
    }
  }

}

const myStack = new Stack();


myStack.push('Discord')
myStack.push('Udemy')
myStack.push('google')
