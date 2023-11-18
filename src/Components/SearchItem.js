import React, { useCallback, useState,useContext } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import {dataprovider} from '../Context.js'
export default function SearchItem(props) {
  const {setCart} = useContext(dataprovider);                                                                                               
  
  const [toggle,settoggle]=useState(false)
  const likehandle=()=>{
    settoggle((currentval)=>currentval===false?true:false)
    setCart(props)
  }
  return (
    <div
   
    className="
    group
      flex 
      items-center 
      gap-x-3 
      cursor-pointer 
      bg-neutral-800/50
      hover:bg-neutral-700 
      w-full 
      p-2 
      rounded-md
    "
  >
    <div 
      className="
        relative 
        rounded-md 
        max-h-[48px] 
        max-w-[48px] 
        overflow-hidden
        
      "
    >
      <img
        fill
        src={props.image}
        alt="MediaItem"
        className="object-cover"
      />
      
    </div>
  
    <div className="flex flex-col gap-y-1 overflow-hidden">
      <p className="text-white truncate">{props.name}</p>
    
    </div>
  <div className=' float-right right-0 mr-20 absolute'>
  <FaShoppingCart onClick={likehandle} color={toggle ? '#22c55e' : 'white'}></FaShoppingCart>
  </div>
  </div>
  )
}
