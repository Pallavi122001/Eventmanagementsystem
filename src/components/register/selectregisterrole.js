import React from 'react';
import "./selectregisterrole.css"
const SelectRegisterrole=()=>{
    return (
        <React.Fragment>
        <h1 className='selectrole'>Select Role Of Login</h1>
        <div class="button-container1">
        <a href="/adminregister"><button className='adminbutton'>Register as Admin</button> </a>
        <a href="/facultyregister"><button className='facultybutton'>Register as Faculty</button> </a>
        <a href="/studentregister"><button className='studentbutton'>Register as Student</button> </a>
    </div>
        </React.Fragment>
    );

};

export default SelectRegisterrole