function factorial(n){

    // check if the input parameter is present as a key in the cache object
    if(n in factorial.cache){   //if present, return the cached value
        return factorial.cache[n];
    }
    let result = 1;

    for(let i=1; i<=n; i++){
        console.log('Loading....');
        result = result * i;
    }
    //before  return result, update the cache
    factorial.cache[n] = result;

    // return the result
    return result;
}

// console.log(factorial(5)); //output: 120

console.log(typeof factorial); //op: function -> special object in JS - can have properties & methods
console.log(factorial.length); //op: 1 -> no. of parameters the function is expecting
factorial.cache = {}; //adding a property 'cache' to the function object


console.log(factorial(5)); //120 //calculate the first time as 5 is not present
console.log(factorial(6)); //op: 720
