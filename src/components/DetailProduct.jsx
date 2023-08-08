// data
import data from "../data/ListingTerbaru/DataTerbaru.json"
import PreviewImage from "./detail/PreviewImage"
import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import ProfileCard from "./ProfileCard"
import SpekSingkat from "./detail/SpekSingkat"
import Modal from "./detail/Modal"
import { Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
//
import { PhotoProvider, PhotoView } from "react-photo-view"
import "react-photo-view/dist/react-photo-view.css"

// import swiper styles
import "swiper/css"
import "swiper/css/pagination"

const DetailProduct = () => {
  const { title } = useParams()
  const myData = data.find((data) => data.title === String(title))
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [myData])
  const [preview, setPreview] = useState(false)
  const [mainImage, setMainImage] = useState(myData.image[0])
  return (
    <>
      <div key={myData.id} className="">
        <div className="w-full">
          <div className="mx-auto containers mobile:pt-16 Sdesktop:pt-28">
            <Swiper
              modules={[Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              pagination={{ clickable: true }}
              className="Sdesktop:hidden"
            >
              {myData.image.map((res, idx) => (
                <div key={idx} className="">
                  <SwiperSlide>
                    <div className="">
                      <Link
                        to={`/listings/detail/${myData.title}/previewImage`}
                        className=""
                      >
                        <img
                          src={res}
                          alt=""
                          className="w-[500px] h-[300px] object-cover cursor-pointer"
                        />
                      </Link>
                    </div>
                  </SwiperSlide>
                </div>
              ))}
            </Swiper>
            <div className="mobile:hidden ">
              <PhotoProvider>
                <div className="Sdesktop:flex Sdesktop:gap-x-4 Sdesktop:items-center Sdesktop:flex-col">
                  <Link
                    to={`/listings/detail/${myData.title}/previewImage`}
                    className="Sdesktop:mb-10"
                  >
                    <img
                      src={mainImage}
                      className="w-[300px] h-[400px] rounded-md"
                      alt=""
                    />
                  </Link>
                  <div className="flex gap-x-5">
                    {myData.image.map((item, index) => (
                      <img
                        key={index}
                        src={item}
                        onClick={() => setMainImage(item)}
                        className="w-[50px] h-[50px] rounded-sm"
                        alt=""
                      />
                    ))}
                  </div>
                </div>
              </PhotoProvider>
            </div>
            <hr className="mt-10 mobile:hidden bg-primary/10 h-[2px]" />

            <div className="Sdesktop:flex Sdesktop:gap-x-7 Sdesktop:justify-between">
              <div className="">
                <div className="px-4 py-4">
                  <div className="">
                    <div className="bg-accent w-fit px-4 py-[.30rem] rounded-md">
                      <h1 className="text-xs font-medium text-white">
                        {myData.type}
                      </h1>
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
                      <h4 className="font-medium text-black/80">
                        {myData.area}
                      </h4>
                    </div>
                    <hr className="my-3 rounded-full bg-black/10" />
                    <div className="">
                      <h1 className="text-lg font-bold text-black/70">
                        Informasi Properti
                      </h1>
                      <h2 className="font-medium text-black/70">Spesifikasi</h2>
                    </div>
                  </div>
                </div>
                <SpekSingkat props={myData} datas={myData} />
                <div className="px-4 py-2">
                  <Modal />
                </div>
                <hr />
                <div className="py-4 px-4 z-[-1]">
                  <h1 className="font-medium text-black/70">Deskripsi</h1>
                  <h2 className="mt-2 text-sm font-medium text-black/80">
                    {myData.deskripsi}
                  </h2>
                </div>
              </div>
              {/* Profile left */}
              <div className="flex flex-col mx-4">
                <div className="mt-10 gap-x-4  w-[300px] mobile:w-full Sdesktop:sticky Sdesktop:top-28 bg-white  px-5 py-5 ">
                  <ProfileCard pesanwa={myData.title} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default DetailProduct
