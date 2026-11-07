const myArr=[0,1,2,3,4,5,true,'hitesh']
console.log(myArr[0]);//0
console.log(myArr[1]);  //1
const myHeroes=['spiderman','ironman']
const myArr2=new Array(1,2,3,4)
console.log(myArr2[0]);  //1
console.log(myArr2[1]);  //2
//Arrray methods
myArr.push(6)
myArr.push(7)
myArr.pop()
console.log(myArr)  //[0, 1, 2, 3, 4, 5, true, 'hitesh', 6]
myArr.unshift(9)
console.log(myArr)//[9, 0, 1, 2, 3, 4, 5, true, 'hitesh', 6]
myArr.shift()
console.log(myArr)//[0, 1, 2, 3, 4, 5, true, 'hitesh', 6]
console.log(myArr.includes(9))//false
console.log(myArr.includes(5))//true
console.log(myArr.indexOf(5))//5
console.log(myArr.indexOf(9))//-1
const newArr=myArr.join(' ')
console.log(newArr)//0 1 2 3 4 5 true hitesh 6
console.log(typeof newArr)//string
//slice,splice
const fruits = ['apple', 'banana', 'cherry', 'date'];

// Extract elements from index 1 up to index 3 (exclusive)
const result = fruits.slice(1, 3);

console.log(result); // ['banana', 'cherry']
console.log(fruits); // ['apple', 'banana', 'cherry', 'date'] (unchanged)
//splice
const colors = ['red', 'green', 'blue', 'yellow'];

// Remove 2 elements starting at index 1
const removed = colors.splice(1, 2);

console.log(removed); // ['green', 'blue']
console.log(colors);  // ['red', 'yellow'] (mutated)
