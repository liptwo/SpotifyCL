import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/assets";

export const PlayerContext = createContext();

const PlayContextProvider = (props) => {
  const audioRef = useRef();
  const seekBg = useRef();
  const seekBar = useRef();

  const [track, setTrack] = useState(songsData[0]);
  const [playStatus, setPlayStatus] = useState(false);

  const [time, setTime] = useState({
    currentTime: {
      second: '00',
      minute: '00',
    },
    totalTime: {
      second: '00',
      minute: '00',
    },
  });
  
  const Play = ()=>{
    audioRef.current.play();
    setPlayStatus(true);
  }
  const Pause = ()=>{
    audioRef.current.pause();
    setPlayStatus(false);
  }

  const playWithId = async (id)=>{
     await setTrack(songsData[id]);
     await audioRef.current.play();
     setPlayStatus(true);
  }

  const previous = async ()=>{
    if(track.id>0){
        await setTrack(songsData[track.id -1]);
        await audioRef.current.play();
        setPlayStatus(true);
    }

  }
  
  const next = async ()=>{
    if(track.id < songsData.length-1){
        await setTrack(songsData[track.id +1]);
        await audioRef.current.play();
        setPlayStatus(true);
    }

  }
  const seekSong = async (e)=>{
    audioRef.current.currentTime = ((e.nativeEvent.offsetX)/(seekBg.current.offsetWidth)*audioRef.current.duration)
    
  }

  useEffect(() => {
        audioRef.current.ontimeupdate = ()=>{
            seekBar.current.style.width = (Math.floor((audioRef.current.currentTime/audioRef.current.duration)*100))+'%'   
            setTime({
                currentTime: {
                    second: Math.floor(audioRef.current.currentTime%60).toString(),
                    minute: Math.floor(audioRef.current.currentTime/60).toString(),
                  },
                  totalTime: {
                    second: Math.floor(audioRef.current.duration%60).toString(),
                    minute: Math.floor(audioRef.current.duration/60).toString()
                  }
            },1000)
        }
  }, [audioRef]);
  


  const contextValue = {
    audioRef,
    seekBg,
    seekBar,
    track,
    setTrack,
    playStatus,
    setPlayStatus,
    time,
    setTime,
    Play,
    Pause,
    playWithId,previous, next,seekSong
  };

  return (
    <PlayerContext.Provider value={contextValue}>
      {props.children}
    </PlayerContext.Provider>
  );
};
export default PlayContextProvider;
