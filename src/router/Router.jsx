import React, { useEffect } from "react"
import { Route, Routes, useLocation } from "react-router-dom"
import Home from "../pages/Home"
import About from "../pages/AboutPage"
import Profile from "../pages/Profile"
import Contact from "../pages/ContactPage"
import DetailProduct from "../components/DetailProduct"
import AllProduct from "../pages/AllProduct"
import PreviewImage from "../components/detail/PreviewImage"

const Router = () => {
  const route = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [route])
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/all-listings" element={<AllProduct />} />
      <Route
        path="/listings/detail/:title/previewImage"
        element={<PreviewImage />}
      />
      <Route path="/listings/detail/:title" element={<DetailProduct />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default Router
