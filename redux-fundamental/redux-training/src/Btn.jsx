/* the idea of this button component is 
that , +1 button is going to be rendered 
from this particular components
*/

import React from "react";
import { useDispatch } from "react-redux";
import { increment } from "./actions/countActions";

const Btn = (props) => {

    const dispatch = useDispatch()
    
    return <button onClick={() => {
        dispatch(increment())
    }}>+1 from btn comp</button>
}

export default Btn;