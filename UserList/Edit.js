import React, { useState,useEffect} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { addDoc, collection, doc,get, serverTimestamp, updateDoc,getDocs } from 'firebase/firestore'
import { db } from '@/firebase';
import { useSession } from 'next-auth/react'
import Button from '@mui/material/Button';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import Swal from 'sweetalert2'
import {  AiOutlineClose } from "react-icons/ai"
function Edit({fid}) {


  const  empCollectionRef=collection(db,"List")
  
  const { data: session } = useSession()
  const [first, setfirst] = useState("")
  const [Name, setName] = useState("")
  const [pnum, setPnum] = useState("")
  const [sid, setSid] = useState("")
  const [sem, setSem] = useState("")
  const [bio, setBio] = useState("")
  const [email, setemail] = useState("")
  const [loading, setLoading] = useState(false)
  const [selectedFile, setSelectedFile] = useState(null)
  const [linkdin, setlinkdin] = useState("")
  const [git, setgit] = useState("")

const getUsers= async()=>{
    const data = await getDocs(empCollectionRef)
    setfirst(data.docs.map((doc)=>({...doc.data(),id:doc.id})))
}
const addImageToPost = (e) => {

  const reader = new FileReader()
  if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0])
  }

  reader.onload = (readerEvent) => {
      setSelectedFile(readerEvent.target.result)
  }

}

const createUser= async(e)=>{
    e.preventDefault()

    const userDoc =doc(db,"List",fid.id);
    const newFields={
      Name: Name,
      coverImg:selectedFile,
      Email:email,
      PhoneNumber:pnum,
      StudentId:sid,
      Semester:sem,
      User_Bio:bio,
      Linkdin:linkdin,
      Github:git,
    }
    await updateDoc(userDoc,newFields);
    getUsers()
    location.reload()
 
    
}

useEffect(() => {
  setName(fid?.Name)
  setemail(fid?.Email)
  setPnum(fid?.PhoneNumber)
  setSid(fid?.StudentId)
  setSem(fid?.Semester)
  setgit(fid?.Github)
  setlinkdin(fid?.Linkdin)
  setBio(fid?.User_Bio)

 
}, [])


console.log(empCollectionRef);


  return (
    <div>
      
      
       {/* <Box
    component="form"
    sx={{
      '& > :not(style)': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
  >
    <input  value={Na} onChange={(e)=>setNa(e.target.value)} label="Outlined" />
   <button onClick={createUser}>Update </button>
  </Box>
   */}

<div className='overflow scroll-y h-100px'> 
    
    {/* <Box
    component="form"
    sx={{
      '& > :not(style)': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
  >
    <input id="outlined-basic" value={Name} onChange={(e)=>setName(e.target.value)} label="Outlined" variant="outlined" />
   
   <button onClick={createUser}>ADD</button>
  </Box> */}
  
  <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >

      <div className=""> <TextField
          id="outlined-multiline-flexible"
          label="User Name"
          multiline
         value={Name}
         onChange={(e) => setName(e.target.value)}
        /></div>
      
      <div>
        <div className="flex">  <TextField
          id="outlined-multiline-flexible"
          label="Phone no."
          multiline
          type='number'
          value={pnum}
          onChange={(e) => setPnum(e.target.value)}
        />
        <TextField
          id="outlined-textarea"
          label="Email id"
        
          multiline
          value={email}
          onChange={(e) => setemail(e.target.value)}
        /></div>
      
       
      </div>
      <div>
      <div className="flex">  <TextField
          id="outlined-multiline-flexible"
          label="student id"
          multiline
          value={sid}
          onChange={(e) => setSid(e.target.value)}
        />
        <TextField
          id="outlined-textarea"
          label="semester"
          value={sem}
          onChange={(e) => setSem(e.target.value)}
          multiline
        /></div>
       
      
      </div>
      <div>
        <div className="flex"> <TextField
          id="standard-multiline-flexible"
          label="github"
          multiline
          value={git}
          onChange={(e) => setgit(e.target.value)}
          variant="standard"
        />
       <TextField
          id="standard-multiline-flexible"
          label="Linkdin"
          multiline
          value={linkdin}
          onChange={(e) => setlinkdin(e.target.value)}
          variant="standard"
        /></div>

        <div className="flex"> 
        
        {selectedFile && (

<div className="relative mb-4">
<div className='absolute w-8 h-8 bg-[#15181c] hover:[#272c26] bg-opacity-75 rounded-full flex items-center justify-center top-1 left-1 cursor-pointer' onClick={() => setSelectedFile(null)}>
  <AiOutlineClose className='text-white h-5' />
</div>

<img
  src={selectedFile}
  alt=""
  className='rounded-2xl  max-h-80 object-contain' />

</div>

)}
        

             <input id="file" type="file"
                          
                             onChange={addImageToPost}
                         ></input>
                         
                       
                              
                       
                   <div className="">    <TextField
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          defaultValue="Default Value"
        /></div>
                 
    
         </div> </div>
     
    </Box>
    <Button className='bg-blue-500' variant="contained" onClick={createUser}>Update</Button>
  </div>
  
  </div>
  )
}

export default Edit