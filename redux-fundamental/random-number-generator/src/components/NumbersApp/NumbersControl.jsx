import { addNumber } from "../../actions/numbersAction"
import { useDispatch } from "react-redux"

const NumbersControl = () => {

    const dispatch = useDispatch();

    const generateNumber = () => {
        const randomNumber = Math.floor(Math.random() * 100) + 1;

        // const num = {
        //     id: Number(new Date()),
        //     value: randomNumber
        // }

        const num = {
            id: Date.now(),
            value: randomNumber
        };

        dispatch(addNumber(num));
    }
    return (
        <div>
            <button onClick={generateNumber}>Generate</button>
            <button>+2</button>
            <button>Remove All</button>
        </div>
    )
}

export default NumbersControl;