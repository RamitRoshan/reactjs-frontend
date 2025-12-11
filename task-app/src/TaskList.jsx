// export default function TaskList({tasks, setTasks}){
//     const handleRemove = (id) => {
//         const filteredTasks = tasks.filter(task => task.id !== id);
//         alert("are you sure to delete ? ");
//         setTasks(filteredTasks);  //update UI
//     }
  
//     return(
//         <div>
//             {tasks.length == 0 && <p>No tasks found, Add your nes task</p>}
//             <ul>
//                 {tasks.map((ele) => {
//                     return (
//                       <li key={ele.id}>{ele.title} 
//                       <button onClick={() => handleRemove(ele.id)}>remove</button>
//                     </li>
//                     );
//                 })}
//             </ul>
            
//         </div>
//     );
// }


//another(2nd) ways to solve it


import axios from "axios";
export default function TaskList({tasks, removeTask}){


    const handleRemove = (id) => {
        const userConfirm = window.confirm("Are you sure ?")
        if(userConfirm){
            axios.delete(`http://localhost:7070/api/tasks/${id}`)
                 .then((response) => {
                    const data = response.data;
                    removeTask(data._id);
                 })
                 .catch((err) => {
                    alert(err.message);
                 })
        }
    }

   
    return(
        <div>
            {tasks.length == 0 && <p>No tasks found, Add your next task</p>}
            <ul>
                {tasks.map((ele) => {
                    return (
                      <li key={ele._id}>{ele.title} 
                      <button onClick={() => handleRemove(ele._id)}>remove</button>
                    </li>
                    );
                })}
            </ul>
            
        </div>
    );
}



 
