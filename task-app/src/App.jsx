import { useState } from 'react'
import './App.css'
import TaskForm from './TaskForm';
import TaskList from './TaskList';


function App() {  
  const [tasks, setTasks] = useState([]);

  const addTask = (taskObj) => {  //handler fn / call back
    setTasks([...tasks, taskObj]);
  }

  return (
    <>
      <div>
        <h1>Task App</h1>
        <h2>Listing Tasks - {tasks.length}</h2>
         <TaskList tasks={tasks}/>
         <TaskForm addTask={addTask}/>
      </div>
    </>
  )
}

export default App
