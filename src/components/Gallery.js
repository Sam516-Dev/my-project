import React, { Fragment } from 'react'
import { MdNavigateNext } from 'react-icons/md'




export const Gallery = () => {
  return (
    <Fragment>
      <div className=" pt-8">
        <div className="flex justify-between mt-10">
          <h2 className=" text-my-text-color text-lg font-semibold">
            Our best flight deal from Nairobi
          </h2>

          <div className="flex">
            <p className=" text-my-text-color mr-3 font-semibold text-base ">
              Explore all deals
            </p>
            <div className="flex relative items-center">
              <MdNavigateNext size={18} />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
