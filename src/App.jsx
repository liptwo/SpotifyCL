import { useContext, useState } from 'react'
import './App.css'
import SideBar from './components/SideBar'
import PlaySong from './components/PlaySong'
import Display from './components/Display'
import { PlayerContext } from './context/PlayerContext'

function App() {
  const {audioRef, track} = useContext(PlayerContext);

  return (
    <div className="h-screen bg-black">
        <div className='h-[90%] flex'> 
          <SideBar />
          <Display />
        </div>
        <PlaySong/>
        <audio ref={audioRef} src={track.file} preload='auto'></audio>
    </div>
  )
}

export default App
