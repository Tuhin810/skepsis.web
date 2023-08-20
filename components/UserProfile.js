import React, { useContext, useEffect, useState } from 'react'
import { AiFillHeart } from 'react-icons/ai'
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Moment from 'react-moment'
import { db } from "../firebase"
import { useRouter } from 'next/router'
import { collection, deleteDoc, doc, onSnapshot, orderBy, query, setDoc } from 'firebase/firestore'
import { useSession } from "next-auth/react"

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import ProfilePage from '@/pages/ProfilePage';
import CloseIcon from '@mui/icons-material/Close';
function UserProfile({ id, user}) {
    const { data: session } = useSession()

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  return (
    <div className='my-3'>
        
        <div onClick={handleOpen}
  class="bg-[#e0e0e0] layout profilo mx-auto rounded-md m-4 shadow-lg overflow-hidden"
>
  <div class="relative h-48 bg-gray-100">
    {
      (!user?.coverImg)?(<img
        class="absolute inset-0 w-full h-full object-cover object-center darken-image"
        src="https://images.pexels.com/photos/12331088/pexels-photo-12331088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
        alt="Cover"
      />):(<img
        class="absolute inset-0 w-full h-full object-cover object-center darken-image"
        src={user?.coverImg}
        alt="Cover photo"
      />)
    }
    
  </div>
  <div class="relative -mt-[9.5rem] px-4 pb-4">
    <div class="flex justify-between">
      <div>
        <img
          class="w-32 h-32 rounded-full border-4 border-white object-cover object-center  "
          src={user?.userImg} 
          alt="Profile picture"
        /> 
      </div>
<div className="flex flex-col  px-8 py-4 duration-500">
  <div className="flex text-gray-50 text-3xl title-font uppercase font-medium drop-shadow-3xl hover:drop-shadow-xl ">{user?.Name}</div>
  <h2 class="text-sm title-font text-gray-50 tracking-widest drop-shadow-3xl hover:drop-shadow-xl">{user?.Email}</h2>
  <h2 class="text-sm title-font text-gray-50 tracking-widest drop-shadow-3xl hover:drop-shadow-xl">STUDENT ID:{user?.StudentId}</h2>
  <div class="mt-3 space-x-1 flex gap-3 justify-end">
        <a
          class="bg-white hover:mt-[-3px] inline-flex justify-center items-center text-gray-500 shadow-lg w-8 h-8 rounded-md hover:text-blue-800 hover:shadow-sm"
          href="javascript:;"
        >
          <svg class="w-5 h-5 fill-current" role="img" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
            <g><path d="M218.123122,218.127392 L180.191928,218.127392 L180.191928,158.724263 C180.191928,144.559023 179.939053,126.323993 160.463756,126.323993 C140.707926,126.323993 137.685284,141.757585 137.685284,157.692986 L137.685284,218.123441 L99.7540894,218.123441 L99.7540894,95.9665207 L136.168036,95.9665207 L136.168036,112.660562 L136.677736,112.660562 C144.102746,99.9650027 157.908637,92.3824528 172.605689,92.9280076 C211.050535,92.9280076 218.138927,118.216023 218.138927,151.114151 L218.123122,218.127392 Z M56.9550587,79.2685282 C44.7981969,79.2707099 34.9413443,69.4171797 34.9391618,57.260052 C34.93698,45.1029244 44.7902948,35.2458562 56.9471566,35.2436736 C69.1040185,35.2414916 78.9608713,45.0950217 78.963054,57.2521493 C78.9641017,63.090208 76.6459976,68.6895714 72.5186979,72.8184433 C68.3913982,76.9473153 62.7929898,79.26748 56.9550587,79.2685282 M75.9206558,218.127392 L37.94995,218.127392 L37.94995,95.9665207 L75.9206558,95.9665207 L75.9206558,218.127392 Z M237.033403,0.0182577091 L18.8895249,0.0182577091 C8.57959469,-0.0980923971 0.124827038,8.16056231 -0.001,18.4706066 L-0.001,237.524091 C0.120519052,247.839103 8.57460631,256.105934 18.8895249,255.9977 L237.033403,255.9977 C247.368728,256.125818 255.855922,247.859464 255.999,237.524091 L255.999,18.4548016 C255.851624,8.12438979 247.363742,-0.133792868 237.033403,0.000790807055"></path></g>
          </svg>
        </a>
        <a
          class="bg-white inline-flex hover:mt-[-3px] justify-center items-center text-gray-500 shadow-lg w-8 h-8 rounded-md hover:text-gray-800 hover:shadow-sm"
          href="javascript:;"
        >
          <svg
            class="w-5 h-5 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
            ></path>
          </svg>
        </a>
        
      </div>
</div>
     
    </div>
    {/* <div class="flex justify-between">
      <div>
        <h1 class="text-2xl font-semibold text-gray-800 mt-2">
        {user?.username}
        </h1>
        <p class="text-sm text-gray-600 flex items-center gap-1"><EnvelopeIcon className="h-4 w-4 text-gray-600" />{user?.Email}</p>
        <p class="text-sm text-gray-600 mt-2 flex items-center gap-1">
        <AcademicCapIcon className="h-4 w-4 text-gray-600" />StudentId:{user?.StudentId}
        </p>
        <p class="text-lg text-gray-600 mt-2 flex items-center gap-1">
        ABOUT
        </p>
        <p>{user?.User_Bio}</p>
      </div>
     
    </div> */}
  </div>
  <div>
    <div
      class="flex border-b border-gray-900/5 overflow-auto overflow-y-hidden"
    >
      <div class="flex-none border-t min-w-full text-gray-600">
        <nav class="flex">
          
          <a
            href="javascript:;"
            class="border-transparent inline-flex items-center px-4 py- text-sm font-normal leading-5 border-b-2 group focus:outline-none"
          >
            <span className='text-gray-600'>Likes</span>
          </a>
        </nav>
      </div>
    </div>
  </div>
</div>


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

           <ProfilePage user={user?.uid} userImg= {user?.userImg}/> 
          
          </div>
     
        </Box>
      </Modal>

	</div>

    
  )
}

export default UserProfile
