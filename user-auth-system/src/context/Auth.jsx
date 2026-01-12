import { createContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import reducer from "../reducers/auth-reducer";
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

    const handleLogin = (user) => {
        dispatch ({type: 'LOGIN', payload: user})
        navigate("/dashboard");
    };

    const handleLogout = () => {
        dispatch({type: 'LOGOUT'})
        //once user do logout then it navigate to login
        navigate('/login')
    }
    return (
        <AuthContext.Provider value={{...state, dispatch, handleLogin, handleLogout}}>
            {props.children}
        </AuthContext.Provider>
    );
}