import React from 'react'

export const SignUp = () => {
  return (
    <div className="mt-10 flex justify-between items-center bg-my-btn-color py-8 px-20">
      <div>
        <h3 className="text-white font-semibold text-lg">
         
          Sign up for our newsletter
        </h3>
        <p className=" text-my-bg-color text-sm leading-tight font-normal">
        
          Promo code and private deals of upto 30% off. <br />
          Just add your email, it's that simple
        </p>
      </div>
      <div className="flex justify-between items-center relative overflow-hidden">
        <input
          type="text"
          class="appearance-none border rounded-md  bg-my-gray-color py-2 px-24 text-gray-700 font-normal text-lg leading-tight focus:outline-none focus:shadow-outline"
          id="username"
        />
        <button className="bg-yellow-400 text-lg ml-60 rounded-md overflow-hidden font-semibold py-2 px-12 text-my-darker-color absolute ">
         
          Subscribe
        </button>
      </div>
    </div>
  )
}
