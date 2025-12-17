import axios from "axios";
import { useState } from "react";

export default function MovieSearch(){

    // Stores user input (movie name)
    const [movieName, setMovieName] = useState("");

    //storing API response(Stores list of movies returned by API)
    const [movies, setMovies] = useState([]);

    // Stores error message (string)
    const [errors, setErrors] = useState("");



    const handleSubmit = (e) => {
        e.preventDefault();

        // Clears previous user data before making a new API request
        setMovies([]);

        // Resets previous error message before starting a new request
        setErrors("");

        const API_KEY = "8f34b44e";
        axios.get(`https://www.omdbapi.com/?s=${movieName}&apikey=${API_KEY}`)
             .then((response) => {
                // Extract actual API data from Axios response
                const result = response.data;

                 /*
                  Response, Search, Error → come from OMDB API
                  Response: "True"  → movies found
                  Response: "False" → error occurred
                */
                if(result.Response === "True"){
                    // When movies are found, OMDB returns them inside `Search` array
                    setMovies(result.Search);
                    // Clear any previous error message
                    setErrors("");
                }else{
                    // When movies are NOT found, OMDB sends an `Error` message
                    // We store that message to show it to the user
                    setErrors(result.Error);
                }
             })
             .catch((err) => {
                setErrors(err.message);
             });
    };
    return (
        <div>
            <h3>Movie Searches</h3>

            <form onSubmit={handleSubmit}>
                    <input
                    type="text"
                    placeholder="Enter movies name"
                    value={movieName}
                    onChange={(e) => setMovieName(e.target.value)}
                    />
                    <input type="submit"/>
            </form>
            {errors && <p style={{color: "red"}}>{errors}</p>}
            <ul>
                {/* movies → state variable */}
                {movies.map((movies) => {
                    return(
                        <li key={movies.imdbID}>{movies.Title}</li>
                    )
                })}
            </ul>
        </div>
    );
}