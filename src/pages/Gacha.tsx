import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// import Atsuko_bg from "../assets/atsuko.png"
import Sub_bg from "../assets/ch_bg.png"
import Act10 from "./act10.mp4"

function Gacha() {

  return (
    <div className="gacha bg-cover font-molu-bold overflow-x-hidden">

      <video className="w-screen h-screen overflow-none absolute -z-10" muted autoPlay>
        <source src={ Act10 } type="video/mp4" />
      </video>

      <img className='w-screen h-screen fixed -z-20' src={ Sub_bg } alt="" />

    </div>
  )
}

export default Gacha