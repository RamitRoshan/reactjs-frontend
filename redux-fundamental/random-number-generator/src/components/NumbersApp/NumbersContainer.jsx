import { useSelector } from "react-redux";
import NumbersControl from "./NumbersControl";
import NumbersList from "./NumbersList";
import AddNumber from "./AddNumber";

// eslint-disable-next-line no-unused-vars
const NumbersContainer = (props) => {

    const numbers = useSelector((state) => {
        return state.numbers
    })

    const findSum = () => {
        let sum = 0
        numbers.forEach((ele) => {
            sum += ele.value
        })
        return sum;
    }

    return (
        <div>
            {/* filling it, it's not a spread operator */}
            <h2>Listing - {numbers.length}, Sum - { findSum()}</h2>

            <NumbersList/>
            <NumbersControl/>
            <AddNumber/>
        </div>
    )
}


export default NumbersContainer;