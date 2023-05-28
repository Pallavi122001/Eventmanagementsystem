import React ,{useState}from "react";
import "./facultyregister.css"
import axios from 'axios';
// axios for API call
const FacultyRegister=()=>{
    const[user,setUser]=useState({
            name:"",
            email:"",
            password:"",
            reEnterPassword:""
    })
    
    const handleChange= e =>{
        const{name,value}=e.target;
        setUser({
           ...user,
           [name] :value
        })
    }
    // register process
    const facultyregister=()=>{
        const {name,email,password,reEnterPassword}=user
        // for validation
        if(name && email && password && (password===reEnterPassword)){
        axios.post("http://localhost:3008/facultyregister",user)
        .then(res=>alert(res.data.message))
        }
        else{
            alert("invalid input")
        }
    }

    return(
        <body>
        <div className="register">
        <h1>Faculty Register</h1>
        <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={handleChange}></input><br></br>
        <input type="text"  name="email" value={user.email}  placeholder="Your Email " onChange={handleChange}></input><br></br>
        <input type="password"  name="password" value={user.password } placeholder="Your Password" onChange={handleChange}></input><br></br>
        <input type="password"  name="reEnterPassword" value={user.reEnterPassword} placeholder="RE-enter Your Password" onChange={handleChange}></input><br></br>

<div className="registerbutton" onClick={facultyregister}>Register</div>
        </div>
        </body>
    )
}
export default FacultyRegister