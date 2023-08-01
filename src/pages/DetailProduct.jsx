// data
import { data } from "../data/ListingTerbaru/DataTerbaru.json"
import PreviewImage from "../components/detail/PreviewImage"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import ProfileCard from "../components/ProfileCard"
// import { BsWhatsapp } from "react-icons/bs"
import SpekSingkat from "../components/detail/SpekSIngkat"
import Modal from "../components/detail/Modal"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"
// import { PhotoProvider, PhotoView } from "react-photo-view"
import "react-photo-view/dist/react-photo-view.css"

// import swiper styles
import "swiper/css"
import "swiper/css/pagination"

export default function ProductDetail() {
  useEffect(() => {
    window.scrollTo(0, 0)
  })
  const { title } = useParams()
  const myData = data.find((data) => data.title === String(title))
  useEffect(() => {}, [myData])
  const [preview, setPreview] = useState(false)
  return (
    <section className="bg-white mobile:py-[66px]">
      {/* Image gallery mobile */}
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        pagination={{ clickable: true }}
        className="hidden mobile:block"
      >
        {myData.image.map((res, idx) => (
          <div key={idx}>
            <SwiperSlide>
              <div className=" Sdesktop:hidden Sdesktop:pt-10 mobile:pt-">
                <img
                  src={res}
                  alt=""
                  onClick={() => setPreview((prev) => !prev)}
                  className="Sdesktop:w-[500px] Sdesktop:h-[500px] mobile:h-[300px] mobile:w-[500px] object-cover cursor-pointer"
                />
              </div>
            </SwiperSlide>
          </div>
        ))}
        {preview ? <PreviewImage props={setPreview} /> : null}
      </Swiper>
      {/* image galerry desktop */}
      <div class="mobile:hidden  mx-auto mt-6 max-w-2xl sm:px-6 Sdesktop:grid Sdesktop:max-w-7xl Sdesktop:grid-cols-3 Sdesktop:gap-x-8 Sdesktop:px-8 ">
        <div class="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-Sdesktop Sdesktop:block mobile:hidden">
          <img
            src={myData.image[0]}
            alt="Two each of gray, white, and black shirts laying flat."
            class="h-full w-full object-cover object-center"
          />
        </div>
        <div class="hidden Sdesktop:grid Sdesktop:grid-cols-1 Sdesktop:gap-y-8">
          <div class="aspect-h-2 aspect-w-3 overflow-hidden rounded-Sdesktop">
            <img
              src={myData.image[1]}
              alt="Model wearing plain black basic tee."
              class="h-full w-full object-cover object-center"
            />
          </div>
          <div class="aspect-h-2 aspect-w-3 overflow-hidden rounded-Sdesktop">
            <img
              src={myData.image[2]}
              class="h-full w-full object-cover object-center"
            />
          </div>
        </div>
        {/* utama */}
        <div class=" aspect-h-5 aspect-w-4 Sdesktop:aspect-h-4 Sdesktop:aspect-w-3 sm:overflow-hidden sm:rounded-Sdesktop">
          <img
            src={myData.image[0]}
            class="h-full w-full object-cover object-center"
            className="brightness-50"
          />
          <p
            onClick={() => setPreview((prev) => !prev)}
            className="flex items-center justify-center text-lg font-semibold text-white cursor-pointer"
          >
            Detail Gambar
          </p>
        </div>
        {preview ? <PreviewImage props={setPreview} /> : null}
      </div>
      {/*  informasi property */}
      <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 mobile:px-6 Sdesktop:grid Sdesktop:max-w-7xl Sdesktop:grid-cols-3 Sdesktop:grid-rows-[auto,auto,1fr] Sdesktop:gap-x-8 Sdesktop:px-8 Sdesktop:pb-24 Sdesktop:pt-16">
        <div className="Sdesktop:col-span-2 Sdesktop:border-r Sdesktop:border-gray-200 Sdesktop:pr-8">
          <div className="bg-accent w-fit px-4 py-[.30rem] rounded-md">
            <h1 className="text-xs font-medium text-white">{myData.type}</h1>
          </div>
          <div className="mt-4">
            <h2 className="font-medium text-black/70">
              {myData.market.toUpperCase()}
            </h2>
            <h1 className="text-2xl font-bold text-black/80">
              Rp {myData.harga}
            </h1>
            <h3 className="mt-2 text-lg font-medium text-black/80">
              {myData.title}
            </h3>
            <h4 className="font-medium text-black/80">{myData.area}</h4>
          </div>
          <hr className="my-3 rounded-full bg-black/10" />
          {/* sepsifikasi informasi */}
          <div className="flex flex-col py-5">
            <h1 className="text-lg font-bold text-black/70">
              Informasi Properti
            </h1>
            <h2 className="font-medium text-black/70">Spesifikasi</h2>
          </div>
          <SpekSingkat props={myData} datas={myData} />
          {/* Detail Property */}
          {/* sepsifikasi informasi */}
          <div className="flex">
            <Modal />
          </div>
          {/* Description and details */}

          <hr className="my-5 rounded-full bg-black/10" />
          <div className="py-4">
            <h1 className="font-medium text-black/70">Deskripsi</h1>
            <h2 className="mt-2 text-sm font-medium text-black/80">
              {myData.deskripsi}
            </h2>
          </div>
          <div />
        </div>
        {/* Options */}
        <div className="mobile:py-5">
          <ProfileCard pesanwa={myData.title} />
        </div>
      </div>
    </section>
  )
}
