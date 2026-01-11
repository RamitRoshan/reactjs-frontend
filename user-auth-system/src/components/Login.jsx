import {useState, useContext } from "react";
import users from "../users-data.json";
import { AuthContext } from "../context/Auth";
export default function Login(){
    
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [errMessage, setErrMessage] = useState("");

    const {handleLogin} = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            userName,
            password,
        }
        // we are going to see what user give data
        // console.log(formData, users);

        //find return object that satisfy cond. or return undefined
        const user = users.find((ele) => {
            return (
                //this  ele.username and ele.password comes from users-data.json
              ele.username === formData.userName && ele.password === formData.password
            );  
        });
        console.log(user);

        if(user){ //when true
            // console.log('user authenticated');
            handleLogin(user);
            setErrMessage("");
        }else{
            setErrMessage('invalid credentials');
        }
    }
    return (
        <div>
            <h2>Login Form</h2>
            {/* If error message, then display it on UI */}
            {errMessage && <p className="error">{errMessage}</p>}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input
                      type="text"
                      placeholder="Enter username"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <input
                      type="password"
                      placeholder="Enter user password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                
                <div className="form-group">
                    <input type="submit" value="Login"/>
                </div>
                
            </form>
        </div>
    );
}