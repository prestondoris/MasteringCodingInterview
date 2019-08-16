let array = []
for(let i=1; i<=1000000; i++) {
  array.push(i);
}
let set = new Set(array);

function findNum(array, val) {
  for(let num of array) {
    if(num === val) {
      return true;
    }
  }
}

console.time('ArrayFindNum');
findNum(array, 1000000);
console.timeEnd('ArrayFindNum');

console.time('SetFindNum');
set.has(1000000)
console.timeEnd('SetFindNum');
