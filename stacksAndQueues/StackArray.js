class StackArray {
  constructor(){
    this.array = []
  }

  peek() {
    return this.array[this.array.length - 1]
  }

  push(value) {
    this.array.push(value)
    return this
  }

  pop() {
    if (this.array.length === 0) return null;
    this.array.pop()
    return this
  }

  isEmpty() {
    if (this.array.length === 0) {
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
