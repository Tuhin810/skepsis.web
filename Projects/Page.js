import React, { useEffect, useState } from 'react'
import ProjectCard from './projectCard'
import { db } from "../firebase";
import { doc } from 'firebase/firestore'
import { onSnapshot, collection, query, orderBy ,getDoc } from "firebase/firestore";
import { useSession } from 'next-auth/react'
import Grid from '@mui/material/Grid';

import Loader2 from '@/components/Loader2';
function Page() {
  const { data: session } = useSession()
  
  const [project, setProject] = useState([])
  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "project"), orderBy("timestamp", "desc")),
        (snapshot) => {
          setProject(snapshot.docs);
        }
      ),
    [db]
  )
 
  return (
    <section className='feed_project pt-5 mr-2 px-2 md:px-0  xl:ml-[230px]  sm:ml-[200px] flex gap-4  overflow-y scroll z-[1]'>
      <div className="hidden md:inline lg:inline sm:inline xl:inline">




      

      
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
       {project?.map((project) => (
         <Grid key={project.id} item  xs={2} sm={4} md={3}>
           <ProjectCard  key={project.id} id={project.id} project={project.data()}/>
          </Grid>
        ))}
      </Grid>
      
       
    
      
      
      </div>
      














 <div className="inline md:hidden gap-4 flex flex-col">
 {project?.map((project) => (
         
           <ProjectCard  key={project.id} id={project.id} project={project.data()}/>
      
        ))}
 </div>
    
    </section>
  )
}

export default Page