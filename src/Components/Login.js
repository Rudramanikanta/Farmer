import React, { useState,useCallback, useContext } from 'react'
import logo from '../Images/logo.jpg'
import {useNavigate} from 'react-router-dom'
import { dataprovider } from '../Context';
import {auth,googleprov} from "./console.js";
import { FcGoogle } from 'react-icons/fc';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
export default function Login() {
  const navigate= useNavigate()
  const [toggle,settoggle]=useState('sign in')
  const {username,setusername}=useContext(dataprovider)
  const toggleVariant = useCallback(() => {
    settoggle((currentVariant) => currentVariant === 'sign in' ? 'sign up' : 'sign in');
  }, []);
  const [email,setemail]=useState()
  const [password,setpassword]=useState()
  const {setprofile}=useContext(dataprovider)
  const googleauth=async ()=>{
    signInWithPopup(auth,googleprov).then((res)=>{setusername(res.user.email)
    navigate("/home")
    })
  }
  const submitHandler=()=>{
    document.getElementById("message").innerText=""
    if(toggle==="sign in"){
      signInWithEmailAndPassword(auth,email,password)
      .then((res)=>{
        setprofile(email,password)
        navigate("/home")
      })
      .catch((e)=>document.getElementById("message").innerText=e)
    }
    else{
      createUserWithEmailAndPassword(auth,email,password)
      .then((res)=>{
        setprofile(email,password)
        navigate("/home")
      })
      .catch((e)=>{document.getElementById("message").innerText=e})
      
    }
  }
  return (
    <section class="bg-gray-50 dark:bg-gray-900">
      <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <p class="flex items-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          <img class="w-8 h-8 mr-2" style={{borderRadius:"100px"}} src={logo} alt="logo"></img>
          Farmer Seva 
      </p>
        <div class="w-full bg-gray rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8" style={{justifyContent:"center",alignItems:"center",}}>
            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              {toggle==="sign in"?"Sign in to":"Sign up"} your account
            </h1>
            <div id="message" className='text-white'></div>
            <div className="relative">
    <input
    id="email"
    onChange={(e)=>{setemail(e.target.value)}}
      className="
      block
      rounded-md
      px-6
      pt-6
      pb-1
      w-full
      text-md
    text-white
    bg-neutral-700
      appearance-none
      focus:outline-none
      focus:ring-0
      peer
      invalid:border-b-1
      "
      placeholder=" " 
    />
    <label 
     htmlFor="email"
      className="
      absolute 
      text-md
    text-zinc-400
      duration-150 
      transform 
      -translate-y-3 
      scale-75 
      top-4 
      z-10 
      origin-[0] 
      left-6
      peer-placeholder-shown:scale-100 
      peer-placeholder-shown:translate-y-0 
      peer-focus:scale-75
      peer-focus:-translate-y-3
    ">Email</label>
  </div>
  <div className="relative">
    <input
    id="password"
    
    onChange={(e)=>setpassword(e.target.value)}
      className="
      block
      rounded-md
      px-6
      pt-6
      pb-1
      w-full
      text-md
    text-white
    bg-neutral-700
      appearance-none
      focus:outline-none
      focus:ring-0
      peer
      invalid:border-b-1
      "
      placeholder=" " 
    />
    <label 
     htmlFor="password"
    
      className="
      absolute 
      text-md
    text-zinc-400
      duration-150 
      transform 
      -translate-y-3 
      scale-75 
      top-4 
      z-10 
      origin-[0] 
      left-6
      peer-placeholder-shown:scale-100 
      peer-placeholder-shown:translate-y-0 
      peer-focus:scale-75
      peer-focus:-translate-y-3
    ">password</label>
  </div>
 
  <div className='relative'>
    <button className='btn btn-danger w-full' onClick={()=>submitHandler()}>Submit</button>
  </div>
  <div className="flex flex-row items-center gap-4 mt-8 justify-center">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition">
                <FcGoogle size={32} onClick={googleauth}/>
              </div>
              
            </div>
  <p class="text-sm font-light text-gray-500 dark:text-gray-400">
  {toggle === 'sign in' ? 'Don’t have an account yet?' : 'Already have an account?'}
                       <a onClick={toggleVariant} style={{textDecoration:"none",underline:"none"}} class="font-medium text-primary-600 hover:underline dark:text-primary-500">{toggle==="sign in"?"sign up":"sign in"}</a>
                  </p>
                
          </div>
      
        </div>
        
      </div>
    </section>
  )
}
