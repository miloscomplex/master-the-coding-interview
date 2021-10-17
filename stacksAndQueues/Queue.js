class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// First Come First Serve
class Queue {
  constructor(){
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    return this.first
  }

  enqueue(value) {
    const newNode = new Node(value)
    if (this.length === 0) {
      this.first = newNode
      this.last = this.first
    } else {
      this.last.next = newNode
      this.last = newNode
    }
    this.length++
    return this
  }

  dequeue() {
    if (!this.first) return null;

    const tempNode = this.first
    if (this.first === this.last) {
      this.last = null
    }
    this.first = tempNode.next
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

const myQueue = new Queue();

myQueue.enqueue('Joy')//Joy
myQueue.enqueue('Matt')//Matt
myQueue.enqueue('Pavel')//Pavel
myQueue.enqueue('Samir')//Samir
