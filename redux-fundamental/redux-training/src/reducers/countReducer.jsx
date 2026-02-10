const countInitialState = 0

const countReducer = (state = countInitialState, action) => {
    
    switch(action.type){
        
        case 'INCREMENT' : {
            return state + 1
        }
        case 'DECREMENT' : {
            return state - 1
        }
        case 'INCREMENT_BY': {
            return state + action.payload
        }
        default: {
            return state
        }
    }

    // if(action.type === 'INCREMENT'){
    //     return state + 1;
    // }else{
    //     return state;
    // }
     
}


export default countReducer;