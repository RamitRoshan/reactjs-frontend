import { createContext, useReducer, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import reducer from "../reducers/auth-reducer";
import users from "../users-data.json";
//maintaining state management using useReducer hook
// Here we are going to export multiple component,
//so we should not be using the default keyword.


//Exporting: AuthContext (compoent)
// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(); 

const initialState = {
    isLoggedIn: false,
    user: null,
};

 

// Exporting AuthProvider (component)
export function AuthProvider(props) {

    const navigate = useNavigate();
    const [state, dispatch] = useReducer(reducer, initialState);
    console.log("State", state);

    //call back fn should called once after the initial renders
    useEffect(() => {
        const id = localStorage.getItem('id'); //getItem -> read the value from local storage

        //if id is present (if id is present in loccal storage) -edge cases
        if(id){
            const user = users.find(ele => ele.id === Number(id))
            dispatch({type: 'LOGIN', payload: user}) //indicates user is loggedIn and payload is for user information
        }
    }, []);


    const handleLogin = (user) => {
        dispatch ({type: 'LOGIN', payload: user})
        //once user loggedIn then when user do refresh then it should still be logggedIN
        localStorage.setItem("id", user.id)
        navigate("/dashboard");
    };

    const handleLogout = () => {
        dispatch({type: 'LOGOUT'})
        //when user logout then we have to remove id of user from local storage
        localStorage.removeItem("id")
        //once user do logout then it navigate to login
        navigate('/login')
    }
    return (
        <AuthContext.Provider value={{...state, dispatch, handleLogin, handleLogout}}>
            {props.children}
        </AuthContext.Provider>
    );
}