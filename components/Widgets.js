import React, { useState, useEffect } from 'react';
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";


import AOS from "aos";
import "aos/dist/aos.css";

import TextField from '@mui/material/TextField';
import Fake_card from './Fake_card';

import Pro from './Pro';
function Widgets() {
  useEffect(() => {
    AOS.init({
      duration : 1200
    });
  }, []);
    const [developers, setDevelopers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
  
    const handleSearch = async () => {
      const response = await fetch(`https://api.github.com/search/users?q=${searchTerm}`);
      const data = await response.json();
      setDevelopers(data.items);
    };
    if(!developers){
      return(
        <><div className='  px-2 mt-2 hidden lg:inline  z-[1] '>
        <div>
          <div  data-aos="fade-left" className='flex items-center px-6 space-x-2 bg-gray-100 pb-1 rounded-lg mt-2 mb-3'>
    
  
    <TextField id="standard-basic" label="Enter username" variant="standard" value={searchTerm}
      onChange={e => setSearchTerm(e.target.value)} />
    
    <button onClick={handleSearch}>
      <MagnifyingGlassIcon  className='h-4 w-4 text-gray-500'/></button></div>
        <Fake_card/> 
        </div></div>
        </>
        
      ) }
    
    return (
        <div className='GitUser px-2 mt-2 hidden lg:inline  z-[1] '>
     <div>
     
     <div  data-aos="fade-left" className='flex items-center px-6 space-x-2 bg-gray-100 pb-1 rounded-lg mt-2 mb-3'>
    
  
      <TextField id="standard-basic" label="Enter username" variant="standard" value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)} />
      
      <button onClick={handleSearch}>
        <MagnifyingGlassIcon  className='h-4 w-4 text-gray-500'/></button></div>
      
      <div className='gap-6 flex flex-col overflow-y-auto'>
        {developers.map(developer => (
           <div key={developer.id} >
          
            {/* <GithubProfile href={developer.html_url} title={developer.login} /> */}
            <a href={developer.html_url}>
              <Pro img={developer.avatar_url}  name={developer.login} user={developer.login}/>
              </a>
         
         </div>
        ))}
      </div>
    </div>
    
        </div>
      )
}

export default Widgets