import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faLightbulb } from '@fortawesome/free-solid-svg-icons'

import nav from '../assets/navbar.png'

function NavBar() {

  return (
    <div className="navbar flex items-center justify-between fixed bg-[#edf8fd] rounded-b-4xl h-12 w-screen mb-12">
        
      <img className="h-[60px]" src={ nav } alt="" />

      <div className="first fixed flex items-center justify-center">
        <button className="prev bg-[#456399] rounded-full w-[60px] h-[60px] m-10 mt-[70px] transition duration-300 hover:opacity-70">
          <FontAwesomeIcon className='text-4xl text-white' icon={faArrowLeft} />
        </button>

        <div className="title text-[#2c4663] text-2xl border-b-4 h-[39px] mt-2 border-[#ffe03d]">학생 모집</div>
          <button className="help text-white bg-[#2a4566] w-6 h-6 ml-2 rounded-md transition duration-300 hover:opacity-70">?</button>
        </div>
        
    </div>
  )
}

export default NavBar