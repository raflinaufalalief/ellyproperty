import React, { useEffect } from "react"
import { useParams } from "react-router-dom"
import { data } from "../data/ListingTerbaru/DataTerbaru.json"
// Import Swiper React components
import { Pagination, Scrollbar } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { AiOutlineCloseCircle } from "react-icons/ai"

import "swiper/css"

import "swiper/css/pagination"

const PreviewImage = ({ props }) => {
  const { title } = useParams()
  const myData = data.find((data) => data.title === String(title))
  useEffect(() => {}, [myData])

  return (
    <>
      <div className="fixed pt-[4.2rem] top-0 right-0 bg-black w-screen h-screen z-50">
        <div className="flex items-center justify-between px-3 py-5">
          <div className=""></div>
          <AiOutlineCloseCircle
            onClick={() => props((prev) => !prev)}
            className="text-2xl font-normal text-white rounded-full shadow-lg cursor-pointer "
          />
        </div>

        <div className="">
          <Swiper
            modules={[Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
          >
            {myData.image.map((res, idx) => (
              <div key={idx}>
                <SwiperSlide>
                  <div>
                    <div className="flex justify-center mx-auto containers aspect-h-5">
                      <img
                        src={res}
                        alt=""
                        onClick={() => setPreview((prev) => !prev)}
                        className="object-cover  mobile:h-[500px] Sdesktop:w-[800px] Sdesktop:h-[550px] cursor-pointer "
                      />
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  )
}

export default PreviewImage
