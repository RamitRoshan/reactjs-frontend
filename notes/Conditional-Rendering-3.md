# Conditional Rendering (React)

## Definition
Conditional rendering in React means showing or hiding UI elements based on a condition (state or props).

---

## 1. Logical AND (`&&`)
Renders the element only when the condition(both) is true.

      {isLoggedIn && <h1>Welcome</h1>}

## 2. Ternary Operator (? :)
Used when one of two elements must be rendered.

        {isLoggedIn ? <h1>Welcome</h1> : <h1>Please Login</h1>}


## 3. If Statement
Used when rendering logic is complex(bigger).

        if (loading) {
          return <p>Loading...</p>;
        }

## 4. Function-based Rendering
Encapsulates conditional logic inside a function.

        const renderMessage = () => {
            return count > 0 ? "Positive" : "Zero";
        };

## 5. Rendering Nothing (null)
Returns nothing when condition is false.

        {error && <p>{error}</p>}

<br>

**=>** 

1. If you wants to manage if-else statement or If you wants to manage "if" statement.

2. If-else statement is managed through the **ternary operator**  <br>
i.e (condition) ?(true) this is executed :(else or false) this is executed.

3. syntax of ternary operator (? :) <br>

(condition) ? true statement : false statement.
<br>
that's how we do Conditional Rendering in react js using ternary operator.

4. If you have if-else then, use ternary operator.
   
5. If you are using only an **IF** statement, then we have to use an AND(&&) operator. AND operator is also called a short circuit operator.
 
<br> e.g: (condition) && true statement. It's only use for true statement.


6. We cannot use IF-ELSE statement inside JSX, so for using this. We have to manage through <br>
**"ternary operator"**

          const n = 11;
          <p>{n % 2 == 0 ? "n is even" : "n is odd"}</p>


### Another coding example of ternary operator.
```
import "./styles.css";

export default function App() {
   
  const tasks = ["task1", "task2"];
 
  return (
    <div className="App">

      <p>{tasks.length == 0 ? "No tasks" : "there are tasks to do"}</p>

    </div>
  );
}

O/P:
there are tasks to do
```

- If we see the conditional rendering, while we are doing the true statement, then it is wrapped inside the flower brackets({}). <br>
We are not doing anything under the false statement.

             <li key={ele.id}>
              {ele.status == "Completed" ? <s>{ele.name}</s> : ele.name}
            </li>

- show and hide in the UI/screen. It's a classic example of inline statement.


- inline if-statement
       
          {notification.length > 0 && <b>{notification}</b>}



### Note:

```
true && 'dct academy'
-> here it will print dct academy

false && 'dct academy'
-> here it will print false
```

- Three values that doesn't print on the screen.
  
               - true , false and undefined
  

Q) How many children table tags  have ? <br>
ans:  thead and tbody <br>

- thead has one children that is : tr(t-row).

- children of the tbody will be passed on the length of the array


### ⚠ Common mistake

❌
     
     if (isLoggedIn) {
        <h1>Welcome</h1>;
      }

✅
 
      if (isLoggedIn) {
         return <h1>Welcome</h1>;
      }


## Note: Conditional rendering is used to control UI output based on state or props.