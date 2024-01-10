import React, { useState } from 'react'
import {HiArrowRight, HiArrowLeft} from "react-icons/hi";


const Banner = () => {
    const[currentSlide, setCurrentSlide] = useState(0)
    const data = [
    
        "https://images-cs.stockx.com/v3/assets/blt818b0c67cf450811/blt8db79eb55d9495d6/659d8d060e30da79bf24b999/Stanley_Tumbler_-_Arctic_Twist_Release_1_9Primary_Desktop_copy.jpg?quality=75&auto=webp&format=pjpg&dpr=2&width=1246" ,
        "https://images-cs.stockx.com/v3/assets/blt818b0c67cf450811/blt1e1be02831e2e237/659c4f4d1a81668129b0bb0a/Trending_WatchesPrimary_Desktop.jpg?quality=80&auto=webp&format=pjpg&dpr=1&width=1246",
        "https://images-cs.stockx.com/v3/assets/blt818b0c67cf450811/bltbbb000cbcbbdfa62/659c4ddabe5d26662665b0de/3-Day_Xpress_Shipping_on_JordansPrimary_Desktop_copy_4_(1).jpg?quality=75&auto=webp&format=pjpg&dpr=2&width=1246"
    ];

    const prevSlide =()=>{
            setCurrentSlide(currentSlide === 0?2:(prev)=>prev-1 );
    };
    const nextSlide =()=>{
        setCurrentSlide(currentSlide === 2?0:(prev)=>prev+1 );
    }; 
  return (
    <div className='w-full h-auto overflow-x-hidden'>
        <div className='w-screen-h-[650px]relative'>
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
            <div className='absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-80'>
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