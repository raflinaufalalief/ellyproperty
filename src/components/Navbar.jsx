import React, { useState } from "react"
import logo from "../assets/logo.png"
import { HiMenu } from "react-icons/hi"
import { dataNavLink } from "../data/data"
import { Link } from "react-router-dom"

const Navbar = () => {
  const [menu, setMenu] = useState(false)
  return (
    <div className="fixed top-0 z-20 w-full bg-[#BAE5FE] shadow-md ">
      <div className="py-5 containers mobile:mx-4 tablet:mx-6">
        <div className="flex justify-between Sdesktop:items-center">
          <Link to="/">
            <img src={logo} alt="logo" className="w-[125px]" />
          </Link>
          <nav className="flex items-center">
            <div
              className="text-2xl font-extrabold icon_humberger Sdesktop:hidden "
              onClick={() => setMenu((prev) => !prev)}
            >
              <HiMenu />
            </div>
            <ul>
              <div
                className={`transition-all mobile:bg-[#BAE5FE] ease-in-out duration-200 mobile:absolute mobile:mt-8 mobile:w-full mobile:p-4 tablet:absolute Sdesktop:flex Sdesktop:gap-x-9 Sdesktop:items-center tablet:w-full tablet:mt-10 tablet:p-5 z-20 ${
                  menu ? "right-0" : "right-[-1500px]"
                }`}
              >
                {dataNavLink.map((result, index) => (
                  <li
                    onClick={() => setMenu((prev) => !prev)}
                    key={index}
                    className="text-base font-semibold mobile:border-b mobile:py-2 text-primary hover:text-accent mobile:space-y-3 mobile:my-3 tablet:my-4"
                  >
                    <Link to={result.path}>{result.name}</Link>
                  </li>
                ))}
              </div>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Navbar
