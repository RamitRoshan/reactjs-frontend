import { useContext } from "react";
import { AuthContext } from "../context/Auth";

// we don't have to worry about passing data via props here.
export default function Profile () {

    //destructure and get access to the user object
    const {user}  = useContext(AuthContext);

    //handling edge case: when page reload(when user is not there)
    if(!user){
        return <p>Loading...</p>
    }
    return (
        <div>
            <h2>Profile Component</h2>
            <p><b>Id</b> - { user.id }</p>
            <p>Username - {user.username}</p>
            {/* here we will show masked password (*) on the UI */}
            <p>Password - {"*".repeat(user.password.length)}</p>
        </div>
    );
}