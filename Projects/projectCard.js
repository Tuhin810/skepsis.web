import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Moment from 'react-moment'
import { db } from "../firebase"
import { collection, deleteDoc, doc, onSnapshot, orderBy, query, setDoc } from 'firebase/firestore'
import { useSession } from "next-auth/react"
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { ButtonBase } from '@mui/material';
import { useRouter } from 'next/router'
function projectCard({ id, project }) {
  const { data: session } = useSession()
  const router = useRouter()
  const OpenPost =()=>{
  
  }


  return (
    <div class="projectcard  transform rounded-xl
    overflow-hidden p-3 text-white ease-out pointer " 
    onClick={() => router.push(`/${id}`)}>
  
       <div className="flex  justify-between">
        <div className="flex fixed top-0 justify-between flex-col   projectheader">
            <div className="flex gap-2 pt-3 pl-1">
              <img src={project?.userImg} 
              className="border-white border-2 h-8 w-8 text-white rounded-full" alt="dp" />
            <div className="text-base  font-medium text-gray-100 flex justify-between items-center gap-4 ">{project?.username}{session.user.uid !== project?.id ? (
            
            ""
           ) : (
          
             < DeleteOutlineIcon className='h-5 w-5
              text-white hover:text-red-400 transition-transform duration-100 ease-out hover:scale-150 '  onClick={(e) => {
                 e.stopPropagation();
                 deleteDoc(doc(db, "project", id));
               }}/>
 
               
           )}</div>
            </div>
            
            
           
        
       
          
        </div></div>
          

          {/* {
          (!project?.image)? <img class="h-11 w-full object-cover object-center rounded-xl" 
          src="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/Nft3.3b3e6a4b3ada7618de6c.png"
        alt="" />:
          <img class="h-11 w-full object-cover object-center rounded-xl" 
          src={project?.image}
        alt="" />
        } */}

{
          (!project?.image)? <div className="h-11 w-full object-cover object-center rounded-xl bg-slate-100 cssgradient"></div>:
          <img class="h-11 w-full object-cover object-center rounded-xl" 
          src={project?.image}
        alt="" />
        }
         

  
  <div class="p-4 fixed project_title">
    <div className="">
  <div className=""><p className='flex text-purple-600'><em class="blue">const&nbsp;</em> <em class="green">about</em>
   <span class="purple">=</span> <em class="blue">()</em><em className='purple'>{'=>'}</em>{'{'}</p>
            <p>&nbsp;&nbsp;<span class="purple">return</span> {'{'}</p>
            <p>&nbsp;&nbsp;title: <span class="text-yellow-300 ">'{project?.text}'</span>,</p>
            <p>&nbsp;&nbsp;time: <span class="text-yellow-300 ">'<Moment className='mb-10 text-[12px] ' fromNow>{project?.timestamp?.toDate()}</Moment>'</span>,</p>
           
           
            <p>&nbsp;&nbsp;{'}'}</p>
            <p>{'}'}</p>
            
            </div>
    {/* <h2 class="mb-2 text-lg font-medium   text-gray-900">{project?.text}</h2>
    <p class="mb-2 text-[12px]  text-gray-900">{project?.description}</p> */}
    </div>
    <div class="flex  items-center fixed linkbar hidden md:inline ">
      <a className='pointer flex' href={project?.link}>
      <GitHubIcon  />
      <p href={project?.link} class="text-base  font-medium text-gray-100 pointer line-through dark:text-gray-100 ml-1">github repo</p>
      </a>
    </div>
  </div> 
</div>
  )
}

export default projectCard