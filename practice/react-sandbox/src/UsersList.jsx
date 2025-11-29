import { useState } from "react";
import axios from "axios";

export default function UsersList() {
    const [users, setUsers] = useState([]);
    const [serverErrorMsg, setServerErrorMsg] = useState("");

    const handleFetch = () => {
        axios
           .get("https://jsonplaceholder.typicode.com/users")
           .then((response) => {
              const result = response.data;
              console.log(result);
              setUsers(result);
              //clean up UI code
              setServerErrorMsg("");
           })
           .catch((error) => {
              console.log(error.message);
              setServerErrorMsg(error.message);
              setUsers([]); //clean up UI code
           })
    };
    return (
        <div>
            <h2>Listing Users - {users.length} </h2>
            <button onClick={handleFetch}>Fetch Users</button>
            {serverErrorMsg && <p style={{color: "red"}}>{serverErrorMsg}</p>}
            {users.length > 0 && (
                <ul>
                    {users.map((ele) => {
                        return <li key={ele.id}>{ele.name}</li>
                    })}
                </ul>
            )}
        </div>
    );
}