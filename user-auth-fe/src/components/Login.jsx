import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../slices/authSlice"; 

export default function Login() {
  const dispatch = useDispatch();

  const { loading, error } = useSelector((state) => state.auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(loginUser({ email, password }));
  };

  return (
    <div>
      <h3>Login Component</h3>

      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="email"
            placeholder="enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <br />

        <div>
          <input
            type="password"
            placeholder="enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <br />

        <button type="submit">
          {loading ? "Logging in..." : "Login"}
        </button>

        {error && (
          <p style={{ color: "red" }}>{error}</p>
        )}
      </form>
    </div>
  );
}


// import { useState } from "react";
// // import axios from "axios";
// import axiosInstance from "../config/axios";


// export default function Login() {
//   const [email, setEmail] = useState("");

//   const [password, setPassword] = useState("");

//   // eslint-disable-next-line no-unused-vars
//   const [emailError, setEmailError] = useState("");
//   // eslint-disable-next-line no-unused-vars
//   const [passwordError, setPasswordError] = useState("");

//   // const handleSubmit = (e) => {
//   //   e.preventDefault();
//   //   // clear old errors
//   //   setEmailError("");
//   //   setPasswordError("");

//   //   //It is a flag that helps us decide whether the form should be submitted or not.
//   //   let isValid = true;

//   //   // email validation
//   //   // when Email is wrong - mark form as invalid
//   //   if (!email) {
//   //     setEmailError("Email is required");
//   //     isValid = false;
//   //   } else if (!email.includes("@")) {
//   //     setEmailError("Enter a valid email");
//   //     isValid = false;
//   //   }

//   //   // password validation
//   //   //when Password is wrong - mark form as invalid
//   //   if (!password) {
//   //     setPasswordError("Password is required");
//   //     isValid = false;
//   //   } else if (password.length < 6) {
//   //     setPasswordError("Password must be at least 6 characters");
//   //     isValid = false;
//   //   }
//   //   //NOW we will print it
//   //   if (isValid) {
//   //     console.log("Login Details:");
//   //     console.log("Email :" + email);
//   //     console.log("Password: " + password);
//   //   }
//   //   // console.log("Login Details:");
//   //   // console.log("Email :" + email);
//   //   // console.log("Password: " + password);
//   // };



// console.log("");
// // This function runs when the form is submitted
// const handleSubmit = async (e) => {

//   // Prevents page reload (default form behavior in HTML)
//   e.preventDefault();

//   try {
//     // Sending POST request to backend login API
//     // We send email and password as request body
//     // const response = await axios.post(
//     //   "http://localhost:3030/api/users/login",
//     //   { email, password }
//     // );

//     const response = await axiosInstance.post("/users/login", { email, password });


//     // Extract JWT token sent from backend after successful login
//     const token = response.data.token;

//     // Store token in browser localStorage
//     // So user stays logged in even after refresh
//     localStorage.setItem("token", token);

//     // Show success message
//     alert("Login Successful");

//   } catch (err) {
//     // If backend sends error (wrong password / user not found)
//     // Show error message safely using optional chaining
//     alert(err.response?.data?.error);
//   }
// };



//   return (
//     <div>
//       <h3>Login Component</h3>

//       <form onSubmit={handleSubmit}>
//         <div>
//           <input
//             type="email"
//             placeholder="enter your email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           {emailError && <p style={{ color: "red" }}>{emailError}</p>}
//         </div>

//         <br />
//         <div>
//           <input
//             type="password"
//             placeholder="enter your password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           {passwordError && <p style={{ color: "red" }}>{passwordError}</p>}
//         </div>
//         <br />
//         <input type="submit" />
//       </form>
//     </div>
//   );
// }

 