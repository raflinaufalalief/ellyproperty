import React, { useEffect, useState } from "react"
import { data } from "../data/ListingTerbaru/DataTerbaru.json"
import { FaBath, FaBed, FaLocationDot } from "react-icons/fa6"
import { GiResize } from "react-icons/gi"
import { BsFillBuildingFill } from "react-icons/bs"
import { Link, useParams, useSearchParams } from "react-router-dom"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"

// import swiper styles
import "swiper/css"
import "swiper/css/pagination"

const Product = ({ pesanwa }) => {
  const { typeProperty, area } = useParams()
  const [secondary, setSecondary] = useState([])
  const [primary, setPrimary] = useState([])

  useEffect(() => {
    const filterd = data.filter(
      (produk) => produk.typeProperty === produk.typeProperty
    )
    setSecondary(filterd)
  }, [])
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

              <Link
                to="/all-listings"
                className="inline-block text-sm font-normal text-center transition duration-100 rounded-lg outline-none text-primary mobile:px-2 mobile:py-1 ring-indigo-300 hover:text-accent focus-visible:ring a Sdesktop:text-base"
              >
                Lihat selengkapnya
              </Link>
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
                <SwiperSlide>
                  <div key={index} className="relative w-full mx-auto">
                    <div className="p-4 bg-white border rounded-lg shadow-md">
                      <div className="relative flex justify-center overflow-hidden rounded-lg h-52">
                        <div className="w-full transition-transform duration-500 ease-in-out transform hover:scale-110">
                          <div className="absolute inset-0 bg-bg ">
                            <img
                              src={res.thumnail}
                              alt=""
                              className="Sdesktop:h-56 mobile:h-full tablet:h-full tablet:w-full mobile:w-full"
                            />
                          </div>
                        </div>
                        <span className="absolute top-0 left-0 z-10 inline-flex px-3 py-2 mt-3 ml-3 text-sm font-medium text-white rounded-lg select-none bg-accent">
                          {res.market.toUpperCase()}
                        </span>
                      </div>

                      <div className="mt-4">
                        <h2 className="text-base text-primary line-clamp-1">
                          {res.type}
                        </h2>
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
                          <h3 className="text-base font-medium">
                            Rp {res.harga}
                          </h3>
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
                          <a href={pesan}>
                            <div
                              // pesanwa={res.title}
                              className="px-2 py-2 text-xs rounded-md btn-outline "
                            >
                              whatsapp
                            </div>
                          </a>
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
