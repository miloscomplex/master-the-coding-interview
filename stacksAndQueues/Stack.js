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
    return this.top
  }

  push(value) {
    const newNode = new Node(value)
    if (this.length === 0) {
      this.top = newNode
      this.bottom = newNode
    } else {
      const tempPointer = this.top
      this.top = newNode
      this.top.next = tempPointer
    }
    this.length++
    return this
  }

  pop() {
    if (!this.top) return null;

    const tempNode = this.top
    if (this.top === this.bottom) {
      this.bottom = null
    }
    this.top = tempNode.next
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
