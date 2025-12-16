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
//removing the length(4-1 = 3) - Remove last duplicate element
arr.length = arr.length -1;
console.log(arr);


/*
=> arr[i] = arr[i + 1] shifts elements left to overwrite the removed element,
and keep the array continuous.

To remove an element at a given index without splice and without creating a new array:
- Shift elements to the left using arr[i] = arr[i + 1]
- Reduce array length by 1
*/