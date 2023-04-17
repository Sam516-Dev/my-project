import React from 'react'

function Footer() {
  return (
    <div>
      <div className=" bg-my-footer-bg-color text-white py-8 px-20">
        <div className="flex justify-between">
          <div>
            <h4 className=" text-lg">COMPANY </h4>
            <ul className=" text-blue-50 gap-3 font-normal flex flex-col">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#"> Mobile </a>
              </li>
              <li>
                <a href="#"> How we work </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className=" text-lg">CONTACT </h4>
            <ul className=" text-blue-50 gap-3 font-normal flex flex-col">
              <li>
                <a href="#">Help/FAQ</a>
              </li>
              <li>
                <a href="#">Press</a>
              </li>
              <li>
                <a href="#"> Affliates </a>
              </li>
              <li>
                <a href="#"> Direct Routes </a>
              </li>
              <li>
                <a href="#"> Partners </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className=" text-lg">MORE </h4>
            <ul className=" text-blue-50 gap-3 font-normal flex flex-col">
              <li>
                <a href="#">Airline Fee</a>
              </li>
              <li>
                <a href="#">Airines</a>
              </li>
              <li>
                <a href="#"> Low Fare trips </a>
              </li>
              <li>
                <a href="#"> Direct Routes </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
