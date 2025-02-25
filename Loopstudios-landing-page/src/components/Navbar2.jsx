import React from 'react'
import logo from "/src/assets/logo.svg"
const Navbar2 = () => {
  return (
    <div>
      <nav className=' hidden lg:flex absolute justify-between w-full py-[2.5rem] px-[1.5rem] xl:py-[4rem] xl:px-[10.3rem] items-center'>
        <img className='w-[12rem]' src={logo} alt="" />
        <ul className='lg:flex gap-[1.9rem] text-[1rem] font-Alata text-white font-normal'>
          <li className="relative cursor-pointer before:content-[''] before:absolute before:left-0 before:bottom-[-5px] before:w-[70%] before:ml-2 before:h-[3px] before:bg-white before:rounded before:opacity-0 hover:before:opacity-100 before:transition-all before:duration-300">About</li>
          <li className="relative cursor-pointer before:content-[''] before:absolute before:left-0 before:bottom-[-5px] before:w-[70%] before:ml-2 before:h-[3px] before:bg-white before:rounded before:opacity-0 hover:before:opacity-100 before:transition-all before:duration-300">Careers</li>
          <li className="relative cursor-pointer before:content-[''] before:absolute before:left-0 before:bottom-[-5px] before:w-[70%] before:ml-2 before:h-[3px] before:bg-white before:rounded before:opacity-0 hover:before:opacity-100 before:transition-all before:duration-300">Events</li>
          <li className="relative cursor-pointer before:content-[''] before:absolute before:left-0 before:bottom-[-5px] before:w-[70%] before:ml-2 before:h-[3px] before:bg-white before:rounded before:opacity-0 hover:before:opacity-100 before:transition-all before:duration-300">Products</li>
          <li className="relative cursor-pointer before:content-[''] before:absolute before:left-0 before:bottom-[-5px] before:w-[70%] before:ml-2 before:h-[3px] before:bg-white before:rounded before:opacity-0 hover:before:opacity-100 before:transition-all before:duration-300">Support</li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar2
