import React from 'react'
import Navbar from './Navbar'
import { albumsData, songsData } from '../assets/assets'
import AlbumItem from './AlbumItem'
import SongItem from './SongItem'

const DisplayHome = () => {
  return (
    <>
        <Navbar />
        <div className='mb-3'>
            <p className='font-bold my-5 text-2xl'>Featured Charts</p>
            <div className='flex overflow-auto'>
                {albumsData.map((item, index)=>(<AlbumItem image={item.image} name={item.name} desc={item.desc} id={item.id}/>))}
            </div>
            <p className='font-bold my-5 text-2xl'>Top songs</p>
            <div className='flex overflow-auto'>
                {songsData.map((item, index)=>(<SongItem image={item.image} name={item.name} desc={item.desc} id={item.id}/>))}
            </div>
        </div>
    </>
  )
}

export default DisplayHome
