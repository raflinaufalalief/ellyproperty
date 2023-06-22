import React, { useEffect, useState } from "react"
import axios from "axios"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper"

// import swiper styles
import "swiper/css"
import "swiper/css/autoplay"

const CardsTestimoni = () => {
  const [datas, setDatas] = useState([])
  useEffect(() => {
    const getComment = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/comments")
        const data = await response.data.comments
        setDatas(data)
      } catch (error) {
        console.log(error)
      }
    }
    getComment()
  }, [])

  return (
    <Swiper
      modules={[Autoplay]}
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
      {datas.map((result, index) => (
        <SwiperSlide key={index}>
          <div>
            <div class="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
              <div class="h-28 overflow-hidden rounded-t-lg bg-[#9d789b]"></div>
              <div class="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                <img src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp" />
              </div>
              <div class="p-6">
                <h4 class="mb-4 text-2xl font-semibold">
                  {result.user.username}
                </h4>
                <hr />
                <p class="mt-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="inline-block h-7 w-7 pr-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                  </svg>
                  {result.body.substring(0, 20)}...
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default CardsTestimoni
