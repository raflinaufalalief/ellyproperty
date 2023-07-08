import React from "react"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import AllProperty from "../components/AllProperty"
import Footer from "../components/Footer"
import CTA from "../components/CTA"
import ContactUs from "../components/ContactUs"
import OurHope from "../components/OurHope"
import WhyChoose from "../components/choose/WhyChoose"
import Product from "../components/Product"

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <WhyChoose />
      <OurHope />
      {/* <AllProperty /> */}
      <Product />
      <CTA />
      <ContactUs />
      <Footer />
    </>
  )
}

export default Home
