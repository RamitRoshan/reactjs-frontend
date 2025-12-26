import { useReducer, useState } from "react";


function reducer(state, action){

    if(action.type == "increment"){
        return state + 1;

    } else if(action.type == "decrement"){
        return state - 1;

    } else if(action.type == "reset"){
        return 0;
    } else if(action.type == "inc_by"){
        return state + action.payload;
    }else{
        return state;
    }

//     switch (action.type) {
//     case "increment": {
//       return state + 1;
//     }
//     case "decrement": {
//       return state - 1;
//     }
//     case "reset": {
//       return 0;
//     }
//     case "inc_by": {
//       return state + action.payload;
//     }
//     default: {
//       return state;
//     }
//   }

}
export default function UseReducerExample(){

    const [count, dispatch] = useReducer(reducer, 0);

    const [n, setN] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({type: "inc_by", payload: Number(n)});
        setN("");
    };

    return (
        <div>
            <h2><b>Use Reducer Example : </b></h2>
            <h3>Counter - {count}</h3>

            <button
              onClick={() => {
                //argument to dispatch fn -> action -> object -> has type
                //property -> indicates the type of the action performed.
                dispatch({type: "increment"});
              }}
            >+1</button>
            <button
               onClick={() => {
                dispatch({type: "decrement"});
               }}
            >-1</button>
            
            <button
               onClick={() => {
                dispatch({type: "reset"});
               }}
            >reset</button>

            <form onClick={handleSubmit}>
                <input
                  type="number"
                  placeholder="Enter the number"
                  value={n}
                  onChange={(e) => setN(e.target.value)}
                />
                <input type="submit"/>
            </form>
        </div>
    );
}