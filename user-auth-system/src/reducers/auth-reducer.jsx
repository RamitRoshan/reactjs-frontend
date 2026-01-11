//creating reducer functions.

const reducer = (state, action) => {
    switch(action.type){
        case 'LOGIN' : {
            return {...state, isLoggedIn: true, user: action.payload}
        }
        case 'LOGOUT' : {
            return {...state, isLoggedIn: false, user:null}
        }
        default : {
            throw new Error('Invalid action type')
        }
    }
};
export default reducer;


// const reducer = (state, action) => {
//     switch (action.type) {
//       default:
//         return state;
//   }
// };

// export default reducer;