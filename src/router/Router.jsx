import React from "react"
import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import About from "../pages/AboutPage"
import Profile from "../pages/Profile"
import Contact from "../pages/ContactPage"
import DetailProduct from "../pages/DetailProduct"
import AllProduct from "../pages/AllProduct"

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/all-listings" element={<AllProduct />} />
      <Route path="/listings/detail/:title" element={<DetailProduct />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default Router
