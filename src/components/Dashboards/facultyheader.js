import React from 'react'
import "../Dashboards/facultyheader.css"
const AddFacultyheader = ({setIsAdding}) => {
  return (
    <header>
    <h1 className='facultyheader'>Faculty Dashboard</h1>
    <div>
    <br></br>
    <button onClick={()=>{
        setIsAdding(true)
      }} className='round-button'>Add New Faculty</button>
      <button onClick={()=>{
        setIsAdding(true)
      }} className='round-button'>Add New Student</button>
    <a href="register" className='round-button'>Sign-up For Events</a>
    <a href="eventcard" className='round-button'>Events</a>
    <a href="logout" className='round-button'>Logout</a>
    </div>
    </header>
  )
}

export default AddFacultyheader