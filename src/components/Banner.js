import React, { useState } from 'react'
import {HiArrowRight, HiArrowLeft} from "react-icons/hi";


const Banner = () => {
    const[currentSlide, setCurrentSlide] = useState(0)
    const data = [
    
        "https://dlcdnwebimgs.asus.com/gain/5F8FB5BC-DF50-47B2-AA83-827C1EB74C5A/w5120/h1554//fwebp" ,
        "https://dlcdnwebimgs.asus.com/gain/9C72EC0C-0655-47C8-A35E-183D82702F48/w2560/h777//fwebp",
        "https://dlcdnwebimgs.asus.com/gain/08E9FD3D-3667-42C6-AB90-1680EB7BAE44/w2560/h777/fwebp"
    ];

    const prevSlide =()=>{
            setCurrentSlide(currentSlide === 0?2:(prev)=>prev-1 );
    };
    const nextSlide =()=>{
        setCurrentSlide(currentSlide === 2?0:(prev)=>prev+1 );
    }; 
  return (
    <div className='w-full h-auto overflow-x-hidden'>
        <div className='w-screen-h-[650px]fixed'>
            <div style={{transform: `translateX(-${currentSlide * 100}vw)`}} 
            className='w-[400vw] h-full flex transition-transform duration-1000'>
                <img className='w-screen h-full object-cover'
                 src={data[0]} 
                 alt="ImgOne"
                 loading='priority' />  
                <img className='w-screen h-full object-cover'
                 src={data[1]} 
                 alt="ImgTwo"
                />
                 <img className='w-screen h-full object-cover'
                 src={data[2]} 
                 alt="ImgThree"
                />
                 
            </div>
            <div className='relative w-fit left-0 right-0 mx-auto flex gap-8 bottom-20'>
            <div onClick={prevSlide} className='w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-grey-900 duration-300 '>
                <HiArrowLeft/>
            </div>
            <div onClick={nextSlide} className='w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-grey-900 duration-300 '>
                <HiArrowRight/>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Banner