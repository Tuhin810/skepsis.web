import React, { useContext, useEffect, useState } from 'react'
import { AiFillHeart } from 'react-icons/ai'
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Moment from 'react-moment'
import { db } from "../firebase"
import { useRouter } from 'next/router'
import { collection, deleteDoc, doc, onSnapshot, orderBy, query, setDoc } from 'firebase/firestore'
import { useSession } from "next-auth/react"
import { AppContext } from '../context/AppContext'
import { UserCircleIcon } from "@heroicons/react/24/solid";
import UserHading from '@/utils/UserHading';

function About({ id, user}){
  const { data: session } = useSession()
  {(session.user.uid !== user?.id)?(""):( <>
    <p>{user?.User_Bio}</p>
    </>)}
}

function User_textDetail({ id, user}) {
    const { data: session } = useSession()
   
   
  return (
    <div>
         {/* {(session.user.uid !== user?.id)?(""):( 
     <div> 

      <h1 className='font-bold text-[20px] uppercase items-center
       justify-center flex'>{user?.username}</h1>
      <div className='flex flex-1 flex-col justify-center items-center'>
            <p className=' text-[14px]'>{user?.Email} &nbsp;·&nbsp;</p>
            <p>Phone no.{user?.PhoneNumber}</p>
            <p>Student ID:{user?.StudentId}</p>
           
            </div> </div>)} */}
            
             {(session.user.uid !== user?.id)?(""):( 
      <><h1 class="main-heading ">{user?.username}</h1><span class="tag">{user?.Email}</span><div class="stats">
                <span class="stat-module">

                  Student ID: <span class="stat-number">{user?.StudentId}</span>
                </span>

              </div></>)}


    </div>
    
  )
}

export default User_textDetail
export {About}
