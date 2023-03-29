import React from 'react'

function FrontBar() {
  return (
    <div>
      <div>
        <div className=" bg-white py-32  rounded-md mt-10">
          <div className=" px-14  flex -mt-28 items-center gap-12">
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
              <label> Round Trip</label>
            </div>
            <div className=" text-blue-900 font-semibold text-lg flex items-center gap-1">
              <input
                type="radio"
                className="form-radio text-indigo-600 h-5 w-5"
              />
              <label> Round Trip</label>
            </div>
          </div>

          <div className=" px-14 mt-3 flex items-center gap-7">
            {/*<div className="gap-1 text-blue-900 font-semibold text-lg flex items-center">
              <label> Origin City </label>
              <input
                type="text"
                className="form-radio text-indigo-600 h-5 w-5"
              />
             </div>*/}
            <div className=" text-blue-900 font-semibold text-lg flex flex-col gap-1">
              <label> Origin City </label>
              <input
                type="text"
                class="appearance-none border bg-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
              />
            </div>
            <div className=" text-blue-900 font-semibold flex-col text-lg flex gap-1">
              <label> Destination </label>
              <input
                type="text"
                class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
              />
            </div>

            <div className=" text-blue-900 font-semibold flex-col text-lg flex items-start gap-1">
              <label> Departure/Return </label>
              <input
                type="text"
                class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
              />
            </div>

            <div className=" text-blue-900 font-semibold flex-col text-lg flex  gap-1">
                 <label> Travelers </label>
                 <input
                   type="text"
                   class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                   id="username"
                 />
               </div>

            {/*

              <div className=" text-blue-900 font-semibold text-lg flex items-center gap-1">
                <label> Departure/Return </label>
                <input
                  type="text"
                  className="form-radio text-indigo-600 h-5 w-5"
                />
              </div>

            */}

            {/*
              
   
               <div className=" text-blue-900 font-semibold text-lg flex items-center gap-1">
                 <label> Travellers </label>
                 <input
                   type="text"
                   className="form-radio text-indigo-600 h-5 w-5"
                 />
               </div>
                
               */}
          </div>
        </div>
        <div> this is the 3rd div</div>
        <div>
          this is the 4th wrapped div and should inlude outer elements of the
          web page
        </div>
      </div>
    </div>
  )
}

export default FrontBar
