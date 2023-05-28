import React,{useState} from 'react';

import { AllData } from '../../Data/AllDatas';
import Swal from 'sweetalert2';

import Addadminheader from './addAdminheader';
import AddDatalist from './adddatalist';
import AddAll from './addall';
import AddAlledit from './addalledit';
const AdminDashboard=()=>{

    const [members,setmembers]=useState(AllData);
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
                 <Addadminheader
                          setIsAdding={setIsAdding}
                 />  
                 <AddDatalist
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
                <AddAlledit
                members={members}
                SelectedMember={SelectedMember}
                setmembers={setmembers}
                setIsEditing={setIsEditing}
                />
               ) 
            }
    </div>
    )
}
export default AdminDashboard