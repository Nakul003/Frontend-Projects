import React, { useState, useEffect } from 'react'

const Images = ({ src, src2, text, index }) => {

  const [Image, setImage] = useState(window.innerWidth < 1024 ? src : src2)

  useEffect(() => {

    const handleImage = () => {
      setImage(window.innerWidth < 1024 ? src : src2)
    }

    window.addEventListener("resize", handleImage)

  }, [Image])

  return (
    <div className='w-[20.5rem] m-auto relative group sm:w-[28.5rem] lg:w-[20.5rem]'>
      <div className=" group-hover:opacity-50 transition-all duration-300 cursor-pointer  bg-center  bg-no-repeat bg-contain mx-auto w-[20.5rem] h-[9rem] pt-[4.05rem] pl-[1.3rem] sm:w-[28.5rem] sm:h-[12rem] lg:w-[20.5rem] lg:h-[21.1rem] xl:h-[26.1rem] 2xl:h-[28.1rem]" style={{ backgroundImage: `url(${Image})` }}></div>
      <span className={`text-[1.5rem] cursor-pointer group-hover:text-black  transition-all duration-300 text-white font-Josefin w-[7.7rem] font-light flex leading-[1] ${index === 3 && "pr-[1rem]"} absolute left-[1.3rem] bottom-8 lg:bottom-[2.1rem] lg:text-[2rem] lg:left-[4.7rem] lg:w-[14rem] lg:pr-12 ${index === 3 && "lg:pr-[5rem]"}`}>{text}</span>

    </div>
  )
}

export default Images

