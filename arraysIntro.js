const strings = ['a', 'b', 'c', 'd']
//4*4 = 16 bytes of storeage

//push
strings.push('e'); //O(1)

//pop
strings.pop();
strings.pop();

//unshift
strings.unshift('x'); //O(n)

/*
a b c d
0 1 2 3

if we want to add x at the beginning
we have to reassign all of the other indeices
x a b c d
0 1 2 3 4
*/

strings.splice(2,0, 'alien'); //O(n)

console.log(strings);
