import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate();
  return (
    <>
        <div className='w-full flex justify-between items-center font-semibold'>
            <div className='flex items-center gap-4'>
                <img onClick={()=>navigate(-1)} src={assets.arrow_left} className='w-6 bg-black rounded-2xl cursor-pointer' alt="" />
                <img onClick={()=>navigate(1)} src={assets.arrow_right} className='w-6 bg-black rounded-2xl cursor-pointer' alt="" />
            </div>
            <div className='flex items-center gap-4'>
                <p className='bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer'>
                    Explore Premium
                </p>
                <p className='bg-black text-white px-3 py-1 rounded-2xl text-[15px] cursor-pointer'>Install App</p>
                <p className='bg-green-500 w-7 h-7 text-black rounded-full flex items-center justify-center cursor-pointer'>H</p>
            </div>
        </div>
        <div className='flex items-center gap-2 mt-4'>
            <p className='bg-white text-black px-4 py-1 rounded-full cursor-pointer'>All</p>
            <p className='bg-black text-white px-4 py-1 rounded-full cursor-pointer'>Music</p>
            <p className='bg-black text-white px-4 py-1 rounded-full cursor-pointer'>Podcasts</p>

        </div>
    </>
  )
}

export default Navbar
