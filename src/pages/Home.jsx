import React from "react"

import Hero from "../components/Hero"
// import AllProperty from "../components/AllProperty"

import CTA from "../components/CTA"
import ContactUs from "../components/ContactUs"
import OurHope from "../components/OurHope"
import WhyChoose from "../components/choose/WhyChoose"
import Product from "../components/propertyterbaru/Product"

const Home = () => {
  return (
    <>
      <Hero />
      <WhyChoose />
      <OurHope />
      {/* <AllProperty /> */}
      <Product />
      <CTA />
      <ContactUs />
    </>
  )
}

export default Home
