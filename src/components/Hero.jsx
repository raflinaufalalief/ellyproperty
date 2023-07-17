import React from "react"

import image from "../assets/banner2.png"
import Filter from "./Filter"

const Hero = () => {
  return (
    <div className="bg-[#BAE5FE] mobile:pt-32 bg-[url('./assets/banner1.png')] bg-contain bg-no-repeat bg-center">
      <div className="flex flex-wrap items-center justify-center mx-auto containers mobile:px-4">
        <div className="flex-1 basis-[20rem]">
          <h1 className="text-3xl font-bold capitalize Sdesktop:text-4xl text-primary">
            Jual <span className="text-accent">Beli</span> & Sewa Properti
          </h1>
          <div className="pl-3 mt-5 border-l-4 border-accent">
            <p className="subtitle">
              Sebuah Tema untuk Layanan Perumahan untuk Semua Kebutuhan Rumah.
            </p>
          </div>
          {/* components search */}
          <Filter />
        </div>

        <div className="flex-1 basis-[15rem]">
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Hero
