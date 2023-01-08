console.log('198__ImprovedHashFunction')

function hash(key, arrayLen) {
  let total = 0;
  let WEIRD_PRIME = 31;
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96
    total = (total * WEIRD_PRIME + value) % arrayLen;
  }
  return total;
}

console.log(hash('pink', 13))
console.log(hash('orange', 13))
console.log(hash('chockolate', 13))
console.log(hash('marooon', 13))