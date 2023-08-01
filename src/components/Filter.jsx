import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { data } from "../data/ListingTerbaru/DataTerbaru.json"

const Filter = () => {
  // const [area, setArea] = useState("");
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredData, setFilteredData] = useState([])

  const navigate = useNavigate()

  const handleInput = (e) => {
    setSearchQuery(e.target.value)
  }

  const handleChange = (e) => {
    const matchFilter = data.find(
      (produk) =>
        produk.area.toLowerCase() === e.toLowerCase() ||
        produk.typeProperty.toLowerCase() === e.toLowerCase()
    )
    if (matchFilter) {
      navigate(`/all-listings?filter=${searchQuery}`)
    } else {
      alert(`Listingan ${searchQuery} tidak ada`)
    }
  }

  return (
    <div
      className="relative bottom-[5rem] w-full Sdesktop:containers Sdesaktop:mx-auto"
      id="home"
    >
      <div className=" mx-auto px-5 py-10 bg-[#BAE5FE] bg-opacity-95 rounded-lg ">
        <div className="">
          <h1 className="mb-3 text-lg font-medium text-primary Sdesktop:mb-3">
            Cari Properti Dengan Mudah
          </h1>
          <div className="text-center mobile:space-y-5 Sdesktop:flex Sdesktop:items-center Sdesktop:gap-x-5">
            <label
              for="default-search"
              class="mb-2 text-sm font-medium text-gray-900 sr-only "
            >
              Search
            </label>
            <div class="relative w-full">
              <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  class="w-5 h-5 text-gray-500 "
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
                class="p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Area, Type Property secondary atau primary"
                value={searchQuery} /* area state */
                onChange={handleInput} // setArea state
                required
              />
            </div>
            <button
              onClick={(e) => handleChange(searchQuery)}
              className="px-4 py-3 text-lg font-semibold bg-white rounded-md shadow-md mobile:py-2 mobile:w-full mobile:mt-6 text-primary"
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
