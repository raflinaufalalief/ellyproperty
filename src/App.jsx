import React from "react"
import Router from "./router/Router"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

const App = () => {
  return (
    <div>
      <Navbar />
      <Router />
      <Footer />
    </div>
  )
}

export default App
