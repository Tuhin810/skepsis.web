import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { onSnapshot, collection, query, orderBy , where,getDocs} from "firebase/firestore";
import { db } from "../firebase";
import firebase from 'firebase/app';
import 'firebase/firestore';
import UserProfile from './UserProfile';
import { useRouter } from 'next/router'

import Usernot from './Usernot';

function UserFeed() {
  const { data: session } = useSession()
  const [searchTerm, setSearchTerm] = useState("");
  const [documents, setDocuments] = useState([]);

  const router = useRouter()
    const [Lists, setLists] = useState([])
    useEffect(
        () =>
          onSnapshot(
            query(collection(db, "List"), orderBy("timestamp", "desc")),
            (snapshot) => {
              setLists(snapshot.docs);
            }
          ),
        [db]
      )
      const handleSearch = async (searchTerm) => {
        if (searchTerm.trim() === "") {
          // Fetch all Lists when the search input is empty
          const q = query(collection(db, 'List'));
          const querySnapshot = await getDocs(q);
          const docs = querySnapshot.docs;
          setLists(docs);
        }
        else{ 
        const q = query(collection(db, 'List'),
          where('username', '==', searchTerm)
        );
      
        const querySnapshot = await getDocs(q);
        let docs = querySnapshot.docs;
      
        const qStudentId = query(collection(db, 'List'),
          where('StudentId', '==', searchTerm)
        );
      
        const querySnapshotStudentId = await getDocs(qStudentId);
        docs = docs.concat(querySnapshotStudentId.docs);
      
        const qEmail = query(collection(db, 'List'),
          where('Email', '==', searchTerm)
        );
      
        const querySnapshotEmail = await getDocs(qEmail);
        docs = docs.concat(querySnapshotEmail.docs);
      
        setLists(docs);
      }}
    
    const show =(event)=>{
      event.preventDefault()
      const fetchData = async () => {
            await handleSearch(searchTerm);
          };
          fetchData();
    }
    // useEffect(() => {
    //   const fetchData = async () => {
    //     await handleSearch(searchTerm);
    //   };
    //   fetchData();
    // }, [searchTerm]);

   
  return (
    <div className='feed   px-4 md:px-0  xl:ml-[250px]  sm:ml-[200px]  w-[750px]   z-[1] pt-5'>
     <form class="flex mb-12 items-center pl-1 " onSubmit={show} >   
        <label for="simple-search" class="sr-only" >Search by user name , email or Student ID</label>
        <div class="relative w-[91%]">
            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
            </div>
            <input value={searchTerm}  onChange={(e) => setSearchTerm(e.target.value)} type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search by user name , email or Student ID" required/>
        </div>
        <button  type="submit" class="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></button>
    </form>
     
{/* <Grid container alignItems="stretch" spacing={4} columns={{ xs: 4, sm: 8, md: 12 }}>
        {Users?.map((user) => (
          <Grid key={user.id} item  xs={2} sm={4} md={4}>
           <UserProfile key={user?.id} id={user?.id} user={user?.data()}/>
          </Grid>
        ))}
      </Grid> */}
{(!Lists?.length)?<Usernot/>:<div className="">{Lists?.map((List) => (
         
           <UserProfile key={List?.id} id={List?.id} user={List?.data()}/>
         
        ))}</div>}

      
         
      
    </div>
  )
}

export default UserFeed