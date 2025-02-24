import React from 'react'
import logo from "/src/assets/logo.svg"
import iconFacebook from "/src/assets/icon-facebook.svg"
import iconTwitter from "/src/assets/icon-twitter.svg"
import iconPinterest from "/src/assets/icon-pinterest.svg"
import iconInstagram from "/src/assets/icon-instagram.svg"

const Footer = () => {
    return (
        <div className='mt-[6rem] lg:mt-[11.4rem]'>
            <footer className='bg-black py-[3.5rem] flex flex-col items-center lg:flex-row lg:justify-between lg:pt-[2.6rem]'>
                <div className='lg:ml-[10.3rem] lg:flex flex-col gap-8'>

                    <img className='w-[9rem] lg:mt-[0rem]' src={logo} alt="" />
                    <ul className="text-white font-Alata mt-[2.2rem] text-[0.9rem] flex flex-col gap-[1.2rem] tracking-[0.025rem] text-center lg:flex-row lg:mt-[0rem] lg:gap-[2.1rem]">
                        <li className="relative cursor-pointer before:content-[''] before:absolute before:left-[50px] before:bottom-[-5px] before:w-[20%] before:ml-2 before:h-[3px] before:bg-white before:rounded before:opacity-0 hover:before:opacity-100 before:transition-all before:duration-300 lg:before:w-[70%] lg:before:left-0">About</li>
                        <li className="relative cursor-pointer before:content-[''] before:absolute before:left-[50px] before:bottom-[-5px] before:w-[20%] before:ml-2 before:h-[3px] before:bg-white before:rounded before:opacity-0 hover:before:opacity-100 before:transition-all before:duration-300 lg:before:w-[70%] lg:before:left-0">Careers</li>
                        <li className="relative cursor-pointer before:content-[''] before:absolute before:left-[50px] before:bottom-[-5px] before:w-[20%] before:ml-2 before:h-[3px] before:bg-white before:rounded before:opacity-0 hover:before:opacity-100 before:transition-all before:duration-300 lg:before:w-[70%] lg:before:left-0">Events</li>
                        <li className="relative cursor-pointer before:content-[''] before:absolute before:left-[50px] before:bottom-[-5px] before:w-[20%] before:ml-2 before:h-[3px] before:bg-white before:rounded before:opacity-0 hover:before:opacity-100 before:transition-all before:duration-300 lg:before:w-[70%] lg:before:left-0">Products</li>
                        <li className="relative cursor-pointer before:content-[''] before:absolute before:left-[50px] before:bottom-[-5px] before:w-[20%] before:ml-2 before:h-[3px] before:bg-white before:rounded before:opacity-0 hover:before:opacity-100 before:transition-all before:duration-300 lg:before:w-[70%] lg:before:left-0">Support</li>
                    </ul>
                </div>
                <div className='flex flex-col justify-center gap-0 items-center lg:items-end lg:gap-4 lg:mr-[10.3rem]'>

                    <div className="mt-[3.09rem] flex items-center gap-4 lg:mt-[.1rem]">
                        <div>
                            <img className="peer cursor-pointer" src={iconFacebook} alt="" />
                            <div className="w-[90%] opacity-0 peer-hover:opacity-100 mx-auto mt-2 h-1 rounded-full bg-white transition-all duration-300"></div>
                        </div>
                        <div>
                            <img className='peer cursor-pointer' src={iconTwitter} alt="" />
                            <div className="w-[90%] opacity-0 peer-hover:opacity-100 mx-auto mt-2 h-1 rounded-full bg-white transition-all duration-300"></div>

                        </div>
                        <div>
                            <img className='peer cursor-pointer' src={iconPinterest} alt="" />
                            <div className="w-[90%] opacity-0 peer-hover:opacity-100 mx-auto mt-2 h-1 rounded-full bg-white transition-all duration-300"></div>

                        </div>
                        <div>
                            <img className='peer cursor-pointer' src={iconInstagram} alt="" />
                            <div className="w-[90%] opacity-0 peer-hover:opacity-100 mx-auto mt-2 h-1 rounded-full bg-white transition-all duration-300"></div>

                        </div>
                    </div>
                    <span className='text-white font-Alata font-normal mt-[0.45rem] text-[0.95rem] tracking-[0.01rem] lg:mt-[0rem]'>&copy; 2025 Loopstudios. All rights reserved.</span>
                </div>
        
            </footer >
        </div >
    )
}

export default Footer
