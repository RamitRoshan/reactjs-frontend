import { useState } from "react";

export default function RegisterForm(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [errors, setErrors] = useState({
        email: "",
        password: "",
        confirmPassword: ""
    });

    return (
        
        <div>
            <h1>Register Form</h1>
            <div>
                {/* email */}
                <input
                      type="email"
                      placeholder="Enter email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}

                      onBlur={() => {       
                        if(email.trim().length === 0){
                            setErrors({ ...errors, email: "Email is required" });
                        }  
                      }}

                    />
                    {errors.email && <span style={{color: 'red'}}>{errors.email}</span>}
                    
                    <br/>
                    
                    {/* Password */}

                    <input
                      type="password"
                      placeholder="Enter password"
                      value={password}
                      onChange={e => setPassword(e.target.value)}

                      onBlur={() => {
                
                        if(password.trim().length === 0){
                            setErrors({ ...errors, password: "Password is required" });
                        }  
                        if(confirmPassword && password !== confirmPassword){
                            setErrors({...errors, confirmPassword: "Password doesnot match"})
                        }
                      }}

                    />
                    {errors.password && <span style={{color: 'red'}}>{errors.password}</span>}

                    <br/>

                    {/* Confirm Password */}

                    <input
                      type="password"
                      placeholder=" Confirm password"
                      value={confirmPassword}
                      onChange={e => setConfirmPassword(e.target.value)}

                      onBlur={() => {
                
                        if(confirmPassword.trim().length === 0){
                            setErrors({ ...errors, confirmPassword: " Confirm Password is required" });
                        }  
                        else if(password !== confirmPassword){
                            setErrors({...errors, confirmPassword: "Password doesnot match"})
                        } else{
                            setErrors({...errors, confirmPassword: ""})
                        }
                      }}

                    />
                    {errors.confirmPassword && <span style={{color: 'red'}}>{errors.confirmPassword}</span>}

                    <br/> 

                    <button>Register</button>
            </div>
        </div>
    );
}

















 