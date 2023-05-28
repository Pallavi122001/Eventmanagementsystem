import React, { useEffect, useRef, useState } from 'react'
import Swal from 'sweetalert2';
import './addall1.css'
function AddAll1({members,setmembers,setIsAdding}) {
    const [firstName,setFirstName]=useState('');
    const [lastName,setLastName]=useState('');
    const [email,setEmail]=useState('');
    const [branch,setBranch]=useState('');
    const [date,setDate]=useState('');
    const [contact,setContact]=useState('');
    const [event,setEvents]=useState('');

    const textInput=useRef(null);

    useEffect(()=>{
        textInput.current.focus()
    },[])
    const handleAdd =e=>{
         e.preventDefault();
         if(!firstName || !lastName || !email || !branch || !date || !contact){
            return Swal.fire({
                icon:'error', 
                title:'Error',
                text:'All Fields are required.',
                showConfirmButton:true
            });
         }
         const id=members.length+1;
         const newMember={
            id,
            firstName,
            lastName,
            email,
            branch,
            date,
            contact,
            event,
         }
         members.push(newMember);
         setmembers(members);
         setIsAdding(false);

    Swal.fire({
        icon:'success',
        title:'Added',
        text:`${firstName} ${lastName} 's data has been Added.`,
        showConfirmButton:false,
        timer:1500
    });
  }
  return (
    <div className='smallcontainer'>
    <form onSubmit={handleAdd}>
    <h1>Add New one's to Our Event </h1>
    <label htmlfor="firstName" >First Name         </label>
    <input id="firstName" type="text" ref={textInput} name="firstName" value={firstName} 
      onChange={e=>setFirstName(e.target.value)}></input><br></br>
 
      <label htmlfor="lastName" >Last Name     </label>
    <input id="lastName" type="text" ref={textInput} name="lastName" value={lastName} 
      onChange={e=>setLastName(e.target.value)}></input><br></br>
 
      <label htmlfor="email" >Email   </label>
      <input id="email" type="email" ref={textInput} name="email" value={email} 
        onChange={e=>setEmail(e.target.value)}></input> <br></br>

        <label htmlfor="branch" >Branch    </label>
      <input id="branch" type="branch" ref={textInput} name="branch" value={branch} 
        onChange={e=>setBranch(e.target.value)}></input><br></br> 

        <label htmlfor="date" >Date    </label>
      <input id="date" type="date" ref={textInput} name="date" value={date} 
        onChange={e=>setDate(e.target.value)}></input> <br></br>
        
        <label htmlfor="Contact" >Contact    </label>
      <input id="contact" type="contact" ref={textInput} name="Contact" value={contact} 
        onChange={e=>setContact(e.target.value)}></input> <br></br>

        <label htmlfor="Event" >Event     </label>
        <input id="event" type="event" ref={textInput} name="Event" value={event} 
          onChange={e=>setEvents(e.target.value)}></input> <br></br>
  
        <div>
        <input type="submit" value="Add"/>
        <input classname="muted-button" type="button" value="cancel" onClick={()=>setIsAdding(false)}/>
        </div>
    </form>
    </div>
  )
}

export default AddAll1
