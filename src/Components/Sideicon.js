import React, { useEffect } from 'react'

export default function Sideicon(props) {
  const path=window.location
  const val=path.href.includes(props.text)
  useEffect(()=>{
  if(val){
   // document.getElementById("icon").classList.add('text-primary-organe')
  }
  else{
    
    //document.getElementById("icon").ClassList.remove('text-black')
  }}
  ,[]
  )
  return (
    <>
    {
      val ?
      <div id="icon"  className='relative flex items-center justify-center w-12 h-12 mx-auto mt-2 mb-2 transition-all duration-300 bg-green-600 shadow-lg ease-line group rounded-xl hover:rounded-xl'>
        {props.icon}
        
    </div>:
    <div className='relative flex items-center justify-center w-12 h-12 mx-auto mt-2 mb-2 text-green-500 transition-all duration-300 ease-linear bg-gray-800 shadow-lg group hover:bg-green-600 hover:text-white rounded-3xl hover:rounded-xl' >
        {props.icon}
        
    </div>
}
    </>
  )
}
