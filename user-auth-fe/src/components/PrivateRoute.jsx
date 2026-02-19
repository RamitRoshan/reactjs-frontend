import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function PrivateRoute(props){

    const navigate = useNavigate();

    useEffect(() => {
        if(!localStorage.getItem('token')){ //without logging in, if the user tries to access protected paages, he is redirected to login pages
            return navigate("/login");
        }
    }, []);

    if(!localStorage.getItem('token')) { //loading is called before the navigation, when the user is not logged in
        return <p>Loading ...</p>
    }

    return props.children; //if the user is logged in, then the page is displayed
}

//If user is not loggedIn, and he is trying to access the page then he should not be loggedIN 