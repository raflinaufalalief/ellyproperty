import React from "react"
import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import About from "../pages/About"
import Product from "../pages/Product"
import Profile from "../pages/Profile"
import Contact from "../pages/Contact"
import DetailProductPage from "../pages/DetailProduct"

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/product" element={<Product />} />
      <Route path="/product/:title" element={<DetailProductPage />} />

      <Route path="/profile" element={<Profile />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default Router
