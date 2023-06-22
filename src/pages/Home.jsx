import React from "react"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import About from "../components/AboutUs"
import Choose from "../components/Choose"
import Testimoni from "../components/testimonial/Testimoni"
import Services from "../components/Services"
import AllProperty from "../components/AllProperty"
import Brands from "../components/Brand"
import Agents from "../components/Agents"
import Footer from "../components/Footer"

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Choose />
      <Services />
      <AllProperty />
      {/* <Agents /> */}
      <Footer />
    </>
  )
}

export default Home
