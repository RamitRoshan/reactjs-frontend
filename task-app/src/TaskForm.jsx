import axios from "axios";
import { useState } from "react";

export default function TaskForm(props){  //TaskForm ({addTask}) . we can add TaskForm(props) 

    const [title, setTitle]  = useState('');
    const [description, setDescription] = useState("");
    // eslint-disable-next-line no-unused-vars
    const [serverError, setServerError]  = useState(null);
    

    const handleSubmit = (e) => {
        e.preventDefault();
        const taskObj = {
            // id: Date.now(),
            title: title,
            description: description,
            status: 'pending'
        }
        
        

        // props.addTask(taskObj); // invoking the add task function
        // setTitle('');

        console.log('task obj', taskObj);
        axios.post('http://localhost:7070/api/tasks/', taskObj)
             .then((response) => {
                console.log(response.data);
                const data = response.data;
                props.addTask(data);
                setTitle('');
                setDescription('');
                setServerError(null);
             })
             .catch((err) => {
                console.log(err);
             })

    }

    return(
        <div>
            <h3>Add Task</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                      type="text"
                      placeholder="Enter title"
                      value={title}
                      onChange={e => setTitle(e.target.value)}
                    />
                </div>
                <div>
                    <textarea 
                      placeholder="enter description"
                      value={description}
                      onChange={e => setDescription(e.target.value)}>
                    </textarea>
                </div>
                <div>
                    <input type="submit"/>
                </div>
            </form>
        </div>
    );
}