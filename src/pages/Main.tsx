import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// import NavBar from '../components/NavBar'

import Sub_bg from "../assets/sub_bg.png"
import Yuuka_Memorial from "./midsummer_cat_yuuka_gym.mp4"
import Azusa_Memorial from "./luminous_memory_azusa_mizugi.mp4"

import LuminousMemory from "./luminous_memory.mp3"
import MidSummerCat from "./midsummer_cat.mp3"

function Main() {
  const [memorial, setMemorial] = useState("")
  const [isMusic, setIsMusic] = useState(false)
  

  const onMusic = () => {
    setIsMusic(true)
    sessionStorage.setItem("isPlaying", "true")
  }
  
  useEffect(() => {

    if (sessionStorage.getItem("isPlaying") == "true") {
      setIsMusic(true)
    } else {
      setIsMusic(false)
    }

    const Characters = ["Yuuka", "Azusa"]
    let rand = Math.floor(Math.random() * 2)

    setMemorial(Characters[rand])
    console.log(rand)
  }, [])
  
  return (
    <div className="main bg-cover font-molu-bold overflow-x-hidden">

      {/* Music Button */}
      { JSON.parse(isMusic.toString()) == false ?
        <div className="absolute w-full h-full backdrop-brightness-[0.2] flex items-center justify-center z-50 drop-shadow-2xl">
          <div className="flex flex-col justify-center items-center w-[400px] h-48 bg-white rounded-2xl">
            <div className="font-molu text-xl mb-8">사운드 재생을 위해 확인 버튼을 눌러주세요.</div>
            <button className='music-btn bg-[#456399] font-molu transition duration-100 active:scale-90 text-white p-3 w-[80px] drop-shadow-2xl flex justify-center items-center drop-shadow-xl rounded-lg' onClick={onMusic}>확인</button>
          </div>
        </div>
       : null }

      {/* Memorial Musics */}
      { isMusic == true && memorial == "Yuuka" ?
        <audio loop autoPlay>
          <source src={ MidSummerCat } type="audio/mp3" />
        </audio>
       : null }

      { isMusic == true && memorial == "Azusa" ?
        <audio loop autoPlay>
          <source src={ LuminousMemory } type="audio/mp3" />
        </audio>
       : null }

      {/* Memorial Acts */}
      { memorial == "Yuuka" ?
        <video className="w-screen overflow-none fixed -z-10" muted autoPlay>
          <source src={ Yuuka_Memorial } type="video/mp4" />
        </video>
      : null }

      { memorial == "Azusa" ?
        <video className="w-screen overflow-none fixed -z-10" muted autoPlay>
          <source src={ Azusa_Memorial } type="video/mp4" />
        </video>
      : null }

      <Link to="/pickup">
        <button className='btn bg-[#456399] font-molu transition duration-100 active:scale-90 text-white p-3 m-4 w-[80px] drop-shadow-2xl flex justify-center items-center drop-shadow-xl rounded-lg'>모집</button>
      </Link>

      <img className='w-screen h-screen fixed -z-20' src={ Sub_bg } alt="" />

    </div>
  )
}

export default Main