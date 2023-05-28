import React from 'react'
import '../Dashboards/addAdminheader.css'
const Addadminheader = ({setIsAdding}) => {
  return (
    <header>
    <h1 className='adminheader'>Admin Dashboard</h1>
    <div>
    <button onClick={()=>{
      setIsAdding(true)
    }} className='round-button'>Add Faculty</button>
    <button onClick={()=>{
      setIsAdding(true)
    }} className='round-button'>Add Student</button>
    <button onClick={()=>{
      setIsAdding(true)
    }} className='round-button'>Add New Admins</button>
    <a href="eventcard" className='round-button'>Show Events</a>
    <a href="logout" className='round-button'>Logout</a>
    </div>
    </header>
  )
}

export default Addadminheader
