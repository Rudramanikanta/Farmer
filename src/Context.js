import React, { useState } from 'react'
import { useContext } from 'react'
import paddy from "./Images/paddy2.jpg"
import maize from './Images/maize2.jpg'
import bannana from './Images/bannana2.jpg'
import cotton from './Images/cotton.jpg'
import wheat from './Images/wheat.jpg'
import barley from './Images/barley.jpg'
import gram from './Images/gram.jpg'
import peas from './Images/peas.jpg'
import tobaco from './Images/tobaco.webp'
import milllets from './Images/milltes.jpg'
import soyabean from './Images/soyabean.jpg'
import pulses from './Images/pulses.jpg'
export const dataprovider = React.createContext()
export function useProduct() {
  return useContext(dataprovider)
}
export function Context({ children }) {
  const arr = [{ name: "Paddy", image: paddy }, { name: "Maize", image: maize }, { name: "Banana", image: bannana }, { name: "Cotton", image: cotton },
  { name: "Wheat", image: wheat }, { name: "Barley", image: barley }, { name: "Gram", image: gram }, { name: "Peas", image: peas },
  { name: "Tobaco", image: tobaco }, { name: "Millets", image: milllets }, { name: "Soyabean", image: soyabean },
  { name: "Pulses", image: pulses }]
  const [cartitems, setcartitems] = useState([])
  const [username, setusername] = useState(null)
  const [password, setpassword] = useState(null)
  const setprofile = (user, pass) => {
    console.log(user, pass)
    setusername(user)
    setpassword(pass)
  }
  const setCart = (value) => {
    setcartitems((currentval) => [...currentval, value])
  }
  const removeCart=(value)=>{
   const arr2=cartitems.filter((valu)=>{return valu.name!==value.name})
   setcartitems(arr2)
  }
  console.log(cartitems)
  const totaldata = {
    username, password, setprofile, setusername, arr, setCart, cartitems,removeCart
  }
  return (
    <dataprovider.Provider value={totaldata}>
      {children}
    </dataprovider.Provider>
  )
}
