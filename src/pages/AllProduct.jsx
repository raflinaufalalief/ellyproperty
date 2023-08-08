import React, { useEffect, useState } from "react"
import { ImSpinner8 } from "react-icons/im"
import Footer from "../components/Footer"

import data from "../data/ListingTerbaru/DataTerbaru.json"

// icons
import { Link, useLocation, useNavigate } from "react-router-dom"
import { BiBath, BiBed } from "react-icons/bi"
import { GiResize } from "react-icons/gi"
import { BsFillBuildingFill } from "react-icons/bs"

const Product = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  })

  const location = useLocation()
  const filterSelected = {
    location: new URLSearchParams(location.search).get("location"),
    typeProperty: new URLSearchParams(location.search).get("typeProperty"),
    conditionProp: new URLSearchParams(location.search).get("conditionProp"),
  }

  const [filteredProduct, setFilteredProduct] = useState([])
  useEffect(() => {
    let filtered = data

    if (filterSelected.location) {
      filtered = filtered.filter((product) =>
        product.area.includes(filterSelected.location)
      )
    }

    if (filterSelected.typeProperty) {
      filtered = filtered.filter((product) =>
        product.type.includes(filterSelected.typeProperty)
      )
    }

    if (filterSelected.conditionProp) {
      filtered = filtered.filter((product) =>
        product.typeProperty.includes(filterSelected.conditionProp)
      )
    }

    setFilteredProduct(filtered)
  }, [])

  // ...

  return (
    <>
      <section>
        <div className="px-4 mx-auto containers">
          <div className="">
            {/* Listingan Terbaru */}
            <div className="ListinganTerbaru">
              <div className="grid gap-10 tablet:grid-cols-2 Sdesktop:grid-cols-3">
                {filteredProduct.length === 0 ? (
                  <section className="Sdesktop:mx-80">
                    <div className="flex items-center justify-center text-center mt-36 Sdesktop:mt-28 ">
                      <p className="text-lg text-primary">
                        Maaf Listingan belum tersedia
                      </p>
                    </div>
                    <div className="flex items-center justify-center mt-5 text-center">
                      <Link to="/" className="text-blue-500 underline">
                        Kembali ke Halaman Utama
                      </Link>
                    </div>
                  </section>
                ) : (
                  filteredProduct.map((res, index) => (
                    <div key={index}>
                      <div className="relative w-full mx-auto ">
                        <div className="p-4 bg-white border rounded-lg shadow-lg hover:shadow-2xl">
                          <Link
                            to={`/listings/detail/${res.title}`}
                            href="#"
                            className="relative inline-block w-full "
                          >
                            <div className="relative flex justify-center overflow-hidden rounded-lg h-52">
                              <div className="w-full transition-transform duration-500 ease-in-out transform hover:scale-110">
                                <div className="absolute inset-0 bg-black ">
                                  <img
                                    src={res.thumnail}
                                    alt=""
                                    className="w-full h-52"
                                  />
                                </div>
                              </div>

                              <span className="absolute top-0 left-0 z-10 inline-flex px-3 py-2 mt-3 ml-3 text-sm font-medium text-white bg-red-500 rounded-lg select-none">
                                {res.market.toUpperCase()}
                              </span>
                            </div>

                            <div className="mt-4">
                              <div className="flex mb-4 text-sm ">
                                <div className="px-2 text-white rounded-md bg-accent">
                                  {res.type}
                                </div>
                              </div>
                              <h2
                                className="mt-2 text-base font-medium text-gray-800 md:text-lg line-clamp-1"
                                title=".."
                              >
                                {res.title}
                              </h2>
                              <p
                                className="mt-2 text-sm text-gray-800 line-clamp-1"
                                title=".."
                              >
                                {res.area}
                              </p>
                            </div>
                            <div className="flex mt-3">
                              <div className="flex space-x-5 overflow-hidden">
                                <p className="flex items-center font-medium text-gray-800">
                                  <BiBed className="mr-1 text-base" /> {res.kt}
                                </p>

                                <p className="flex items-center font-medium text-gray-800">
                                  <BiBath className="mr-1 text-base" />
                                  {res.km}
                                </p>
                                <p className="flex items-center font-medium text-gray-800">
                                  <GiResize className="mr-1 text-base" />
                                  {res.lb}
                                </p>
                                <p className="flex items-center font-medium text-gray-800">
                                  <BsFillBuildingFill className="mr-1 text-base" />
                                  {res.lbb}
                                </p>
                              </div>
                            </div>
                          </Link>
                          <div className="grid grid-cols-2 mt-5">
                            <div className="flex items-center">
                              <p className="font-medium line-clamp-1">
                                Rp {res.harga}
                              </p>
                            </div>

                            <div className="flex items-end justify-end">
                              <Link to={`/listings/detail/${res.title}`}>
                                <button className="px-1 py-1 text-xs rounded-md btn-outline ">
                                  Detail Unit
                                </button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Product
