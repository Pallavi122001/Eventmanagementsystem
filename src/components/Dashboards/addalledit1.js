import React, { useState } from 'react'
import Swal from 'sweetalert2';
import "./addalledit1.css"
function AddAlledit1({members,SelectedMember,setmembers,setIsEditing}){
  const id=SelectedMember.id;
  const[firstName,setFirstName]=useState(SelectedMember.firstName);
  const [lastName,setLastName]=useState(SelectedMember.lastName);

  const [email,setEmail]=useState(SelectedMember.email);
  const[branch,setBranch]=useState(SelectedMember.branch);
  const [date,setDate]=useState(SelectedMember.date);
  const [contact,setContact]=useState(SelectedMember.contact);
  const [event,setEvents]=useState(SelectedMember.event);

  const handleUpdate=e=>{
    e.preventDefault();
    if(!firstName || !lastName || !email |!branch || !date || !contact || !event){
       return Swal.fire({
           icon:'error',
           title:'Error',
           text:'All Fields are required.',
           showConfirmButton:true
       });
      }
    const Faculty={
       id,
       firstName,
       lastName,
       email,
       branch,
       date,
       contact,
       event,
    }
    for(let i=0; i<members.length; i++){
        if(members[i].id===id){
          members.splice(i,1,Faculty);
            break;
        }
    }
    setmembers(members);
    setIsEditing(false);

Swal.fire({
   icon:'success',
   title:'Added',
   text:`${firstName} ${lastName} 's data has been Updated.`,
   showConfirmButton:false,
   timer:1500
});
  }
  return(
    <div className='small-contaniner'>
    <form onSubmit={handleUpdate}>
    <h1>Edit Members</h1>
    
    <label htmlfor="firstName" >First Name       </label>
    <input id="firstName" type="text" name="firstName" value={firstName} 
      onChange={e=>setFirstName(e.target.value)}></input><br></br>
 
      <label htmlfor="lastName" >Last Name       </label>
    <input id="lastName" type="text"  name="lastName" value={lastName} 
      onChange={e=>setLastName(e.target.value)}></input><br></br>
 
      <label htmlfor="email" >Email                                                     </label>
      <input id="email" type="email"  name="email" value={email} 
        onChange={e=>setEmail(e.target.value)}></input> <br></br>

        <label htmlfor="branch" >Branch       </label>
      <input id="branch" type="branch"  name="branch" value={branch} 
        onChange={e=>setBranch(e.target.value)}></input><br></br> 

        <label htmlfor="date" >Date       </label>
      <input id="date" type="date"  name="date" value={date} 
        onChange={e=>setDate(e.target.value)}></input> <br></br>
        
        <label htmlfor="Contact" >Contact       </label>
      <input id="contact" type="contact"  name="Contact" value={contact} 
        onChange={e=>setContact(e.target.value)}></input> <br></br>
        
        <label htmlfor="Event" >Event     </label>
        <input id="event" type="event"  name="Event" value={event} 
          onChange={e=>setEvents(e.target.value)}></input> <br></br>
  
      <div className='submit-input'>
      <input type="submit" value="update"/>
    <input className='muted-button' type="button" value="cancel" onClick={()=>setIsEditing(false)}/>
    </div>
    </form>
    </div>
  )
}

export default AddAlledit1
