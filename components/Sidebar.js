import React, { useState, useEffect } from 'react';
import SidebarLink from './SidebarLink'
import Link from 'next/link'

import { BsThreeDots, BsTwitter } from "react-icons/bs"

import { signOut, useSession } from 'next-auth/react'



import HomeIcon from '@mui/icons-material/Home';
import TerminalIcon from '@mui/icons-material/Terminal';

import CampaignIcon from '@mui/icons-material/Campaign';
import LanguageIcon from '@mui/icons-material/Language';

import GroupsIcon from '@mui/icons-material/Groups';
import { ArrowLeftOnRectangleIcon} from "@heroicons/react/24/solid";
import Util from '../utils/Util'
import AOS from "aos";
import "aos/dist/aos.css";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import OnlinePredictionIcon from '@mui/icons-material/OnlinePrediction';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

const Sidebar = () => {

    const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
    confirm("Press a button!");
    signOut();
  };

    useEffect(() => {
        AOS.init({
          duration : 1200
        });
      }, []);
    const { data: session } = useSession()
function signOutfunc(){
   
    confirm("Press a button!");
    signOut();
}

    return (
        <div className='hidden pt-[5rem] sm:flex flex-col items-center xl:items-start xl:w-[220px] p-2 fixed h-full  pr-0 xl:pr-8 z-[2]'>
          
            <div className='space-y-1 mt-0 py-[20%] xl:ml-11 m-auto custom_corsur  '>
         
<Link  href="/"><SidebarLink Icon={HomeIcon} title="Home" /></Link>


<Link href="/Posts"><SidebarLink Icon={CampaignIcon }  /></Link>


<Link href="/Projects"><SidebarLink Icon={OnlinePredictionIcon }  /></Link>


<Link href="/User"><SidebarLink Icon={SearchIcon}  /></Link>

{/* <Link  href="/Cons"><SidebarLink Icon={TerminalIcon } className="" /></Link> */}
       
    
       
        
       
        

{/* <Stack spacing={2} sx={{ width: '100%' }}>
            <Button variant="" onClick={handleClick}>
       
                 <img onClick={signOutfunc}
                    src={session?.user?.image}
                    alt=""
                    className=" h-9 w-9 hover:animate-spin  rounded-[100%] "
                />
             
             
                
          
      </Button>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          Logout succesfully!
        </Alert>
        </Snackbar>
        </Stack> */}
        
            </div>

            

          

        </div>
    )
}

export default Sidebar