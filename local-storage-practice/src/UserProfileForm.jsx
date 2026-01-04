/*
Create a React form that takes name and email from the user.

=>When the user clicks the Submit button:

- Store both name and email together as an object in the browser’s localStorage.
- Use only one key in localStorage, for example: "profile".
- Since localStorage stores only strings, convert the object properly before storing it, 
using using JSON.stringify().

=> When the page is reloaded:
- Get the data back from localStorage, using JSON.parse() and then show name and email on the UI
- Convert it back into an object.
- Display the stored name and email on the UI automatically.

Use JSON.stringify() while saving
Use JSON.parse() while reading

We need to create one object called profile which will contain name and email.
Then we store this object in localStorage using JSON.stringify() because localStorage only stores strings.
When the page reloads, we get the data back using JSON.parse() and then show name and email on the UI.


=> In key we want to have profile, and in value we want to store an object.
This means:
key   → "profile"
value → { name: "Ramit", email: "ramit123@gmail.com" }
But localStorage stores ONLY STRINGS, so we must convert the object.
*/

import { useEffect, useState } from "react";

export default function UserProfileForm(){

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

        //handle form submit
    const handleSubmit = (e) => {
        e.preventDefault();

        //creating profile object (storing name and email inside profile object)
        const profile = {
            name: name,
            email: email
        };
        //localStorage cannot store objects, only strings So: 
        // JSON.stringify() → converts object → string)
        localStorage.setItem("profile", JSON.stringify(profile));
        setIsSubmitted(true);
    };


    //Get data from localStorage when page loads
    useEffect(() => {
        //getItem() -> gets string 
        const storedProfile = localStorage.getItem("profile");

        if(storedProfile){
            //JSON.parse() → converts string → object again
            const parsedProfile = JSON.parse(storedProfile);
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setName(parsedProfile.name);
            setEmail(parsedProfile.email);
            setIsSubmitted(true);
        }
    }, []);

    return (
        <div>
            <h2>User Profile</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name: </label>
                    <input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    />
                </div>
                <br/>
                <div>
                    <label>Email: </label>
                    <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <br/>
                <div>
                    <input type="submit"/>
                </div>
            </form>
            {/* Show data on UI, using conditional rendering */}
            {isSubmitted && (
                <div>
                    <h3>Saved Profile</h3>
                    <p>Name: {name}</p>
                    <p>Email: {email}</p>
                </div>
            )}
        </div>
    );
}