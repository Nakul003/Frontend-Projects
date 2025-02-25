import React, { useState } from 'react'
import logo from "/src/assets/logo.svg"
import iconClose from "/src/assets/icon-close.svg"
import iconHam from "/src/assets/icon-hamburger.svg"
const Navbar = () => {

  const [Left, setLeft] = useState(100)
  const [Display, setDisplay] = useState("hidden")
  const [Ham_opacity, setHam_opacity] = useState("opacity-100")

  const handleMenuopen=()=>{
    setTimeout(() => {
      setLeft(0)
    },0);
    document.body.style.overflow="hidden"
  }
  const handleMenuclose=()=>{
    setTimeout(() => {
      setDisplay("hidden")
      setHam_opacity("opacity-100")
    }, 0);
    document.body.style.overflow="auto"
  }

  return (
    <div>
      <nav className='lg:hidden'>
        <div className='flex justify-between w-full py-[2.5rem] px-[1.5rem] items-center'>
          <img className='w-[9rem] z-20' src={logo} alt=""/>
          <img className={`${Ham_opacity}`} src={iconHam} alt="" onClick={()=>{setDisplay("flex"),setHam_opacity("opacity-0"), handleMenuopen()}} />
          <img className={`${Display} z-20`} src={iconClose} alt="" onClick={()=>{setLeft(100),handleMenuclose()}} />
          <ul className={`fixed pt-[13rem] ${Display} transition-all duration-300 pl-[1.5rem] font-Josefin font-light text-2xl items-start gap-4 z-10 top-0 left-[${Left}] w-screen h-screen bg-black text-white flex flex-col justify-center pb-[10rem] sm:items-center`}>
          <li>ABOUT</li>
          <li>CAREERS</li>
          <li>EVENTS</li>
          <li>PRODUCTS</li>
          <li>SUPPORT</li>
        </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
