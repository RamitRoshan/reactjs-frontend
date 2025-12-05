import { useState} from "react";

export default function EffectExample2() {

    const userIds = [1,2,3,4,5,6,7,8,9,10];
    const [selectedId, setSelectedId] =  useState("");

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
            <p>You have selected user with id : {selectedId}</p>
        </div>
        
    );
}