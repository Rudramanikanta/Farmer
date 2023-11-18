import React, { useContext } from 'react'
import { dataprovider } from '../Context'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { auth } from './console'
import CardItem from './CardItem'
import {twMerge} from 'tailwind-merge'
export default function Home({className}) {
  const {username,setusername}=useContext(dataprovider)
  const navigate=useNavigate()
  const logoutHandler=()=>{
    console.log("logout")
    signOut(auth).then((res)=>{
      setusername(null)
      navigate("/")
    }).catch((e)=>console.log(e))
  }
  const {arr}=useContext(dataprovider)

  return (
    <div>
     
   <div className="flex ml-16 rounded-md" >
   
     <div className='relative items-center justify-center w-full h-full overflow-y-auto text-white bg-gray-800 rounded-md'>
      
    <div  className={twMerge(`
      h-fit 
      bg-gradient-to-b 
      from-emerald-800 
      p-6
      `,
      className
    )}>
       <p className='items-center p-2 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'> Farmer Seva</p>
    </div>
       
        <div className='grid grid-cols-2 gap-4 m-4 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
          {
            arr.map((value)=>{
              return <CardItem name={value.name} img={value.image}></CardItem>
            })
          }
     </div>
     </div>
   </div>
   </div>
  )
}