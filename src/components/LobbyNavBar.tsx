import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faE, faEnvelope } from '@fortawesome/free-solid-svg-icons'

import home from '../assets/home.png'
import menubar from '../assets/menu_bar.png'
import profileBtn from '../assets/memorial_btn.png'
import settBtn from '../assets/sett_btn.png'
import BlueItemMenu from '../assets/blue_item_menu.png'
import CoinItemMenu from '../assets/coin_item_menu.png'
import ApItemMenu from '../assets/ap_item_menu.png'

function NavBar() {

  // const onClickPrev = () => {
  //   window.location.href="/"
  // }

  return (
    <div className="lobby-navbar flex items-center justify-end fixed pr-[58px] mt-8 w-screen">

      <div className="items flex justify-center items-center mr-[50px]">

        {/* <div className="item-menu flex justify-center items-center ">
          <img className='absolute shadow-xl rounded-sm w-[200px] -z-10 opacity-[90%]' src={ ApItemMenu } />
          <div className="font-molu-bold text-[#16365c] text-[24px] mt-1 -ml-10 tracking-tight">12402</div>
        </div> */}

        <div className="item-menu flex justify-start items-center w-[200px]">
          <img className='absolute shadow-xl rounded-sm w-[200px] -z-10 opacity-[90%]' src={ CoinItemMenu } />
          <div className="font-molu-bold text-[#16365c] text-[24px] mt-1 pl-[55px] tracking-tight flex justify-center">4504918</div>
        </div>

        <div className="item-menu flex justify-start items-center w-[200px]">
          <img className='absolute shadow-xl rounded-sm w-[200px] -z-10 opacity-[90%]' src={ BlueItemMenu } />
          <div className="font-molu-bold text-[#16365c] text-[24px] mt-1 pl-[45px] tracking-tight flex justify-center">12402</div>
        </div>

      </div>


      <div className="menu flex justify-center items-center">
        <img className='absolute shadow-xl rounded-sm w-[240px] h-[45px] -z-10' src={ menubar } />

        <div className="flex items-center cursor-pointer">
          <img className='w-[33px] transition duration-100 active:scale-90' src={ profileBtn } />

          <div className="sub-line bg-neutral-400 w-[1px] h-[21px] rotate-[12deg] mr-5 ml-5 rounded-2xl"></div>

          <FontAwesomeIcon className='text-[27px] text-[#426199] transition duration-100 active:scale-90 cursor-pointer' icon={ faEnvelope } />

          <div className="sub-line bg-neutral-400 w-[1px] h-[21px] rotate-[12deg] mr-5 ml-5 rounded-2xl"></div>

          <img className='w-[24px] transition duration-100 active:scale-90 cursor-pointer' src={ settBtn } />
        </div>
      </div>

    </div>
  )
}

export default NavBar