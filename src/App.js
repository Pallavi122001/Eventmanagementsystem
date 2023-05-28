import React, { useState } from "react";
import HomePage from './components/homepage/homepage';
import AdminLogin from "./components/login/adminlogin";
import FacultyLogin from "./components/login/facultylogin";
import StudentLogin from "./components/login/studentlogin";
import AdminRegister from './components/register/adminregister';
import FacultyRegister from "./components/register/facultyregister";
import StudentRegister from "./components/register/studentregister";
import Logout from './components/logout/logout';
import Eventcard from "./components/Basics/eventcard";
import AdminDashboard from "./components/Dashboards/admindashboard";
import StudentDashboard from "./components/Dashboards/studentdashboard";
import FacultyDashboard from "./components/Dashboards/facultydashboard";
import Selectrole from "./components/login/selectrole";
import SelectRegisterrole from "./components/register/selectregisterrole";
import Register from "./components/Dashboards/register";
import { BrowserRouter as Router ,Route,Switch} from 'react-router-dom'; 
function App() {
  const[user,setLoginUser]=useState({});
  return  (    
    <div className="App">
    <Router>
    <Switch>
<Route exact path='/' ><HomePage/></Route>  
<Route path="/adminlogin" ><AdminLogin setLoginUser={setLoginUser}/></Route>
<Route path="/facultylogin" ><FacultyLogin setLoginUser={setLoginUser}/></Route>
<Route path="/studentlogin" ><StudentLogin setLoginUser={setLoginUser}/></Route>
<Route path='/adminregister' ><AdminRegister /></Route> 
<Route path='/facultyregister' ><FacultyRegister /></Route> 
<Route path='/studentregister' ><StudentRegister /></Route> 
<Route path='/logout' > <Logout /></Route>
<Route path='/eventcard' ><Eventcard /></Route>
<Route path='/admindashboard'>{user && user._id  ?<AdminDashboard/>:<AdminLogin setLoginUser={setLoginUser}/> }</Route>
<Route path='/studentdashboard'>{user && user._id  ?<StudentDashboard/>:<StudentLogin setLoginUser={setLoginUser}/> }</Route>
<Route path='/facultydashboard'>{user && user._id  ?<FacultyDashboard/>:<FacultyLogin setLoginUser={setLoginUser}/> }</Route>
<Route path='/selectrole'><Selectrole/></Route>
<Route path='/selectregisterrole'><SelectRegisterrole/></Route>
<Route path='/register'><Register/></Route>
</Switch>
    </Router>
    </div>
  );
}

export default App;
