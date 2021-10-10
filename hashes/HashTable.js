class HashTable {
  constructor(size){
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i =0; i < key.length; i++){
        hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash;
  }
  // make set and get
  set(key, val) {
    const newHash = this._hash(key)
    // collision test
    if (!this.data[newHash]) {
      this.data[newHash] = []
      console.log(this.data)
    }
    this.data[newHash].push([key, val])
    return this.data
  } // 0(1)

  get(key) {
    const hashKey = this._hash(key)
    const currBucket = this.data[hashKey]
    if (currBucket) {
      for (let i=0; i < currBucket.length; i++) {
        if (currBucket[i][0] === key) {
          return currBucket[i][1]
        }
      }
    }
    return undefined
  } // typically 0(1) | 0(n / k)

  keys() {
    const keysArray = [];
    for (let i = 0; i < this.data.length; i++) {
      if(this.data[i]) {
        // check of collision
        if (this.data.length > 1) {
           for (let j = 0; j < this.data[i].length; j++) {
             keysArray.push(this.data[i][j][0])
           }
         } else {
             keysArray.push(this.data[i][0][0])
           }
      }
    }
    return keysArray
  }

}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000)
myHashTable.set('apples', 54)
myHashTable.set('oranges', 2)
myHashTable.get('apples')
myHashTable.get('grapes')
