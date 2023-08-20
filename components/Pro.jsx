import React from 'react'

function Pro(props) {
  return (
     <div className=' h-[6rem] w-[16rem] bg-[#ffffff2c] hover:bg-[#0000004e]
     duration-200  flex flex-col z-[1] py-3 px-4 rounded-md '>
        <div className='flex items-center'>
        <img className='h-[4.5rem] w-[4.5rem]
         border-double border-4 border-white  rounded-full ' 
         src={props.img} alt="" />
         <div className=' gap-6 flex-col pl-2 pt-3'>
            <div className="name w-full ml-2 text-[16px] text-white">{props.name}</div>
            
            <div className="flex mt-2 text-white ">
                <a href={`https://github.com/${props.user}?tab=repositories`}>
                  
           </a><span className='text-[12px]'> 🎓Repositories</span></div>
         </div>
        </div>

       
    </div>
  )
}

export default Pro