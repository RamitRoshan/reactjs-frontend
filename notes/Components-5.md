# Understanding SPA (Single Page Applications)

### I.Q). What is a Single Page Application (SPA) ? <br>

ans: A **Single Page Appplication (SPA)** is a web application that **loads a single HTML page** and dynamically updates content **without refreshing the entire page.** <br>
SPAs use **JavaScript** to handle navigation and **only update necessary parts of the page,** making them **faster and more interactive.**


### How SPAs Work ? 

1. **Initial Load:** When a user visits an SPA, the browser loads a **single HTML page** along with JavaScript, CSS and other assests.
   
2. **Client-Side Routing:** Navigation within the application is handled by JavaScript (**React Router, Vue Router, etc**), which updates the content **without requesting a full page reload.**
   
3. **Dynamic Content Updates:** Data is fetched from APIs (often using **AJAX or Fetch API**) and rendered dynamically on the page.
   
4. **Virtual DOM (React Specific):** React efficiently updates only the necessary UI elements instead of re-rendering the whole page.


### Key Features of SPAs

1. **Fast Performance -** Only necessary data is updated instead of reloading the entire page.

2. **Smooth User Experience -** No flickering or full-page reloads.

3. **Client-Side Rendering(CSR) -** All rendering happens in the browser, reducing server load.

4. **Improved Caching -** Data can be cached, reducing network requests.

5. **Modular & Reusable Components -** Great for building scalable applications.



# Components in React

React is a **component-based library,** meaning that UI elements are divided into **reusable components. **
There components help in building scalable and maintainable applications.


### Q). What is a Component ? <br>
ans: A **component** in React is a self-contained(it has logic of it's own), reusable piece of UI that can be independently managed and rendered. <br>

Ex: A button component can be reused multiple times in an application.

- A component is nothing, but a JavaScript functions in react. (in short, a component is a functions).


Q). How do you load a file into your application? <br>

 In frontend -> using ES6 module loader <br> 
 e.g:  export default Greet;

 <br>
 In backend -> we are using common JS module loader . <br>

 e.g: module.exports = Greet;


# What is Props in React?

Props (short for Properties) are used to pass data from one component to another, mainly from parent → child.

<br>

**Props are read-only data used to pass information from a parent component to a child component in React**

<br>

👉 Props are read-only (cannot be changed by the child).

## Q). Why do we use Props?

- To share data between components

- To make components reusable

To pass:

- text

- numbers

- objects

- functions

- arrays


### How Props Work (Flow)

        Parent Component → sends data → Child Component

## Example: Passing Props

1. Parent Component :

          <Child name="Ramit" age={22} />

2. Child Component :

           function Child(props) {
             return (
               <h1>{props.name} - {props.age}</h1>
             );
            }

### Using Destructuring with Props (Best Practice):

             function Child({ name, age }) {
                return <h1>{name} - {age}</h1>;
            }

            "or"

            export default function Greet({ name, role }) {
              return (
                <div>
                  <h2>
                    Welcome to the sites {name} ({role})
                  </h2>
                </div>
              );
            }



- **Destructuring** basically extract the properties of object and store it in independent variables. <br> so, that the independent variables can be used in different parts of your code. **It highly used in reactjs.**

## Key Points to Remember

- Props are immutable (cannot change)

- Data flows in one direction (parent → child)

- Makes components dynamic & reusable

- Props can contain functions
  
- **props datatype** is an object.

- **props** is basically, how we pass arguments to a component. <br> 


<br>

Q). can we modify/manipulate props ? <br>
ans: No! we cannot modify props. <br> props is **read** only. It's only read the information.

<br>


### A component cannot return multiple elements. <br>
e.g: I cannot return a h2 tag and a p (paragraph) tag.  

          export default function Greet({ name, role }) {
            return (
     
              <h2>
                Welcome to the sites {name} ({role})
              </h2>
             <p></p>
            );
           }

           O:P/
           Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>.
           we have to wrap it inside either fragment tags or <div> tags


Note: 

- **any data**, that we have to give from **parent to child**, then we have to pass it via **props**. <br> that's the only way how the data is gonna be made available.