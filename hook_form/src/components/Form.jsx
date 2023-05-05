
import React, { useState } from  'react';
    
    
const Form = (props) => {
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
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstname, lastname, email, password, confirmpassword };
        console.log("Welcome", newUser);
    };
    
    return(
    <>
    
        <form name='' onSubmit={ createUser }>
            <div>
                <label>First Name: </label> 
                <input type="text" onChange={ (e) => setFirstname(e.target.value) } value = {firstname}/>
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" onChange={ (e) => setLastname(e.target.value) } value = {lastname} />
            </div>

            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ (e) => setEmail(e.target.value) } value = {email}/>
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={ (e) => setPassword(e.target.value) } value = {password}/>
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="text" onChange={ (e) => setConfirmpassword(e.target.value) } value = {confirmpassword}/>
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



