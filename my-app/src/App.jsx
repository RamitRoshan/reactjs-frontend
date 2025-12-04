import { useState } from "react";

export default function App() {

  console.log('inside the component')
  const [count, setCount] = useState(0);

  const handleClick = () => {
    console.log('inside event handler');
    setCount((preValue) => preValue + 1);
    // setCount(count + 1);
    console.log("state updated next component will re-render");
  }

  return (
    <div>
      {console.log('inside jsx')}
      <h1>Hello World</h1>
      <h2>Count - {count}</h2>
      <button onClick={handleClick}>+1</button>
    </div>

    
  );
}
