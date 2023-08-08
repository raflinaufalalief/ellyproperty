import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import data from "../data/ListingTerbaru/DataTerbaru.json"

const Filter = () => {
  const [selectedLocation, setSelectedLocation] = useState("")
  const [selectedTypeProperty, setSelectedTypeProperty] = useState("")
  const [selectedConditionProp, setSelectedConditionProp] = useState("")

  const uniqueAreas = [...new Set(data.map((item) => item.area))]
  const uniqueTypeProp = [...new Set(data.map((item) => item.type))]
  const uniqueConditionProp = [
    ...new Set(data.map((item) => item.typeProperty)),
  ]

  const handleLocationChange = (e) => {
    setSelectedLocation(e.target.value)
  }

  const handleTypePropertyChange = (e) => {
    setSelectedTypeProperty(e.target.value)
  }

  const handleConditionPropChange = (e) => {
    setSelectedConditionProp(e.target.value)
  }

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    // Prepare the filters to pass as search params

    const queryParams = new URLSearchParams()

    if (selectedLocation) {
      queryParams.set("location", selectedLocation)
    }
    if (selectedTypeProperty) {
      queryParams.set("typeProperty", selectedTypeProperty)
    }
    if (selectedConditionProp) {
      queryParams.set("conditionProp", selectedConditionProp)
    }

    // Use the 'navigate' function to navigate to the results page with filters as search params

    navigate(`/all-listings?${queryParams}`)
  }

  return (
    <>
      <div className="pb-10">
        <form onSubmit={handleSubmit}>
          <div className="px-[35px] py-6 max-w-[1170px] mx-auto flex flex-col Sdesktop:flex-row justify-between gap-4 Sdesktop:gap-x-3 relative Sdesktop:-top-14 Sdesktop:shadow  bg-[#BAE5FE] Sdesktop:backdrop-blur rounded-lg">
            <select
              value={selectedLocation}
              onChange={handleLocationChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="">Pilih Lokasi</option>
              {uniqueAreas.map((area, index) => (
                <option key={index} value={area}>
                  {area}
                </option>
              ))}
            </select>
            <select
              value={selectedTypeProperty}
              onChange={handleTypePropertyChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="">Pilih Type Property</option>
              {uniqueTypeProp.map((area, index) => (
                <option key={index} value={area}>
                  {area}
                </option>
              ))}
            </select>
            <select
              value={selectedConditionProp}
              onChange={handleConditionPropChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="">Pilih Type</option>
              {uniqueConditionProp.map((area, index) => (
                <option key={index} value={area}>
                  {area}
                </option>
              ))}
            </select>
            {/* Render the rest of your select elements similarly */}
            <button
              type="submit"
              className="Sdesktop:w-[300px] py-2    text-base font-semibold text-white bg-blue-700 rounded-md "
            >
              Cari
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Filter
