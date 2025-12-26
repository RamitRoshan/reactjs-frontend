import { useEffect, useState } from "react";
import axios from "axios";

export default function Services() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5050/api/services")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  if (!data){
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>{data.title}</h2>
      <ul>
        {data.services.map((service, i) => (
            <li key={i}>
                <h3>{service.name}</h3>
                <p>{service.details}</p>
            </li>
        ))}
      </ul>

    </div>
  );
}
