import React from "react"

import Hero from "../components/hero/Hero"
// import AllProperty from "../components/AllProperty"

import CTA from "../components/CTA"
import ContactUs from "../components/ContactUs"
import OurHope from "../components/OurHope"
import WhyChoose from "../components/choose/WhyChoose"
import Product from "../components/Product"
import Filter from "../components/Filter"

const Home = () => {
  return (
    <div id="/#">
      <Hero />
      <Filter />
      <WhyChoose />
      <OurHope />
      {/* <AllProperty /> */}
      <Product />
      <CTA />
      <ContactUs />
    </div>
  )
}

export default Home
