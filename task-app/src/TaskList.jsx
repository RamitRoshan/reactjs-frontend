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
export default function TaskList({tasks, removeTask, updateTask}){


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

    // status changes
    const handleStatusChange = (task) => {
        // console.log('change status for', id);

        const formData = {
            title: task.title,
            description: task.description,
            //if-else
            status: task.status === "pending" ? "completed" : "pending"
        };
        axios.put(`http://localhost:7070/api/tasks/${task._id}`, formData)
             .then((response) => {
                console.log(response.data);
                const data = response.data;
                updateTask(data.task);
             })
             .catch((err) => {
                console.log(err);
             });
    }

   
    return(
        <div>
            {tasks.length == 0 && <p>No tasks found, Add your next task</p>}
            <ul>
                {tasks.map((ele) => {
                    return (
                      <li key={ele._id}>
                        <input type="checkbox" checked={ele.status == "completed"}
                        onChange={() => {
                            handleStatusChange(ele);
                        }}/>
                        {/* using conditional rendering and return strike for completion */}
                        {ele.status == "completed" ? <s>{ele.title}</s> : ele.title} 
                      <button onClick={() => { 
                        handleRemove(ele._id)
                      }}>remove</button>
                    </li>
                    );
                })}
            </ul>
            
        </div>
    );
}



 
