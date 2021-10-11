class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    }
    this.tail = this.head
    this.length = 1
  }

  append(value) {
    const newNode = new Node(value)
    this.tail.next = newNode
    this.tail = newNode
    this.length++
    return this
  }

  prepend(value) {
    const newNode = new Node(value)
    newNode.next = this.head
    this.head = newNode
    this.length++
    return this
  }

  printList() {
    const array = []
    let currentNode = this.head
    while (currentNode !== null) {
      array.push(currentNode.value)
      currentNode = currentNode.next
    }
    return array
  }

  insert(index, value) {
    if (index === 0) {
      this.prepend(value)
      return this.printList()
    }
    const newNode = new Node(value)
    let counter = 0
    let currentNode = this.head;
    let prevNode;
    while (counter < index) {
      prevNode = currentNode
      currentNode = currentNode.next
      counter++
    }
    prevNode.next = newNode
    newNode.next = currentNode
    length++
    return this.printList()
  }



}

let myLinkedList = new LinkedList(10)

myLinkedList.append(12)
myLinkedList.append(34)
myLinkedList.append(56)