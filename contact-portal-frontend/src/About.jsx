import { useEffect, useState } from "react";
import axios from "axios";

export default function About() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5050/api/about")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  if (!data){
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>{data.title}</h2>
      <p>{data.description}</p>
    </div>
  );
}
