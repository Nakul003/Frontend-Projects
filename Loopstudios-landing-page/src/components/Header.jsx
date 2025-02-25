import React from 'react'
import Navbar from './Navbar'
import Navbar2 from './Navbar2'
const Header = () => {
    return (
        <div>
            <header className='bg-[url("/src/assets/mobile/image-hero.jpg")] bg-cover bg-no-repeat h-[40.55rem] lg:bg-[url("/src/assets/desktop/image-hero.jpg")]'>
                <Navbar />
                <Navbar2 />
                <div className='flex justify-center lg:block lg:ml-[10.3rem]'>
                    <div className='border font-Josefin absolute border-white text-white font-light text-start p-6 leading-[0.96] h-[12.3rem] text-[2.5rem] w-[20.5rem] my-[7.65rem] lg:my-[14.2rem] md:w-[30rem] md:text-[4rem] md:h-auto lg:w-[40.65rem] lg:h-[17.4rem] lg:p-[2.5rem] lg:text-[4.5rem]'>IMMERSIVE EXPERIENCES THAT DELIVER</div>
                </div>
            </header>
        </div>
    )
}

export default Header
