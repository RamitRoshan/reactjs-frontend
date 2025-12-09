# useState Hook :

Q). What is useState ? <br>
ans: useState is a React Hook that allows functional components to manage state.

- state is nothing but a data.

<br>

**✔️ Meaning:**

State = data of the component.

Hooks = JavaScript functions provided by React.


### Syntax :

            const [state, setState] = useState(initialValue);

<br>

I.Q). How many types of hook ? (there are 8 types of hooks).

<br>

### Components:

- state → holds current value

- setState → updates value + triggers re-render
  
- initialValue -> The initial state.

- useState() , is an fn that returns an array


## 🟦 React Re-render Concept (Basic Idea)

**Whenever setState() is called:**

1. React schedules a re-render

2. Updates the virtual DOM

3. Compares with previous version (diffing)

4. Updates only changed parts in real DOM



## 🟪 React Fragment

**I.Q). What is React fragments(<> </>) ?** <br>

ans- React fragment helps to group multiple react element. <br> It is prefered because. it doesn't add an extra element/div to the DOM.


**❓ Why do we use Fragments?**

ans: Because React components must return only ONE parent element.

Example ❌(Not allowed):

               return (
                <h1>Hello</h1>
                <p>World</p>
               );

here, React will give an error:
**"Adjacent JSX elements must be wrapped in an enclosing tag"**

✔️ Solutions:

1. Wrapper div (adds extra div)

              return (
                <div>
                  <h1>Hello</h1>
                  <p>World</p>
                </div>
             );

2. React Fragment (preferred)

             <>
               <h1>Hello</h1>
               <p>World</p>
             </>

Imp.notes: **React Fragment groups multiple JSX elements without adding extra nodes to DOM.** 
<br>
If we use div tag instead of fragment then it adds extra DOM in html.

<br>


### Q). Why we use StrictMode in React?

**✔️ Purpose :**

**StrictMode helps developers by:**

- Highlighting potential problems

- Detecting unsafe lifecycle methods

- Warning about deprecated APIs

- Double-invoking functions to detect side effects (in dev mode)

**It does NOT affect production.**

<br>

## I.Q). Why console.log doesn't show updated state?

**✔️ Reason:**

- Because setState is asynchronous.

**When you write:**

            setCount(count + 1);
            console.log(count);

React does not update immediately. <br>
It schedules the update → then logs old value.

<br>

**Interview answer:**

“**setState is asynchronous;** state updates are batched. Therefore, console.log immediately after setState shows the old value.”

## I.Q). Is state asynchronous?

**Answer:**

- State itself is not asynchronous.

- The update process is asynchronous.

- Meaning → React updates state later, not instantly.


## useState Example Code :

            const [count, setCount] = useState(0);
         
            const handleInc = () => {
              setCount(count + 1);
            };


# Note :  Root object in frontend = window object



<br>

## Important Note - pnpm vs npm

**✔️ Why you must use pnpm in CodeSandbox?**

Because your project contains: 

               pnpm-lock.yaml

<br>

**This means:**

- The project was created using pnpm

- CodeSandbox expects pnpm commands

- Don’t use npm commands unless you convert the project

##  To add(install), 3rd party package we need to use this :

                pnpm add react-router-dom


<br>

**✔️ Why CodeSandbox prefers pnpm?**

- Faster installation

- Smaller node_modules

- Works better in cloud

- Good for Vite + React apps


#### Git User Setup Commands:

               git config --global user.name "Ramit Roshan"
               git config --global user.email "ramitsroshan@gmail.com"

#### Check :
 
              git config --global user.name