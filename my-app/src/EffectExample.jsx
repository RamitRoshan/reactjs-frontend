import axios from 'axios'; 
import { useEffect, useState } from 'react'; 

export default function EffectExample(){ 
   const [users, setUsers] = useState([]); 
  
   useEffect(() => {
     axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            console.log(response.data); 
            setUsers(response.data); 
        })
        .catch((err) => {
            console.log(err.message); 
        })
        
   },[]); // effect is called only once after the initial render 

   /*
   class Component 

    componentDidMount(){ 
        axios.get(); 
    }
   */ 
    return (
        <div>
            <h2>Listing Users - { users.length} </h2>
            <ul>
                { users.map((ele) => {
                    return <li key={ele.id}> { ele.name }</li>
                })}
            </ul>
        </div> 
    )
}

// export default function EffectExample() {
//     console.log('inside component')
//     const [ count, setCount] = useState(0); 
//     // this function will get called ONLY ONCE after the initial render
//     // this effect or function will not get called during re renders
//     // why ? bcoz of [ ] -> empty depency array
//     useEffect(() => {
//         console.log("inside useEffect with []"); 
//         // EX -  fetch data on the initial load of the website
//     }, []); 

//     return (
//         <div>
//             { console.log('inside jsx')}
//             <h2>useEffect Example</h2>
//             <h3> Count - { count } </h3>
//             <button onClick={() => { 
//                 setCount(count + 1); 
//             }}> + 1</button>
//         </div>
//     )
// }