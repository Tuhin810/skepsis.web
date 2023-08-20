import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { signOut, useSession } from 'next-auth/react'
export default function Avatar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const { data: session } = useSession()

  return (
    <div>
      <div
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      ><div 
      data-te-chip-init
      data-te-ripple-init
      class="[word-wrap: break-word] my-[5px] mr-4 flex cursor-pointer pr-4 items-center justify-between rounded-[26px] bg-[#ffffff16] px-[12px] py-0 text-[13px] font-normal normal-case leading-loose  shadow-none transition-[opacity]  8-linear hover:!shadow-none active:bg-[#cacfd1] hover:bg-gray-700 duration-700 text-neutral-200"> 

      <img
      class="my-0 -ml-[12px] mr-[8px] h-[40px] w-[40px] hover:animate-spin animation rounded-[100%] z-10"
       src={session?.user?.image}
      alt="Contact Person" />
    Account
   </div>
      </div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
      
        <MenuItem onClick={signOut}>Logout</MenuItem>
      </Menu>
    </div>
  );
}