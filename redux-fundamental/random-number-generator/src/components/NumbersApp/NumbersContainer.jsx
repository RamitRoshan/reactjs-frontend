import { useSelector } from "react-redux";
import NumbersControl from "./NumbersControl";
import NumbersList from "./NumbersList";

// eslint-disable-next-line no-unused-vars
const NumbersContainer = (props) => {

    const numbers = useSelector((state) => {
        return state.numbers
    })

    return (
        <div>
            {/* filling it, it's not a spread operator */}
            <h2>Listing - {numbers.length}, Sum - ...</h2>

            <NumbersList/>
            <NumbersControl/>
        </div>
    )
}


export default NumbersContainer;