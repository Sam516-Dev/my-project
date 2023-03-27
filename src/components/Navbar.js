import React from 'react'
import logo from '../Media/Assets/logo.svg'
import Bg from '../Media/Assets/Bg.jpg'




export default function () {
  return (
    <div className=" border-b border-blue-500 py-4 flex justify-between">
      <div>
      <svg className=' h-10 w-10 text-red-600 bg-yellow-300'>
        <use xlinkHref={logo}></use>
      </svg>
      </div>
      <div >
        <ul className=" text-blue-900 gap-8 font-medium text-lg flex">
          <li>
            <a href="#">Flights</a>
          </li>
          <li>
            <a href="#">Hotels</a>
          </li>
          <li>
            <a href="#"> Cars </a>
          </li>
          <li>
            <a href="#"> Vacations </a>
          </li>
          <li>
            <a href="#"> Deals </a>
          </li>
          <li>
            <a href="#"> More </a>
          </li>
        </ul>
      </div>
      <div>
        <ul className=" text-blue-900 gap-8 font-medium text-lg flex">
          <li>
            <a href="#">Trips</a>
          </li>
          <li className=" border border-blue-500 px-2 rounded-md">
            <a href="#">Sign In</a>
          </li>
        </ul>
      </div>
    </div>
  )
}
