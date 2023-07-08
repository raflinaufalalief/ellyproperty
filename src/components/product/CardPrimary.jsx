import React from "react"
import image from "../../assets/primary.jpeg"
import { BsArrowRight, BsArrowLeft } from "react-icons/bs"
import dataProduct from "../../data/dataProduct.json"
import { MdLocationOn } from "react-icons/md"
import { Link } from "react-router-dom"

// import swiper react components
import { Navigation } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

// import swiper styles
import "swiper/css"
import "swiper/css/navigation"

const CardPrimary = () => {
  return (
    <div>
      <div className="relative w-full mt-20">
        <div className="containers">
          <div className="flex justify-between mobile:flex-col">
            <h1 className="text-xl font-semibold text-black/90">Primary</h1>
            <h1 className="mb-5 text-sm font-normal text-black/70 mobile:text-xs">
              Properti Primary merupakan properti yang baru atau sedang dibangun
            </h1>
          </div>
        </div>
      </div>
      <Swiper
        className=""
        modules={[Navigation]}
        navigation={{
          nextEl: ".button-next-slide",
          prevEl: ".button-prev-slide",
        }}
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
        {dataProduct.map((result, index) => {
          const { title, location, price, desc, desc1 } = result
          return (
            <SwiperSlide key={index}>
              <div className="relative w-full mx-auto">
                <div className="p-4 bg-white border rounded-lg shadow-md">
                  <div className="relative flex justify-center overflow-hidden rounded-lg h-52">
                    <div className="w-full transition-transform duration-500 ease-in-out transform hover:scale-110">
                      <div className="absolute inset-0 bg-black ">
                        <img src={image} alt="" />
                      </div>
                    </div>
                    <span className="absolute top-0 left-0 z-10 inline-flex px-3 py-2 mt-3 ml-3 text-sm font-medium text-white rounded-lg select-none bg-accent">
                      Primary
                    </span>
                  </div>

                  <div className="mt-4 text-center">
                    <h2 className="text-base font-bold text-gray-800 Sdesktop:text-lg line-clamp-1">
                      {title}
                    </h2>
                    <div>
                      <div className="flex items-center justify-center mt-2 text-sm font-semibold text-gray-800 line-clamp-1">
                        <MdLocationOn className=" text-black/80" />
                        {location}
                      </div>
                    </div>
                  </div>
                  <div className="mt-2">
                    <div className="flex items-center justify-between font-normal text-gray-800 ">
                      <span className="mt-2">{desc}</span>
                    </div>
                    <hr className="bg-black/10 h-[1.5px] my-2" />
                    <div className="flex items-center justify-between font-medium text-gray-800 ">
                      <h1>{desc1.Lantai[0]}</h1>
                      <h1>{desc1.Lantai[1]}</h1>
                    </div>
                    <div className="flex items-center justify-between font-medium text-gray-800 ">
                      <h1>{desc1.LuasTanah[0]}</h1>
                      <h1>{desc1.LuasTanah[1]}</h1>
                    </div>
                    <div className="flex items-center justify-between font-medium text-gray-800 ">
                      <h1>{desc1.LuasBangunan[0]}</h1>
                      <h1>{desc1.LuasBangunan[1]}</h1>
                    </div>
                    <div className="flex items-center justify-between font-medium text-gray-800">
                      <h1>{desc1.KamarMandi[0]}</h1>
                      <h1>{desc1.KamarMandi[1]}</h1>
                    </div>
                    <div className="flex items-center justify-between font-medium text-gray-800 ">
                      <h1>{desc1.KamarTidur[0]}</h1>
                      <h1>{desc1.KamarTidur[1]}</h1>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 mt-8">
                    <div className="flex items-center">
                      <Link to="/product">
                        <button className="inline-flex w-full px-3 py-2 text-sm font-medium text-white transition-transform duration-300 ease-in-out transform rounded-lg select-none bg-accent hover:-translate-y-2">
                          view detail
                        </button>
                      </Link>
                    </div>
                    <div className="flex items-center justify-end">
                      <p className="inline-block font-semibold leading-tight text-accent whitespace-nowrap rounded-xl">
                        <span className="text-lg">{price}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
      <div className="relative">
        <div className="button-next-slide absolute -left-8  -top-72 z-10  duration-500 w-[40px] h-[40px] grid place-items-center text-white bg-accent hover:bg-accent/70 rounded-full">
          <BsArrowLeft />
        </div>
        <div className=" absolute -right-8  -top-72 z-10 button-prev-slide  duration-500 w-[40px] h-[40px] grid place-items-center text-white bg-accent hover:bg-accent/70 rounded-full">
          <BsArrowRight />
        </div>
      </div>
    </div>
  )
}

export default CardPrimary
