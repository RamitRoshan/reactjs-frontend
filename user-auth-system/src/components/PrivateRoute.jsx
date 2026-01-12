import { Navigate } from "react-router-dom";

export default function PrivateRoute(props){

    const id = localStorage.getItem('id')

    //if id is present
    if(id){
        // if id is present then I'll render the children i.e dashboard components get displayed
        return props.children;
    }else{
        //when id is not present then I will navigate to the login page
        return <Navigate to="/login" replace/> //we cannot go to that particular pages
    }
}