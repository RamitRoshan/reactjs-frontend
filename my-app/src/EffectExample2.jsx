//Interview Questions (component updating examples): React Coding round Questions.

import axios from "axios";
import { useEffect, useState} from "react";

export default function EffectExample2() {

    const userIds = [1,2,3,4,5,6,7,8,9,10];
    const [selectedId, setSelectedId] =  useState("");

    //null is falsy , so we use it here, to print the data if the 
    //data/ userid exist.
    const [user, setUser] = useState(null);

    //effect get called on the inittial render and everytime selectedId changes
    useEffect(() => {
        if(selectedId != ""){
            axios.get(`https://jsonplaceholder.typicode.com/users/${selectedId}`)
            .then((response) => {
                console.log(response.data);
                setUser(response.data);
            })
            .catch((err) => {
                console.log(err);
            })
        }
    }, [selectedId]);

    return(
        <div>
            <h2>useEffect Example</h2>
            <label>User Id: </label>

            {/* I have to show : you have selected userId: 3, 2. */}
            <select value={selectedId} onChange={e => setSelectedId(e.
                target.value)}>
                <option value="">Select</option>
                {userIds.map((ele, index) => {
                    return <option key={index} value={ele}>userId: {ele}</option>
                })}
            </select>

            <br/>

            {/* initial user is null and if it is true then show the 
            data and null is falsy value thats why we use null in state
            variable .
            It will help us to print whatever userid i will select, suppose
            I select userId: 1 then it will show name and email*/}
            {user && (
                <div>
                    <p>Name: {user.name}</p> 
                    <p>Email: {user.email}</p> 
                </div>
            )}
        
            {/* <p>You have selected user with id : {selectedId}</p> */}
        </div>
        
    );
}