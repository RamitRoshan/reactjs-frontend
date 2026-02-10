import React from "react";
import { useSelector } from "react-redux";

const ShowCount = (props) => {

    const count = useSelector((state) => {
        return state.count;
    })
    return (
        <div>
            <h4>COUNTER - {count} </h4>
        </div>
    )

}

export default ShowCount;