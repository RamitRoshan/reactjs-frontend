import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function PostList(){

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios
          .get("https://jsonplaceholder.typicode.com/posts")
          .then((response) => {
            setPosts(response.data);
            console.log(response.data);
          })
          .catch((err) => {
            console.log(err.message);
          });
    }, []);

    return (
        <div>
            <h3>Post List</h3>
            
            <ul>
                {posts.map((ele) => (
                   <li key={ele.id}>
                       <Link to={`/posts/${ele.id}`}>{ele.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
/*
Create a Post List component - fetch all the posts
from the server and display it.

Provide a link to each of the post title -> onClick
of the link navigate to the PostShow page and 
display the post title, body.
*/