import React, { useState } from "react"
import { data } from "../data/ListingTerbaru/DataTerbaru.json"
import { FaBath, FaBed, FaLocationDot } from "react-icons/fa6"
import { GiResize } from "react-icons/gi"
import { BsFillBuildingFill } from "react-icons/bs"
import { Link } from "react-router-dom"
import { Swiper, SwiperSlide } from "swiper/react"
// import { Autoplay } from "swiper"
import { Pagination } from "swiper/modules"

// import swiper styles
import "swiper/css"
import "swiper/css/autoplay"
import "swiper/css/pagination"

const Product = () => {
  return (
    <section>
      <div className="mx-auto containers ">
        <div className="mobile:px-4">
          {/* Listingan Terbaru */}
          <div className="ListinganTerbaru">
            <div className="flex items-end justify-between gap-4 mb-3 ">
              <h1 className="text-2xl font-medium text-primary mobile:text-lg ">
                Property Terbaru
              </h1>

              <Link
                to="/product"
                className="inline-block text-sm font-normal text-center transition duration-100 rounded-lg outline-none text-primary mobile:px-2 mobile:py-1 ring-indigo-300 hover:text-accent focus-visible:ring a Sdesktop:text-base"
              >
                Lihat selengkapnya
              </Link>
            </div>

            <Swiper
              modules={[Pagination]}
              pagination={{
                clickable: true,
              }}
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
                <SwiperSlide>
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
                          <div className="flex items-center mt-2 text-sm font-normal text-gray-800 line-clamp-1">
                            <FaLocationDot className=" text-black/80" />
                            {res.area}
                          </div>
                        </div>
                        <div className="mt-4">
                          <h1 className="text-sm font-normal text-text/60">
                            Harga mulai dari
                          </h1>
                          <h3 className="text-base font-medium">
                            Rp {res.harga}
                          </h3>
                        </div>
                        <hr className="my-2 bg-text/20" />
                        <div className="flex justify-center gap-x-4 ">
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

                      <div className="grid grid-cols-2 mt-8">
                        <div className="flex items-center">
                          <Link to={`/listings/detail/${res.title}`}>
                            <button className="inline-flex w-full px-3 py-2 text-sm font-medium text-white transition-transform duration-300 ease-in-out transform rounded-lg select-none bg-accent hover:-translate-y-2">
                              view detail
                            </button>
                          </Link>
                        </div>
                        <div className="flex items-center justify-end">
                          <p className="inline-block font-semibold leading-tight text-accent whitespace-nowrap rounded-xl">
                            <span className="text-lg">
                              <button className="inline-flex w-full px-3 py-2 text-sm font-medium text-white transition-transform duration-300 ease-in-out transform bg-green-800 rounded-lg select-none hover:-translate-y-2">
                                whatsapp
                              </button>
                            </span>
                          </p>
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
