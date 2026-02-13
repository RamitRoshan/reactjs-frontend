import { useState } from "react";
import Joi from "joi";
import axios from "axios";


export default function Register() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const schema = Joi.object({
    username: Joi.string().min(3).required().messages({
      "string.empty": "Username is required",
      "string.min": "Username must be at least 3 characters",
    }),
    email: Joi.string().email({ tlds: false }).required().messages({
      "string.email": "Enter valid email",
      "string.empty": "Email is required",
    }),
    password: Joi.string().min(6).required().messages({
      "string.min": "Password must be at least 6 characters",
      "string.empty": "Password is required",
    }),
  });

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   // Validate form data using Joi schema
  //  // abortEarly: false -> show all validation errors (not just first one)
  //   const { error } = schema.validate(form, { abortEarly: false });

  //   if (error) {
  //     // Create an object to store all validation errors
  //     const errorObj = {};
  //     // Loop through all Joi error details
  //     error.details.forEach((err) => {
  //       // err.path[0] -> field name (username/email/password)
  //       // err.message -> validation error message
  //       errorObj[err.path[0]] = err.message;
  //     });
  //     // Update state with validation errors
  //     setErrors(errorObj);
  //   } else {
  //     // If no validation errors -> clear errors
  //     setErrors({});
  //     //Form is valid -> proceed (for now console log)
  //     console.log("Register Details:", form);
  //   }
  // };


  const handleSubmit = async (e) => {
  e.preventDefault();

  const { error } = schema.validate(form, { abortEarly: false });

  if (error) {
    const errorObj = {};
    error.details.forEach((err) => {
      errorObj[err.path[0]] = err.message;
    });
    setErrors(errorObj);
    return;
  }

  try {
    const response = await axios.post(
      "http://localhost:3030/api/users/register",
      form
    );

    alert("User Registered Successfully");
    console.log(response.data);

  } catch (err) {
    alert(err.response?.data?.error);
  }
};


  return (
    <div>
      <h3>Register Component</h3>

      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Username"
            value={form.username}
            onChange={(e) =>
              setForm({ ...form, username: e.target.value })
            }
          />
          {errors.username && (
            <p style={{ color: "red" }}>{errors.username}</p>
          )}
        </div>

        <br />

        <div>
          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />
          {/* Show email error message only if validation fails */}
          {errors.email && (<p style={{ color: "red" }}>{errors.email}</p>)}
        </div>

        <br />

        <div>
          <input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
          />
          {/* Show password error message only if validation fails */}
          {errors.password && (<p style={{ color: "red" }}>{errors.password}</p>)}
        </div>

        <br />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}




/**
Why we use this?

schema.validate() → checks form data

abortEarly: false → collect all errors

error.details → contains list of all validation errors

We convert that list into an object for easy display in UI
 */

