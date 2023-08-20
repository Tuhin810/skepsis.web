import React, { useContext, useEffect, useState } from 'react'
import {  AiFillHeart } from 'react-icons/ai'
import IconButton from '@mui/material/IconButton';
import Moment from 'react-moment'
import { db } from "../firebase"
import { useRouter } from 'next/router'
import { collection, deleteDoc, doc, onSnapshot, orderBy, query, setDoc } from 'firebase/firestore'
import { useSession } from "next-auth/react"
import { AppContext } from '../context/AppContext'
import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import { ArrowPathRoundedSquareIcon } from "@heroicons/react/24/outline";
import { ArchiveBoxXMarkIcon } from "@heroicons/react/24/outline";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Swal from 'sweetalert2'

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Feed from '@/components/Feed';
import ProfilePage from '@/pages/ProfilePage';
import Widgets from './Widgets';

function Post({ id, post }) {

    const [likes, setLikes] = useState([])
    const [liked, setLiked] = useState(false)
    const [comments, setComments] = useState([])
  
    const { data: session } = useSession()
    const router = useRouter()
  
    const [appContext, setAppContext] = useContext(AppContext)
  
    useEffect(
      () =>
        onSnapshot(
          query(
            collection(db, "posts", id, "comments"),
            orderBy("timestamp", "desc")
          ),
          (snapshot) => setComments(snapshot.docs)
        ),
      [db, id]
    )
  
    useEffect(
      () =>
        onSnapshot(collection(db, "posts", id, "likes"), (snapshot) =>
          setLikes(snapshot.docs)
        ),
      [db, id]
    )
  
    useEffect(() =>
      setLiked(
        likes.findIndex((like) => like.id === session?.user?.uid) !== -1
      ), [likes]
    )
  
    const likePost = async () => {
      if (liked) {
        await deleteDoc(doc(db, "posts", id, "likes", session.user.uid));
      } else {
        await setDoc(doc(db, "posts", id, "likes", session.user.uid), {
          username: session.user.name,
        });
      }
    }
  
   const deletePost=(e)=>{
 e.stopPropagation();
                
                Swal.fire({
                  title: 'Are you sure?',
                  text: "You won't be able to revert this!",
                  icon: 'warning',
                  showCancelButton: true,
                  confirmButtonColor: '#3085d6',
                  cancelButtonColor: '#d33',
                  confirmButtonText: 'Yes, delete it!'
                }).then((result) => {
                  if (result.isConfirmed) {
                    deleteDoc(doc(db, "posts", id));
                    Swal.fire(
                      'Deleted!',
                      'Your file has been deleted.',
                      'success'
                    )
                  }
                })
   }


   const [open, setOpen] = React.useState(false);
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);
  return (
    <div  className=' transition-all duration-300    px-2 md:px-4 pt-2 pb-2 md:pt-6 md:pb-4 cursor-pointer'
    >
    <div className='grid grid-cols-[-5px,1fr] md:grid-cols-[48px,1fr] gap-4 '>

      <div >
        <img onClick={handleOpen} className='hidden md:inline md:h-12 md:w-12 rounded-full object-cover' 
        src={post?.userImg} alt="" />
      </div>

      <div className=' post rounded-xl p-3'>
        <div className='block sm:flex gap-1'>
          <h1 className='font-bold text-blue-200 uppercase'>
           &nbsp;{post?.username}</h1>

          <div className='flex flex-1'>
           
          </div>      <p className='text-gray-200 text-[14px]'>
            {session?.user?.email} &nbsp;&nbsp;</p>
          
            
            
              <p className='text-gray-200 text-[14px]'>
              <AccessTimeIcon  className='h-4 w-4'/>&nbsp;
              <Moment className='' fromNow>{post?.timestamp?.toDate()}</Moment>
            </p>


        </div>
        
        <img
          className='max-h-[190px] md:max-h-[350px] pt-3 object-cover rounded-[20px] mb-2'
          src={post?.image}
          alt="" />
         { (post?.text)?<div className='text-gray-300 font-serif pl-3 py-2 max-w-[230px] md:max-w-[457px]
         md:text-[17px] text-[12px]  scroll'><ArrowCircleRightIcon className='h-5 w-5'/>
        &nbsp;&nbsp;
        {post?.text}</div>:""}
       

        <div className='flex justify-start gap-7 text-[20px] mt-4 px-3 w-[80%] items-center'>

          {/* <div className='flex gap-1 items-center'>
          <ChatBubbleOvalLeftIcon  onClick={(e) => {
              e.stopPropagation()
              openModal()
            }}   className="h-5 w-5 text-gray-200  hover:text-sky-600 transition-transform duration-100 ease-out hover:scale-150" />
            
            {comments.length > 0 && (<span className='text-sm'>{comments.length}</span>)}
          </div> */}

          {session.user.uid !== post?.id ? (
            // <FaRetweet className='hoverEffect w-7 h-7 p-1' />
            <ArrowPathRoundedSquareIcon className="h-5 w-5 text-gray-200 hover:text-green-500 transition-transform duration-100 ease-out hover:scale-150" />

          ) : (
          

              < ArchiveBoxXMarkIcon className='h-5 w-5 text-gray-200 hover:text-black-500 transition-transform duration-100 ease-out hover:scale-150' 
               onClick={
                deletePost
              }/>
          )}


          <div className='flex gap-1 items-center'
            onClick={(e) => {
              e.stopPropagation()
              likePost()
            }}>
            {liked ? <LightbulbIcon className='hoverEffect w-5 h-5  text-yellow-300' />
              :  <LightbulbIcon className="h-5 w-5 text-gray-200 hover:text-yellow-500 transition-transform duration-100 ease-out hover:scale-150" />}

            {likes.length > 0 && (<span className={`${liked && "text-yellow-500"} text-sm`}>{likes.length}</span>)}
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
        <div className=" text-black rounded-lg  flex justify-end px-10">
      <button className='text-white ml-10' onClick={handleClose}>close</button>
          
          </div>
          <div className="flex">

           <ProfilePage user={post?.id} userImg={post?.userImg}  /> 
            
          </div>
     
        </Box>
      </Modal>
    </div>

 
  )
}

export default Post