const nemo = ['nemo'];
const large = new Array(10000000).fill('nemo');
var count = 0;

function findNemo(array) {
  for(let i=0; i<array.length; i++) {
    if(array[i] === 'nemo') {
      count++;
    }
  }
  console.log('We found Nemo ' + count + ' times');
}
findNemo(large);