import React from "react"

const Hero = () => {
  return (
    <>
      <section className="bg-cover bg-no-repeat bg-center bg-[url('./assets/heo.jpg')] bg-gray-700 bg-blend-multiply ">
        <div className="max-w-screen-xl px-5 py-24 mx-auto text-center ">
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white uppercase Sdesktop:text-5xl">
            ElyFutura
          </h1>
          <p className="mb-8 font-normal text-gray-300 text-Sdesktop Sdesktop:text-xl md:px-16 Sdesktop:px-96">
            Agent Futura Property, Jual, Beli Dan Sewa Property, Mulai dari
            property primary hingga property secondary.
          </p>
        </div>
      </section>
    </>
  )
}

export default Hero
