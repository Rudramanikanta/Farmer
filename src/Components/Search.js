import React, { useContext, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import SearchItem from './SearchItem'
import { dataprovider } from '../Context'
export default function Search() {
  const {arr}=useContext(dataprovider)
  const [data,setdata]=useState(arr)
  const searchHandler=(e)=>{
    e.preventDefault()
 
   setdata(arr.filter((value)=>{
      return value.name.toLowerCase().indexOf(e.target.value.toLowerCase())>-1
    }))
    console.log(data)
 
}
  return (
    <div>
       <div className="flex ml-16 rounded-md" >
       <div className='justify-center items-center w-full h-screen p-4 bg-gray-800 text-white relative rounded-md overflow-y-auto'>
       <p className='p-2 items-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>Search</p>
       <div className='grid grid-cols-1 gap-y-4'>
       <div>
       <input
      type="text"
      onChange={(e)=>searchHandler(e)}
      id="search"
      placeholder='what do u wanna shop ?.....'
      className={twMerge(
        `
        flex 
        w-full
        rounded-md 
        bg-neutral-700
        border
        border-transparent
        px-3 
        py-3 
        text-sm 
        file:border-0 
        file:bg-transparent 
        file:text-sm 
        file:font-medium 
        placeholder:text-neutral-400 
        disabled:cursor-not-allowed 
        disabled:opacity-50
        focus:outline-none
      `
      )}
      
    />
    </div>
    {
      data.map((value)=>{
        return  <SearchItem name={value.name} image={value.image} ></SearchItem>
      })
    }
    {
      data.length===0 &&
      <p className='text-white font-semibold'>No search results found ! .....</p>
    }
        </div>
        </div>
       </div>
    </div>
  )
}
