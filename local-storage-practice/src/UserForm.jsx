/* Here, we are showing the name and email of users on the UI, but when we reload the page
then, it get remove. so to store it we have 2 choice either store it in the database or
in Browser.
Here, we will store it in Browser(they never forgot), using local storage.
*/
import { useEffect, useState } from "react"

export default function UserForm(){

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);



  //using useEffect for local storage
  useEffect(() => {
    if(localStorage.getItem("name") && localStorage.getItem("email")){
      
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setName(localStorage.getItem("name"));
      setEmail(localStorage.getItem("email"));
      setIsSubmit(true);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("name:", name);
    localStorage.setItem("email:", email);
    setIsSubmit(true);
  }


  return (
    <div>
      <h2>User Details</h2>
      <form onSubmit={handleSubmit}>
      
        <input
        type="text"
        placeholder="enter your name"
        value={name}
        onChange={e => setName(e.target.value)}
        />
        <br/>
     
        <input
        type="email"
        placeholder="enter your email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        />
        <br/>
        <input type="submit"/>
      </form>
      {/* using conditional rendering here.
       if we dont use isSubmit state variable then it will show name and email 
       without typing the submit button*/}
      {isSubmit && (
        <div>
          <h3>Submitted User Data :</h3>
          <p>Name: {name}</p>
          <p>Email: {email}</p>
        </div>
      )}
    </div>
  )
}

 
//import { useState, useEffect } from "react";
// export default function UserForm() {
//   const [name, setName] = useState("");
//   const [mail, setEmail] = useState("");
//   const [isSubmit, setisSubmit] = useState(false);

//   useEffect(() => {
//     if (localStorage.getItem("name") && localStorage.getItem("mail")) {
//       setName(localStorage.getItem("name"));
//       setEmail(localStorage.getItem("mail"));
//       setisSubmit(true);
//     }
//   }, []);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     localStorage.setItem("name", name);
//     localStorage.setItem("mail", mail);
//     setisSubmit(true);
//   };

//   return (
//     <div>
//       <h2>Register Here:</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <input
//             type="text"
//             placeholder="Enter Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </div>
//         <div>
//           <input
//             type="email"
//             placeholder="Enter Email"
//             value={mail}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>
//         <div>
//           <input type="submit" />
//         </div>
//       </form>
//       <hr />
//       {isSubmit && (
//         <div style={{ color: "green" }}>
//           <p>Name:{name}</p>
//           <p>Email:{mail}</p>
//         </div>
//       )}
//     </div>
//   );
// }