function addItem(arr, item) {
    const result =  [...arr, item];
    return result;
}
const items = ["apple", "mango", "onion"];
console.log(addItem(items, "bread"));  // ["apple", "mango", "onion", "bread"]
console.log(items);  // print original array   ["apple", "mango", "onion"];