import React from "react"
import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import About from "../pages/About"
import Product from "../pages/Product"
import Profile from "../pages/Profile"
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/product" element={<Product />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  )
}

export default Router
