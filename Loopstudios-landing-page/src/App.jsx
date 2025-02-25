import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import Header from './components/Header'
import Images from './components/Images'
import Footer from './components/Footer'
const App = () => {
  const [images, setImages] = useState([
    {
      src: "/src/assets/mobile/image-deep-earth.jpg",
      src2: "/src/assets/desktop/image-deep-earth.jpg",
      text: "DEEP EARTH"
    },
    {
      src: "/src/assets/mobile/image-night-arcade.jpg",
      src2: "/src/assets/desktop/image-night-arcade.jpg",
      text: "NIGHT ARCADE"
    },
    {
      src: "/src/assets/mobile/image-soccer-team.jpg",
      src2: "/src/assets/desktop/image-soccer-team.jpg",
      text: "SOCCER TEAM VR"
    },
    {
      src: "/src/assets/mobile/image-grid.jpg",
      src2: "/src/assets/desktop/image-grid.jpg",
      text: "THE GRID"
    },
    {
      src: "/src/assets/mobile/image-from-above.jpg",
      src2: "/src/assets/desktop/image-from-above.jpg",
      text: "FROM UP ABOVE VR"
    },
    {
      src: "/src/assets/mobile/image-pocket-borealis.jpg",
      src2: "/src/assets/desktop/image-pocket-borealis.jpg",
      text: "POCKET BOREALIS"
    },
    {
      src: "/src/assets/mobile/image-curiosity.jpg",
      src2: "/src/assets/desktop/image-curiosity.jpg",
      text: "THE CURIOSITY"
    },
    {
      src: "/src/assets/mobile/image-fisheye.jpg",
      src2: "/src/assets/desktop/image-fisheye.jpg",
      text: "MAKE IT FISHEYE"
    }
  ])

  return (
    <div>
      <Header />
      <main>
        <section className='xl:flex items-center xl:relative'>
          <div className='mx-auto w-[20.5rem] h-[14rem] mt-[6.1rem] bg-[url("/src/assets/mobile/image-interactive.jpg")] bg-center bg-no-repeat bg-contain xl:bg-[url("/src/assets/desktop/image-interactive.jpg")] sm:w-[30rem] sm:h-[20rem] xl:ml-[10.1rem] xl:mt-[10rem] xl:h-[500px] xl:w-[731px]'></div>
          <div className='xl:absolute right-32 top-[21.5rem] xl:w-[36rem] xl:h-[21rem] bg-white'>
            <h2 className='text-center mt-[3.05rem] text-[1.86rem] font-Josefin font-light tracking-[0.09rem] leading-[2rem] md:px-[15rem] md:text-[2rem] lg:px-[21rem] lg:text-[2.5rem] lg:leading-[2.5rem] xl:px-[0rem] xl:text-start xl:tracking-[0.005rem] xl:leading-[1] xl:text-[3rem] xl:ml-[5.9rem] xl:mt-[6rem]'>THE LEADER IN INTERACTIVE VR</h2>

            <p className='text-center text-Very_Dark_Gray font-Alata px-[3rem] py-[1rem] text-[0.96rem] leading-[1.62] md:px-[10rem] lg:text-[1.1rem] lg:px-[15rem] xl:text-[0.96rem] xl:px-[3rem] xl:mt-[0.7rem] xl:ml-[2rem]  '>Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.</p>
          </div>
        </section>

        <section>
          <div>
            <div className='flex justify-center items-center lg:gap-[24.9rem] lg:mt-[10.8rem] lg:ml-[6.2rem] xl:ml-[10.2rem]'>
              <h2 className='text-center font-Josefin text-[2rem] font-light tracking-[0.01rem] mt-[4.5rem] lg:mt-[0] xl:text-[3rem]'>OUR CREATIONS</h2>
              <span className=' hidden transition-all duration-300 cursor-pointer lg:flex border border-[black] font-Alata font-normal text-center h-[2.5rem] w-[9.95rem] m-auto justify-center text-[0.79rem] tracking-[0.35rem] mt-[1.4rem] pt-[0.7rem] hover:bg-black hover:text-white lg:mt-[1rem] lg:text-[0.8rem] lg:pt-[0.7rem]'>SEE ALL</span>
            </div>

            <div className='mt-[1.7rem] lg:grid grid-cols-4 grid-rows-2 gap-4  lg:mt-[4.3rem] lg:ml-[4.1rem] lg:w-[77%] lg:gap-[2rem] xl:ml-[8.1rem]'>
              {
                images.map((image, index) => {
                  return (
                    <Images key={uuidv4()} src={image.src} src2={image.src2} text={image.text} index={index} />
                  )
                })
              }
            </div>
            <span className='border cursor-pointer transition-all duration-300 border-[black] font-Alata font-normal text-center h-[2.5rem] w-[9.95rem] flex m-auto justify-center text-[0.79rem] tracking-[0.35rem] mt-[1.4rem] pt-[0.7rem] hover:bg-black hover:text-white lg:hidden'>SEE ALL</span>
          </div>
        </section>
      </main>
      <Footer/>
    </div>
  )
}

export default App
