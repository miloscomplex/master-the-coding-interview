
var MyQueue = function(size=0, top=null, bottom=null) {
    this.size = size
    this.top = top
    this.bottom = bottom
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    const myNode = {'value': x, 'next': null}
    if (obj.size === 0) {
        obj.top = myNode
        obj.bottom = obj.top
    } else {
        obj.bottom.next = myNode
        obj.bottom = myNode
    }
    //MyQueue.bottom.myNode.next = myNode
    obj.size ++
    return obj
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    const temp = obj.top
    if (obj.size === 1) {
        obj.top = obj.top.next
        obj.bottom = obj.top
    } else {
        obj.top = temp.next
    }
    obj.size--
    return temp
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return obj.top
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    if (obj.size === 0) {
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

const obj = new MyQueue()
obj.push(34)
obj.push(55)
obj.push(9)
obj.push(22)
