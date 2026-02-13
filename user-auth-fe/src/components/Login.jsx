import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // clear old errors
    setEmailError("");
    setPasswordError("");

    //It is a flag that helps us decide whether the form should be submitted or not.
    let isValid = true;

    // email validation
    // when Email is wrong - mark form as invalid
    if (!email) {
      setEmailError("Email is required");
      isValid = false;
    } else if (!email.includes("@")) {
      setEmailError("Enter a valid email");
      isValid = false;
    }

    // password validation
    //when Password is wrong - mark form as invalid
    if (!password) {
      setPasswordError("Password is required");
      isValid = false;
    } else if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      isValid = false;
    }

    //NOW we will print it
    if (isValid) {
      console.log("Login Details:");
      console.log("Email :" + email);
      console.log("Password: " + password);
    }

    // console.log("Login Details:");
    // console.log("Email :" + email);
    // console.log("Password: " + password);
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
          {emailError && <p style={{ color: "red" }}>{emailError}</p>}
        </div>

        <br />
        <div>
          <input
            type="password"
            placeholder="enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {passwordError && <p style={{ color: "red" }}>{passwordError}</p>}
        </div>
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

/*
create a login component,
Provide a link for a user to go to login page
In the component display a login form with email and password.
only if email and password is present and valid else display error message
next to input field.
Once the user clicks on the submit button, console log the details
 */