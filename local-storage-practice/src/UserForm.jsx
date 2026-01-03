import { useState } from "react"

export default function UserForm(){

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
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
      {/* using conditional rendering here */}
      {isSubmit && (
        <div>
          <h3>Submitted User Data</h3>
          <p>Name: {name}</p>
          <p>Email: {email}</p>
        </div>
      )}
    </div>
  )
}




/*
import { useState } from "react";

export default function UserForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmit(true);
  };

  return (
    <div>
      <h2>User Details</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />

        <input
          type="email"
          placeholder="enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />

        <input type="submit" />
      </form>

      {isSubmit && (
        <div>
          <h3>Submitted Data</h3>
          <p>Name: {name}</p>
          <p>Email: {email}</p>
        </div>
      )}
    </div>
  );
}

 */


//








/*
import { useEffect, useState } from "react";

export default function UserForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [user, setUser] = useState(null);

  // Load data from localStorage on first render
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = { name, email };
    setUser(userData);

    // Store in browser
    localStorage.setItem("user", JSON.stringify(userData));

    // Clear inputs
    setName("");
    setEmail("");
  };

  return (
    <div>
      <h2>User Details</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button type="submit">Submit</button>
      </form>

      {user && (
        <div>
          <h3>Saved Data</h3>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      )}
    </div>
  );
}

 */