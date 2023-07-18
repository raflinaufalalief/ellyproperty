import React from "react"
import image from "../../assets/best.png"
import image2 from "../../assets/user.jpg"

import { BsArrowRight } from "react-icons/bs"
import Statistic from "./Statistic"
import { Link } from "react-router-dom"

export default function WhyChoose() {
  return (
    <section className="mobile:pt-0">
      <div className="mx-auto containers ">
        <div className="justify-center mobile:px-4 tablet:px-8 Sdesktop:flex">
          <div className="Sdesktop:w-8/12 mobile:w-12/12">
            <h1 className="title">
              Temukan <span className="text-accent">Rumah</span>
              <br />
              Impian Anda!
            </h1>
            <div className="pl-3 mt-5 border-l-4 border-accent">
              <p className="subtitle">
                Di situs kami, Anda akan menemukan beragam pilihan rumah yang
                dirancang untuk memenuhi kebutuhan dan keinginan Anda. Dari
                desain modern hingga gaya klasik, kami menyediakan rumah-rumah
                berkualitas dengan fasilitas yang lengkap.
              </p>
            </div>
            <img
              src="https://img.freepik.com/premium-photo/red-brick-building-middle-garden-prairie-style-house-exterior_124507-61325.jpg?size=626&ext=jpg&ga=GA1.1.628561962.1680109885&semt=sph"
              alt="fingerprint recognition"
              className="w-auto rounded-md Sdesktop:w-full"
            />
          </div>
          {/* right section */}
          <div className="flex flex-col items-center w-full Sdesktop:ml-6 Sdesktop:mt-0 mt-7 Sdesktop:w-4/12 Sdesktop:flex-col">
            <div className="Sdesktop:w-auto mobile:hidden">
              <img
                src="https://img.freepik.com/premium-vector/red-best-choice-with-thumb-up-recommended-design-tag-vector-illustration_662353-440.jpg?size=626&ext=jpg&ga=GA1.1.628561962.1680109885&semt=ais"
                alt="best"
                className="w-full border-2 rounded-md shadow-lg border-accent "
              />
            </div>
            <div className="mt-6 Sdesktop:mt-6 mobile:mt-0 Sdesktop:ml-0">
              <div className="mt-4">
                <img src={image2} alt="" className="w-[50px]" />
                <h1 className="mt-4 title">Agen Profesional</h1>
                <p className="mt-4 subtitle">
                  Dengan pengetahuan luas tentang pasar properti dan pengalaman
                  yang kaya, kami akan menjadi mitra Anda yang andal dalam
                  mencari properti yang sesuai dengan keinginan dan kebutuhan
                  Anda. Percayakan pada kami untuk pengalaman properti yang
                  lancar dan sukses. Hubungi kami sekarang!
                </p>
              </div>
              <Link to="/profile">
                <div className="flex items-center mx-auto Sdesktop:mx-0 Sdesktop:gap-x-6">
                  <button className="flex items-center justify-center mx-0 btn-sm Sdesktop:btn-md btn-outline Sdesktop:gap-x-4 mobile:gap-x-2">
                    Tentang Saya <BsArrowRight />
                  </button>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-20 mobile:mt-10">
          <span className="inline-block w-11/12 h-1 rounded-full bg-accent"></span>
          <span className="inline-block w-3 h-1 ml-1 rounded-full bg-accent"></span>
          <span className="inline-block w-1 h-1 ml-1 rounded-full bg-accent"></span>
        </div>
        <Statistic />
      </div>
    </section>
  )
}
