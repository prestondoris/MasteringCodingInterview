function mergeSortedArrays(arr1, arr2) {
  let p1 = 0;
  let p2 = 0;
  let ans = [];

  while(p1 < arr1.length && p2 < arr2.length) {
    if(arr1[p1] === arr2[p2]) {
      ans.push(arr1[p1]);
      ans.push(arr2[p2]);
      p1++;
      p2++;
    } else if(arr1[p1] < arr2[p2]) {
      ans.push(arr1[p1]);
      p1++
    } else {
      ans.push(arr2[p2]);
      p2++;
    }
  }

  if(p1 < arr1.length) {
    while(p1 < arr1.length) {
      ans.push(arr1[p1]);
      p1++;
    }
  } else if(p2 < arr2.length) {
    while(p2 < arr2.length) {
      ans.push(arr2[p2]);
      p2++;
    }
  }
  return ans;
}

let arr1 = [5,6,7,8]
let arr2 = [0,1,4,10]
console.log(mergeSortedArrays(arr1, arr2));