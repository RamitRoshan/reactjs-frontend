const numbersInitialState = []

const numbersReducer = (state = numbersInitialState, action) => {

    switch(action.type){

        default: {
            return [...state] //we can also do like this: [].concat(state)
        }
    }
}


export default numbersReducer;