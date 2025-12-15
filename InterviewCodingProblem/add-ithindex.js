/*

arr = [10, 20, 30, 40];
here, u have to add 100 at index-2 without adding any new array(filter or map), and without using splice

final o/p:  arr = [10, 20, 100, 30, 40]
*/

const arr = [10, 20, 30, 40];

const index = 2;
const value = 100;

// move element one steps right to add "100" at index-2 (starting from end)
for(let i=arr.length; i > index; i--){
    arr[i] = arr[i - 1]; 
}

// inserting new value at index - 2
arr[index] = value;
console.log(arr);
 



/* let arr = [10, 20, 30]; add 40 without using push methods.
o/p: [10, 20, 30, 40]
*/

let array = [10, 20, 30];

// arr.length gives the next empty index (here = 3)
array[array.length] = 40;

// final array
console.log(array); 
