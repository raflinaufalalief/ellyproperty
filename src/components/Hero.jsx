import React from "react"

import { HiOutlineChevronDown } from "react-icons/hi"
import RecentUpdate from "./RecentUpdate"

import image from "../assets/banner.png"
const Hero = () => {
  return (
    <section>
      <div
        className="absolute top-0 right-0 mobile:top-52 rounded-full bg-accent
      /30  Sdesktop:w-72 Sdesktop:h-72 mobile:w-60 mobile:h-52 -z-10 blur-[120px]"
      />
      <div className="flex flex-wrap items-center justify-center pt-20 mx-auto containers mobile:text-center">
        <div className="flex-1 basis-[20rem]">
          <h1 className="text-3xl font-bold capitalize Sdesktop:text-4xl">
            Lorem, ipsum dolor. <br /> Lorem, ipsum dolor.
          </h1>
          <div className="pl-3 mt-5 border-l-4 border-accent">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic
              nulla unde exercitationem! Recusandae error quaerat sapiente
              quibusdam culpa magni eius?
            </p>
          </div>
          {/* btn & comp text */}
          <a href="/#product">
            <div className="flex items-center max-w-sm pt-10 mx-auto Sdesktop:mx-0 gap-x-2 Sdesktop:gap-x-6">
              <button className="flex items-center justify-center mx-auto Sdesktop:mx-0 btn btn-sm Sdesktop:btn-md Sdesktop:btn-Sdesktop2 btn-outline Sdesktop:gap-x-4">
                Lihat Property
                <HiOutlineChevronDown />
              </button>
            </div>
          </a>
          <RecentUpdate />
        </div>
        <div className="flex-1 basis-[20rem] relative  ">
          <img src={image} alt="" />
          <img
            src="https://img.freepik.com/premium-vector/house-apartment-scales-people-choosing-rent-sell-property-sale-rent-apartment-buying-house-mortgage-loan-real-estate-investment-choice-selling-tenancy-home_458444-1038.jpg?size=626&ext=jpg&uid=R83530561&ga=GA1.2.628561962.1680109885&semt=ais"
            alt=""
            className="absolute z-10 object-cover w-40 p-2 -rotate-45 border-2 rounded-md border-accent top-14 backdrop-blur-sm "
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
