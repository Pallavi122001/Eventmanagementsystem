import { useState } from "react";
import React from "react";
import "./studentlogin.css"
import axios from "axios"
import { useHistory } from "react-router-dom"


const StudentLogin=({setLoginUser})=>{
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
const studentlogin=()=>{
axios.post("http://localhost:3008/studentlogin",user)
.then(res=>{
    alert(res.data.message)
    setLoginUser(res.data.user)
history.push("/studentdashboard")
}
)
}
    return(
        <body>
        <div className="login">
        <h1>Student Login</h1>
        <input type="text"      name="email" value={user.email}  placeholder="Your Email " onChange={handleChange}></input><br></br>
        <input type="password"  name="password" value={user.password } placeholder="Your Password" onChange={handleChange}></input>
        <div className="loginbutton" type="submit"onClick={studentlogin}>Login</div>

        </div>
        </body>
    )
}
export default StudentLogin