import React from 'react'

function FrontBar() {
  return (
    <div>
      <div>
        <div className=" bg-green-400 py-20 rounded-lg mt-10">
          <div className=" bg-yellow-300 px-14 flex items-center gap-7">
            <div className="gap-2 flex items-center">
              <input
                type="radio"
                className="form-radio text-indigo-600 h-5 w-5"
              />
              <label> Round Trip</label>
            </div>
            <div className=" flex items-center gap-2">
              <input
                type="radio"
                className="form-radio text-indigo-600 h-5 w-5"
              />
              <label> Round Trip</label>
            </div>
            <div className=" flex items-center gap-2">
              <input
                type="radio"
                className="form-radio text-indigo-600 h-5 w-5"
              />
              <label> Round Trip</label>
            </div>
          </div>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default FrontBar
