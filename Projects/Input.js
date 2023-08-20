import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import { addDoc, collection, doc, serverTimestamp, updateDoc } from 'firebase/firestore'
import { db, storage } from '../firebase'
import { useState , useEffect} from 'react'
import { useSession } from 'next-auth/react'

import { PhotoIcon } from "@heroicons/react/24/outline";
import { AiOutlineGif, AiOutlineClose } from "react-icons/ai"
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

import Modal from '@mui/material/Modal';
import Swal from 'sweetalert2'
import PermMediaIcon from '@mui/icons-material/PermMedia';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
function Input() {


  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);



   

  
    

    const { data: session } = useSession()
    const [selectedFile, setSelectedFile] = useState(null)
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [git, setGit] = useState("")
    const [linkd, setLinkd] = useState("")
    const [loading, setLoading] = useState(false)

    const addImageToPost = (e) => {

        const reader = new FileReader()
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0])
        }

        reader.onload = (readerEvent) => {
            setSelectedFile(readerEvent.target.result)
        }

    }

    const sendPost = async () => {
        if (loading)
            return

        setLoading(true)
        setOpen(true);

        const docRef = await addDoc(collection(db, 'project'), {
            id: session.user.uid,
            username: session.user.name,
            userImg: session.user.image,
            tag: session.user.tag,
            text:title,
            description: desc,
            link:git,
            contact:linkd,
            timestamp: serverTimestamp(),
            image:selectedFile
        })

       if(!selectedFile==null){
    setSelectedFile("https://tailwindcomponents.com/storage/7338/conversions/temp36508-thumb.jpg")
  }

        setLoading(false)
        setGit("")
        setSelectedFile(null)
        setTitle("")
        setDesc("")
        setLinkd("")

        handleClose()
        Swal.fire(
          'Added!',
          '',
          'success'
        )

    }

    const [progress, setProgress] = React.useState(0);
useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    }, 800);

    return () => {
      clearInterval(timer);
    };
  }, []);

 

  return (
    <div className="p-10  px-2 mt-2  absolute top-10 input_project right-2 right_side z-[1] overflow-auto  gap-11">


        <Fab variant="extended" className='bg-white ' onClick={handleOpen} >
       
        <AddIcon  className='text-blue-500'/>
      
        ADD Project
      </Fab>


      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <div className='bg-white  mt-4 flex flex-col gap-4 rounded-lg'> 
    
<TextField
          id="outlined-multiline-flexible"
          label="Title"
          multiline
          maxRows={2}
          value={title}
                  onChange={(e) => setTitle(e.target.value)}
        />
      <TextField
          id="outlined-multiline-static"
          label="Description"
          multiline
          rows={4}
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
                  
         
        />













{selectedFile && (

<div className="relative mb-4">
<div className='absolute w-8 h-8 bg-[#15181c] hover:[#272c26] bg-opacity-75 rounded-full flex items-center justify-center top-1 left-1 cursor-pointer' onClick={() => setSelectedFile(null)}>
  <AiOutlineClose className='text-white h-5' />
</div>

<img
  src={selectedFile}
  alt=""
  className='rounded-2xl  img_h object-contain' />

</div>

)}


                  <div className='flex justify-between items-center'>

                      <div className='flex gap-4 text-[20px] text-[#1d9bf0]'>

                          <label htmlFor="file">
                             
                              <PermMediaIcon className=' h-7 w-7 cursor-pointer transition-transform duration-100 ease-out hover:scale-100'/>
                          </label>

                          <input id="file" type="file"
                              hidden
                              onChange={addImageToPost}
                          />

                          <div className=' h-[18px] text-[16px] grid place-items-center'>
                          
                        
                          </div>
                      
                      
                         <p className='text-[13px] text-black'>Choose an image for your project cover</p>
                          
                         
                      </div>

                      
                      
                     

                  </div>
            
                
             








        
        <TextField
          id="filled-multiline-flexible"
          label="github repo"
          multiline
          maxRows={2}
          variant="filled"
          value={git}
                  onChange={(e) => setGit(e.target.value)}
        />
         <TextField
          id="filled-multiline-flexible"
          label="Tech stacks"
          multiline
          maxRows={2}
          variant="filled"
          value={linkd}
                  onChange={(e) => setLinkd(e.target.value)}
        />
 <button class="button_submit rounded " disabled={!title.trim() && !selectedFile}
                          onClick={sendPost}>
 Create a Post
</button>
        </div>
        </Box>
      </Modal>
   
       
        </div>
  )
}

export default Input