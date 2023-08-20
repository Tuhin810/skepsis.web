import React from 'react'
import { useSession } from 'next-auth/react'
import { useState , useEffect} from 'react'
import { AiOutlineGif, AiOutlineClose } from "react-icons/ai"
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import Button from '@mui/material/Button';
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import { addDoc, collection, doc, serverTimestamp, updateDoc } from 'firebase/firestore'
import { db, storage } from '../firebase'
import CollectionsIcon from '@mui/icons-material/Collections';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import CircularProgress from '@mui/material/CircularProgress';
import { FaceSmileIcon } from "@heroicons/react/24/outline";
import SendIcon from '@mui/icons-material/Send';
import Swal from 'sweetalert2'
import "aos/dist/aos.css";


function Input() {

    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
      setOpen(true);
    };
  
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };
    const { data: session } = useSession()
    const [selectedFile, setSelectedFile] = useState(null)
    const [showEmojis, setShowEmojis] = useState(false)
    const [input, setInput] = useState("")
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

    const addEmoji = (e) => {
        let sym = e.unified.split("-")
        let codesArray = []
        sym.forEach((el) => codesArray.push("0x" + el))
        let emoji = String.fromCodePoint(...codesArray)
        setInput(input + emoji)
    }

    const sendPost = async () => {
        if (loading)
            return

        setLoading(true)
        setOpen(true);

        const docRef = await addDoc(collection(db, 'posts'), {
            id: session.user.uid,
            username: session.user.name,
            userImg: session.user.image,
            tag: session.user.tag,
            text: input,
            timestamp: serverTimestamp(),
            image:selectedFile
        })

        Swal.fire('Posted successfully')

        setLoading(false)
        setInput("")
        setSelectedFile(null)
        setShowEmojis(false)

    }


// const [first, setfirst] = useState("hidden")

// if(session?.user?.username=="tuhin thakur"){
// setfirst("inline")
// }
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
    <div className={`sticky top-5 z-[3] header2 px-4 ${loading && "opacity-60"} bg-[#151515a0] rounded-xl py-3 mt-3`}>
    <div className='grid grid-cols-[48px,1fr] gap-4'>
    <div>
              <img className='h-12 w-12 rounded-full object-contain' src={session?.user?.image} alt="" />
    </div>


    <div className='w-[90%]'>
    <input
                  className='w-[100%] py-3 text-white bg-transparent outline-none text-[17px] mb-3'
                  rows="2"
                  placeholder="What's Happening?"
                  value={input}
                  onChange={(e) => setInput(e.target.value)} />

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


                  <div className='flex justify-between items-center'>

                      <div className='flex gap-4 text-[20px] text-gray-200  justify-between items-center ' >

                      <label htmlFor="file">
                             
                             <CollectionsIcon className=' h-5 w-5 cursor-pointer transition-transform duration-100 ease-out hover:scale-150'/>Photos
                         </label>

                         <input id="file" type="file"
                          hidden
                             onChange={addImageToPost}
                         />

                          <div className=' h-[18px] text-[16px] grid place-items-center'>
                          
                        
                          </div>
                      
                      
                        
                          
                         
                      </div>

                      {(loading)?<Button>{progress}%<CircularProgress height="100px" variant="determinate" value={progress} /></Button>:<><Button className='rounded-full' variant="contained" component="label" endIcon={<SendIcon />} disabled={!input.trim() && !selectedFile}
                          onClick={sendPost}>send</Button></>}
                      
                     

                  </div>
            
                 {showEmojis && (
                  <div className='absolute mt-[10px] -ml-[40px] max-w-[320px] rounded-[20px]'>
                      <Picker
                          onEmojiSelect={addEmoji}
                          data={data}

                          theme="dark"
                      />
                  </div>
              )}
             

    </div>


    </div>
</div>
  )
}

export default Input