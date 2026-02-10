const numbersInitialState = []

const numbersReducer = (state = numbersInitialState, action) => {

    switch(action.type){

        case 'ADD_NUMBER' : {
            return [...state, {...action.payload}]
        }

        default: {
            return [...state] //we can also do like this: [].concat(state)
        }
    }
}


export default numbersReducer;