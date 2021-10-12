class Node {
  constructor(value) {
    this.value = value
    this.prev = null
    this.next = null
  }
}
class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null
    }
    this.tail = this.head
    this.length = 1
  }

  append(value) {
    const newNode = new Node(value)
    newNode.prev = this.tail
    this.tail.next = newNode
    this.tail = newNode
    this.length++
    return this
  }

  prepend(value) {
    const newNode = new Node(value)
    newNode.next = this.head
    this.head.prev = newNode
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
    if (index > this.length || index < 0) return undefined;
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
    const follower = leader.next
    leader.next = newNode
    newNode.prev = leader
    newNode.next = follower
    follower.prev = newNode
    length++
    return this.printList()
  }

}

const newLinkedList = new DoublyLinkedList(10)
newLinkedList.append(12)
newLinkedList.append(34)
newLinkedList.prepend(56)
