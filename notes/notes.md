(25-11-25)
# I. Q)  

```
Q1). what are the methods of the event object ? Why do we use it.
ans: a) prevent default

Q2). Where are we use it and what is the purpose of it ? (event object)
and: it is used to prevent the page from getting reloaded.

Q3). What is an uncontrolled components ?
ans: whenever an input field maintaines its own state, then we say component is an uncontrolled components.

Q4). What is a Controlled components ?
ans: whenever a form'es input field states is maintained by react, then we say it is a controlled component.


- state of the input is maintained by react, that's why it is called component
```

## Input field has a form

**code:**
If the typing speed is 1 word per seconds then,

```
import { useState } from "react";

export default function TaskAppWithForm() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const task = {
      id: Number(new Date()),
      title: title,
      isCompleted: false,
    };
    setTasks([...tasks, task]);
    setTitle("");
  };

  //onChange - is an event
  return (
    <div>
      <h2>Task App with Form</h2>
      <h3>Listing Tasks - {tasks.length} </h3>
      <h3>Add Task </h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Write your tasks"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input type="submit" />
      </form>
    </div>
  );
}

```

I.Q:
- database/schema design (like: twitter)
- One full stack tasks
- one coding questions
- There are given two unsorting array and sort it and join it(we can use any sorting algorithms)..



**26 - 11 - 25**

  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log("name: ", name);
    // console.log("Email: ", email);
    // console.log("Bio: ", bio);

    setIsSubmitted(true);
  };

we use .preventDefault()  object,
  to stop from reloading the page. If page relaods then the data get removed.


  - .preventDefault() -> It also Prevents the default behaviour of any html element..
  - .preventDefault() image, then image will not show on the ui
  But most of the time we use it for form..


- onChange event we use in react to track the change.
but we use **key press** in vanilla js for this..


code:

```
//based on key variables we are trying to update the objects.

const obj = {a: 10, b:20, c:30}
{a: 10, b:20, c:30}

>key = 'b'
'b'
>value = 200
200

>obj[key] = value
200
>obj
{a: 10, b:200, c:30}


note:
const obj = {a: 10, b:20, c:30, b:200}
>obj
{a: 10, b:200, c:30}

- {a: 10, b:20, c:30}
> {...obj, [key]: value}
{a: 10, b:200, c:30}
key should be unique so here 'b' overwrite 20 and declare 200..


# Register Form (Register.js)

here refer to codesnadbox for full code but,
here we are writing code to optimize the codesandbox code:

```
import { useState } from "react";

export default function Register() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

const handleChange = (e) => {
  const name = e.target.name,
  value = e.target.value;
  setForm({...form, [name]: value});
} 

return (
  <div>
  <h2>Register Form</h2>
  <div>
  <input
  type ="text"
  value={form.email}
  name="email"
  onChange={handleChange}
  placeholder="Enter email"
  />
  </div>
  </div>
)
}



**28-11-25**

Event Handler (JS callback fns)
- onchange event (type of the event is change, but we use onChange)
- onclick event
- onsubmit event


Q) How react works with backend data or fetching data from backend using axios

code:

```
/*
here we are going to fetch data from backend using fetch button and 
print the data in gthe form of a lists.
To get data from backend we will going to use:
https://jsonplaceholder.typicode.com/users

*/

import axios from "axios";

export default function UsersList() {
  const handleFetch = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        console.log(response.data);
        const users = response.data;
        for (let ele of users) {
          console.log(ele.name);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h2>UsersList Component</h2>

      <button onClick={handleFetch}>Fetch Users</button>
    </div>
  );
}
```


I.Q) what is conditional rendering ?


```
/*
here we are going to fetch data from backend using fetch button and 
print the data in gthe form of a lists.
To get data from backend we will going to use:
https://jsonplaceholder.typicode.com/users

*/

import axios from "axios";
import { useState } from "react";

export default function UsersList() {
  const [users, setUsers] = useState([]);
  const [serverErrorMsg, setServerErrorMsg] = useState("");

  const handleFetch = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const result = response.data;
        console.log(result);
        setUsers(result);
        setServerErrorMsg(""); //clean up UI code
      })
      .catch((error) => {
        console.log(error.message);
        setServerErrorMsg(error.message);
        setUsers([]); //clean up UI code
      });
  };

  return (
    <div>
      <h2>Listing Users - {users.length}</h2>

      <button onClick={handleFetch}>Fetch Users</button>

      // **I don't understand this line**
      {serverErrorMsg && <p style={{ color: "red" }}>{serverErrorMsg}</p>}
      {users.length > 0 && (
        <ul>
          {users.map((ele) => {
            return <li key={ele.id}>{ele.name}</li>;
          })}
        </ul>
      )}
    </div>
  );
}

// key={ele.id}, The app works without key, but keys make React
// efficient, avoid bugs, and prevent warnings.

```