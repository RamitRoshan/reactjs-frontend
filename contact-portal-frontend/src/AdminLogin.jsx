import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// navigate is from react-router-dom and allows us to change routes without refreshing the page.

export default function AdminLogin() {
  const [secretKey, setSecretKey] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    axios
      .post("http://localhost:5050/api/admin/login", {
        secretKey: secretKey.trim()
      })
      .then(() => {
        // if secret key is correct
        // navigate("/admin/contacts");
        // navigate("/admin/contacts", { state: { secretKey } }) redirects to the contacts page 
        // and passes secretKey securely to the new route without using the URL.
        navigate("/admin/contacts", {
            state: { secretKey }
        });
      })
      .catch((err) => {
        // if secret key is wrong
        setError("Invalid secret key");
        console.log(err.message);
      });
  };

  return (
    <form onSubmit={handleLogin}>
      <input
        type="password"
        placeholder="Secret Key"
        value={secretKey}
        onChange={(e) => setSecretKey(e.target.value)}
      />

      <button type="submit">Login</button>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
}

