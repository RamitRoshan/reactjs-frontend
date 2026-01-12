import { useContext } from "react";
import { AuthContext } from "../context/Auth";
export default function Dashboard() {

    // destructuring user from auth context provider
    const {user} = useContext(AuthContext);

    //if user is not there 
    if(!user){
        return <p>loading....</p>
    }

    return (
        <div>
            <h2>Dashboard Component</h2>
            <p>Welcome {user.username}!</p>
        </div>
    );
}


// here we have to implements only user is loggedIn