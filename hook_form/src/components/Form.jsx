
import React, { useState } from 'react';


const Form = () => {
    // setUsername, setEmail, setPassword can be changed to whatever the initial
    // variable is, like username, email, and password.
    // i was confused about this at first because i thought they were built in functions
    // but set is the built in function and you can call it the same name as the variable in the
    // same array....I THINK???????????
    // make sure that you spell functions using pascal...second word is upper case
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmpassword] = useState("");
    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmpasswordError, setConfirmPasswordError] = useState("");
    
    
    

    const handleName = (e) => {
        setFirstname(e.target.value);
        
        if (e.target.value.length < 2) {
            setNameError("Name must be at least 2 characters!");
        } else {
            setNameError("");
        }
    }

    const handleLastName = (e) => {
        
        setLastname(e.target.value);
        if (e.target.value.length < 2) {
            setNameError("Name must be at least 2 characters!");
        } else {
            setNameError("");
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if (e.target.value.length < 5) {
            setEmailError("Email must be at least 5 characters!");
        } else {
            setEmailError("");
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length < 8) {
            setPasswordError("Password must be at least 8 characters!");
        }
        else {
            setPasswordError("");
        }
        if (confirmpassword && e.target.value !== confirmpassword) {
            setConfirmPasswordError('Passwords must match');
        } else {
            setConfirmPasswordError('');
        }
    }

    const handleConfirmPassword = (e) => {
        setConfirmpassword(e.target.value);
        
        if (e.target.value !== password) {
            setConfirmPasswordError("Passwords must match")
        }
        else {
            setConfirmPasswordError("");
        }
    }




    // If the First Name or Last Name is less than 2 characters, output an error message saying that field must be at least 2 characters.
    // If the email is less than 5 characters, output an error message saying the field must be at least 5 characters.
    // The passwords must match and be at least 8 characters.

    return (
        <>

            
            <form >
                
                <div>
                    <label>First Name: </label>
                    <input type="text" value={firstname} onChange={(e) => handleName(e) }   />
                    {
                        nameError &&
                            <p style={{ color: 'red' }}>{nameError}</p> 
                            
                    }
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text" value={lastname} onChange={(e) => handleLastName(e)}   />
                    {
                        nameError &&
                            <p style={{ color: 'red' }}>{nameError}</p> 
                            
                    }
                </div>

                <div>
                    <label>Email Address: </label>
                    <input type="text" value={email} onChange={(e) => handleEmail(e)}   />
                    {
                        emailError &&
                            <p style={{ color: 'red' }}>{emailError}</p> 
                            
                    }
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" value={password} onChange={(e) => handlePassword(e)}   />
                    {
                        passwordError &&
                            <p style={{ color: 'red' }}>{passwordError}</p> 
                            
                    }
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="password" value={confirmpassword} onChange={(e) => handleConfirmPassword(e)}   />
                    {
                        confirmpasswordError &&
                            <p style={{ color: 'red' }}>{confirmpasswordError}</p> 
                            
                    }
                </div>
                
            </form>
            <div>
                <p>First Name: {firstname}</p>
                <p>Last Name: {lastname}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password:{confirmpassword}</p>
            </div>
        </>
    );
};

export default Form;



