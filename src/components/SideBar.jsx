import React from 'react'
import { assets } from '../assets/assets'
const SideBar = () => {
  return (
    <div className='w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex'>
        <div className='bg-[#121212] h-[15%] rounded flex flex-col justify-around'>
            <div className='flex items-center gap-3 pl-8 cursor-pointer'>
                <img className='w-6' src={assets.home_icon} alt="" />
                <p className='font-bold'>Home</p>
            </div>
            <div className='flex items-center gap-3 pl-8 cursor-pointer'>
                <img className='w-6' src={assets.search_icon} alt="" />
                <p className='font-bold'>Search</p>
            </div>
        </div>
        <div className='bg-[#121212] h-[85%] rounded'>
            <div className='p-4 flex items-center justify-between'>
                <div className='flex items-center gap-3'>
                    <img className='w-12' src={assets.stack_icon} alt="" />
                    <p className='font-semibold'>Your Library</p>
                </div>
                <div className='flex items-center gap-3 '>
                    <img className='w-6' src={assets.arrow_icon} alt="" />
                    <img className='w-6' src={assets.plus_icon} alt="" />
                </div>
            </div>
            <div className='p-4 bg-[#242424] m-2 flex flex-col gap-1 items-start justify-start rounded-sm'>
                <p className='font-semibold'>Create your first playlist</p>
                <p className='font-light'> is's easy we will help you </p>
                <button className='bg-white mt-3 p-2 px-4 font-semibold text-black rounded-full'>Create Playlist</button>
            </div>
            <div className='mt-4 p-4 bg-[#242424] m-2 flex flex-col gap-1 items-start justify-start rounded-sm'>
                <p className='font-semibold'>Let's findsome podcasts to follow</p>
                <p className='font-light'>we'll keep you update on new episodes</p>
                <button className='bg-white mt-3 p-2 px-4 font-semibold text-black rounded-full'>Browse Podcasts</button>
            </div>

        </div>
      
    </div>
  )
}

export default SideBar
