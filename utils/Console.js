import React,{useState} from 'react'
import { useRouter } from 'next/router';
import { signOut, useSession } from 'next-auth/react'
function Console() {
    const router = useRouter()
    const [first, setfirst] = useState('')
    const onhandleSubmit = (e) => {
      e.preventDefault();
    
      if(first==="npm run dev"){
        router.push(`/`)
    }else if(first==="npm run Tean"){
      router.push(`/TeamMemeber`)
  }
  else if(first==="npm run dev"){
    router.push(`/Posts`)
  }
  else if(first==="npm logout"){
    signOut();
  }
  
    };
    
    // <input class="input" type="text" value={first} onChange={(e)=>setfirst(e.target.value)} autofocus/>
  return (
    <section className='   px-2 md:px-0  xl:ml-[300px]  sm:ml-[200px]  w-[600px]   z-[1]'>
      <div class=" mx-auto py-11">
  <div class=" shadow-2xl subpixel-antialiased rounded h-[20rem] w-[40rem] bg-black border-black mx-auto">
    <div class="flex items-center h-6 rounded-t bg-gray-100 border-b border-gray-500 text-center text-black" id="headerTerminal">
      <div class="flex ml-2 items-center text-center border-red-900 bg-red-500 shadow-inner rounded-full w-3 h-3" id="closebtn">
      </div>
      <div class="ml-2 border-yellow-900 bg-yellow-500 shadow-inner rounded-full w-3 h-3" id="minbtn">
      </div>
      <div class="ml-2 border-green-900 bg-green-500 shadow-inner rounded-full w-3 h-3" id="maxbtn">
      </div>
      <div class="mx-auto pr-16" id="terminaltitle">
        <p class="text-center text-sm">Terminal</p>
      </div>

    </div>
    <form onSubmit={onhandleSubmit}>
    <div class="pl-1 pt-1 h-auto  text-green-200 font-mono text-xs bg-black" id="console">
      <p class="pb-1">{">"}Last login: Wed Sep 25 09:11:04 on ttys002</p>
      <p class="pb-1">{">"}# run this command:</p>
      {">"}$<input class="input bg-transparent outline-none" type="text" value={first} onChange={(e)=>setfirst(e.target.value)} autofocus/>
    </div></form>
  </div> 
</div>
    </section>
  )
}

export default Console