import { useState } from "react";
import axios from "axios";

export default function UserDetails(){

    const [id, setId] = useState("");
    //store fetched user
    const [user, setUser] = useState(null);
     const [serverError, setServerError] = useState("");

    const handleSubmit = (e) => {

        // Prevents page reload on form submit so React can handle the request
        e.preventDefault();

        // Clears previous user data before making a new API request
        // This prevents showing stale user details if the request fails
        setUser(null);
        // Resets previous error message before starting a new request
        setServerError("");

        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
             .then((response) => {
                const result = response.data;
                console.log(result);
                setUser(result);
                setServerError(""); //clean up UI code
             })
             .catch((err) => {
                // console.log(err);
                setServerError(err.message);
                
             })
    }
    return(
        <div>
            <h3>User Details</h3>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                placeholder="Enter user id"
                value={id}
                onChange={(e) => setId(e.target.value)}
                />
                <br/>
              
                <input type="submit"/>
            </form>

            {serverError && <p style={{ color: "red" }}>{serverError}</p>}
            {user && (
                <div>
                    <h3>User Info</h3>
                    <p>Name: {user.name}</p>
                    <p>Email: {user.email}</p>
                    {/*using optional chaining here to avoid crashes if nested data is missing. */}
                    <p>City: {user.address?.city}</p>
                </div>
            )}
        </div>
    );
}