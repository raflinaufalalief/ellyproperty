import React from "react"
import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import About from "../pages/About"
import Product from "../pages/ProductPage"
import Profile from "../pages/Profile"
import Contact from "../pages/Contact"
import DetailProduct from "../pages/DetailProduct"
// import DetailListing from "../pages/detailListing"

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/product" element={<Product />} />
      <Route path="/listings/detail/:title" element={<DetailProduct />} />
      {/* <Route path="/" element={<DetailListing />} /> */}
      <Route path="/profile" element={<Profile />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default Router
