import React from "react"
import VisiMisi from "./VisiMisi"
import Statistic from "../choose/Statistic"
import Test from "./Services"
import ContactUs from "../ContactUs"
import CTA from "../CTA"

const AboutHero = () => {
  return (
    <>
      <section>
        <div>
          <div className="pt-16 mx-auto mt-20 text-center bg-white shadow-lg containers">
            <p className="text-primary">About Us</p>
            <h1 className="pb-10 mt-2 text-4xl font-bold text-primary">
              Ely Futura
            </h1>
            <img
              className="absolute top-0 left-0 object-cover w-full mt-10 -z-10 h-96"
              src="https://images.unsplash.com/photo-1504672281656-e4981d70414b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt=""
            />
          </div>

          <div className="px-10 pt-10 pb-20 mx-auto space-y-8 text-lg tracking-wide text-center bg-white rounded-b-lg shadow-lg text-secondary containers mobile:shadow-lg">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              similique reiciendis et recusandae provident repellendus rem
              doloremque eaque error assumenda?
            </p>
          </div>
        </div>
      </section>
      <Statistic />
      <VisiMisi />
      <Test />
      <ContactUs />
      <CTA />
    </>
  )
}

export default AboutHero
