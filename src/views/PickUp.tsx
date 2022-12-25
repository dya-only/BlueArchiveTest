import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic } from '@fortawesome/free-solid-svg-icons'

import Atsuko_bg from "../assets/atsuko.png"
import Sub_bg from "../assets/sub_bg.png"

import connected_sky from "./connected_sky.wav"
import Atsuko_PV from "./atsuko_bg.mp4"

function PickUp() {
  const [isMusic, setIsMusic] = useState(false)

  const onMusic = () => {
    setIsMusic(true)
  }

  return (
    <div className="pick-up bg-cover font-molu-bold overflow-x-hidden">

    <img className='w-screen h-screen fixed -z-20' src={ Sub_bg } alt="" />

      { isMusic == true ? 
        <audio loop autoPlay>
          {/* <source src={ connected_sky } type="audio/wav" /> */}
          <source src={ connected_sky } type="audio/wav" />
        </audio>
        : null }
      
      <video className="w-screen absolute -z-20" muted autoPlay loop>
        <source src={ Atsuko_PV } type="video/mp4" />
      </video>

      {/* Music Button */}
      <div className="flex justify-end">
        <button className='fixed mr-8 mt-20 bg-white p-3 w-12 h-12 flex justify-center items-center drop-shadow-xl rounded-lg' onClick={onMusic}>
          <FontAwesomeIcon className='text-3xl text-[#436299]' icon={faMusic} />
        </button>
      </div>

      {/* Pick Up Window */}
      <div className="flex justify-end items-center w-screen h-screen text-[#383f46]">
        <div className="window-bg fixed z-20 w-[650px] h-[570px] bg-[#a9e0f5] rounded-md shadow-md mr-8">
          <div className="pt-3 pb-3 flex justify-center items-center w-[150px] m-[8px] bg-[#f1fbfc] rounded-t-md font-molu text-[23px]">픽업 모집</div>
          
          <div className="info w-[650px] h-[430px] -mt-[12px] bg-[#f1fbfc]">
            <div className="date font-molu text-[23px] p-6 pl-8">2023/01/17 점검 후 ~ 2023/01/31 12:00까지</div>

            <div className="sub-line w-[590px] h-[2px] bg-[#ccd5d9] ml-8 -mt-6"></div>

            <div className="pickup-text text-[#285986] text-[53px] ml-8 mt-3 mb-2">픽업 모집!</div>

            <div className="sub-line w-[590px] h-[2px] bg-[#ccd5d9] ml-8"></div>

            <div className="up-text font-molu text-[23px] ml-8 mt-3 mb-1 text-[#107be3]">아츠코(★3) / 아즈사(★3) 출현 확률 UP!</div>
          
            <div className="sub-line w-[590px] h-[2px] bg-[#ccd5d9] ml-8"></div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default PickUp