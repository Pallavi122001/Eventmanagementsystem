import React from 'react';
import "./selectrole.css"
const Selectrole=()=>{
    return (
        <React.Fragment>
        <h1 className='selectrole'>Select Role Of Login</h1>
        <div class="button-container1">
        <a href="/adminlogin"><button className='adminbutton'>Login as Admin</button> </a>
        <a href="/facultylogin"><button className='facultybutton'>Login as Faculty</button> </a>
        <a href="/studentlogin"><button className='studentbutton'>Login as Student</button> </a>
    </div>
        </React.Fragment>
    );

};

export default Selectrole