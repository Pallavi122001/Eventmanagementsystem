import React from 'react'
import '../Dashboards/adddatalist.css'
function AddDatalist1({members,handleEdit,handleDelete}) {
  return (
    <div>
    <table class="addfacultytable">
    <thead>
      <tr>
        <th>No.</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
        <th>Branch  </th>
        <th>Date</th>
        <th>Contact</th>
        <th>Event</th>
        <th>Actions</th>
      </tr>
      <br></br>
    </thead>
    <tbody>
      {members.length>0?(
        members.map((Member,i)=>(
          <tr key={Member.id}>
          <td>{i+1}</td>
          <td>{Member.firstName}</td>
          <td>{Member.lastName}</td>
          <td>{Member.email}</td>
          <td>{Member.branch}</td>
          <td>{Member.date}</td>
          <td>{Member.contact}</td>
          <td>{Member.event}</td>
          <td className='edit-delete-button'>
          <button
          onClick={()=>handleEdit(Member.id)} className="Edit-button">Edit</button>
          <button
          onClick={()=>handleDelete(Member.id)} className="Delete-button">Delete</button>
          </td>
          </tr>
        ))
      ):(
        <tr>
        <td colSpan={8}>No Members</td>
      </tr>
      )}
    </tbody>
  </table>
    </div>
  )
}

export default AddDatalist1
