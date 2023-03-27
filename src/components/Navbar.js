import React, { Fragment } from 'react'
import logo from '../Media/Assets/logo.png'

export default function () {
  return (
    <div> 
    <div className=" border-b border-blue-500 py-4 flex justify-between">
        <div className="  h-8 w-8 ">
          <img src={logo} alt="logo" />
        </div>
      <div>
        <ul className=" text-white gap-8 font-medium text-lg flex">
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
        <ul className=" text-white gap-8 font-medium text-lg flex">
          <li>
            <a href="#">Trips</a>
          </li>
          <li className=" border border-white px-2 rounded-md">
            <a href="#">Sign In</a>
          </li>
        </ul>
      </div>
      </div>

      <div className=" text-center mt-20">
      <h1 className="  text-white font-normal text-4xl "> Where will you be flying today ?</h1>
      </div>
      </div>
  )
}
