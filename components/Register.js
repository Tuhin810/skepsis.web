
import React from 'react'
import { auth } from '@/firebase'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from 'react';
import { useRouter } from 'next/router'
import { useSession } from "next-auth/react"
function Register() {
  const { data: session } = useSession()
  const router = useRouter()
const [email, setemail] = useState(`${session?.user?.email}`)
const [password, setpassword] = useState("")
    const reg=()=>{ 
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    alert("Register succesfull!") 
    router.push("/UserForm")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert("user already Regestered!")
   
    // ..
  });}
  return (
    <div>
    <div class="relative py-3 sm:max-w-xl sm:mx-auto">
		<div
			class="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
		</div>
		<div class="relative px-4 py-7 bg-white shadow-lg sm:rounded-3xl sm:p-20">
			<div class="max-w-md mx-auto">
				<div>
					<h1 class="text-2xl font-semibold">Regester your account to add Profile</h1>
				</div><img className='h-8 mt-3 w-8 rounded-full' src={session?.user?.image} alt="" />
				<div class="divide-y divide-gray-200">
					<div class="py-4 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
						<div class="relative">
							<input autocomplete="off" id="email" name="email" type="text" value={email}  class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" />
							<label for="email" class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
						</div>
						<div class="relative">
							<input autocomplete="off" id="password" name="password" type="password" value={password} onChange={(e)=>setpassword(e.target.value)} class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
							<label for="password" class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
						</div>
						<div class="relative">
							<button onClick={reg} class="bg-blue-500 text-white rounded-md px-2 py-1">Regester</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
    </div>
  )
}

export default Register