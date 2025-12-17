import axios from "axios";
import { useState } from "react";

export default function MovieSearch(){

    //input value
    // we use "" means string, not an object and API returns an object
    const [movieName, setMovieName] = useState("");

    //storing API response
    //we use null because at the start, there is NO data. 
    const [userData, setUserData] = useState(null);

    // stores errors , we use this {} means data exists
    const [errors, setErrors] = useState({});



    const handleSubmit = (e) => {
        e.preventDefault();

        axios.get(`https://www.omdbapi.com/`)
    }
    return (
        <div>
            <h3>Movie Searches</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                    type="text"
                    placeholder="enter movies name"
                    value={movieName}
                    onChange={e => setMovieName(e.target.value)}
                    />
                    {errors.movieName && <span style={{color: 'red'}}>{errors.movieName}</span>}
                </div>
                <br/>
                <div>
                   <input type="submit"/>
                </div>
            </form>
        </div>
    );
}