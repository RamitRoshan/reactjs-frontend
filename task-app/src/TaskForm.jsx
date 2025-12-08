import { useState } from "react";

export default function TaskForm(props){  //TaskForm ({addTask})

    const [title, setTitle]  = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const taskObj = {
            id: Date.now(),
            title: title,
            isCompleted: false
        }
        props.addTask(taskObj); // invoking the add task function
        setTitle('');
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
                    <input type="submit"/>
                </div>
            </form>
        </div>
    );
}