//remove objects baased on the ID (use splice method) - don't use filter method here



function removeItem(arr, idNum) {

  //for using splice, we need findIndex.
  // findIndex =>  return the index of the element that satisfy the condition.
  let index = arr.findIndex(obj => obj.id === idNum);

  // edge cases
  if (index !== -1) {
    arr.splice(index, 1);
  }

  return arr;
}

let data = [
  { id: 100 },
  { id: 101 },
  { id: 102 }
];

let result = removeItem(data, 101);
console.log(result);


 