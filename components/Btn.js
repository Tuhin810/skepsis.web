import React from 'react'
import CampaignIcon from '@mui/icons-material/Campaign';
import PeopleIcon from '@mui/icons-material/People';
import Link from 'next/link'
function Hero2() {
  return (
    <div className='gap-9 flex'> 
  <Link href="/Posts" class="relative px-6 py-3 font-bold text-white rounded-lg group">
<span class="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-purple-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0"></span>
<span class="absolute inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-pink-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-screen"></span>
<span class="relative"><CampaignIcon className='mr-2'/>Feed</span>
</Link>
<Link href="/TeamMemeber" class="relative px-6 py-3 font-bold text-white rounded-lg group">
<span class="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-purple-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0"></span>
<span class="absolute inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-pink-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-screen"></span>
<span class="relative"><PeopleIcon className='mr-2'/>Team</span>
</Link>
     </div>
  )
}

export default Hero2