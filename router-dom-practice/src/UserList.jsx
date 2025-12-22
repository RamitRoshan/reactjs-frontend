import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function UserList() {

  // have to print the output in the form of array list []
  const [users, setUsers] = useState([]);
  const [serverError, setServerError] = useState("");

  const handleClick = () => {
    // Clear previous data and errors before starting a new request
    setServerError(""); //remove old error message
    setUsers([]);       //remove old user list


    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        console.log(response.data);
        setUsers(response.data);
      })
      .catch((err) => {
        setServerError(err.message);
      });
  };

  return (
    <div>
      <h3>User List</h3>

      <button onClick={handleClick}>View Users</button>

      {serverError && <p style={{ color: "red" }}>{serverError}</p>}

      {/* here in the map we use (), if we use {} then we have to write return <li></li> */}
      {/* <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name}
          </li>
        ))}
      </ul> */}

      {/* Implementing routes  */}
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/employeedetails/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Create a userlist component,
// provide a link "view users" and navigate the component.
// after the component is rendered , fetch the users information from json
// placeholder website, and display the name of the user in a list.

