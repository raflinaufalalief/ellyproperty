import React from "react"
import logo from "../assets/logo.png"
import { dataNavLinkFooter } from "../data/data"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className="bg-[#BAE5FE]">
      <footer className="mx-auto containers">
        <div className="w-full p-4 mx-auto Sdesktop:py-8">
          <div className="Sdesktop:flex Sdesktop:items-center Sdesktop:justify-between">
            <Link to="/" className="flex items-center mb-4 Sdesktop:mb-0">
              <img src={logo} className="w-[125px]" alt="logo" />
            </Link>
            <ul className="flex flex-wrap items-center mb-6 space-x-5 font-medium text-gray-500 text-Sdesktop Sdesktop:mb-0 dark:text-gray-400">
              {dataNavLinkFooter.map((result, index) => (
                <li
                  onClick={() => setMenu((prev) => !prev)}
                  key={index}
                  className="space-x-5 text-base font-semibold text-primary hover:text-accent mobile:space-y-3 mobile:my-3 tablet:my-4"
                >
                  <Link to={result.path}>{result.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <hr className="my-6 border-gray-200 Sdesktop:mx-auto dark:border-gray-700 Sdesktop:my-8" />
          <span className="block text-gray-500 text-Sdesktop Sdesktop:text-center dark:text-gray-400">
            © 2023{" "}
            <Link to="/" className="hover:underline">
              ElyProperty
            </Link>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  )
}

export default Footer
