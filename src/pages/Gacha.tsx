import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// import Atsuko_bg from "../assets/atsuko.png"
import Sub_bg from "../assets/sub_bg.png"
import Act10 from "./10act.mp4"

function Gacha() {

  return (
    <div className="gacha bg-cover font-molu-bold overflow-x-hidden">

      <video className="w-[140%] absolute" autoPlay controls>
        <source src={ Act10 } type="video/mp4" />
      </video>

      <img className='w-screen h-screen fixed -z-20' src={ Sub_bg } alt="" />

    </div>
  )
}

export default Gacha