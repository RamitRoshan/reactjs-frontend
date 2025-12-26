import { useEffect, useState } from "react";
import axios from "axios";

export default function Contact() {
  const [pageData, setPageData] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [successMsg, setSuccessMsg] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5050/api/contact")
    //   .then((res) => setPageData(res.data))
      .then((res) => {
        setPageData(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);

  const handleChange = (e) => {
    setFormData({ 
        ...formData, 
        [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:5050/api/contact/submit", formData)
      .then((res) => {
        setSuccessMsg(res.data.message);
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        console.log(err);
      })
  };

  return (
    <div>
      {pageData && (
        <>
          <h2>{pageData.title}</h2>
          <p>{pageData.description}</p>
        </>
      )}

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        /><br />

        <input
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        /><br />

        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
        /><br />

        <button type="submit">Submit</button>
      </form>

      {/* using Conditional rendering */}
      {successMsg && <p>{successMsg}</p>}
    </div>
  );
}
