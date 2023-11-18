import React, { useContext } from 'react'
import { dataprovider } from '../Context'
export default function Cart() {
  const { cartitems } = useContext(dataprovider)
  console.log(cartitems)
  const {removeCart}=useContext(dataprovider)
  return (
    <div className="flex ml-16 rounded-md h-screen overflow-y-auto" >

      <div className=' w-full bg-gray-800 text-white relative h-screen rounded-md overflow-y-auto'>
        <p className='font-semibold text-center text-white font-sans  text-2xl'>Your Cart items</p>
        <div className='flex flex-col gap-y-4 gap-x-4 p-3'>
          {
            cartitems.length===0 &&
            <p className='font-semibold text-white p-4 text-lg'>No cart items ........</p>
          }
          {
            cartitems.map((value) => {
              return <div className='flex w-full gap-x-4 group bg-neutral-400/5 hover:bg-neutral-800 p-3 rounded-lg'>
                <div
                  className="
      float-left
        relative 
        rounded-md 
        max-h-[100px] 
        max-w-[100px] 
        overflow-hidden
        left-0
      "
                >
                  <img
                    fill
                    src={value.image}
                    alt="MediaItem"
                    className="object-cover"
                  />
                </div>
                <div className='font-semibold text-white '>
                {value.name}
                <p><button className='shadow-lg bg-green-600 p-2 text-center text-white translate translate-y-1/3 hover:translate-y-1 rounded-lg group-hover:translate-y-1' onClick={()=>{removeCart(value)}}>remove from cart</button></p>
                </div>
              </div>
            })
          }
        </div>
      </div>
    </div>
  )
}
