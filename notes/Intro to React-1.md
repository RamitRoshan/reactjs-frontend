Q). When we choose to use unordered list and ordered list? <br>

ans: when we wants to display a number, then we will use **ordered list**.  (ol tags) <br>

e.g: for recipie : we use order list , like 1st do this , then do this.

- when numbering is not neccessary then we will going to use **unordered list**.  (ul tags)


## JSX (Javacript XML):
It's code look like html, but it's not html it's JSX.

- In html, when we write this,
         
         <h1>Hello World

here, we didn't use closing tags of </h1> but we will not going to get the error.

- In React, If we don't write closing tags then I will get, TypeError. so here with opening tag we need closing tags as well.

         <h1>Hello World</h1>

```
export default function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <h2>Technology, I'm learning</h2>
    </div>
  );
}
```

Q). What is Static Website and Dynamic Website ? <br>
ans: **Static website** is a read only website, that means information is present, but we can only read the information that is available. 
<br>

for example:
- Like lawyers website where we can read and get information, we can't change anything. same goes with any company website, where we can explore home page, contact sections. <br>

**Dynamic websites** are read and write. so we can read the information & we can also create information. <br>
So, we are going to work on Dynamic websites. <br>

 for examplee: 
- we can login into instagram, we can check out our friend's photographs, we can also add our own photographs. 
- We go to LinkedIn and we can create our own profile as well as we can check out other people profile also.

##### The major diff. btw Static and dynamic website is: In static website, if we wants to make any changes to the webpage, we have to alter(make change into the source code) the source code.
Now adays, people don't use static website. They use Dynamic website.

#### **Wordpress** is a CMS(content management system), we use wordpress to create and write blog websites. We can use AMS(Adobe Experience Manager), but it is quite expensive.

- Browsers only help to run JS, so we use JS in frontend.

- Embed expression inside JSX. (we use- {} for this).


### 📍DataType/Values that are not printed/display on the UI/screen in reactjs :
1. undefined
2. boolean (true & false)


#### true == 'true' <br>
The answer is wrong, one is boolean and another one is string.


Q). Here's given an array of String and we have to transform all the element into UPPER Case. 

code: 

```
const names = ["JavaScript", "Express JS", "Node JS"];
//o/p - ["JAVASCRIPT", "EXPRESS JS", "NODE JS"]

const result = [];
for (let i = 0; i < names.length; i++) {
  result.push(names[i].toUpperCase());
}
console.log(result);


2nd Methods:

const names = ["JavaScript", "Express JS", "Node JS"];
//o/p - ["JAVASCRIPT", "EXPRESS JS", "NODE JS"]

const result = names.map(function(ele) {
  return ele.toUpperCase();
});
console.log(result);
```

## Array map method is used to create a new array of the same length. & the value can be transformed..


Q). What is difference btw the ul tags and li tags ? <br>
ans: Parent and child, so we can say that "ul" is a parent  and "li" are the childrens.

```
 <ul>
        <li>{names[0]}</li>
        <li>{names[1]}</li>
        <li>{names[2]}</li>
        <li>{names[5]}</li>
 </ul>
```

Q). What is the relationship btw the ul tags and h2 tags ? <br>
ans: they are siblings, bcz they are one next to each other.

```
<h2>Total - {names.length}</h2>
      <ul></ul>
```


### map is helping to transform the element

code:
```
let names = ["abc", "ab", "a"];
names = names.map(ele => ele.length);
console.log(names); // [3, 2, 1]
```

- Map returns an array, so li tags will also return an array.



## Final Code :

```
import "./styles.css";

export default function App() {
  const names = ["JavaScript", "Html", "CSS", "Nodejs", "ExpressJS", "Java"];

  const colors = ["red", "orange", "yellow", "blue", "black"];

  return (
    <div className="App">
      <h1>Technology, I'm learning</h1>
      <h2>Listing Technologies - {names.length}</h2>
      <ul>
        {names.map((ele) => {
          return <li>{ele}</li>;
        })}
      </ul>

      
      {/* Here we are printing length of color 
      as well as list of all color, and there 1st letter
      is Capital, and rest all are small.
      and respective of color name, their color is 
      also same. Red has Red color. */}


      <h2>Total colors - {colors.length}</h2>
      <ul>
        {colors.map((ele) => {
          return (
            <li style={{ color: ele }}>
              {ele[0].toUpperCase() + ele.slice(1)}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
 
Output: 

Technology, I'm learning

Listing Technologies - 6
- JavaScript
- Html
- CSS
- Nodejs
- ExpressJS
- Java

Total colors - 5
- Red
- Orange
- Yellow
- Blue
- Black
 