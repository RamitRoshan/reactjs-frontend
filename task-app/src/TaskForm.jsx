import axios from "axios";
import { useState } from "react";

export default function TaskForm(props){  //TaskForm ({addTask}) . we can add TaskForm(props) 

    const [title, setTitle]  = useState('');
    const [description, setDescription] = useState("");
    // eslint-disable-next-line no-unused-vars
    const [serverError, setServerError]  = useState(null);
    const [clientErrors, setClientErrors] = useState({});

    // const [clientErrors, setClientErrors] = useState({
    //     title: '',
    //     description: ''
    // });
    

    const handleSubmit = (e) => {
        // to avoid multiple re rendering we use local variable(error) otherwise we can use
        //setClientErrors
        const errors = {};

        e.preventDefault();
        const taskObj = {
            // id: Date.now(),
            title: title,
            description: description,
            status: 'pending'
        }
        console.log('task obj', taskObj);


        if(title.trim().length == 0){
            errors.title = "title is required";
        }

        if(description.trim().length == 0){
            errors.description = "description is required";
        }

        console.log(errors);
        if(Object.keys(errors).length != 0){
            console.log('form errors', errors);
            setClientErrors(errors);
        } else {
            console.log('no errors submit data to api');
        }


        axios.post('http://localhost:7070/api/tasks/', taskObj)
             .then((response) => {
                console.log(response.data);
                const data = response.data;
                props.addTask(data);
                setTitle('');
                setDescription('');
                setServerError(null);
                //to clean up the ui (housekeeping works -> like if we click on submibrn then again
                // if it print title is required then this line will remove it)
                setClientErrors({});
             })
             .catch((err) => {
                console.log(err.response.data);
                setServerError(err.response.data);
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

                      onBlur={() => {
                        console.log('user came out of input field');
                        //check if the title is empty, if so then update the clientErrors
                        //client side validations
                        if(title.trim().length === 0){
                            setClientErrors({...clientErrors, title: "title is required"});
                        }  
                      }}

                    />
                    {/* object.props is undefined i.e false and false && other is false
                    i.e if clientError.tile is truthy then print print clientError in red color */}
                    {clientErrors.title && <span style={{color: 'red'}}>{clientErrors.title}</span>}
                </div>
                <div>
                    <textarea 
                      placeholder="enter description"
                      value={description}
                      onChange={e => setDescription(e.target.value)}
                      onBlur = {() => {
                        if(description.trim().length === 0){
                            setClientErrors({...clientErrors, description: "description is required"});
                        }
                      }}
                      >
                    </textarea>
                    {clientErrors.description && <span style={{ color: 'red'}}>{clientErrors.description}</span>}
                </div>
                <div>
                    <input type="submit"/>
                </div>
            </form>
        </div>
    );
}