import React from "react"
import { BsArrowRight } from "react-icons/bs"
import { Link } from "react-router-dom"
import home from "../assets/bedroom.jpg"
import home2 from "../assets/bathroom.jpg"
import home3 from "../assets/homecta.jpg"

const CTA = () => {
  return (
    <section className="bg-gradient-to-br from-[#e4f9ff] via-[#ffffff] to-[#e5f3f6]">
      <div className="relative flex flex-col mx-auto Sdesktop:flex-row containers mobile:px-4 ">
        {/* <!-- Left Column --> */}
        <div className="flex w-full max-w-xl mx-auto ">
          <div className="mb-16">
            <div className="Sdesktop:w-[500px]">
              <h2 className="title">
                Properti Kualitas Terbaik <br /> yang Dapat Anda Temukan
              </h2>
              <div className="pl-3 mt-5 border-l-4 border-accent">
                <p className="subtitle">
                  Temukan properti kualitas terbaik untuk Anda! Hunian elegan,
                  desain modern, fasilitas lengkap, dan lingkungan yang aman.
                  Hubungi kami sekarang untuk pengalaman tinggal tak tertandingi
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex items-center max-w-sm mx-0 mt-5 Sdesktop:max-w-full gap-x-2 Sdesktop:gap-x-6">
                <Link to="/all-listings">
                  <button className="flex items-center justify-center mx-auto Sdesktop:mx-0 btn-sm Sdesktop:btn-md btn-accent Sdesktop:gap-x-4 mobile:gap-x-2">
                    Selengkapnya <BsArrowRight />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- /Left Column --> */}
        {/* <!-- Right Column --> */}
        <div className="flex w-full h-full space-x-3 overflow-hidden Sdesktop:justify-end">
          {/* <!-- Col 2 --> */}
          <div className="items-center hidden w-56 space-y-3 Sdesktop:flex">
            <div className="overflow-hidden bg-yellow-400 rounded-md shadow-lg">
              <img
                className="object-cover w-full h-full rounded-md"
                src={home3}
                alt=""
              />
            </div>
          </div>
          <div className="flex-col w-full py-4 space-y-3 Sdesktop:flex Sdesktop:w-80">
            <div className="h-40 overflow-hidden rounded-md shadow-lg bg-green-600/60">
              <img
                className="object-cover w-full h-full mx-auto rounded-md"
                src={home2}
                alt=""
              />
            </div>
            <div className="h-40 overflow-hidden rounded-md shadow-lg bg-pink-600/60">
              <img
                className="object-cover w-full h-full mx-auto rounded-md"
                src={home}
                alt=""
              />
            </div>
          </div>
        </div>
        {/* <!-- /Right Column --> */}
      </div>
    </section>
  )
}

export default CTA
