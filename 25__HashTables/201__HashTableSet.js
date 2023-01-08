console.log('HashTableSet')

class HashTable {
    constructor(size = 53){
        this.keyMap = new Array(size)
    }

    _hash(key){
        let total = 0;
        let WEIRD_PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
          let char = key[i];
          let value = char.charCodeAt(0) - 96;
          total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }

    set(key, value){
        let index = this._hash(key);
        if(!this.keyMap[index]){
            this.keyMap[index] = []
        }
        this.keyMap[index].push([key, value])

        return index;
    }
    get(key){
        let index = this._hash(key);
        if(this.keyMap[index]){
            return this.keyMap[index]
        }
        return undefined
    }
}

let ht = new HashTable(17)

console.log(ht.set('maroon', '#80000'))
console.log(ht.set('yellow', '#FFFF00'))
console.log(ht.set('olive', '#808000'))
console.log(ht.set('mediuvielet', '#C71585'))
console.log(ht.set('plum', '#DDA0DD'))

console.log(ht.get('yellow'))

console.log(ht)

