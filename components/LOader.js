import React from 'react'
import Skeleton from '@mui/material/Skeleton';
import FeedHeading from '@/utils/FeedHeading';
function LOader() {
  return (
    <section className='feed   px-2 md:px-0  xl:ml-[250px]  sm:ml-[200px]  w-[630px]   z-[1]'>
         <div class="three col mt-7">
        {/* <div class="loader" id="loader-2">
          <span></span>
          <span></span>
          <span></span>
        </div> */}
        <FeedHeading/>
      </div>
        <div className="flex gap-7 mt-7 mb-9">
            <Skeleton    variant="circular" width={50} height={50} />
            <Skeleton    variant="rectangular" width={510} height={300} />
        </div>
        <div className="flex gap-7">
            <Skeleton variant="circular" width={50} height={50} />
            <Skeleton variant="rectangular" width={510} height={300} />
        </div>
      

      </section>
  )
}

export default LOader