import { useSelector } from "react-redux";

// eslint-disable-next-line no-unused-vars
const NumbersList = (props) => {

    const numbers = useSelector((state) => {
        return state.numbers;
    })
    return (
        <div>
            <ul>
                {numbers.map((num) => {
                    return (
                        <li key={num.id}>
                            {num.value}
                            <button>-</button>
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