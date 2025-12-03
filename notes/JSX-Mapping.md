# JSX Mapping

- **Filter** and **map(it return's array of same length)** methods widely used in reactjs.
  
- The purpose of the map methods is to transform(i.e transform an array elements into an array of **li** tags) an elements & returns the array of same length.

- Whenever we find ourselves seeing a list of information, then **map** methods is being used there. <br> 
i.e It displayed below the others.

Q). How are they displayed one below the other ? <br>
ans: They are performing a map.

```
 <ul>
        <li>{names[0]}</li>
        <li>{names[1]}</li>
        <li>{names[2]}</li>
        <li>{names[5]}</li>
 </ul>
```


# Code to print data in the form of tables(rows & colm):

```
import "./styles.css";

export default function App() {
  const projects = [
    {
      id: 1,
      name: "Website Redesign",
      client: "Acme Corp",
      startDate: "2025-01-15",
      status: "In Progress",
    },
    {
      id: 2,
      name: "Mobile App Development",
      client: "TechNova Solutions",
      startDate: "2025-02-10",
      status: "Completed",
    },
    {
      id: 3,
      name: "E-commerce Platform",
      client: "Global Retail Ltd",
      startDate: "2025-03-05",
      status: "Pending",
    },
  ];

  return (
    <div className="App">
      <h1>My Projects</h1>
      <h2>Listing Project - {projects.length}</h2>
      <ul>
        {projects.map((ele) => {
          return <li>{ele.name}</li>;
        })}
      </ul>
      <h2>Full Project Details</h2>
      <table border={1}>
        <tr>
          {/* table heading */}
          <th>Id</th>
          <th>Name</th>
          <th>Client</th>
          <th>Start Date</th>
          <th>Status</th>
        </tr>
        {projects.map((ele) => {
          return (
            <tr>
              {/* table data */}
              <td>{ele.id}</td>
              <td>{ele.name}</td>
              <td>{ele.client}</td>
              <td>{ele.startDate}</td>
              <td>{ele.status}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
```



# Display the title of the tasks in a list (code) :

```
import "./styles.css";

export default function App() {

  const tasks = [
    {
      id: 103,
      projectId: 1,
      title: "Implement responsive layout",
      status: "Pending",
    },
    {
      id: 201,
      projectId: 2,
      title: "Set up mobile backend API",
      status: "Completed",
    },
    {
      id: 301,
      projectId: 3,
      title: "Create product catalog module",
      status: "In Progress",
    },
    {
      id: 202,
      projectId: 2,
      title: "Develop user authentication",
      status: "Completed",
    },
    { id: 102, projectId: 1, title: "Design mockups", status: "In Progress" },
    {
      id: 303,
      projectId: 3,
      title: "Set up order tracking system",
      status: "Pending",
    },
    {
      id: 203,
      projectId: 2,
      title: "App store submission",
      status: "Completed",
    },
    {
      id: 101,
      projectId: 1,
      title: "Gather requirements",
      status: "Completed",
    },
    {
      id: 302,
      projectId: 3,
      title: "Integrate payment gateway",
      status: "Pending",
    },
  ];

  return (
    <div className="App">
      <h1>My Projects</h1>
       
      <h2>Total Tasks - {tasks.length} </h2>
      {/* Display the title of the task in a list */}
      <ul>
        {tasks.map((ele) => {
          return <li>{ele.title}</li>;
        })}
      </ul>
    </div>
  );
}
```

I.Q:<br>
1. How do you implement Es6 modul loader and  common JS module loaders ? How does the syntax varies..
2. Syntax of module loader Vs Es6 module loader?

- In backend, we use common js module loader(require keywords) and In frontend we will use Es6 module loader (import keywords)
 

**In front-end we use ,**
      
      import { PieChart } from "react-chartkick";

**In backend we use (equivalent to frontend),**
       
       const {PieChart} = require('react-chartkick');


Q). How the all information stored ? 
ans: In our database, everything is stored as **array of objects**..


## Notes:

1. If you have an object in react, then you cannot print/display an Object on the UI.
<br>
like if there is an object name: person, here if we wants to print object then I have to do person.name . but directly we cannot print only person.


2. Every time, we are performing **map** then for the key props, we have to specify some unique identifiers. <br>
If **id** is given then use it , as id is going to be unique.
<br>
If we are using array of objects then, that objects have a unique identifier id. 

But when we don't have an **array of objects** and all we have is array of primitives, then don't rely on the elements in the array to get the unique value, bcz they also can be dublicates. <br>

**so** make use of the **index**.
bcz without using the key map will give error in the console(browser).


code:

```
const arr = ["React", "JSX", "Component"];
  <ul>
        {arr.map((ele, index) => {
          return <li key={index}>{ele}</li>;
        })}
  </ul>
```

3. When we are working with array of Primitives, then use the **index** value as the key. <br>
   
   && <br>

When working with **array of objects,**  use the **ID** as the key. 