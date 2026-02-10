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

        case 'REMOVE_ALL' : {
            return []
        }

        case 'DECREMENT_NUMBER' : {
            return state.map((ele) => {
                //here only 1 ele has to be decrement
                if(ele.id === action.payload){
                    return {...ele, value: ele.value-1}

                }else{
                    return {...ele}
                }
            })
        }

        default: {
            return [...state] //we can also do like this: [].concat(state)
        }
    }
}


export default numbersReducer;