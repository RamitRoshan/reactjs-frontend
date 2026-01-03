/* here without submitting or clicking the button it should show on console when we write
 localStorage in console then it should show the name or email we type in the input.
*/
import { useEffect, useState } from "react"

export default function ProfileForm(){

  const [name, setName] = useState(
    localStorage.getItem("name") ? localStorage.getItem("name") : ""
  );
  const [email, setEmail] = useState("");

  // const [isSubmit, setIsSubmit] = useState(false);

  //write to localstorage on every keystroke
  useEffect(() => {
    localStorage.setItem("name", name);
  }, [name]);


  // //using useEffect for local storage
  // useEffect(() => {
  //   if(localStorage.getItem("name") && localStorage.getItem("email")){
  //     setName(localStorage.getItem("name"));
  //     setEmail(localStorage.getItem("email"));
  //     setIsSubmit(true);
  //   }
  // }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("name:", name);
    localStorage.setItem("email:", email);
    // setIsSubmit(true);
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
      {/* {isSubmit && (
        <div>
          <h3>Submitted User Data :</h3>
          <p>Name: {name}</p>
          <p>Email: {email}</p>
        </div>
      )} */}
    </div>
  )
}