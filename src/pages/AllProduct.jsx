import React, { useEffect, useState } from "react"
import data from "../Data/ListinganPopular/DataPopular.json"
import { Link, useLocation, useNavigate } from "react-router-dom"

import { FaBath, FaBed, FaLocationDot } from "react-icons/fa6"
import { GiResize } from "react-icons/gi"
import { BsFillBuildingFill } from "react-icons/bs"

const AllProduct = ({ props }) => {
  const location = useLocation()
  const filterOption = new URLSearchParams(location.search).get("filter")
  const navigates = useNavigate()
  const [filteredProducts, setFilteredProducts] = useState([])
  useEffect(() => {
    if (filterOption) {
      const filtered = data.filter(
        (product) =>
          product.area.toLowerCase().includes(filterOption.toLowerCase()) ||
          product.typeProperty
            .toLowerCase()
            .includes(filterOption.toLowerCase())
      )
      setFilteredProducts(filtered)
    } else {
      setFilteredProducts(data)
    }
  }, [filterOption])
  useEffect(() => {
    window.scrollTo(0, 0)
  })
  // console.log(filteredProducts);
  return (
    <section>
      <div className="mx-auto containers ">
        <div className="mobile:px-4">
          {/* Listingan Terbaru */}
          <div className="ListinganTerbaru">
            {filteredProducts.map((res, index) => (
              <div key={index} className="relative w-full mx-auto">
                <div className="p-4 bg-white border rounded-lg shadow-md">
                  <div className="relative flex justify-center overflow-hidden rounded-lg h-52">
                    <div className="w-full transition-transform duration-500 ease-in-out transform hover:scale-110">
                      <div className="absolute inset-0 bg-bg ">
                        <img
                          src={res.thumnail}
                          alt=""
                          className="Sdesktop:h-56 mobile:h-full mobile:w-full"
                        />
                      </div>
                    </div>
                    <span className="absolute top-0 left-0 z-10 inline-flex px-3 py-2 mt-3 ml-3 text-sm font-medium text-white rounded-lg select-none bg-accent">
                      {res.market.toUpperCase()}
                    </span>
                  </div>

                  <div className="mt-4">
                    <h2 className="text-base font-bold text-gray-800 Sdesktop:text-lg line-clamp-1">
                      {res.title}
                    </h2>
                    <div>
                      <div className="flex items-center mt-2 text-sm font-normal text-gray-800 gap-x-1 line-clamp-1">
                        <FaLocationDot className=" text-black/80" />
                        {res.area}
                      </div>
                    </div>
                    <div className="my-3">
                      <h3 className="text-base font-medium">Rp {res.harga}</h3>
                    </div>
                    <hr className="my-2 bg-text/20" />
                    <div className="flex justify-start gap-x-4 ">
                      <div className="flex items-center gap-x-2">
                        <FaBath className="text-xbase" />
                        <h1 className="text-sm font-normal">{res.km}</h1>
                      </div>
                      <div className="flex items-center gap-x-2">
                        <FaBed className="text-base" />
                        <h1 className="text-sm font-normal">{res.kt}</h1>
                      </div>
                      <div className="flex items-center gap-x-2">
                        <GiResize className="text-base" />
                        <h1 className="text-sm font-normal">{res.lb}</h1>
                      </div>
                      <div className="flex items-center gap-x-2">
                        <BsFillBuildingFill className="text-xl" />
                        <h1 className="text-sm font-normal">{res?.lbb}</h1>
                      </div>
                    </div>
                    <hr className="my-2 bg-text/20" />
                  </div>

                  <div className="flex justify-between mt-5">
                    <div className="flex items-center">
                      <Link to={`/listings/detail/${res.title}`}>
                        <button className="px-2 py-2 text-xs rounded-md btn-outline ">
                          Detail Unit
                        </button>
                      </Link>
                    </div>
                    <div className="flex items-center">
                      <Link to={`/listings/detail/${res.title}`}>
                        <button className="px-2 py-2 text-xs rounded-md btn-outline ">
                          whatsapp
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AllProduct
