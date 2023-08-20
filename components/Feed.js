import React, { useEffect, useState } from 'react'
import { HiOutlineSparkles } from "react-icons/hi"
import { onSnapshot, collection, query, orderBy } from "firebase/firestore";
import { db } from "../firebase";
import Input from './Input';
import Post from './Post';
import Sidebar from './Sidebar';
import { useSession } from 'next-auth/react'
import LOader from './LOader';
import FeedHeading from '@/utils/FeedHeading';

const Feed = () => {
  const { data: session } = useSession()
    const [posts, setPosts] = useState([])
    useEffect(
        () =>
        
          onSnapshot(
            query(collection(db, "posts"), orderBy("timestamp", "desc")),
            (snapshot) => {
              setPosts(snapshot.docs);
             
            }
          ),
        [db]
      )
      
      

  if(!posts?.length) return <><LOader/> </>;
  return (
    <>
 
    <section className='feed mt-4 px-2 md:px-0  xl:ml-[250px]  sm:ml-[170px]  w-[630px]   z-[1]'>
    {/* {
  (session?.user?.name=="skepsis" || session?.user?.name=="tuhin thakur")?<Input/>:<><div class="wrapper">
  <span data-text="Lorem"></span>
  <span data-text="Ipsum"></span>
</div>

<div class="wrapper invert">
  <span data-text="Lorem"></span>
  <span data-text="Ipsum"></span>
</div></>
} */}
{/* <Input/> */}






     {posts.map((post) => (
      <Post key={post.id} id={post.id} post={post.data()}  />
        
      ))} 
      
     
    </section>
    </>
  )
}

export default Feed