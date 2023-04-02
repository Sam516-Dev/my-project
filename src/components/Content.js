import React from 'react'
import { MdNavigateNext } from 'react-icons/md'

//MdNavigateNext

const Content = () => {
  return (
    <div className="flex justify-between mt-10">
      <h2 className=" text-my-text-color text-lg font-bold">
        Our best flight deal from Nairobi
      </h2>

      <div className='flex'>
        <p className=" text-my-text-color font-semibold text-base ">
          Explore all deals
        </p>
        <div className="flex relative items-center">
          <MdNavigateNext size={18} className="absolute ml-4 text-white" />
        </div>
      </div>
    </div>
  )
}

export default Content
