import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function EmployeeeDetails(){

  const {id} = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        setUser(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err.message);
      });

      //using return under useEffect for cleanup (rerender)
      return () => {
        console.log("Component unmounted");
      };
  }, [id]);  //when id updated then it will do re-render.

  return (
    <div>
      <h3>Employee Details - {id} </h3>
      {user && (
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Company: {user.company.name}</p>
        </div>
      )}
    </div>
  );
}


 



/* using axios fetch the record from the server with the help of the id
    and console it.

    create a state variable = user and store the response into the state variable

    display the user info like name , email,beloww inside jsx

*/