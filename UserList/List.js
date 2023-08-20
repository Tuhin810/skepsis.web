import React ,{useState,useEffect}from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Add from './Add';
import { addDoc, getDocs,collection } from 'firebase/firestore';
import { db } from '@/firebase';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Edit from './Edit';
import {  useSession } from 'next-auth/react';
import { PencilSquareIcon } from "@heroicons/react/24/outline";

import { auth } from '@/firebase'
import {  createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from 'next/router'
import Swal from 'sweetalert2'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  p: 4,
};
const style2 = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};



function List() {
    const { data: session } = useSession()

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [Editopen, setEditopen] = useState(false);
    const handleEditOpen = () => setEditopen(true);
    const handleEditClose = () => setEditopen(false);


    const [formid, setFormid] = useState("")

    const  empCollectionRef=collection(db,"List")
  

    const [first, setfirst] = useState([])


const getUsers= async()=>{
    const data = await getDocs(empCollectionRef)
    setfirst(data.docs.map((doc)=>({...doc.data(),id:doc.id})))
}


useEffect(() => {
  getUsers();

  
}, [])



const editDoc=(Name,id,Email,StudentId,Semester,User_Bio,PhoneNumber,Github,Linkdin,coverImg)=>{
const data={
    id:id,
    Name:Name,
    Email:Email,
    StudentId:StudentId,
    Semester:Semester,
    User_Bio:User_Bio,
    PhoneNumber:PhoneNumber,
    Linkdin:Linkdin,
    Github:Github,
    coverImg:coverImg
}
setFormid(data)
handleEditOpen()
}















// MOdel 2

const [open2, setOpen2] = useState(false);
const handleOpen2 = () => setOpen2(true);
const handleClose2 = () => setOpen2(false);


// REGESTER

const router = useRouter()
const [email, setemail] = useState(`${session?.user?.email}`)
const [password, setpassword] = useState("")


const reg=()=>{ 
  createUserWithEmailAndPassword(auth, email, password)
.then((userCredential) => {
  // Signed in 
  const user = userCredential.user;

  handleOpen2()
  // ...
})
.catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'User Already Exists! can not create multiple acounts',
   
  })
  handleClose()
  // ..
});}




  return (
    <div className=' z-[1] p-2 pt-10 User_info hidden lg:inline '> 
    
    {/* <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
      <Add/>
      </Box>
    </Modal> */}


    {/* ADD MOADAL */}
<Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
      
   
   
    
  <AccountCircleIcon className='m-2' />User Regestration
    
  <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Username
      </label>
      <input class="shadow appearance-none border rounded 
      w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
      id="username" type="email" placeholder="Username" value={email}/>
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input class="shadow appearance-none border border-red-500 
      rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight 
      focus:outline-none focus:shadow-outline" id="password" type="password"  variant="filled"
      value={password} onChange={(e)=>setpassword(e.target.value)} 
       placeholder="******************"/>
      <p class="text-red-500 text-xs italic">Please choose a password.</p>
    </div>
    <div class="flex items-center justify-between">
      <button onClick={reg} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Sign Up
      </button>
     
    </div>
  </form>


   
   
          {/* <h2 id="parent-modal-title">Regester</h2>
          <p id="parent-modal-description">
          <TextField id="filled-basic" label="email" variant="filled" value={email}/>


          <TextField
          id="filled-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="filled"
          value={password} onChange={(e)=>setpassword(e.target.value)} 
        />
     
          </p> */}
          {/* <Button onClick={reg}>Create User</Button> */}
        </Box>
      </Modal>



{/* ADD MODAL 2 */}

<Modal
        open={open2}
        onClose={handleClose2}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style2}>
        <Add/>
        </Box>
      </Modal>





{/* EDIT MODAL */}
    <Modal
      open={Editopen}
      onClose={handleEditClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style2}>
     <Edit fid={formid} />
      </Box>
    </Modal>
    
   <div class="container rounded-lg ">
  <div class="header-container">
    <img  src="https://s17.postimg.cc/ypm5ye95r/image.jpg" alt="" class="header-image" />
    <div class="header">
     
   

<div className="">
       {/* USER DETAIL SECTION */}
    <div className=" gap-2 text-white ">
    {first.map((item) => (
      <div className=""> {(session.user.uid !== item?.uid)?(""):( 
     <div className=" gap-2 ">
       <div className=" text-black rounded-lg  flex justify-end">
        <button onClick={()=>{editDoc(item.Name,item.id,item.Email,item.StudentId,item.Semester,item.User_Bio,item.PhoneNumber,item.Github,item.Linkdin,item.coverImg)}}>
        <PencilSquareIcon className="h-5 w-5 mt-2  text-gray-500" />
          </button></div>
          
          <h1 class="main-heading ">{item.Name}</h1><span class="tag">{item?.Email}</span><div class="stats">
     <span class="stat-module flex ">
     Student ID: <span class="stat-number">{item.StudentId}</span>
    
     </span>
     <span class="stat-module flex ">
       Semester: <span class="stat-number">{item.Semester}</span></span>
   </div>
    </div>
      )}</div>
     ))}
        </div>
</div>
 
                
    </div>
  </div>
  
  <div class="overlay-header"></div>
  
  <div class="body">
    <img src={session?.user?.image} alt="userImg" class="body-image" />
    <div class="body-action-button u-flex-center" onClick={handleOpen}>
      <svg fill="#ffffff" height="28" viewBox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
        <path d="M0 0h24v24H0z" fill="none"/>
      </svg>
    
    </div>
  
    </div>
    
</div>
    
  
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        

        
        
        
        </div>
  )
}

export default List