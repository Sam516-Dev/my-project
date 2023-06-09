import React, { Fragment } from 'react'
import { MdNavigateNext } from 'react-icons/md'

export const Gallery = () => {
  return (
    <Fragment>
      <div className=" ">
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

        <div className="py-1 flex ">
          <div className="rounded-lg flex-col flex border  justify-between relative overflow-hidden  bg-white drop-shadow-[0_5px_5px_rgba(0,0,0,0.25)] w-1/3 h-96">
            <div className="flex  h-48 w-full ">
              <img
                src="https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdXB3azYxOTEyMzU5LXdpa2ltZWRpYS1pbWFnZS1rb3dlZTM0ay5qcGc.jpg"
                alt="example"
                className="object-center object-cover "
              />
            </div>
            <div className="flex justify-between pt-3 px-3">
              <label className="font-normal text-sm text-my-text-color uppercase">
                Matopeni
              </label>
              <label className="bg-red-300 px-2 py-0 text-sm rounded-full text-red-900 font-medium">
                Only 2 left
              </label>
            </div>
            <div className="px-3 font-semibold leading-tight text-lg text-my-text-color">
              4 nights at Matopeni Hotel <br /> and beach
            </div>
            <div className="flex flex-col px-3 bg-my-gray-color py-4">
              <label className="font-bold text-my-text-color text-lg">
                Ksh.8900
              </label>
              <label className="-mt-2 font-light  text-my-text-color">
                Matopeni.co.ke
              </label>
            </div>
          </div>
          <div className="rounded-lg flex-col flex mx-8  justify-between relative overflow-hidden  bg-white drop-shadow-[0_5px_5px_rgba(0,0,0,0.25)] w-1/3 h-96">
            <div className="flex  h-48 w-full ">
              <img
                src="https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcHg4NjI1MjItaW1hZ2Uta3d2eGRiMDYuanBn.jpg"
                alt="example"
                className="object-center object-cover "
              />
            </div>
            <div className="flex justify-between pt-3 px-3">
              <label className="font-normal text-sm text-my-text-color uppercase">
                Sagana
              </label>
              <label className="bg-red-300 px-2 py-0 text-sm rounded-full text-red-900 font-medium">
                Only 1 left
              </label>
            </div>
            <div className="px-3 font-semibold leading-tight text-lg text-my-text-color">
              4 nights at Matopeni Hotel <br /> and beach
            </div>
            <div className="flex flex-col px-3 bg-my-gray-color py-4">
              <label className="font-bold text-my-text-color text-lg">
                Ksh.7600
              </label>
              <label className="-mt-2 font-light  text-my-text-color">
                Sagana.co.ke
              </label>
            </div>
          </div>
          <div className="rounded-lg flex-col flex  justify-between relative overflow-hidden  bg-white drop-shadow-[0_5px_5px_rgba(0,0,0,0.25)] w-1/3 h-96">
            <div className="flex  h-48 w-full ">
              <img
                src="https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdXB3azYxODkwMDkzLXdpa2ltZWRpYS1pbWFnZS1rb3dveHBsdi5qcGc.jpg"
                alt="example"
                className="object-center object-cover "
              />
            </div>
            <div className="flex justify-between pt-3 px-3">
              <label className="font-normal text-sm text-my-text-color uppercase">
                Mombasa Raha
              </label>
              <label className="bg-green-300 px-2 py-0 text-sm rounded-full text-green-900 font-medium">
                On Sale
              </label>
            </div>
            <div className="px-3 font-semibold leading-tight text-lg text-my-text-color">
              4 nights at Matopeni Hotel <br /> and beach
            </div>
            <div className="flex flex-col px-3 bg-my-gray-color py-4">
              <label className="font-bold text-my-text-color text-lg">
                Ksh.9900
              </label>
              <label className="-mt-2 font-light  text-my-text-color">
                Mombasa.co.ke
              </label>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
