var MyQueue = function() {
    this.size = 0
    this.top = null
    this.bottom = null
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    const myNode = {'value': x, 'next': null}
    if (this.size === 0) {
        this.top = myNode
        this.bottom = this.top
    } else {
        this.bottom.next = myNode
        this.bottom = myNode
    }
    this.size ++
    return this
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    const temp = this.top
    if (this.size === 1) {
        this.top = this.top.next
        this.bottom = this.top
    } else {
        this.top = temp.next
    }
    this.size--
    return temp.value
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.top.value
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    if (this.size === 0) {
        return true
    } else {
        return false
    }
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

const newQueue = new MyQueue()
newQueue.push(34)
newQueue.push(55)
newQueue.push(9)
newQueue.push(22)
