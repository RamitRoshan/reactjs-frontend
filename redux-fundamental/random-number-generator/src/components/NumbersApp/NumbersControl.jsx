const NumbersControl = () => {

    const generateNumber = () => {
        const randomNumber = Math.round(Math.round() * 100 )
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