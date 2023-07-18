import React from "react"
import Filter from "../components/Filter"
import hero from "../assets/banner2.png"
const Hero = () => {
  return (
    <section className="Sdesktop:py-0 ">
      <div className="mx-auto containers mobile:px-4 tablet:px-8">
        <img
          className="absolute inset-0 object-cover object-center w-full h-full"
          src="https://cdn.tuk.dev/assets/templates/weCare/hero2-bg.png"
          alt="background"
        />
        <div className="relative z-10 items-center mx-auto containers Sdesktop:flex">
          <div className="w-full Sdesktop:w-1/2">
            <h1 className="mb-4 uppercase title">ElyFutura</h1>
            <p className="subtitle">
              Agent Futura Property, Jual, Beli Dan Sewa Property, Mulai dari
              property primary hingga property secondary.
            </p>
            <Filter />
          </div>
          {/*  */}
          <div className=" Sdesktop:w-1/2 Sdesktop:pl-10">
            <img className="bg-bg" src={hero} alt="hero" />
          </div>
        </div>
      </div>
    </section>
  )
}
export default Hero
