/*
Given an array and you have to remove an element at index-2
 without adding any new array(filter or map), and without using splice
       
       0    1  2   3   4                                0   1   2   3
arr = [10, 20, 30, 40, 50]  =>(after removing index 2) [10, 20, 40, 50 ] [50](❌)

final output: 10 20 40 50
 */


let arr = [10, 20, 30, 40, 50];

let index = 2;

for(let i = index; i<arr.length-1; i++ ){
    arr[i] = arr[i + 1];
}
//removing the length(4-1 = 3)
arr.length = arr.length -1;
console.log(arr);