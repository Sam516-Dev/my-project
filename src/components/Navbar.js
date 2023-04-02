
import logo from '../Media/Assets/logo.png'

export default function () {
  return (
    <div className=''>
      <div className=" border-b border-blue-200 py-4 flex justify-between">
        <div className=" h-6 w-6 ">
          <img src={logo} alt="logo" />
        </div>
        <div className="mr-52">
          <ul className=" text-blue-50 gap-16 font-normal flex">
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
          <ul className=" text-blue-50 gap-8 font-normal text-lg flex">
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
        <h1 className="  text-white font-normal text-4xl ">
        
          Where will you be flying today ?
        </h1>
        <p className="text-blue-100 text-lg mt-1 font-light">
         
          More options, our best prices, less headaches
        </p>
      
      </div>
    </div>
  )
}
