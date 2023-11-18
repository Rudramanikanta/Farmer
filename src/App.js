import './App.css';
import Home from './Components/Home';
import Login from './Components/Login';
import { useContext, useState } from 'react';
import { dataprovider } from './Context';
import NotFound from './Components/NotFound';
import Search from './Components/Search';
import Sideicon from './Components/Sideicon'
import { FaHome, FaSearch, FaUser, FaSignOutAlt, FaPlus, FaAccessibleIcon, FaShoppingCart } from 'react-icons/fa'
import { signOut } from 'firebase/auth'
import { auth } from './Components/console'
import { Link, Route, Routes, useNavigate } from 'react-router-dom'
import * as Dialog from '@radix-ui/react-dialog'
import { IoMdClose } from 'react-icons/io';
import Cart from './Components/Cart';
let App = (props) => {
  const { username, setusername } = useContext(dataprovider)
  const navigate = useNavigate()
  const logoutHandler = () => {
    console.log("logout")
    signOut(auth).then((res) => {
      setusername(null)
      navigate("/")
    }).catch((e) => console.log(e))
  

  }

  

  return (
    <div className='px-3 py-2 bg-black'>

      {
        username != null &&
        <div className='fixed flex flex-col w-16 h-screen text-white bg-gray-800 rounded-md shadow-lg top-2 left-1 bottom-2'>
          <Link to="/home"><Sideicon icon={<FaHome size="28"></FaHome>} text="home"></Sideicon></Link>
          <Link to="/search"><Sideicon icon={<FaSearch size="28"></FaSearch>} text="search"></Sideicon></Link>
          <Sideicon icon={<FaUser size="28"></FaUser>} text="profile"></Sideicon>
          <Sideicon icon={<FaPlus size="28"></FaPlus>} text="add item"></Sideicon>
          <Link to="/cart"><Sideicon icon={<FaShoppingCart size="28"></FaShoppingCart>} text="cart"></Sideicon></Link>
          <Dialog.Root  className='ml-16'>
            <Dialog.Trigger asChild>
              <button><Sideicon icon={<FaSignOutAlt size="28"></FaSignOutAlt>} text="log out"></Sideicon></button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay
                className="fixed inset-0 bg-neutral-900/90 backdrop-blur-sm"
              />
              <Dialog.Content
                className="
            fixed 
            drop-shadow-md 
            border 
            border-neutral-700 
            top-[50%] 
            left-[50%] 
            max-h-full 
            h-full 
            md:h-auto 
            md:max-h-[85vh] 
            w-full 
            md:w-[90vw] 
            md:max-w-[450px] 
            translate-x-[-50%] 
            translate-y-[-50%] 
            rounded-md 
            bg-neutral-800 
            p-[25px] 
            focus:outline-none
            
          ">
                <Dialog.Title
                  className="mb-4 text-xl font-bold text-center text-white "
                >
                  Logout
                </Dialog.Title>
                <Dialog.Description
                  className="grid mb-5 text-sm leading-normal text-center text-white gap-y-3"
                >
                
                  <div>
                  Confirm to logout Are you Sure ?
                  </div>
                  <div className='flex items-center justify-center w-full h-full gap-2 overflow-hidden align-middle gap-x-2'>
                    {/* <button className='bg-gray-600 bg-neutral-400/10 hover:bg-neutral-400/5 text-center p-1.5 w-full rounded-md'>Cancel</button> */}
                    <button className='btn btn-danger hover:bg-red-400 text-center p-1.5 w-full ' onClick={()=>logoutHandler()}>ok</button>
                  </div>
                 
                </Dialog.Description>

                <Dialog.Close asChild>
                  <button
                    className="
                text-neutral-400 
                hover:text-white 
                absolute 
                top-[10px] 
                right-[10px] 
                inline-flex 
                h-[25px] 
                w-[25px] 
                appearance-none 
                items-center 
                justify-center 
                rounded-full 
                focus:outline-none
              "
                    aria-label="Close"
                  >
                    <IoMdClose />
                  </button>
                </Dialog.Close>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      }

      <Routes>
        <Route path='/' index element={<Login></Login>}></Route>
        {
          username != null &&
          <>
            <Route path="/home" element={<Home></Home>}></Route>
            <Route path='/search' element={<Search></Search>}></Route>
            <Route path='/cart' element={<Cart></Cart>}></Route>
          </>
        }

        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>

  )

}
export default App;


