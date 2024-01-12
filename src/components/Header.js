import React from 'react'
import {cart,red} from "../assets/index"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
const Header = () => {
  const productData = useSelector((state)=> state.bazar.productData);
  return (
    <div className='w-full h-20 bg-white border-b-[5px] border-b-gray-800 font-titleFont sticky top-0 z-50'>
    <div className='max-w-screen-x1 h-full mx-auto flex items-center justify-between'>
       <Link to="/"> <div>
            <img className='w-16 h-18'
            src={red} alt="logo" />
        </div>
        </Link>
        <div className='flex item-center gap-8'>
        <ul className='flex item-center gap-8'>
            <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Home</li>
            <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Pages</li>
            <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Shop</li>
            <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Element</li>
            <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Blog</li>
        </ul>
        <Link to="/cart">
        <div className='relative'>
            <img className="w-6" src={cart} alt=""/>
            <span className='absolute w-6 top-1 left-0 text-sm flex items-center justify-center font-semibold '>
              {productData.length}
            </span>
        </div>
        </Link>
        <img className='w-8 h-8 rounded-full'
        src="https://previews.123rf.com/images/_fla/_fla1205/_fla120500230/13756213-shopping-cart-full.jpg"
        alt="userLogo"
        />
    </div>
    </div>
   
    </div>
    
  )
}

export default Header