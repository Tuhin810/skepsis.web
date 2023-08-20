import Img from '@/components/Img'
import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import Util from '../utils/Util'
import Hero2 from './Btn'
import { CommandLineIcon } from "@heroicons/react/24/outline";
import { CodeBracketIcon } from "@heroicons/react/24/outline";
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Link from 'next/link'
import { signOut, useSession } from 'next-auth/react'
import { motion } from 'framer-motion'
import AOS from "aos";
import "aos/dist/aos.css";
import  emailjs from "@emailjs/browser";
import  { useRef} from "react";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
const style = {
  position: 'absolute',
  top: '30%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,

 
 
};

function HEROS() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_u2r5tp9',
        'template_v0po2dj',
        {
          from_name: form.name,
          to_name: "skepsis SNU",
          from_email: form.email,
          to_email: "skepsissnu@gmail.com",
          message: form.message,
        },
        'idZ3tNK6l0rIWOr1k'
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  const router = useRouter()
  const [first, setfirst] = useState('')
  const onhandleSubmit = (e) => {
    e.preventDefault();
  
    if(first==="npm run dev"){
      router.push(`/`)
  }else if(first==="npm run Team"){
    router.push(`/TeamMemeber`)
}
else if(first==="npm run feed"){
  router.push(`/Posts`)
}
else if(first==="npm logout"){
  signOut();
}
else if(first==="npm  Alohomora"){
  handleOpen()
}

  };
  useEffect(() => {
    AOS.init({
      duration : 1200
    });
  }, []);
 
  return (
  <div className="">
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <div class="ticket">
    <div class="ticket__main">
      <div class="headert">Hogwarts Express</div>
      <div class="info passenger">
        <div class="info__item">Passenger</div>
        <div class="info__detail">Hermione J. Granger</div>
      </div>
      <div class="info platform"> <span>Depart </span><span>from </span><span>platform</span>
        <div class="number">
          <div>9</div>
          <div> <span>3</span><span>4</span></div>
        </div>
      </div>
      <div class="info departure">
        <div class="info__item">Depart</div>
        <div class="info__detail">King's Cross</div>
      </div>
      <div class="info arrival">
        <div class="info__item">Arrive</div>
        <div class="info__detail">Hogsmeade</div>
      </div>
      <div class="info date">
        <div class="info__item">Date</div>
        <div class="info__detail">1 Sep 2018</div>
      </div>
      <div class="info time">
        <div class="info__item">Time</div>
        <div class="info__detail">11:00AM</div>
      </div>
      <div class="info carriage">
        <div class="info__item">car</div>
        <div class="info__detail">4</div>
      </div>
      <div class="info seat">
        <div class="info__item">Seat</div>
        <div class="info__detail">6B</div>
      </div>
      <div class="fineprint"> 
        <p>Boarding begins 30 minutes before departure. Snacks available for purchase from The Honeydukes Express.</p>
        <p>This ticket is Non-refundable • Hogwarts Express Railway Authority</p>
      </div>
      <div class="snack">
        <svg viewBox="0 -11 414.00053 414">
          <path d="m202.480469 352.128906c0-21.796875-17.671875-39.46875-39.46875-39.46875-21.800781 0-39.472657 17.667969-39.472657 39.46875 0 21.800782 17.671876 39.472656 39.472657 39.472656 21.785156-.023437 39.445312-17.683593 39.46875-39.472656zm0 0"></path>
          <path d="m348.445312 348.242188c2.148438 21.691406-13.695312 41.019531-35.390624 43.167968-21.691407 2.148438-41.015626-13.699218-43.164063-35.390625-2.148437-21.691406 13.695313-41.019531 35.386719-43.167969 21.691406-2.148437 41.019531 13.699219 43.167968 35.390626zm0 0"></path>
          <path d="m412.699219 63.554688c-1.3125-1.84375-3.433594-2.941407-5.699219-2.941407h-311.386719l-3.914062-24.742187c-3.191407-20.703125-21.050781-35.9531252-42-35.871094h-42.699219c-3.867188 0-7 3.132812-7 7s3.132812 7 7 7h42.699219c14.050781-.054688 26.03125 10.175781 28.171875 24.0625l33.800781 213.515625c3.191406 20.703125 21.050781 35.957031 42 35.871094h208.929687c3.863282 0 7-3.132813 7-7 0-3.863281-3.136718-7-7-7h-208.929687c-14.050781.054687-26.03125-10.175781-28.171875-24.0625l-5.746094-36.300781h213.980469c18.117187-.007813 34.242187-11.484376 40.179687-28.597657l39.699219-114.578125c.742188-2.140625.402344-4.511718-.914062-6.355468zm0 0"></path>
        </svg>
      </div>
      <div class="barcode">
        <div class="barcode__scan"></div>
        <div class="barcode__id">001256733</div>
      </div>
    </div>
    <div class="ticket__side">
      <div class="logo"> 
        <p>Hogwarts Express</p>
      </div>
      <div class="info side-arrive">
        <div class="info__item">Arrive</div>
        <div class="info__detail">Hogsmeade</div>
      </div>
      <div class="info side-depart">
        <div class="info__item">Depart</div>
        <div class="info__detail">King's Cross</div>
      </div>
      <div class="info side-date">
        <div class="info__item">Date</div>
        <div class="info__detail">1 Sep 2018</div>
      </div>
      <div class="info side-time">
        <div class="info__item">Time</div>
        <div class="info__detail">11:00AM</div>
      </div>
      <div class="barcode">
        <div class="barcode__scan"></div>
        <div class="barcode__id">001256733</div>
      </div>
    </div>
  </div>

        </Box>
      </Modal>
    <div className=' md:inline hidden' >
 
 
    
        <div className="z-[1] flex flex-col  text-center justify-center m-auto items-center
         mt-[-13rem]
         mb-[4rem]">
          <div className="flex flex-row">
        <h1 class=" mx-w-xl text-black-800 mb-8 text-3xl font-bold sm:text-4xl md:mb-12  md:text-5xl"><div class="flex  items-center justify-center font-bold custom_corsur text-white">
      <div class=" text-center ">
          <div class="text-center text-5xl font-bold">
            We are 
            <div class="relative inline-grid grid-cols-1 grid-rows-1 gap-12 overflow-hidden">
            <span class="animate-word col-span-full row-span-full">XYZ</span>
            <span class="animate-word-delay-1 col-span-full row-span-full">ABC</span>
            <span class="animate-word-delay-2 col-span-full row-span-full">CDE</span>
            <span class="animate-word-delay-3 col-span-full row-span-full">JS</span>
            <span class="animate-word-delay-4 col-span-full row-span-full">DSA</span>
            </div>
        </div>
       
      </div>
    </div>
    </h1>
      </div>
      
    
    <div class="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center">
   <Hero2/> </div>
        </div>



        
{/* COmand cell */}

       
       
<div className="sell hidden md:inline" data-aos="fade-right">
<div class="fakeMenu" >
  <div class="fakeButtons fakeClose"></div>
  <div class="fakeButtons fakeMinimize"></div>
  <div class="fakeButtons fakeZoom"></div>
</div>
<div class="fakeScreen">
  <form onSubmit={onhandleSubmit}>
      <p class="line1 p">$&#91;&nbsp;&ldquo;I'm a web developer.&rdquo;,<span class="cursor1">_</span></p>
  <p class="line2 p">&nbsp;&nbsp;&ldquo;I'm a web designer.&rdquo;,<span class="cursor2">_</span></p>
  <p class="line3 p">&nbsp;&nbsp;&ldquo;Let's work together!&rdquo;&nbsp;&#93;<span class="cursor3">_</span></p>
  <p class="line4 p">{`>`}<span class="cursor4">_$<input class="input bg-transparent outline-none" type="text" value={first} onChange={(e)=>setfirst(e.target.value)} autofocus/></span></p>

  </form>
</div>
</div>

<section className="  text-gray-100">
	<div className="flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">

		<div className="m-auto flex " data-aos="fade-left" >
			{/* <Img/> */}
      <div class="bb "></div>
    </div>
   
		<div data-aos="fade-right" className="flex flex-col justify-center p-6 text-center rounded-sm  xl:max-w-[39rem] lg:text-left w-[60%]">
			<h1 className="text-5xl font-bold leading-none hidden md:inline ">Ac mattis
				<span className=" text-violet-400">senectus</span>erat pharetra
			</h1>
   
             
			<p className="mt-6 mb-3 text-lg sm:mb-8">Dictum aliquam porta in condimentum ac integer
				turpis pulvinar, est scelerisque ligula s Lorem,Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, similique? Beatae, repellat.dus.
			</p><AvatarGroup total={24} className='justify-end mb-5 flex '>
  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
  <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
  <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
  <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
</AvatarGroup>
      
			<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
				<a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded  bg-violet-400  text-gray-900">Suspendisse</a>
				<a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded  border-gray-100">Malesuada</a>
			</div>
		</div>
	</div>
</section>



<section class="text-gray-400  body-font">
  <div class=" px-5 py-2 mx-auto">
    {/* 1 */}
    <div data-aos="fade-left"  class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-800 sm:flex-row flex-col">
      <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full text-indigo-400 bg-gray-800 flex-shrink-0">
      <CodeBracketIcon className="h-[6rem] w-[6rem] rounded-full text-[#7d88f0]" />
      </div>
      <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">

        <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
        <a class="mt-3 text-indigo-400 inline-flex items-center">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>
     {/* 2 */}
    <div data-aos="fade-right" class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-800 sm:flex-row flex-col">
      <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        
        <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
        <a class="mt-3 text-indigo-400 inline-flex items-center"><Link href="/Cons">Learn More</Link>
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
      <div class="sm:w-32 order-first sm:order-none sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full text-indigo-400 bg-gray-800 flex-shrink-0">
      <CommandLineIcon className="h-[6rem] w-[6rem] rounded-full text-[#7d88f0]" />
      </div>
    </div>
     {/* 3 */}
    <div  data-aos="fade-left" class="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
      <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full text-indigo-400 bg-gray-800 flex-shrink-0">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="sm:w-16 sm:h-16 w-10 h-10" viewBox="0 0 24 24">
          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
      </div>
      <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        
        <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
        <a class="mt-3 text-indigo-400 inline-flex items-center">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>
    <button data-aos="fade-down" class="flex mx-auto mt-20 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
  </div>
</section>
{/* GALARRY */}
<div class=" mx-auto px-5 py-2 lg:px-32 lg:pt-24">
  <div class="-m-1 flex flex-wrap md:-m-2">
    <div class="flex w-1/2 flex-wrap">
      <div class="w-1/2 p-1 md:p-2">
        <img data-aos="flip-left"
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp" />
      </div>
      <div class="w-1/2 p-1 md:p-2">
        <img data-aos="flip-right"
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp" />
      </div>
      <div class="w-full p-1 md:p-2">
        <img data-aos="zoom-in-up"
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp" />
      </div>
    </div>
    <div class="flex w-1/2 flex-wrap">
      <div class="w-full p-1 md:p-2">
        <img data-aos="zoom-in-up"
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp" />
      </div>
      <div class="w-1/2 p-1 md:p-2">
        <img  data-aos="flip-right"
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp" />
      </div>
      <div class="w-1/2 p-1 md:p-2">
        <img data-aos="flip-left"
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp" />
      </div>
    </div>
  </div>
</div>


<div >
<section class="text-gray-600 body-font px-11">
  <div class="px-5 py-24 mx-auto" >
    <div class="flex flex-wrap -m-4">
      <div class="p-4 lg:w-1/3" 
    data-aos="fade-right">
        <div class="h-full bg-[#191a2d] bg-opacity-75 px-8 pt-6 pb-4 rounded-lg overflow-hidden text-center relative">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQquqX-EgfbID5FcjxvBaA2UKzOURJeX8EOxQ" 
            className='h-[8rem] w-[8rem] m-auto rounded-full' alt="" />
          
          <h1 class="title-font sm:text-2xl pt-5 text-xl font-medium text-white mb-3">NSCC SNU</h1>
          <p class="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          <a class="text-indigo-500 inline-flex items-center">Learn More
            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
         
        </div>
      </div>
      <div class="p-4 lg:w-1/3" data-aos="fade-right" >
        <div class="h-full bg-[#191a2d] bg-opacity-75 px-8 pt-6 pb-4 rounded-lg overflow-hidden text-center relative">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQquqX-EgfbID5FcjxvBaA2UKzOURJeX8EOxQ" 
            className='h-[8rem] w-[8rem] m-auto rounded-full' alt="" />

          
          <h1 class="title-font pt-5 sm:text-2xl text-xl font-medium text-white mb-3">GFG SNU</h1>
          <p class="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          <a class="text-indigo-500 inline-flex items-center">Learn More
            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
         
        </div>
      </div>

      
      <div class="p-4 lg:w-1/3" data-aos="fade-right">
        <div class="h-full bg-[#191a2d]  bg-opacity-75 px-8 pt-6 pb-4 rounded-lg overflow-hidden text-center relative">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQquqX-EgfbID5FcjxvBaA2UKzOURJeX8EOxQ" 
            className='h-[8rem] w-[8rem] m-auto rounded-full' alt="" />
          
          <h1 class="title-font sm:text-2xl pt-5 text-xl font-medium text-white mb-3">GDSC SNU</h1>
          <p class="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          <a class="text-indigo-500 inline-flex items-center">Learn More
            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
        
        </div>
      </div>
    </div>
  </div>
</section>
</div>





<div class="relative flex items-top justify-center min-h-screen bg-gray-900 sm:items-center sm:pt-0">
        <div class="max-w-6xl mx-auto sm:px-6 lg:px-8">
            <div class="mt-8 overflow-hidden">
                <div class="grid grid-cols-1 md:grid-cols-2">
                    <div class="p-6 mr-2 bg-gray-100  bg-gray-800 sm:rounded-lg">
                        <h1 class="text-4xl sm:text-5xl text-gray-800  custom_corsur text-white font-extrabold tracking-tight">
                            Get in touch
                        </h1>
                        <p class="text-normal text-lg sm:text-2xl font-medium text-gray-600  text-gray-400 mt-2">
                            Fill in the form to start a conversation
                        </p>

                        <div class="flex items-center mt-8 text-gray-600  text-gray-400">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                            </svg>
                            <div class="ml-4 text-md tracking-wide font-semibold w-40">
                                newtown, action area I, 
                                700156
                            </div>
                        </div>

                        <div class="flex items-center mt-4 text-gray-600  text-gray-400">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                            </svg>
                            <div class="ml-4 text-md tracking-wide font-semibold w-40">
                                +91 000000
                            </div>
                        </div>

                        <div class="flex items-center mt-2 text-gray-600  text-gray-400">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                            </svg>
                            <div class="ml-4 text-md tracking-wide font-semibold w-40">
                            skepsissnu@gmail.com
                            </div>
                        </div>
                    </div>

                    <form ref={formRef}
          onSubmit={handleSubmit}>
                    <div class="p-6 flex flex-col justify-center">
                        <div class="flex flex-col ">
           
                            <input  type='text'
              name='name'
              value={form.name}
              onChange={handleChange} id="name" placeholder="Full Name" 
                            class="w-100 mt-2 py-3 px-3 rounded-lg  bg-gray-800 border  border-gray-400  border-gray-700 text-white font-semibold focus:border-indigo-500 focus:outline-none"/>
                        </div>

                        <div class="flex flex-col mt-2">
                            
                            <input  type='email'
              name='email'
              value={form.email}
              onChange={handleChange} id="email" placeholder="Email" 
                            class="w-100 mt-2 py-3 px-3 rounded-lg bg-gray-800 border border-gray-400  border-gray-700 text-white font-semibold focus:border-indigo-500 focus:outline-none"/>
                        </div>

                        <div class="flex flex-col mt-2">
                           
                            <input type="tel" name='message'
              value={form.message}
              onChange={handleChange} id="tel" placeholder="Write your message" 
                            class="w-100 mt-2 py-3 px-3 rounded-lg bg-gray-800 border border-gray-400  border-gray-700 text-white font-semibold focus:border-indigo-500 focus:outline-none"/>
                        </div>
                        <button type="submit" class="md:w-32 bg-indigo-600 hover:bg-blue-dark custom_corsur text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-indigo-500 transition ease-in-out duration-300">
                            Submit
                        </button>

                        </div>
                  </form>
                </div>
                
            </div>
        </div>
</div>


    </div>
    
    
    
    
    
    
    
    
    
    
    <div className=' md:hidden inline lg:hidden sm:hidden xl:hidden' >
 
 
    
        <div className="z-[1] flex flex-col  text-center justify-center m-auto items-center
         mt-[-13rem]
         mb-[4rem]">
          <div className="flex flex-row">
        <h1 class=" mx-w-xl text-black-800 mb-8 text-3xl font-bold sm:text-4xl md:mb-12  md:text-5xl"><div class="flex  items-center justify-center font-bold custom_corsur text-white">
      <div class=" text-center ">
          <div class="text-center text-5xl font-bold">
            We are 
            <div class="relative inline-grid grid-cols-1 grid-rows-1 gap-12 overflow-hidden">
            <span class="animate-word col-span-full row-span-full">XYZ</span>
            <span class="animate-word-delay-1 col-span-full row-span-full">ABC</span>
            <span class="animate-word-delay-2 col-span-full row-span-full">CDE</span>
            <span class="animate-word-delay-3 col-span-full row-span-full">JS</span>
            <span class="animate-word-delay-4 col-span-full row-span-full">DSA</span>
            </div>
        </div>
       
      </div>
    </div>
    </h1>
      </div>
      
    
    <div class="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center">
   <Hero2/> </div>
        </div>



        
{/* COmand cell */}

       
       
<div className="sell hidden md:inline" >
<div class="fakeMenu" >
  <div class="fakeButtons fakeClose"></div>
  <div class="fakeButtons fakeMinimize"></div>
  <div class="fakeButtons fakeZoom"></div>
</div>
<div class="fakeScreen">
  <form onSubmit={onhandleSubmit}>
      <p class="line1 p">$&#91;&nbsp;&ldquo;I'm a web developer.&rdquo;,<span class="cursor1">_</span></p>
  <p class="line2 p">&nbsp;&nbsp;&ldquo;I'm a web designer.&rdquo;,<span class="cursor2">_</span></p>
  <p class="line3 p">&nbsp;&nbsp;&ldquo;Let's work together!&rdquo;&nbsp;&#93;<span class="cursor3">_</span></p>
  <p class="line4 p">{`>`}<span class="cursor4">_$<input class="input bg-transparent outline-none" type="text" value={first} onChange={(e)=>setfirst(e.target.value)} autofocus/></span></p>

  </form>
</div>
</div>

<section className="  text-gray-100">
	<div className="flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">

		<div className="m-auto flex ">
			<Img/>
		
    </div>
   
		<div  className="flex flex-col justify-center p-6 text-center rounded-sm  xl:max-w-[39rem] lg:text-left w-[60%]">
			<h1 className="text-5xl font-bold leading-none hidden md:inline ">Ac mattis
				<span className=" text-violet-400">senectus</span>erat pharetra
			</h1>
   
             
			<p className="mt-6 mb-3 text-lg sm:mb-8">Dictum aliquam porta in condimentum ac integer
				turpis pulvinar, est scelerisque ligula s Lorem,Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, similique? Beatae, repellat.dus.
			</p><AvatarGroup total={24} className='justify-end mb-5 flex '>
  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
  <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
  <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
  <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
</AvatarGroup>
      
			<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
				<a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded  bg-violet-400  text-gray-900">Suspendisse</a>
				<a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded  border-gray-100">Malesuada</a>
			</div>
		</div>
	</div>
</section>



<section class="text-gray-400  body-font">
  <div class=" px-5 py-2 mx-auto">
    {/* 1 */}
    <div  class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-800 sm:flex-row flex-col">
      <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full text-indigo-400 bg-gray-800 flex-shrink-0">
      <CodeBracketIcon className="h-[6rem] w-[6rem] rounded-full text-[#7d88f0]" />
      </div>
      <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">

        <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
        <a class="mt-3 text-indigo-400 inline-flex items-center">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>
     {/* 2 */}
    <div  class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-800 sm:flex-row flex-col">
      <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        
        <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
        <a class="mt-3 text-indigo-400 inline-flex items-center"><Link href="/Cons">Learn More</Link>
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
      <div class="sm:w-32 order-first sm:order-none sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full text-indigo-400 bg-gray-800 flex-shrink-0">
      <CommandLineIcon className="h-[6rem] w-[6rem] rounded-full text-[#7d88f0]" />
      </div>
    </div>
     {/* 3 */}
    <div   class="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
      <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full text-indigo-400 bg-gray-800 flex-shrink-0">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="sm:w-16 sm:h-16 w-10 h-10" viewBox="0 0 24 24">
          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
      </div>
      <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        
        <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
        <a class="mt-3 text-indigo-400 inline-flex items-center">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>
    <button data-aos="fade-down" class="flex mx-auto mt-20 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
  </div>
</section>
{/* GALARRY */}
<div class=" mx-auto px-5 py-2 lg:px-32 lg:pt-24">
  <div class="-m-1 flex flex-wrap md:-m-2">
    <div class="flex w-1/2 flex-wrap">
      <div class="w-1/2 p-1 md:p-2">
        <img 
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp" />
      </div>
      <div class="w-1/2 p-1 md:p-2">
        <img 
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp" />
      </div>
      <div class="w-full p-1 md:p-2">
        <img 
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp" />
      </div>
    </div>
    <div class="flex w-1/2 flex-wrap">
      <div class="w-full p-1 md:p-2">
        <img 
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp" />
      </div>
      <div class="w-1/2 p-1 md:p-2">
        <img  
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp" />
      </div>
      <div class="w-1/2 p-1 md:p-2">
        <img 
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp" />
      </div>
    </div>
  </div>
</div>


<div >
<section class="text-gray-600 body-font px-11">
  <div class="px-5 py-24 mx-auto" >
    <div class="flex flex-wrap -m-4">
      <div class="p-4 lg:w-1/3" 
   >
        <div class="h-full bg-[#191a2d] bg-opacity-75 px-8 pt-6 pb-4 rounded-lg overflow-hidden text-center relative">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQquqX-EgfbID5FcjxvBaA2UKzOURJeX8EOxQ" 
            className='h-[8rem] w-[8rem] m-auto rounded-full' alt="" />
          
          <h1 class="title-font sm:text-2xl pt-5 text-xl font-medium text-white mb-3">NSCC SNU</h1>
          <p class="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          <a class="text-indigo-500 inline-flex items-center">Learn More
            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
         
        </div>
      </div>
      <div class="p-4 lg:w-1/3"  >
        <div class="h-full bg-[#191a2d] bg-opacity-75 px-8 pt-6 pb-4 rounded-lg overflow-hidden text-center relative">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQquqX-EgfbID5FcjxvBaA2UKzOURJeX8EOxQ" 
            className='h-[8rem] w-[8rem] m-auto rounded-full' alt="" />

          
          <h1 class="title-font pt-5 sm:text-2xl text-xl font-medium text-white mb-3">GFG SNU</h1>
          <p class="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          <a class="text-indigo-500 inline-flex items-center">Learn More
            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
         
        </div>
      </div>

      
      <div class="p-4 lg:w-1/3">
        <div class="h-full bg-[#191a2d]  bg-opacity-75 px-8 pt-6 pb-4 rounded-lg overflow-hidden text-center relative">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQquqX-EgfbID5FcjxvBaA2UKzOURJeX8EOxQ" 
            className='h-[8rem] w-[8rem] m-auto rounded-full' alt="" />
          
          <h1 class="title-font sm:text-2xl pt-5 text-xl font-medium text-white mb-3">GDSC SNU</h1>
          <p class="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          <a class="text-indigo-500 inline-flex items-center">Learn More
            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
        
        </div>
      </div>
    </div>
  </div>
</section>
</div>





<div class="relative flex items-top justify-center min-h-screen bg-gray-900 sm:items-center sm:pt-0">
        <div class="max-w-6xl mx-auto sm:px-6 lg:px-8">
            <div class="mt-8 overflow-hidden">
                <div class="grid grid-cols-1 md:grid-cols-2">
                    <div class="p-6 mr-2 bg-gray-100  bg-gray-800 sm:rounded-lg">
                        <h1 class="text-4xl sm:text-5xl text-gray-800  custom_corsur text-white font-extrabold tracking-tight">
                            Get in touch
                        </h1>
                        <p class="text-normal text-lg sm:text-2xl font-medium text-gray-600  text-gray-400 mt-2">
                            Fill in the form to start a conversation
                        </p>

                        <div class="flex items-center mt-8 text-gray-600  text-gray-400">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                            </svg>
                            <div class="ml-4 text-md tracking-wide font-semibold w-40">
                                newtown, action area I, 
                                700156
                            </div>
                        </div>

                        <div class="flex items-center mt-4 text-gray-600  text-gray-400">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                            </svg>
                            <div class="ml-4 text-md tracking-wide font-semibold w-40">
                                +91 000000
                            </div>
                        </div>

                        <div class="flex items-center mt-2 text-gray-600  text-gray-400">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                            </svg>
                            <div class="ml-4 text-md tracking-wide font-semibold w-40">
                            skepsissnu@gmail.com
                            </div>
                        </div>
                    </div>

                    <form ref={formRef}
          onSubmit={handleSubmit}>
                    <div class="p-6 flex flex-col justify-center">
                        <div class="flex flex-col ">
           
                            <input  type='text'
              name='name'
              value={form.name}
              onChange={handleChange} id="name" placeholder="Full Name" 
                            class="w-100 mt-2 py-3 px-3 rounded-lg  bg-gray-800 border  border-gray-400  border-gray-700 text-white font-semibold focus:border-indigo-500 focus:outline-none"/>
                        </div>

                        <div class="flex flex-col mt-2">
                            
                            <input  type='email'
              name='email'
              value={form.email}
              onChange={handleChange} id="email" placeholder="Email" 
                            class="w-100 mt-2 py-3 px-3 rounded-lg bg-gray-800 border border-gray-400  border-gray-700 text-white font-semibold focus:border-indigo-500 focus:outline-none"/>
                        </div>

                        <div class="flex flex-col mt-2">
                           
                            <input type="tel" name='message'
              value={form.message}
              onChange={handleChange} id="tel" placeholder="Write your message" 
                            class="w-100 mt-2 py-3 px-3 rounded-lg bg-gray-800 border border-gray-400  border-gray-700 text-white font-semibold focus:border-indigo-500 focus:outline-none"/>
                        </div>
                        <button type="submit" class="md:w-32 bg-indigo-600 hover:bg-blue-dark custom_corsur text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-indigo-500 transition ease-in-out duration-300">
                            Submit
                        </button>

                        </div>
                  </form>
                </div>
                
            </div>
        </div>
</div>


    </div>
    
    
    
    
    
    </div>
  )
}

export default HEROS