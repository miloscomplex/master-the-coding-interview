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

  traverseToIndex(index) {
    let counter = 0
    let currentNode = this.head
    while (counter !== index) {
      currentNode = currentNode.next
      counter++
    }
    return currentNode
  }

  insert(index, value) {
    if (index === 0) return this.prepend(value);
    if (index >= this.length) return this.append(value);

    const newNode = new Node(value)
    const leader = this.traverseToIndex(index-1)
    const tempPointer = leader.next
    leader.next = newNode
    newNode.next = tempPointer
    length++
    return this.printList()
  }

  remove(index) {
    if (index > this.length - 1) return undefined;
    const leader = this.traverseToIndex(index-1)
    const removeNode = leader.next
    leader.next = removeNode.next
    this.length--
    return this.printList()
  }

}

let myLinkedList = new LinkedList(10)

myLinkedList.append(12)
myLinkedList.append(34)
myLinkedList.append(56)
