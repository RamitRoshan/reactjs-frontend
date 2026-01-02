import { useState } from "react";

export default function UseMemoEx(){
    const [n, setN] = useState("");
    const [numbers, setNumbers] = useState([10,20,30]);

    const sum = numbers.reduce((acc, cv) => {
        console.log('inside reducer', acc);
        return acc + cv;
    }, 0);

    const handleSubmit = (e) => {
        e.preventDefault();
        setNumbers((prevState) => {
            return [...prevState, Number(n)];
        });
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
                value={n}
                onChange={e => setN(e.target.value)}
                />
                <input type="submit"/>
            </form> 
        </div>
    );
}