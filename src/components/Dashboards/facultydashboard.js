import React from 'react';
import "../Dashboards/facultydashboard.css"
import AddFacultyheader from './facultyheader';
import { Fac_Stu } from '../../Data/fac_stu';
import Swal from 'sweetalert2';
import AddDatalist1 from './adddatalist1';
import AddAll from './addall1';
import AddAlledit1 from './addalledit1';
import { useState } from 'react';
const FacultyDashboard=()=>{
    const [members,setmembers]=useState(Fac_Stu);
    const [SelectedMember,setSelectedMember]=useState(null);
    const [isAdding,setIsAdding]=useState(false);
    const [isEditing,setIsEditing]=useState(false);

    const handleEdit=(id)=>{
    const [Member]=members.filter(Member=>Member.id===id);
    setSelectedMember(Member);
    setIsEditing(true);
    }

    const handleDelete=(id)=>{
         Swal.fire({
            icon:'warning',
            title:"Are You Sure ?",
            text:"You won't be able to revert this !",
            showCancelButton:true,
            confirmButtonText:'Yes , delete it !',
            cancelButtonText:'No, Cancel!' ,
         }).then(result=>{
            if(result.value) {
                const [Member]=members.filter(Member=>
                    Member.id===id);
                   Swal.fire({
                    icon:'success',
                    title:'Deleted!',
                    text:`${Member.firstName} .${Member.lastName}'s data has been deleted.`,
                    showConfirmButton:false,
                    time:1500,
                   });

                   setmembers(members.filter(Member=>Member.id !==id));
            }
         });
    }
    return (
        
        <div className='container2'>
        {/*list*/}
        {!isAdding && !isEditing &&(
              <>
                 <AddFacultyheader
                          setIsAdding={setIsAdding}
                 />  
                 <AddDatalist1
                 members={members}
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                 />
                 </>
        )}
        {
            isAdding &&(
                <AddAll
                members={members}
                setmembers={setmembers}
                setIsAdding={setIsAdding}
                />
            )}
            {
               isEditing &&(
                <AddAlledit1
                members={members}
                SelectedMember={SelectedMember}
                setmembers={setmembers}
                setIsEditing={setIsEditing}
                />
               ) 
            }
    </div>
    )
};

export default FacultyDashboard