import React, { useEffect, useState } from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import { onSnapshot, collection, query, orderBy, doc } from "firebase/firestore";
import { db } from "../firebase";
import { useRouter } from 'next/router'
import { BsArrowLeft } from "react-icons/bs"
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Moment from 'react-moment'

import Modal from '@mui/material/Modal';
import ProfilePage from '@/pages/ProfilePage';
import CloseIcon from '@mui/icons-material/Close';
function CardDetail() {
  const [project, setProject] = useState([])
  const router = useRouter()
  const { id } = router.query;
  const [comments, setComments] = useState([])

  useEffect(
      () =>
          onSnapshot(
              query(
                  collection(db, "project", id, "comments"),
                  orderBy("timestamp", "desc")
              ),
              (snapshot) => setComments(snapshot.docs)
          ),
      [db, id]
  )

  useEffect(
      () =>
          onSnapshot(doc(db, "project", id), (snapshot) => {
              setProject(snapshot.data());
          }),
      [db]
  )

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className=''>





 

<section class="carddetail text-gray-700 body-font overflow-hidden pr-10 xl:ml-[250px]  sm:ml-[200px]  w-[700px]  min-h-screen   py-2">


      <div className='sticky top-0  flex items-center gap-4 font-medium  text-white  text-[20px] px-4 py-2 mb-10'>
                <BsArrowLeft className='pointer' onClick={() => router.push(`/Projects`)} />
                Back
            </div>
            
           
 
     
      
      <div  class=" cardcomp flex gap-7 w-[700px] lg:pl-10 lg:py-6 mt-6 lg:mt-0 bg-gray-900 p-6 rounded-lg ">
       



        <div className="ml-10 ">
         
<div className="PROJECT">
<h2 class="text-sm title-font text-gray-400 tracking-widest">Project NAME</h2>
        <h1 class="text-gray-200 text-3xl title-font uppercase font-medium mb-4">{project?.text}</h1>
</div>








<div  className="user_info flex gap-5 my-3 items-center ">

  <div onClick={handleOpen} className="flex justify-start items-center gap-2 mr-4"> 
  <img  src={project?.userImg} 
              className=" border-2 h-7 w-7  rounded-full" alt="dp" />

   <div className="text-gray-300 text-medium title-font font-medium">
    {project?.username}</div>   </div>

    <div className="text-gray-300 text-medium title-font font-medium">||</div>
    

    <div className="ml-4">  <Moment className='text-gray-300 text-medium title-font font-medium' fromNow>{project?.timestamp?.toDate()}</Moment></div>
</div>

         
      

        <h2 class="text-sm title-font text-gray-400 tracking-widest">ABOUT</h2>
        <p class="leading-relaxed mb-10 text-gray-300 "> {project?.description}</p>
       
        <div class="flex gap-8 justify-between">
          <span class="title-font font-medium text-medium text-gray-300 pointer flex gap-24" href={project?.link}>
            <GitHubIcon/>  &nbsp;<div className="text-purple-300 mr-20" >github repo link</div> </span>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <Button variant="contained" href={project?.contact} className="bg-blue-500 ml-60">Linkdin</Button>
          
         
        </div>
      </div>



    </div>
  
</section> 



<Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box >
        <div className=" text-black rounded-lg  flex justify-end">
        
        <div onClick={handleClose} class="h-30 w-20 absolute flex items-center top-5 bg-gray-100 rounded-xl flex flex-col justify-center shadow duration-300 hover:bg-white hover:shadow-xl">
   <CloseIcon/>
    <span class=" text-sm ?leading-5 font-semibold text-center text-black">close</span>
</div>
     
          
          </div>
          <div className="flex">

           <ProfilePage user={project?.id} userImg= {project?.userImg}/> 
          
          </div>
     
        </Box>
      </Modal>
    </div>
  )
}

export default CardDetail