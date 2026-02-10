import { useSelector, useDispatch } from "react-redux";
import { decrementNumber } from "../../actions/numbersAction";

// eslint-disable-next-line no-unused-vars
const NumbersList = (props) => {

    const dispatch = useDispatch();

    const numbers = useSelector((state) => {
        return state.numbers;
    })

    const handleDecrement = (id) => {
        dispatch(decrementNumber(id));
    }
    return (
        <div>
            <ul>
                {numbers.map((num) => {
                    return (
                        <li key={num.id}>
                            {num.value}
                            <button onClick={() => {
                                handleDecrement(num.id)
                            }}>-</button>
                            <button>+</button>
                            <button>*</button>
                        </li>
                    ) 
                })}
            </ul>
        </div>
    )
}

export default NumbersList;