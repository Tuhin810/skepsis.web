import { getSession, useSession } from 'next-auth/react'
import Login from '@/components/Login'
import Sidebar from '@/components/Sidebar'
import Feed from '@/components/Feed'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'



import Head from 'next/head'
import Navbar from '@/components/Navbar'
import List from '@/UserList/List'


function Posts() {

  
    const { data: session } = useSession()
  const [appContext] = useContext(AppContext)

  if (!session) return <Login />
  return (
       <>
     
       <Head>
       <title>Skepsis/Feed</title>
       </Head>
     
       <Sidebar/>
    <main className='relative max-w-[1400px] mx-auto'>
    <div id="background">
  <div id="circle">
    <div id="circle-glow"></div>
    <div id="circle-inner"></div>
  </div>
  </div>
   
      <div className='flex gap-6'>

      <Feed/>
      {/* <Widgets2/> */}

      <List/>
        
 
      </div>
    </main></>
  )
}

export default Posts
