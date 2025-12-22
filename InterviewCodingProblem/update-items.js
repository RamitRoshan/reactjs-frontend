function updateItem(arr, item) {
    const result = arr.map((ele) => {
        if(ele == item){
            return ele.toUpperCase();
        }else{
            return ele;
        }
    });
    return result;
}
const items = ["apple", "mango", "onion"];
console.log(updateItem(items, "mango"));  // ["apple", "MANGO", "onion"];
console.log(items);  // [ 'apple', 'mango', 'onion' ]