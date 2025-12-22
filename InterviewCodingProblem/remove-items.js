function removeItem(arr, item) {
    const result = arr.filter(ele => ele !== item);
    return result;
}
const items = ["apple", "mango", "onion"];
console.log(removeItem(items, "mango"));  //["apple" , "onion"];
console.log(items);  // print original array   ["apple", "mango", "onion"];