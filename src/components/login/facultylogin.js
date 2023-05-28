import { useState } from "react";
import React from "react";
import "./facultylogin.css"
import axios from "axios"
import { useHistory } from "react-router-dom"


const FacultyLogin=({setLoginUser})=>{
    const history = useHistory()

    const[user,setUser]=useState({
        email:"",
        password:"",
})

const handleChange=e=>{
    const{name,value}=e.target;
    setUser({
       ...user,
       [name] :value
    })
}
const facultylogin=()=>{
axios.post("http://localhost:3008/facultylogin",user)
.then(res=>{
    alert(res.data.message)
    setLoginUser(res.data.user)
history.push("/facultydashboard")
}
)
}
    return(
        <body>
        <div className="login">
        <h1>Faculty Login</h1>
        <input type="text"      name="email" value={user.email}  placeholder="Your Email " onChange={handleChange}></input><br></br>
        <input type="password"  name="password" value={user.password } placeholder="Your Password" onChange={handleChange}></input>
        <div className="loginbutton" type="submit" onClick={facultylogin}>Login</div>

        </div>
        </body>
    )
}
export default FacultyLogin