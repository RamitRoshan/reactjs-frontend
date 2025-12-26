import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

// navigate is from react-router-dom and it allows us to change routes without refreshing the page.

/* useLocation is from react-router-dom and it allows us to access the current route's info, 
including state, pathname, and query parameters. */

export default function AdminContacts() {

  const [contacts, setContacts] = useState([]);
  
  const navigate = useNavigate(); //sends/redirects the user to another route/page
  const location = useLocation(); //reads information about the current route, including: state, pathname, search

  // secretKey comes from AdminLogin via navigation state
  const secretKey = location.state?.secretKey;

  useEffect(() => {
    // if admin directly opens /admin/contacts without login
    if (!secretKey) {
      navigate("/admin");
      return;
    }

    axios
      .get("http://localhost:5050/api/admin/contacts", {
        headers: { "admin-secret": secretKey }
      })
      .then((res) => setContacts(res.data))
      .catch(() => navigate("/admin"));
  }, [secretKey, navigate]); //Run this effect again if secretKey changes”

  return (
    <div style={{textAlign: "center"}}>
      <h2>Contact Submissions</h2>

      {contacts.length === 0 ? (
        <p>No contacts found</p>
      ) : (
        //Adds a visible border to the table
        <table border="2"
        style={{ 
          margin: "0 auto", // Centers the table horizontally
          borderCollapse: "collapse", 
          textAlign: "center" // Centers text inside table cells
        }}
        >
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((c) => (
                // key is used by React to uniquely identify each row in the list
              <tr key={c._id}>
                <td>{c.name}</td>
                <td>{c.email}</td>
                <td>{c.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}


/*
useNavigate is used to move from one page to another using JavaScript
After admin login → go to /admin/contacts

If user is not admin → send them back to /admin

useNavigate is used to redirect users based on logic (login success, auth failure, etc.).

=> How to send secretKey from AdminLogin → AdminContacts without localStorage?

There are only two simple options in React:

localStorage ❌ (we did not use it)

Navigation state ✅

Navigation state is accessed using useLocation()


What useLocation is doing (plain English)
const location = useLocation();
const secretKey = location.state?.secretKey;


Meaning:

“When I came to this page, did the previous page send me any data?”

If yes → use it
If no → redirect back to login



useEffect(() => {
  // logic
}, [secretKey, navigate]);
Simple meaning
“Run this effect again if secretKey changes”

Why secretKey is required here
secretKey comes from useLocation

It might be:

present (after login)

missing (direct URL access)

React rule:

If you use a variable inside useEffect, put it in dependency array
 */