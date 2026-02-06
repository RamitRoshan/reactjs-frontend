//remove objects baased on the ID (use splice method) - don't use filter method here



function removeItem(arr, idNum) {
  let index = arr.findIndex(obj => obj.id === idNum);

  // edge case
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


 