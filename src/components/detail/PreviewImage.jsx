import React, { useEffect, useRef, useState } from "react"
import { useParams } from "react-router-dom"
import { data } from "../../data/ListingTerbaru/DataTerbaru.json"
// Import Swiper React components
import { Pagination, Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { AiOutlineCloseCircle } from "react-icons/ai"

import "swiper/css"
import "swiper/css/pagination"
import { BsArrowLeft, BsArrowRight } from "react-icons/bs"

const PreviewImage = ({ props }) => {
  const { title } = useParams()
  const myData = data.find((data) => data.title === String(title))
  useEffect(() => {}, [myData])

  const [slideBegOrNot, handleSlideByState] = useState({
    isFirst: true,
    isLast: false,
  })
  const SlideRef = useRef()

  const handleNext = () => {
    SlideRef.current.swiper.slideNext()
  }

  const handlePrev = () => {
    SlideRef.current.swiper.slidePrev()
  }

  const onSlideChange = (swiper) => {
    handleSlideByState({
      isFirst: swiper.isBeginning,
      isLast: swiper.isEnd,
    })
  }

  const { isLast, isFirst } = slideBegOrNot

  return (
    <>
      <div className="fixed pt-[4rem] Sdesktop:pt-0 top-0 right-0 bg-black w-screen h-screen z-50 overflow-hidden ">
        <div className="flex items-center justify-between px-3 py-5">
          <div className=""></div>
          <AiOutlineCloseCircle
            onClick={() => props((prev) => !prev)}
            className="text-2xl font-normal text-white rounded-full shadow-lg cursor-pointer"
          />
        </div>
        <div>
          <Swiper
            slidesPerView={1}
            spaceBetween={0}
            className={"mySwiper"}
            ref={SlideRef}
            onSlideChange={onSlideChange}
            pagination={{
              el: ".swiper-paginations",
              type: "fraction",
            }}
            navigation={false}
            modules={[Pagination, Navigation]}
          >
            {myData.image.map((res, idx) => (
              <div className="relative" key={idx}>
                <SwiperSlide>
                  <div>
                    <div className="absolute text-3xl rounded-full py-1 px-1 bg-white/30  text-white top-[50%] left-7 mobile:left-1">
                      <BsArrowLeft
                        className={`Arrow ${isFirst ? "disabled" : ""}`}
                        onClick={handlePrev}
                      />
                    </div>
                    <div className="absolute text-3xl rounded-full py-1 px-1 bg-white/30  text-white top-[50%] right-5 mobile:right-1">
                      <BsArrowRight
                        className={` ${isLast ? "disabled" : ""}`}
                        onClick={handleNext}
                      />
                    </div>
                    <div className="flex justify-center mx-auto containers">
                      <img
                        src={res}
                        alt=""
                        onClick={() => setPreview((prev) => !prev)}
                        className="object-cover  mobile:h-[500px] Sdesktop:w-[800px] Sdesktop:h-[580px] cursor-pointer "
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
