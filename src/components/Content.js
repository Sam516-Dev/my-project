import React from 'react'
import { MdNavigateNext } from 'react-icons/md'
//hhh

const Content = () => {
  return (
    <div>
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

      <div>
        <table className="min-w-full divide-y drop-shadow-[0_3px_3px_rgba(0,0,0,0.20)] rounded-lg overflow-hidden mt-1 ">
          <thead>
            <tr className="bg-my-gray-color min-h-full text-my-text-color">
              <th
                scope="col"
                className="px-6 py-3 text-left text-lg font-medium"
              >
                AIRLINE
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-lg font-medium"
              >
                DESTINATION
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-lg font-medium"
              >
                DEPART
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-lg font-medium"
              >
                RETURN
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-lg font-medium"
              >
                COST
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-lg font-medium w-1/6"
              >
                BOOK HERE
              </th>
            </tr>
          </thead>

          <tbody className="bg-white ">
            <tr>
              <td className=" py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="ml-4">
                    <div className="text-lg font-medium text-my-text-color">
                      Mombasa
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex flex-col justify-start">
                  <p className="font-medium text-my-text-color text-lg">
                  
                    Lamu
                  </p>
                  <label> Lam78</label>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex flex-col justify-start">
                  <p className="font-medium text-my-text-color text-lg">
                    FRI, JAN 11
                  </p>
                  <label> 6h 22min (1 stop) </label>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex flex-col justify-start">
                  <p className="font-medium text-my-text-color text-lg">
                    TUE, JAN 17
                  </p>
                  <label> 5h 22min </label>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex flex-col justify-start">
                  <p className="font-medium text-my-text-color text-lg">
                    KSH.9000
                  </p>
                  <label> M-pesa </label>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-lg font-medium">
                <button className="bg-my-btn2-color px-8 rounded-md py-2">
                  Book Now
                </button>
              </td>
            </tr>

            <tr className="bg-my-gray-color">
              <td className=" py-3 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="ml-4">
                    <div className="text-lg font-medium text-my-text-color">
                      Mombasa
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-3 whitespace-nowrap">
                <div className="flex flex-col justify-start">
                  <p className="font-medium text-my-text-color text-lg">
                    {' '}
                    Lamu{' '}
                  </p>
                  <label> Lam78</label>
                </div>
              </td>
              <td className="px-6 py-3 whitespace-nowrap">
                <div className="flex flex-col justify-start">
                  <p className="font-medium text-my-text-color text-lg">
                    FRI, JAN 11
                  </p>
                  <label> 6h 22min (1 stop) </label>
                </div>
              </td>
              <td className="px-6 py-3 whitespace-nowrap">
                <div className="flex flex-col justify-start">
                  <p className="font-medium text-my-text-color text-lg">
                    TUE, JAN 17
                  </p>
                  <label> 5h 22min </label>
                </div>
              </td>
              <td className="px-6 py-3 whitespace-nowrap">
                <div className="flex flex-col justify-start">
                  <p className="font-medium text-my-text-color text-lg">
                    KSH.9000
                  </p>
                  <label> M-pesa </label>
                </div>
              </td>
              <td className="px-6 py-3 whitespace-nowrap text-right text-lg font-medium">
                <button className="bg-my-btn2-color px-8 rounded-md py-2">
                  Book Now
                </button>
              </td>
            </tr>
            <tr>
              <td className=" py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="ml-4">
                    <div className="text-lg font-medium text-my-text-color">
                      Mombasa
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex flex-col justify-start">
                  <p className="font-medium text-my-text-color text-lg">
                    {' '}
                    Lamu{' '}
                  </p>
                  <label> Lam78</label>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex flex-col justify-start">
                  <p className="font-medium text-my-text-color text-lg">
                    FRI, JAN 11
                  </p>
                  <label> 6h 22min (1 stop) </label>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex flex-col justify-start">
                  <p className="font-medium text-my-text-color text-lg">
                    TUE, JAN 17
                  </p>
                  <label> 5h 22min </label>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex flex-col justify-start">
                  <p className="font-medium text-my-text-color text-lg">
                    KSH.9000
                  </p>
                  <label> M-pesa </label>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-lg font-medium">
                <button className="bg-my-btn2-color px-8 rounded-md py-2">
                  Book Now
                </button>
              </td>
            </tr>

            <tr className="bg-my-gray-color">
              <td className=" py-3 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="ml-4">
                    <div className="text-lg font-medium text-my-text-color">
                      Mombasa
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-3 whitespace-nowrap">
                <div className="flex flex-col justify-start">
                  <p className="font-medium text-my-text-color text-lg">
                    {' '}
                    Lamu{' '}
                  </p>
                  <label> Lam78</label>
                </div>
              </td>
              <td className="px-6 py-3 whitespace-nowrap">
                <div className="flex flex-col justify-start">
                  <p className="font-medium text-my-text-color text-lg">
                    FRI, JAN 11
                  </p>
                  <label> 6h 22min (1 stop) </label>
                </div>
              </td>
              <td className="px-6 py-3 whitespace-nowrap">
                <div className="flex flex-col justify-start">
                  <p className="font-medium text-my-text-color text-lg">
                    TUE, JAN 17
                  </p>
                  <label> 5h 22min </label>
                </div>
              </td>
              <td className="px-6 py-3 whitespace-nowrap">
                <div className="flex flex-col justify-start">
                  <p className="font-medium text-my-text-color text-lg">
                    KSH.9000
                  </p>
                  <label> M-pesa </label>
                </div>
              </td>
              <td className="px-6 py-3 whitespace-nowrap text-right text-lg font-medium">
                <button className="bg-my-btn2-color px-8 rounded-md py-2">
                  Book Now
                </button>
              </td>
            </tr>
            <tr>
              <td className=" py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="ml-4">
                    <div className="text-lg font-medium text-my-text-color">
                      Mombasa
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex flex-col justify-start">
                  <p className="font-medium text-my-text-color text-lg">
                    {' '}
                    Lamu{' '}
                  </p>
                  <label> Lam78</label>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex flex-col justify-start">
                  <p className="font-medium text-my-text-color text-lg">
                    FRI, JAN 11
                  </p>
                  <label> 6h 22min (1 stop) </label>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex flex-col justify-start">
                  <p className="font-medium text-my-text-color text-lg">
                    TUE, JAN 17
                  </p>
                  <label> 5h 22min </label>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex flex-col justify-start">
                  <p className="font-medium text-my-text-color text-lg">
                    KSH.9000
                  </p>
                  <label> M-pesa </label>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-lg font-medium">
                <button className="bg-my-btn2-color px-8 rounded-md py-2">
                  Book Now
                </button>
              </td>
            </tr>

            <tr className="bg-my-gray-color">
              <td className=" py-3 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="ml-4">
                    <div className="text-lg font-medium text-my-text-color">
                      Mombasa
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-3 whitespace-nowrap">
                <div className="flex flex-col justify-start">
                  <p className="font-medium text-my-text-color text-lg">
                    {' '}
                    Lamu{' '}
                  </p>
                  <label> Lam78</label>
                </div>
              </td>
              <td className="px-6 py-3 whitespace-nowrap">
                <div className="flex flex-col justify-start">
                  <p className="font-medium text-my-text-color text-lg">
                    FRI, JAN 11
                  </p>
                  <label> 6h 22min (1 stop) </label>
                </div>
              </td>
              <td className="px-6 py-3 whitespace-nowrap">
                <div className="flex flex-col justify-start">
                  <p className="font-medium text-my-text-color text-lg">
                    TUE, JAN 17
                  </p>
                  <label> 5h 22min </label>
                </div>
              </td>
              <td className="px-6 py-3 whitespace-nowrap">
                <div className="flex flex-col justify-start">
                  <p className="font-medium text-my-text-color text-lg">
                    KSH.9000
                  </p>
                  <label> M-pesa </label>
                </div>
              </td>
              <td className="px-6 py-3 whitespace-nowrap text-right text-lg font-medium">
                <button className="bg-my-btn2-color px-8 rounded-md py-2">
                  Book Now
                </button>
              </td>
            </tr>
            {/* Add more rows here */}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Content
