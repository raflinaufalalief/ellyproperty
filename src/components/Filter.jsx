import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { data } from "../data/ListingTerbaru/DataTerbaru.json"

const Filter = () => {
  const [type, setType] = useState("")
  const [typeProperty, setTypeProperty] = useState("")
  const [area, setArea] = useState("")
  const [inputValue, setInputValue] = useState("")
  const [lowerCases, setLowerCase] = useState("")

  const navigate = useNavigate()

  const handlerFilter = () => {
    // console.log(area);
    // const valueInput = area.toLowerCase();
    // const filterd = setInputValue(valueInput);

    // setLowerCase(valueInput);
    const matchFilter = data.find(
      (produk) => produk.area.toLowerCase() === area.toLowerCase()
    )
    if (matchFilter) {
      navigate(`/all-listings?area=${area}`)
    } else {
      alert(`Listingan ${area} tidak ada`)
    }
  }

  return (
    <div className="w-full from-[#BAE5FE] to-white pb-8" id="home">
      <div className="mx-auto containers">
        <div className="">
          <h1 className="mb-3 text-lg font-medium text-primary">
            Cari Properti Dengan Mudah
          </h1>
          <div className="space-y-5 text-center">
            <label
              for="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only "
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500 "
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 pl-10 text-sm text-gray-900 border rounded-lg "
                placeholder="Search Mockups, Logos..."
                value={area}
                onChange={(e) => setArea(e.target.value)}
                required
              />
            </div>
            <button
              onClick={handlerFilter}
              className="w-full px-4 py-2 mt-6 text-lg font-semibold bg-[#BAE5FE] rounded-md shadow-md text-primary"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Filter
