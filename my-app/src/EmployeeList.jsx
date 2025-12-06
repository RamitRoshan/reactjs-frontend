// Display information (name) as a list & remove using filter
import { useState } from "react";

export default function EmployeeList() {
  const [employees, setEmployees] = useState([
    { id: 1, name: "surya" },
    { id: 2, name: "bhanu" },
    { id: 3, name: "bhaskar" },
    { id: 4, name: "mitra" },
  ]);

  //  Controlled input state
  const [empId, setEmpId] = useState("");

  //const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    /*
    Why We Use This Line: 
    const id = Number(empId);

Because:

Input value from <input> is ALWAYS a string in JavaScript

Even if you type: 3

It comes as:
"3"  // string 
We use Number(empId) because input values are strings, but our IDs are numbers — 
and strict comparison requires matching types.
    */

    const id = Number(empId);

    /*
    Note:
    The some() method returns false if the function
    returns false for all of the array elements.
     */

    //checking if id exists
    const isPresent = employees.some((emp) => emp.id === id);

    if (!isPresent) {
      alert("Id is not present");
      //stop
      return;
    }

    //getting confirm before deleting
    const confirmDelete = window.confirm(
      "are you sure, you want to remove this ?"
    );

    //if yes
    if (confirmDelete) {
      const updatedEmploy = employees.filter((emp) => emp.id !== id);
      setEmployees(updatedEmploy);
      //clear input after delete
      setEmpId("");
    }
  };

  return (
    <div>
      <h2>Employee List</h2>

      <ul>
        {employees.map((ele) => {
          return <li key={ele.id}>{ele.name}</li>;
        })}
      </ul>

      <h2>Remove Employee</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Enter employee id"
          value={empId}
          onChange={(e) => setEmpId(e.target.value)}
        />
        <button type="submit">Remove</button>
      </form>
    </div>
  );
}

/*
here we have use filter, so that whenever we enter any id, it should remove 
that id employee with alert message are you sure to remove it 
(use window.confirm) and remove that id if user click yes.. and update the state. 
and if suppose i enter id =12 in placeholder then show alert id is not present ,
 form should be controlled component

*/
