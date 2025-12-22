function updateItem(arr, item) {
    const result = [...arr, item] ;
    return result;
}
const items = ["apple", "onion"];
console.log(updateItem(items, "mango"));  // ["apple", "mango", "onion"];
console.log(items);  //  ["apple", "onion"];