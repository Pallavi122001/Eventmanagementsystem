import React from 'react'
import '../Dashboards/studentheader.css'
const Addstudentheader = ({setIsAdding}) => {
  return (
    <header>
    <h1 className='studentheader'>Student Dashboard</h1>
    <div>
    <br></br>
    <a href="eventcard" className='round-button'>Show Events</a>
    <a href="register" className='round-button'>Sign-up For Events</a>
    <a href="logout" className='round-button'>Logout</a>
    </div>
    <div>
    <marquee>Here you can see all the information about events and you can register for any event.</marquee>
    </div>
    </header>
  )
}

export default Addstudentheader
