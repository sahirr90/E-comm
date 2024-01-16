import React from 'react';
import {ImGithub} from "react-icons/im";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaYoutube,
    FaHome,
} from "react-icons/fa";
import {MdLocationOn} from "react-icons/md";
import {BsPersonFill, BsPaypal} from "react-icons/bs";

import { logo2, card } from '../assets';

const Footer = () => {
  return (
    <div className='bg-black text-[#949494] py-20 font-titleFont'>
    <div className='max-w-screen-xl mx-auto grid grid-cols-5'>
 {/* LogoIcon*/}
 <div className='flex flex-col gap-7'>
    <img className='flex flex-col gap-9 w-32' src={logo2} alt='sneakerLogo' />
    <p className='text-white text-sm tracking-wide'> Computer.com</p>
   
    <div className='flex gap-5 text-lg text-gray-400'>
        <ImGithub className="hover:text-white duration-300 cursor-pointer"/>
        <FaYoutube className="hover:text-white duration-300 cursor-pointer"/>
        <FaFacebookF className="hover:text-white duration-300 cursor-pointer"/>
        <FaTwitter className="hover:text-white duration-300 cursor-pointer"/>
        <FaInstagram className="hover:text-white duration-300 cursor-pointer"/>
    </div>
    </div>
    <div className='text-base flex flex-col gap-3'>
    <h2 className='text-2xl font-semibold text-white mb-4'>locate us</h2>
    <div>
        <p>wilmington, de 19805</p>
        <p>phone: 333-333-3333</p>
        <p>e-mail: Computer@gmail.com</p>
    </div>
    </div>

    <div>
    <h2 className='text-2xl font-semibold text-white mb-4'>profile</h2>
    <div className='flex flex-col gap-2 text-base'>
    <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
        <span className='text-lg'>
            <BsPersonFill/>
        </span>
        my account
    </p>
    <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
        <span className='text-lg'>
            <BsPaypal/>
        </span>
        checkout
    </p>
    <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
        <span className='text-lg'>
            <FaHome/>
        </span>
        order tracking
    </p>
    <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
        <span className='text-lg'>
            <MdLocationOn/>
        </span>
        help & support
    </p>
    </div>
    </div>
    <div className='flex flex-col gap-10'><img className=' w-56 ' src={card} alt='card logo' /></div> 
<div className='flex flex-col justify-center'>
    <input 
    className='bg-transparent border px-4 py-2 text-sm'
    placeholder='e-mail'
    type="text" />
    <button className='text-sm border text-white border-t-0 hover:bg-gray-900 active:bg-white active:text-black'>Subscribe</button>
</div>
    </div>
    </div>
  )
}

export default Footer;