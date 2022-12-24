import { useState } from 'react'

import Atsuko_bg from "../assets/atsuko.png"

function PickUp() {

  return (
    <div className="pick-up bg-cover font-molu">
        <img className='atsuko-bg absolute -z-10' src={ Atsuko_bg } />
    </div>
  )
}

export default PickUp