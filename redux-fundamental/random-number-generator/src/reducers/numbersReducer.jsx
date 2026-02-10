const numbersInitialState = []

const numbersReducer = (state = numbersInitialState, action) => {

    switch(action.type){

        case 'ADD_NUMBER' : {
            return [...state, {...action.payload}]
        }

        case 'PLUS_TWO' : {
            return state.map((num) => {
                return {
                    ...num,
                    value: num.value + 2
                }
            })
        }

        default: {
            return [...state] //we can also do like this: [].concat(state)
        }
    }
}


export default numbersReducer;