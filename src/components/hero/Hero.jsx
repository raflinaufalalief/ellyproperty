import React from "react"

const Hero = () => {
  return (
    <section className="bg-cover bg-no-repeat bg-center bg-[url('./assets/heo.jpg')] bg-gray-700 bg-blend-multiply ">
      <div>
        <div className="px-5 py-24 mx-auto text-center containers tablet:py-36">
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white uppercase Sdesktop:text-5xl">
            ElyFutura
          </h1>
          <p className="mb-8 text-xl font-normal text-secondary mobile:text-lg">
            Agent Futura Property, Jual, Beli Dan Sewa Property, Mulai dari
            property primary hingga property secondary.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero
