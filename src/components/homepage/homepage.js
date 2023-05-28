import React from "react";
import "./homepage.css"
const HomePage=()=>{
    return(
 <React.Fragment>
<div className="homepage">
  <div className="navbar">
  <ul>
  <li><a href="/">Home</a></li>
  <li><a href="/selectrole">Events</a></li>
  <li><a href="../about/about/ab.html">About</a></li>
  <li><a href="contact.html">Contact</a></li>
</ul>
<ul>
  <li><a href="/selectrole">Login</a></li>
  <li><a href="/selectregisterrole">SignUp</a></li>
  <li><a href="/logout">Logout</a></li>
</ul>
  </div>
<div class="container1">
  <div class="row">
    <div class="col-md-12 text-center">
      <h3 class="animate-charcter"> Event Management System</h3>
    </div>
  </div>
</div>
<p>To achieve great things, two things are needed: a plan and not quite enough time</p>
<a href="/selectrole"><button class="glow-on-hover" type="button" >Login</button></a>
<a href="/logout"><button class="glow-on-hover" type="button">Logout</button></a>
</div>
</React.Fragment>
)
}
export default HomePage