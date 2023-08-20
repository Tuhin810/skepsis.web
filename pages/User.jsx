import Sidebar from '@/components/Sidebar'
import Widgets from '@/components/Widgets'
import UserFeed from '@/components/UserFeed'
import React from 'react'
import Head from 'next/head'
import Login from '@/components/Login'
import { getSession, useSession } from 'next-auth/react'
function User() {
  const { data: session } = useSession()
 
  if (!session) return <Login />
  return (
    <div>
         <Head>
       <title>Skepsis/Search</title>
       </Head>
      <Sidebar/>
    

     <div className='flex gap-6'>

     <UserFeed/>
     <Widgets/>
    
      </div>
    </div>
  )
}

export default User