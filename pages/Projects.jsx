import React from 'react'
import Head from 'next/head'
import Sidebar from '@/components/Sidebar'
import Page from '@/Projects/Page'
import Input from '@/Projects/Input'
import Navbar from '@/components/Navbar'
import Login from '@/components/Login'
import { getSession, useSession } from 'next-auth/react'
function Projects() {
  
  const { data: session } = useSession()
  if (!session) return <Login />
  return (
    <div>
       <Head>
       <title>Skepsis/codes</title>
       </Head>
     
       <div className="css"></div>
       <div id="background">
  <div id="circle">
    <div id="circle-glow"></div>
    <div id="circle-inner"></div>
  </div>
  </div>
       <Sidebar/>
    <main className='relative  mx-auto'>
    {/* <div id="background">
  <div id="circle">
    <div id="circle-glow"></div>
    <div id="circle-inner"></div>
  </div>
  </div> */}
  <div className='flex gap-6'>

  <Page/>
  <Input/>
  
  
</div>
 
  </main>
    </div>
  )
}

export default Projects