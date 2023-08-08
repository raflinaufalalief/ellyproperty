import React, { useEffect, useState } from "react"
import data from "../data/ListingTerbaru/DataTerbaru.json"
import { FaBath, FaBed, FaLocationDot } from "react-icons/fa6"
import { GiResize } from "react-icons/gi"
import { BsFillBuildingFill } from "react-icons/bs"
import { Link, useParams, useSearchParams } from "react-router-dom"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"

// import swiper styles
import "swiper/css"
import "swiper/css/pagination"
import { BiBath, BiBed } from "react-icons/bi"

const Product = ({ pesanwa }) => {
  const pesan = `https://wa.me/+628648355728?text=Saya ingin beli property ini ${pesanwa}`
  return (
    <section className="py-32">
      <div className="px-4 mx-auto containers">
        <div className="">
          {/* Listingan Terbaru */}
          <div className="ListinganTerbaru">
            <div className="flex items-end justify-between gap-4 mb-3 ">
              <h1 className="text-2xl font-medium text-primary mobile:text-lg ">
                Property Terbaru
              </h1>
            </div>

            <Swiper
              modules={[Pagination]}
              autoplay={true}
              slidesPerView={1}
              spaceBetween={30}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                1170: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
            >
              {data.map((res, index) => (
                <SwiperSlide key={index}>
                  <div>
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
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Product
