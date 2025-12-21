
// export default function EmployeeDetails() {
    //when there is  no data available then we use null

//     return (
//         <div>
//             <h3>Employee Details </h3>
//         </div>
//     );
// }


import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function EmployeeDetails() {
  const { id } = useParams();

  //when there is  no data available then we use null
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

    return () => {
      console.log("component unmounted");
    };
  }, [id]); //when id updated then it do rerender

  return (
    <div>
      <h3>Employee Details - {id}</h3>

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