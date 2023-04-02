import React from 'react'
import { MdLocationOn, MdDateRange } from 'react-icons/md'
import { BsPeopleFill } from 'react-icons/bs'

//MdLocationOn MdDateRange BsPeopleFill

function FrontBar() {
  return (
    <div>
      <div className=" relative overflow-hidden bg-white py-36 drop-shadow-[0_5px_5px_rgba(0,0,0,0.30)] rounded-md mt-10">
        <form className=" px-14  flex -mt-28 items-center gap-12">
          <div className="gap-1 text-blue-900 font-semibold text-lg flex items-center">
            <input
              type="radio"
              className="form-radio text-indigo-600 h-5 w-5"
            />
            <label> Round Trip</label>
          </div>
          <div className=" text-blue-900 font-semibold text-lg flex items-center gap-1">
            <input
              type="radio"
              className="form-radio text-indigo-600 h-5 w-5"
            />
            <label> One-Way</label>
          </div>
          <div className=" text-blue-900 font-semibold text-lg flex items-center gap-1">
            <input
              type="radio"
              className="form-radio text-indigo-600 h-5 w-5"
            />
            <label> Multi-City </label>
          </div>
        </form>

        <div className=" px-14 mt-6  flex items-center justify-between gap-7">
          <div className=" text-blue-900 font-semibold text-lg flex flex-col gap-1">
            <label> Origin City </label>
            <div className="flex relative items-center">
              <MdLocationOn size={25} className="absolute ml-1 text-gray-400" />
              <input
                type="text"
                class="appearance-none border bg-slate-200 rounded w-full py-2 px-3 text-gray-700 font-normal text-lg leading-tight focus:outline-none focus:shadow-outline"
                id="username"
              />
            </div>
          </div>
          <div className=" text-blue-900 font-semibold flex-col text-lg flex gap-1">
            <label> Destination </label>
            <div className="flex relative items-center">
              <MdLocationOn size={25} className="absolute ml-1 text-gray-400" />
              <input
                type="text"
                class="appearance-none bg-slate-200 border rounded w-full py-2 px-3 text-gray-700 font-normal text-lg leading-tight focus:outline-none focus:shadow-outline"
                id="username"
              />
            </div>
          </div>

          <div className=" text-blue-900 font-semibold flex-col text-lg flex items-start gap-1">
            <label> Departure/Return </label>
            <div className="flex relative items-center">
              <MdDateRange size={25} className="absolute ml-1 text-gray-400" />
              <input
                type="text"
                class="appearance-none bg-slate-200 border rounded w-full py-2 px-3 text-gray-700 font-normal text-lg leading-tight focus:outline-none focus:shadow-outline"
                id="username"
              />
            </div>
          </div>

          <div className=" text-blue-900 font-semibold flex-col text-lg flex  gap-1">
            <label> Travelers </label>
            <div className="flex relative items-center">
              <BsPeopleFill size={25} className="absolute ml-1 text-gray-400" />
              <input
                type="text"
                class="appearance-none bg-slate-200 border rounded w-full py-2 px-3 text-blue-600 font-normal text-lg leading-tight focus:outline-none focus:shadow-outline"
                id="username"
              />
            </div>
          </div>
        </div>

        <div className=" px-12 absolute mt-10 mx-auto w-full py-4 bg-slate-200">
          <div className="flex justify-between">
            <div className="flex gap-20">
              <label className="text-blue-900 font-medium"> Add a Hotel </label>
              <div>
                <label className="text-blue-900 font-medium"> Add a Car </label>
              </div>
            </div>
            <div>
              <button className="bg-blue-600 px-8 rounded-md  py-3">
                <label className="text-white font-medium">
                  Search Flights
                </label>
              </button>
            </div>
          </div>
        </div>
      </div>     
    </div>
  )
}

export default FrontBar
