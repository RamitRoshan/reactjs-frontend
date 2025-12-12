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
    setTasks([...tasks, taskObj]);
  }

  const removeTask =(id) => {
    const result = tasks.filter((ele) => {
      return ele._id != id;
    });
    setTasks(result);
  }

  return (
    <>
      <div>
        <h1>Task App</h1>
        <h2>Listing Tasks - {tasks.length}</h2>
         <TaskList tasks={tasks} removeTask={removeTask}/>
         <TaskForm addTask={addTask}/>
      </div>
      <RegisterForm/>
    </>
  )
}

export default App

