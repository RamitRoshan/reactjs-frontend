import { useEffect, useState } from "react";
import axios from "axios";

export default function GithubUserProfile(){

    // input value
    const [userName, setUserName] = useState("");
    
    /* using to trigger api call after submit,
    used a separate searchUser state to trigger useEffect only after form submission, avoiding unnecessary API calls while typing.. 
    if we use [userName] in dependency array then API will be called on every re-render.
    */

    // Acts as a confirmed username, Changes only when the form is submitted. It  trigger API call after submit.
    const [searchUser, setSearchUser] = useState("");

    // stores API response
    const [userData, setUserData] = useState(null);

    // stores errors
    const [errors, setErrors] = useState({});


    const handleSubmit = (e) => {
        // to avoid multiple re rendering we use local variable(formErrors) otherwise we can use
        //setErrors. It is a temporary local object We use it to collect all validation errors
        const formErrors = {};

        e.preventDefault();

        if(userName.trim().length === 0){
            formErrors.userName = "username is required";
        }

        /* Check errors; if present, update error state and exit function i.e I 
        ,use a local formErrors object to collect validation errors. If any error exists, I update the error state and return early to prevent the API call. */
        if (Object.keys(formErrors).length > 0) {
           setErrors(formErrors);
           return;
        }
        //clear errors -> Remove old validation errors
        /*Clear old error messages once validation passes. What happens without it ❌
        Previous error like "username is required" will still show even after user enters a valid username. */
        setErrors({});

        //trigger api calls. update searchUser to trigger the API call through useEffect.
        setSearchUser(userName);
    };

    useEffect(() => {
    if (!searchUser) return; // prevents API call on initial render

    const fetchUser = async () => {
      await axios
        .get(`https://api.github.com/users/${searchUser}`)
        .then((response) => {
          setUserData(response.data);
        })
        .catch(() => {
          setErrors({ api: "User not found" });
          setUserData(null);
        });
        // .catch((error) => {
        //    setErrors({
        //        api: error.response?.data?.message || "Something went wrong"
        //     });
        //     setUserData(null);
        // });
    };

    fetchUser();
  }, [searchUser]);

    return (
        <div>
            <h2>Github User Profile</h2>

            <form onSubmit={handleSubmit}>
              <div>
                <input 
                  type="text"
                  placeholder="Enter Github Username" 
                  value={userName}
                  onChange={e => setUserName(e.target.value)}

                />
                {errors.userName && <span style={{color: 'red'}}>{errors.userName}</span>}
              </div> 
              <br/>
              <div>
                <input type="submit"/>
              </div>
            </form>

            {errors.api && (
                <p style={{ color: "red" }}>{errors.api}</p>
            )}

            {userData && (
              <div>
                <h3>{userData.name}</h3>
                <img src={userData.avatar_url} alt="avatar" width="120" />
                {/* GitHub API uses login as the username field, not username. That’s why I accessed userData.login.” */}
                <p>Username: {userData.login}</p>
              </div>
            )}
        </div>
    );
}