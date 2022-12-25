import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic } from '@fortawesome/free-solid-svg-icons'

import Atsuko_bg from "../assets/atsuko.png"

import connected_sky from "./connected_sky.wav"
import Atsuko_PV from "./atsuko_bg.mp4"

function PickUp() {
  const [isMusic, setIsMusic] = useState(false)

  const onMusic = () => {
    setIsMusic(true)
  }

  return (
    <div className="pick-up bg-cover font-molu">

      { isMusic == true ? 
        <audio loop autoPlay>
          {/* <source src={ connected_sky } type="audio/wav" /> */}
          <source src={ connected_sky } type="audio/wav" />
        </audio>
        : null }
      
      <video className="w-screen absolute -z-20" muted autoPlay loop>
        <source src={ Atsuko_PV } type="video/mp4" />
      </video>

      <div className="flex justify-end">
        <button className='fixed mr-4 mt-20 bg-white p-3 w-12 h-12 flex justify-center items-center drop-shadow-xl rounded-lg' onClick={onMusic}>
          <FontAwesomeIcon className='text-3xl text-[#436299]' icon={faMusic} />
        </button>
      </div>

    </div>
  )
}

export default PickUp