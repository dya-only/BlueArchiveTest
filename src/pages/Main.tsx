import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

// import NavBar from '../components/NavBar'
import LobbyNavBar from '../components/LobbyNavBar'
import TaskBar from '../components/TaskBar'

import Sub_bg from "../assets/sub_bg.png"
import ProfileBar from "../assets/profile_bar.png"
import Notice from "../assets/notice.png"
import MomoTalk from "../assets/momo.png"
import Quest from "../assets/quest.png"
import PyroxeneStore from "../assets/buy_blue.png"

import Yuuka_Memorial from "./midsummer_cat_yuuka_gym.mp4"
import Azusa_Memorial from "./luminous_memory_azusa_mizugi.mp4"
import Hoshino_Memorial from "./theme120_hoshino_mizugi.mp4"

import LuminousMemory from "./luminous_memory.mp3"
import MidSummerCat from "./midsummer_cat.mp3"
import Theme120 from "./theme_120.mp3"

function Main() {
  const [memorial, setMemorial] = useState("")
  const [isMusic, setIsMusic] = useState(false)
  const [expProgress, setExpProgress] = useState(0)
  const [maxExp, setMaxExp] = useState(0)
  
  const StyledProgressBar = styled.div` width: ${ Math.floor(expProgress / maxExp * 100) }%; height: 5px; background-color: #59eefb`
  // exp-progress bg-[#59eefb] h-[5px] w-[60%]

  const onMusic = () => {
    setIsMusic(true)
    sessionStorage.setItem("isPlaying", "true")
  }
  
  useEffect(() => {

    setMaxExp(1000)
    setExpProgress(612)

    if (sessionStorage.getItem("isPlaying") == "true") {
      setIsMusic(true)
    } else {
      setIsMusic(false)
    }

    const Characters = ["Yuuka", "Azusa", "Hoshino"]
    // let rand = Math.floor(Math.random() * 2)
    let rand = 2

    setMemorial(Characters[rand])
  }, [])
  
  return (
    <div className="main bg-cover font-molu-bold overflow-x-hidden">

      {/* Music Button */}
      { JSON.parse(isMusic.toString()) == false ?
        <div className="absolute w-full h-full backdrop-brightness-[0.2] flex items-center justify-center z-50 drop-shadow-2xl">
          <div className="flex flex-col justify-center items-center w-[400px] h-48 bg-white rounded-2xl">
            <div className="font-molu text-xl mb-8">사운드 재생을 위해 확인 버튼을 눌러주세요.<br/>※전체화면을 사용해주세요.</div>
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

      { isMusic == true && memorial == "Hoshino" ?
        <audio loop autoPlay>
          <source src={ Theme120 } type="audio/mp3" />
        </audio>
       : null }

      {/* Memorial Acts */}
      { memorial == "Yuuka" ?
        <video className="object-none min-w-[2000px] overflow-auto fixed -ml-10 -mt-6 -z-10" muted autoPlay loop>
          <source src={ Yuuka_Memorial } type="video/mp4" />
        </video>
      : null }

      { memorial == "Azusa" ?
        <video className="w-screen overflow-none fixed m-0 -z-10" muted autoPlay loop>
          {/* w-screen overflow-none fixed m-0 -z-10 */}
          <source src={ Azusa_Memorial } type="video/mp4" />
        </video>
      : null }

      { memorial == "Hoshino" ?
        <video className="w-screen overflow-none fixed m-0 -z-10" muted autoPlay loop>
          {/* w-screen overflow-none fixed m-0 -z-10 */}
          <source src={ Hoshino_Memorial } type="video/mp4" />
        </video>
      : null }

      {/* <Link to="/pickup">
        <button className='btn bg-[#456399] font-molu transition duration-100 active:scale-90 text-white p-3 m-4 w-[80px] drop-shadow-2xl flex justify-center items-center drop-shadow-xl rounded-lg'>모집</button>
      </Link> */}

      <LobbyNavBar />
      <TaskBar />

      <div className="profile w-[320px] flex justify-center items-center mt-8 mb-[35px]">
        <img className='w-[350px] absolute -z-10 ml-7' src={ ProfileBar } />

        <div className="profile-text flex items-center ml-[100px]">
          <div className="lv mr-6 -ml-14">
            <div className="lv-text font-molu text-[30px] text-[#eee466] -mb-3 italic">Lv.</div>
            <div className="lv font-molu-bold text-5xl text-white italic -ml-3">45</div>
          </div>

          <div className="name">
            <div className="usrname font-molu-bold text-white text-[24px]">귀여운디아</div>
            <div className="exp-bar bg-[#3e4f61] h-[5px] w-[215px]">
              {/* <div className="exp-progress bg-[#59eefb] h-[5px] w-[60%]"></div> */}
              <StyledProgressBar></StyledProgressBar>
            </div>
            <div className="exp-text text-[#59eefb]">{ expProgress }/{ maxExp }</div>
          </div>
        </div>
      </div>

      <div className="use-menu flex flex-col justify-center items-center w-[200px]">
        <div className="flex w-[140px] justify-center ml-[85px]">
          <img className='notice w-[70px] h-[70px] transition duration-100 active:scale-90 cursor-pointer m-4 mr-10' src={ Notice } />
          <img className='momo-talk w-[63px] transition duration-100 active:scale-90 cursor-pointer m-4' src={ MomoTalk } />
        </div>
        <div className="flex w-[140px] justify-center ml-[85px]">
          <img className='notice w-[70px] h-[70px] transition duration-100 active:scale-90 cursor-pointer m-4 mr-10' src={ Quest } />
          <img className='momo-talk w-[70px] transition duration-100 active:scale-90 cursor-pointer m-4' src={ PyroxeneStore } />
        </div>

        <div className="absolute flex justify-center ml-[120px] -mt-5">
          <div className='notice w-[60px] text-[#16365c] text-[23px] m-4 mr-[45px]'>공지</div>
          <div className='momo-talk w-[70px]  text-[#16365c] text-[23px] m-4'>모모톡</div>
        </div>

        <div className="absolute flex justify-center ml-[110px] mt-[195px]">
          <div className='notice w-[60px] text-[#16365c] text-[23px] m-4 mr-[18px]'>미션</div>
          <div className='momo-talk w-[100px] text-[#16365c] text-[23px] m-4'>청휘석구매</div>
        </div>
      </div>

      <img className='w-screen h-screen fixed -z-20' src={ Sub_bg } alt="" />

    </div>
  )
}

export default Main