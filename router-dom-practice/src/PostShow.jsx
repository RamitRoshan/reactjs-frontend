import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function PostShow(){

    const {id} = useParams();

    const [post, setPost] = useState(null);

    //author
    const [author, setAuthor] = useState(null);

    useEffect(() => {
        axios
           .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
           .then((response) => {
            setPost(response.data);
            console.log(response.data.userId);

            //return in useEffect is for cleanup, not for chaining logic
            //fetching author with the help of userId which is present inside the Post
            return axios
                    .get(`https://jsonplaceholder.typicode.com/users/${response.data.userId}`);

           })
           .then((userResponse) => {
            setAuthor(userResponse.data);
            console.log(userResponse.data);
           })
           .catch((err) => {
            console.log(err.message);
           });
    }, [id]); //when id updated then it will do re-render.


    return (
        <div>
            <h3>Post Shows</h3>
            
            {post && (
                <div>
                    <h4><b>Title:</b> {post.title}</h4>
                    <p>Body: {post.body}</p>
                </div>
            )}

            {/* calling author name - using conditional rendering */}
            {author && (
                <div>
                    {/* if post is truthy value then only print author name */}
                    {/*<h4>Author: {post && author.name}</h4> */}
                    <h4>Author: {author.name}</h4>
                </div>
            )}
        </div>
    );
}