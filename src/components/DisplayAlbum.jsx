import React, { useContext } from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import { albumsData, assets, songsData } from '../assets/assets';
import { PlayerContext } from '../context/PlayerContext';

const DisplayAlbum = () => {
    const {id} = useParams();
    const albumData = albumsData[id];
    const {playWithId} = useContext(PlayerContext);
  return (
    <>
        <Navbar />
        <div className='mt-10 flex gap-8 flex-col md:flex-row md:items-end'>
            <img className='w-65 rounded' src={albumData.image} alt="" />
            <div className='flex flex-col '>
                <p className='text-xl'>Playlist</p>
                <h2 className='text-5xl font-bold mb-4 md:text-7xl'>{albumData.name}</h2>
                <h4>{albumData.desc}</h4>
                <p className='mt-1'>
                    <img className='w-6 inline-block mr-2' src={assets.spotify_logo} alt="" />
                    <b className='mr-2'>Spotify</b>
                    • 13,231,512 Lượt Thích
                    • <b>50 bài hát, </b>
                    khoảng 2 giờ 30 phút
                </p>
            </div>
        </div>
        <div className='grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]'>
            <p><b className='mr-5'>#</b>Title</p>
            <p>Album</p>
            <p className='hidden sm:block'>Date added</p>
            <img className='m-auto w-4' src={assets.clock_icon} alt="" />
        </div>
        <hr />
        {songsData.map((song,index)=>(
            <div key={index} onClick={()=>playWithId(song.id)} className='grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-white cursor-pointer'>
                <p className='text-white'>
                    <b className='mr-4 text-[#a7a7a7]'>{index+1}</b>
                     <img className='w-10 mr-5 inline-block m-2' src={song.image} alt="" />
                     {song.name}
                </p>
                <p className='text-[15px]'>{albumData.name}</p>
                <p className='hidden text-[15px] sm:block'>5 days ago</p>
                <p className='text-center text-[15px]'>{song.duration}</p>
            </div>
        ))}
    </>
  )
}

export default DisplayAlbum
