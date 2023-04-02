import React from 'react'
import { MdNavigateNext } from 'react-icons/md'

//MdNavigateNext

const Content = () => {
  return (
    <div>
      <div className="flex justify-between mt-10">
        <h2 className=" text-my-text-color text-lg font-bold">
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

      <div className=" bg-white overflow-hidden rounded-lg">
        <div className=" bg-my-gray-color py-3">
          <div className="flex mx-3 justify-between gap-28 mt-1">
            <h3 className="font-medium text-my-text-color text-lg">AIRLINE</h3>
            <h3 className="font-medium text-my-text-color text-lg mr-5">
              DESTINATION
            </h3>

            <h3 className="font-medium text-my-text-color text-lg  mr-8">
              {' '}
              DEPART
            </h3>
            <h3 className="font-medium text-my-text-color text-lg"> RETURN </h3>
            <h3 className="font-medium text-my-text-color text-lg"> COST </h3>
            <h3 className="font-medium text-my-text-color text-lg">
              BOOK HERE
            </h3>
            {/**/}
          </div>
        </div>

        <div className="flex py-3 mx-3 items-center justify-between mt-1">
          <div className="flex  flex-col justify-start">
            <p className="font-medium text-my-text-color text-lg"> Mombasa </p>
          </div>

          <div className="flex flex-col justify-start">
            <p className="font-medium text-my-text-color text-lg"> Lamu </p>
            <label> Lam78</label>
          </div>
          <div className="flex flex-col justify-start">
            <p className="font-medium text-my-text-color text-lg">
              FRI, JAN 11
            </p>
            <label> 6h 22min (1 stop) </label>
          </div>

          <div className="flex flex-col justify-start">
            <p className="font-medium text-my-text-color text-lg">
              TUE, JAN 17
            </p>
            <label> 5h 22min </label>
          </div>
          <div className="flex flex-col justify-start">
            <p className="font-medium text-my-text-color text-lg">KSH.9000</p>
            <label> M-pesa </label>
          </div>
          <button className="bg-my-btn2-color px-8 rounded-md py-2">
            Book Now
          </button>
        </div>

        <div className=" bg-my-gray-color">
          <div className="flex mx-3 py-3 items-center justify-between mt-1">
            <div className="flex  flex-col justify-start">
              <p className="font-medium text-my-text-color text-lg">Mombasa</p>
            </div>

            <div className="flex flex-col justify-start">
              <p className="font-medium text-my-text-color text-lg"> Lamu </p>
              <label> Lam78</label>
            </div>
            <div className="flex flex-col justify-start">
              <p className="font-medium text-my-text-color text-lg">
                FRI, JAN 11
              </p>
              <label> 6h 22min (1 stop) </label>
            </div>

            <div className="flex flex-col justify-start">
              <p className="font-medium text-my-text-color text-lg">
                TUE, JAN 17
              </p>
              <label> 5h 22min </label>
            </div>
            <div className="flex flex-col justify-start">
              <p className="font-medium text-my-text-color text-lg">KSH.9000</p>
              <label> M-pesa </label>
            </div>
            <button className="bg-my-btn2-color px-8 rounded-md py-2">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content
