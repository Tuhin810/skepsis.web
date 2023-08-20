import React, { useContext } from 'react'
import { getSession, useSession } from 'next-auth/react'
import Login from '../components/Login'

import Head from 'next/head'
import { useRouter } from 'next/router'
import { AppContext } from '../context/AppContext'

import Sidebar from '@/components/Sidebar'
import SinglePost from '@/components/SinglePost'
import CardDetail from '@/Projects/CardDetail'



const PostPage = () => {
    const { data: session } = useSession()
    const [appContext] = useContext(AppContext)
  
    if (!session) return <Login />
  return (
    <div>
     
      <main className='relative max-w-[1400px] mx-auto'>
        <Sidebar/>
      
        <div className='flex gap-6'>
       {/* <SinglePost/> */}
       <CardDetail/>
    
        </div>
      </main>
    </div>
  )
}

export default PostPage