import { useMemo, useState } from "react";

export default function UseMemoEx(){
    const [n, setN] = useState("");
    const [numbers, setNumbers] = useState([10,20,30]);

    


    const sum = useMemo(() => {
        console.log("inside use memo");
        return numbers.reduce((acc, cv) => acc + cv, 0);
    }, [numbers]);

    // as there is dependencies, so can't we use useEffect? yes ! bt we have too use extra
    //state variable and it's not a good practice. as useEffect is used to handle side effect
    // in react but here, sum is totally a calculation.
//     const [sum, setSum] = useState(0);
//     useEffect(() => {
//     console.log("inside useEffect");
//     const total = numbers.reduce((acc, cv) => acc + cv, 0);
//     setSum(total);
// }, [numbers]);

    // this is what we use to sum without using useMemo hook
    // const sum = numbers.reduce((acc, cv) => {
    //     console.log('inside reducer', acc);
    //     return acc + cv;
    // }, 0);

    const handleSubmit = (e) => {
        e.preventDefault();
        setNumbers((prevState) => {
            return [...prevState, Number(n)];
        });
        setN(""); // resets the input value so the input field becomes empty after submit
    };
    return(
        <div>
            <h2>useMemo Hook</h2>

            <ul>
                {numbers.map((ele, i) => {
                    return <li key={i}>{ele}</li>
                })}
            </ul>
            <h3>Sum: {sum}</h3>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                placeholder="enter a number"
                value={n}
                onChange={e => setN(e.target.value)}
                />
                <input type="submit"/>
            </form> 
        </div>
    );
}