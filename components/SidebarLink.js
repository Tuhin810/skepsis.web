import React from 'react'

const SidebarLink = ({Icon, title}) => {
  return (
    <div className='flex  items-center justify-center xl:justify-start text-xl space-x-3
     hoverEffect p-4 w-fit    rounded-xl navHover
     cursor-pointer transition-all duration-200 group '>
       <Icon sx={{ fontSize: 35 }} className=" text-gray-500 " />
      
    </div>
  )
}

export default SidebarLink