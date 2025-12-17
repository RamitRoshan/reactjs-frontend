// import axios from "axios";
// import { useState } from "react";

// export default function CityWeather(){

//     const [city, setCity] = useState("");
//     //Weather response is one object, not a list. so use null not []
//     const [weather, setWeather] = useState(null);

//     const [errors, setErrors] = useState("");

//     const handleSubmit  = (e) => {
//         e.preventDefault();

//         //clear previous user data
//         setWeather(null);
//         //reset prev error message before starting new req
//         setErrors("");

//         axios
//            .get(`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`)
//            .then((response) => {
//              if(!response.data.results || response.data.results.length === 0){
//                 throw new Error("city not found")
//              }
//            })
//            .catch((err) => {
//             setErrors(err.message);
//            })
//     }
//     return(
//         <div>
//             <h2>Weather of City</h2>

//             <form onSubmit={handleSubmit}>
//                 <input
//                 type="text"
//                 placeholder="Enter your city name"
//                 value={city}
//                 onChange={(e) => setCity(e.target.value)}
//                 />
//                 <input type="submit"/>
//             </form>
//             {errors && <p style={{color: "red"}}>{errors}</p>}
//             <ul></ul>
//         </div>
//     );
// }

import axios from "axios";
import { useState } from "react";

export default function CityWeather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // reset previous data
    setWeather(null);
    setError("");

    if (!city.trim()) {
      setError("Please enter a city name");
      return;
    }

    // Get latitude & longitude from city name
    axios
      .get(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`
      )
      .then((res) => {
        if (!res.data.results || res.data.results.length === 0) {
          throw new Error("City not found");
            
        }
        /*
        data → full response object
        results → array of matching cities
        results[0] → first city match

        results is provided by the Open-Meteo Geocoding API, not something we created.

        current_weather is returned by the Open-Meteo Weather API when you pass
        current_weather=true in the URL
        */
        const { latitude, longitude } = res.data.results[0];

        //Get weather using lat & lon
        return axios.get(
          `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
        );
      })
      .then((res) => {
        setWeather(res.data.current_weather);
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <div>
      <h2>City Weather</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <br/>
        <button type="submit">Get Weather</button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {weather && (
        <div>
          <h3>Current Weather</h3>
          <p>Temperature: {weather.temperature} °C</p>
          <p>Wind Speed: {weather.windspeed} km/h</p>
          <p>Weather Code: {weather.weathercode}</p>
        </div>
      )}
    </div>
  );
}
