// // using use Reducer
// import { useEffect, useReducer } from 'react'
// import './App.css'
// import TaskForm from './TaskForm';
// import TaskList from './TaskList';
// import axios from 'axios';
// import RegisterForm from './RegisterForm';
// import reducer from './reducer';


// function App() {  

//   const [tasks, dispatch] = useReducer(reducer, []);
//   console.log(tasks);


//   //after the app component has finished mounting, display console.log("component mounted")
//   //fetching data + printing it from backend 
//   useEffect(() => {
//     console.log("app component mounted");
//     axios.get('http://localhost:7070/api/tasks/')
//          .then((response) => {
//             console.log(response.data);
//             const data = response.data;
//             dispatch({type: "fetch_tasks", payload: data});
//          })
//          .catch((err) => {
//            console.log(err);
//          })

//   }, []);

 
 

//   return (
//     <>
//       <div>
//         <h1>Task App</h1>
//         <h2>Listing Tasks - {tasks.length}</h2>
//          <TaskList tasks={tasks} dispatch={dispatch}/>
//          <TaskForm dispatch={dispatch}/>
//       </div>
//       <RegisterForm/>
//     </>
//   )
// }

// export default App








//using use State

import { useEffect, useState } from 'react'
import './App.css'
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import axios from 'axios';
import RegisterForm from './RegisterForm';


function App() {  
  const [tasks, setTasks] = useState([]);


  //after the app component has finished mounting, display console.log("component mounted")
  //fetching data + printing it from backend 
  useEffect(() => {
    console.log("app component mounted");
    axios.get('http://localhost:7070/api/tasks/')
         .then((response) => {
            console.log(response.data);
            const data = response.data;
            console.log(data);
            setTasks(data);
         })
         .catch((err) => {
           console.log(err);
         })

  }, []);

  const addTask = (taskObj) => {  //handler fn / call back
    // setTasks([...tasks, taskObj]); //updated fn (newStateValue)
    setTasks(prevState => [...prevState, taskObj]); //updateFnc((prevState) => {return newStateValue})

    /*
    setTasks((prevState) => {
      return [...prevState, taskObj];
    })
    */
  }

  const removeTask =(id) => {
    // const result = tasks.filter((ele) => {
    //   return ele._id != id;
    // });
    // setTasks(result);

    //another ways for doing same above logic
    setTasks((prevState) => {
      return prevState.filter(ele => ele._id != id);
    })
  }

  const updateTask = (task) => {
    setTasks((prevState) => {
      return prevState.map(ele => {
        if(ele._id == task._id){
          return task;
        }else{
          return ele;
        }
      })
    })
  }

  return (
    <>
      <div>
        <h1>Task App</h1>
        <h2>Listing Tasks - {tasks.length}</h2>
         <TaskList tasks={tasks} removeTask={removeTask} updateTask={updateTask}/>
         <TaskForm addTask={addTask}/>
      </div>
      <RegisterForm/>
    </>
  )
}

export default App

