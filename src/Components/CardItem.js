import React from 'react'
import {FaPlay, FaShoppingBag, FaShoppingCart} from 'react-icons/fa'
export default function CardItem(props) {
  return (
   
        <div className='relative group flex flex-col items-center justify-center rounded-md overflow-hidden gap-x-4 bg-neutral-400/5 cursor-pointer hover:bg-neutral-400/10 transition p-3 '>
          <div className='relative aspect-square w-full h-full rounded-md overflow-hidden'>
            <img className='object-cover h-40 w-60' src={props.img} fill ></img>
          </div>
          <div className='flex flex-col items-start  gap-y-1'>
            <p className='font-semibold truncate w-full'>{props.name}</p>
          </div>
          <div className='absolute bottom-24 right-5 translate translate-y-1/4 group-hover:translate-y-1'>
            <button className='transition opacity-100 scale-0 rounded-full flex items-center bg-green-500 p-4 drop-shadow-md translate translate-y-1/4 group-hover:opacity-0 group-hover:translate-y-1 group-hover:scale-100'>
             <FaShoppingBag className='text-dark'></FaShoppingBag>
            </button>
          </div>
        </div>
    
  )
}
