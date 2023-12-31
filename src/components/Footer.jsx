import React from "react"

import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <section className="pb-0">
      <div className="bg-[#BAE5FE]">
        <div className="mx-auto containers">
          <div className="w-full p-4 mx-auto Sdesktop:py-5">
            <span className="block text-center text-gray-500 Sdesktop:text-center dark:text-gray-400">
              © 2023{" "}
              <Link to="/" className="hover:underline">
                ElyFutura
              </Link>
              . All Rights Reserved.
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
