import { useEffect, useState } from "react";
import axios from "axios";

export default function CountrySelector() {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://restcountries.com/v3.1/all?fields=name,capital,population,cca3"
      )
      .then((res) => {
        setCountries(res.data);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  const handleChange = (e) => {
    const country = countries.find(
      (c) => c.name.common === e.target.value
    );
    setSelectedCountry(country);
  };

  return (
    <div>
      <h2>Country Selector</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <select onChange={handleChange} defaultValue="">
        <option value="" disabled>
          Select a country
        </option>

        {countries.map((c) => (
          <option key={c.cca3} value={c.name.common}>
            {c.name.common}
          </option>
        ))}
      </select>

      {selectedCountry && (
        <div>
          <p>Capital: {selectedCountry.capital?.[0] || "N/A"}</p>
          <p>Population: {selectedCountry.population}</p>
        </div>
      )}
    </div>
  );
}
