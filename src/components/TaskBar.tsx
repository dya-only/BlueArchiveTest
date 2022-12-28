import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faEnvelope } from '@fortawesome/free-solid-svg-icons'

import TaskBarBG from "../assets/task_bar.png"
import Cafe from "../assets/cafe.png"
import Schedule from "../assets/schedule.png"
import Students from "../assets/students.png"
import Set from "../assets/sett.png"
import Circle from "../assets/circle.png"
import Build from "../assets/build.png"
import Store from "../assets/store.png"
import Gacha from "../assets/gacha.png"

function TaskBar() {

  return (
    <div className="task-bar fixed w-screen h-screen flex  items-end justify-center">

      <img className='absolute mb-4 w-[96%] shadow-lg' src={ TaskBarBG } />

      <div className="buttons z-10 w-screen flex justify-start items-center mb-[3%]">
        <img className='w-16 mr-[60px] invisible' src={ Cafe }></img>
        <img className='w-16 mr-[100px] transition duration-100 active:scale-90 cursor-pointer' src={ Cafe }></img>
        <img className='w-12 mt-2 mr-[100px] transition duration-100 active:scale-90 cursor-pointer' src={ Schedule }></img>
        <img className='w-13 mt-3 mr-[100px] transition duration-100 active:scale-90 cursor-pointer' src={ Students }></img>
        <img className='w-15 mt-4 mr-[100px] transition duration-100 active:scale-90 cursor-pointer' src={ Set }></img>
        <img className='w-15 mt-3 mr-[100px] transition duration-100 active:scale-90 cursor-pointer' src={ Circle }></img>
        <img className='w-13 mt-4 mr-[100px] transition duration-100 active:scale-90 cursor-pointer' src={ Build }></img>
        <img className='w-15 mt-5 mr-[100px] transition duration-100 active:scale-90 cursor-pointer' src={ Store }></img>
        <img className='w-15 mr-[70px] transition duration-100 active:scale-90 cursor-pointer' src={ Gacha }></img>
      </div>

      <div className="buttons-text z-10 absolute w-screen flex justify-start items-center mb-[0.3%]">
        <img className='w-16 mr-[68px] invisible' src={ Cafe }></img>
        <div className="text-2xl font-molu text-[#16365c] mr-[108px]">카페</div>
        <div className="text-2xl font-molu text-[#16365c] mr-[97px]">스케줄</div>
        <div className="text-2xl font-molu text-[#16365c] mr-[114px]">학생</div>
        <div className="text-2xl font-molu text-[#16365c] mr-[114px]">편성</div>
        <div className="text-2xl font-molu text-[#16365c] mr-[112px]">서클</div>
        <div className="text-2xl font-molu text-[#16365c] mr-[112px]">제조</div>
        <div className="text-2xl font-molu text-[#16365c] mr-[125px]">상점</div>
        <div className="text-2xl font-molu text-[#16365c]">모집</div>
      </div>

    </div>
  )
}

export default TaskBar