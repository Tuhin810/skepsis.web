import Sidebar from '@/components/Sidebar'
import React ,{useState,useEffect}from 'react'
import { addDoc, getDocs,collection } from 'firebase/firestore';
import { db } from '@/firebase';
import {  useSession } from 'next-auth/react';

function ProfilePage({user,userImg}) {
  const { data: session } = useSession()
  const  empCollectionRef=collection(db,"List")
  const [first, setfirst] = useState([])
  const getUsers= async()=>{
    const data = await getDocs(empCollectionRef)
    setfirst(data.docs.map((doc)=>({...doc.data(),id:doc.id})))
}


useEffect(() => {
  getUsers();

  
}, [])

  return (
    <div className='feed   px-4 md:px-0  xl:ml-[250px]  sm:ml-[200px]  w-[750px]   z-[1] pt-5'>
  
{/*     
    {first.map((item) => (
      <div className=""> {(user !== item?.uid)?(""):( 
        <>  
        <div class="max-w-lg mx-auto mt-10  bg-gray-100 rounded-lg shadow-md p-5">
  
      <img class="w-32 h-32 rounded-full mx-auto " src={userImg} alt="Profile picture"/>
        <h1 class="text-center text-3xl font-bold pt-8 mt-5 lg:pt-0 uppercase">{item.Name}</h1>
        <div class=" mx-auto lg:mx-0 w-full pt-3 border-b-2 border-green-500 opacity-25"></div>
        <h2 class="text-center text-xl font-semibold mt-3">{item?.Email}</h2>
        <p class="text-center text-gray-600 mt-1">Student id:{item.StudentId}{item.Semester}</p>
        <p class="text-center text-gray-600 mt-1">Semester:&nbsp;{item.Semester}</p>
        <div class="flex justify-center mt-5">
        
          <a href="#" class="text-blue-500 hover:text-blue-700 mx-3">LinkedIn</a>
          <a href="#" class="text-blue-500 hover:text-blue-700 mx-3">GitHub</a>
        </div>
        <div class="mt-5">
          <h3 class="text-xl font-semibold">Bio</h3>
          <p class="text-gray-600 mt-2">{item.User_Bio}</p>
        </div>
      </div></>
      )}</div>
     ))} */}

 {first.map((item) => (
 
      <div className=""> {(user !== item?.uid)?(""):( 

      
<div class='flex items-center mx-auto mt-10  justify-center  '>
    <div class='w-full max-w-lg mx-auto mt-10 bg-white rounded-lg shadow-xl'>
 
    <div  style={{ backgroundImage: ` url(${item.coverImg})`,
        height: '150px',width:'100%',
    backgroundSize: '510px 153px' }} class="rounded-t-lg justify-end flex">

<a
          class=" hover:mt-[-3px] inline-flex justify-center items-center text-gray-100 shadow-lg w-8 h-8 rounded-md  hover:shadow-sm"
          href="javascript:;"
        >
          <svg class="w-5 h-5 fill-current" role="img" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
            <g><path d="M218.123122,218.127392 L180.191928,218.127392 L180.191928,158.724263 C180.191928,144.559023 179.939053,126.323993 160.463756,126.323993 C140.707926,126.323993 137.685284,141.757585 137.685284,157.692986 L137.685284,218.123441 L99.7540894,218.123441 L99.7540894,95.9665207 L136.168036,95.9665207 L136.168036,112.660562 L136.677736,112.660562 C144.102746,99.9650027 157.908637,92.3824528 172.605689,92.9280076 C211.050535,92.9280076 218.138927,118.216023 218.138927,151.114151 L218.123122,218.127392 Z M56.9550587,79.2685282 C44.7981969,79.2707099 34.9413443,69.4171797 34.9391618,57.260052 C34.93698,45.1029244 44.7902948,35.2458562 56.9471566,35.2436736 C69.1040185,35.2414916 78.9608713,45.0950217 78.963054,57.2521493 C78.9641017,63.090208 76.6459976,68.6895714 72.5186979,72.8184433 C68.3913982,76.9473153 62.7929898,79.26748 56.9550587,79.2685282 M75.9206558,218.127392 L37.94995,218.127392 L37.94995,95.9665207 L75.9206558,95.9665207 L75.9206558,218.127392 Z M237.033403,0.0182577091 L18.8895249,0.0182577091 C8.57959469,-0.0980923971 0.124827038,8.16056231 -0.001,18.4706066 L-0.001,237.524091 C0.120519052,247.839103 8.57460631,256.105934 18.8895249,255.9977 L237.033403,255.9977 C247.368728,256.125818 255.855922,247.859464 255.999,237.524091 L255.999,18.4548016 C255.851624,8.12438979 247.363742,-0.133792868 237.033403,0.000790807055"></path></g>
          </svg>
        </a>
        <a
          class=" inline-flex mr-3  hover:mt-[-3px] justify-center items-center text-gray-100 shadow-lg w-8 h-8 rounded-md  hover:shadow-sm"
          href="javascript:;"
        >
          <svg
            class="w-5 h-5 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
            ></path>
          </svg>
        </a>
    </div>
        <div>
            <div class="text-center" style={{marginTop:'-44px'}}>
                <span class="border-4 border-white rounded-full mx-auto inline-block">
                    <img class="rounded-full w-20 h-20" src={item?.userImg} alt="profile" />
                </span>
            </div>
            <h1 class="text-center text-lg font-bold pt-8 mt-2 lg:pt-0 uppercase">{item.Name}</h1>
           
        <h2 class="text-center text-md font-semibold mt-3">{item?.Email}</h2>
        <p class="text-center text-gray-600 mt-1">Student id:{item.StudentId}{item.Semester}</p>
        <p class="text-center text-gray-600 mt-1">Semester:&nbsp;{item.Semester}</p>

            <hr />
            <div class="flex justify-between px-10 py-5">
            <h3 class="text-xl font-semibold mr-2">Bio:</h3>
          <p class="text-gray-600 ">{item.User_Bio}</p>
            </div>
        </div>
    </div>
</div>
 )}</div>
))} 
        </div>

  )
}

export default ProfilePage

 {/* <img class="w-32 h-32 rounded-full mx-auto" src="https://picsum.photos/200" alt="Profile picture"/> */}