import { PhotoProvider, PhotoView } from "react-photo-view"
import "react-photo-view/dist/react-photo-view.css"
// data
import { data } from "../data/ListingTerbaru/DataTerbaru.json"
import PreviewImage from "../components/PreviewImage"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import ProfileCard from "../components/ProfileCard"
import { GiResize } from "react-icons/gi"
import { BiBath, BiBed } from "react-icons/bi"
import { BsWhatsapp } from "react-icons/bs"
import Modal from "../components/Modal"
//
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"

// import swiper styles
import "swiper/css"
import "swiper/css/pagination"

const product = {
  name: "Propertylisting",
  href: "#",

  breadcrumbs: [
    { id: 1, name: "Primary", href: "#" },
    { id: 2, name: "Secondary", href: "#" },
  ],
}

export default function ProductDetail() {
  useEffect(() => {
    window.scrollTo(0, 0)
  })
  const { title } = useParams()
  const myData = data.find((data) => data.title === String(title))
  useEffect(() => {}, [myData])
  const [preview, setPreview] = useState(false)
  return (
    <section className="bg-white">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol
            role="list"
            className="flex items-center max-w-2xl px-4 mx-auto space-x-2 mobile:px-6 Sdesktop:max-w-7xl Sdesktop:px-8"
          >
            {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a
                    href={breadcrumb.href}
                    className="mr-2 text-sm font-medium text-gray-900"
                  >
                    {breadcrumb.name}
                  </a>
                  <svg
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="w-4 h-5 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))}
            <li className="text-sm">
              <a
                href={product.href}
                aria-current="page"
                className="font-medium text-gray-500 hover:text-gray-600"
              >
                {product.name}
              </a>
            </li>
          </ol>
        </nav>

        {/* Image gallery */}

        <Swiper
          modules={[Pagination]}
          slidesPerView={1}
          spaceBetween={30}
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 0,
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
          {myData.image.map((res, idx) => (
            <div key={idx}>
              <SwiperSlide>
                <div className="Sdesktop:pt-10">
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

        {/*  informasi property */}
        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 mobile:px-6 Sdesktop:grid Sdesktop:max-w-7xl Sdesktop:grid-cols-3 Sdesktop:grid-rows-[auto,auto,1fr] Sdesktop:gap-x-8 Sdesktop:px-8 Sdesktop:pb-24 Sdesktop:pt-16">
          <div className="Sdesktop:col-span-2 Sdesktop:border-r Sdesktop:border-gray-200 Sdesktop:pr-8">
            <div className="bg-accent w-fit px-4 py-[.30rem] rounded-full">
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
            <div className="grid grid-cols-3 Sdesktop:gap-0 ">
              {/* <!-- stat - start --> */}
              <div className="flex flex-col border-r-2 ">
                <div className="mr-3 space-x-2 font-bold text-indigo-500 mobile:text-2xl Sdesktop:text-3xl">
                  <h1 className="text-sm font-semibold text-black/70 w-[140px] ">
                    Luas Tanah
                    <div className="flex items-center space-x-3 text-sm font-semibold mobile:text-base ">
                      <span className="text-2xl">
                        <GiResize />
                      </span>
                      <p className="text-sm text-medium text-black/60">
                        {myData.lbb}
                      </p>
                    </div>
                  </h1>
                </div>
              </div>
              {/* <!-- stat - end --> */}
              {/* <!-- stat - start --> */}
              <div className="flex flex-col items-center border-r-2">
                <div className="text-xl font-bold text-indigo-500 sm:text-2xl Sdesktop:text-3xl">
                  <h1 className="text-sm font-semibold text-black/70">
                    Kamar Tidur
                    <div className="flex items-center space-x-3 text-sm font-semibold mobile:text-base ">
                      <span className="text-2xl">
                        <BiBed />
                      </span>
                      <p className="text-sm text-medium text-black/60">
                        {myData.kt}
                      </p>
                    </div>
                  </h1>
                </div>
              </div>

              {/* <!-- stat - start --> */}
              <div className="flex flex-col items-center">
                <div className="text-xl font-bold text-indigo-500 sm:text-2xl Sdesktop:text-3xl">
                  <h1 className="text-sm font-semibold text-black/70">
                    Kamar Mandi
                    <div className="flex items-center space-x-3 text-sm font-semibold mobile:text-base ">
                      <span className="text-2xl">
                        <BiBath />
                      </span>
                      <p className="text-sm text-medium text-black/60">
                        {myData.km}
                      </p>
                    </div>
                  </h1>
                </div>

                {/* <!-- stat - end --> */}
              </div>
            </div>
            <hr className="my-5 rounded-full bg-black/10" />
            {/* Detail Property */}
            <Modal />
          </div>

          {/* Options */}
          <div className="mt-4 Sdesktop:row-span-3 Sdesktop:mt-0 mobile:hidden">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl tracking-tight text-center text-gray-900">
              Hubungi Lebih lanjut
            </p>

            <form className="mt-10">
              {/* Card */}
              <div className="mt-10 ">
                <ProfileCard />
              </div>
            </form>
          </div>

          <div className="pb-10 Sdesktop:col-span-2 Sdesktop:col-start-1 Sdesktop:border-r Sdesktop:border-gray-200 Sdesktop:pb-16 Sdesktop:pr-8 Sdesktop:pt-6">
            {/* Description and details */}
            <hr className="my-5 rounded-full bg-black/10" />
            <div className="py-4">
              <h1 className="font-medium text-black/70">Deskripsi</h1>
              <h2 className="mt-2 text-sm font-medium text-black/80">
                {myData.deskripsi}
              </h2>
            </div>
            <div className="Sdesktop:hidden">
              <div className="px-3 py-2 mt-3 text-gray-600 bg-green-700 rounded shadow-sm hover:shadow hover:bg-green-800">
                <div className="flex items-center justify-center py-2 text-lg text-white gap-x-3">
                  <BsWhatsapp />
                  WhatsApp
                </div>
              </div>
            </div>
            <div />
          </div>
        </div>
      </div>
    </section>
  )
}
