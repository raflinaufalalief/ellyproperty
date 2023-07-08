import React from "react"
import { Link } from "react-router-dom"
import TabsProduct from "./product/TabsProduct"

const AllProperty = () => {
  return (
    <section className="">
      <div id="product" className="mx-auto containers mobile:px-7">
        <div className="items-center justify-center mb-20 ">
          <h1 className="title">
            Daftar <span className="text-accent">Properti</span> Kami
          </h1>
          <div className="w-full mx-auto mt-5">
            <div className="pl-3 mt-5 border-l-4 border-accent">
              <p className="subtitle">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quaerat aliquam sunt accusantium nisi reprehenderit quia.
                Recusandae libero commodi neque dolorum?
              </p>
            </div>
          </div>
          <TabsProduct />
          <Link to={"/product"}>
            <div className="flex items-center justify-center max-w-sm pt-8 mx-auto Sdesktop:max-w-full Sdesktop:mx-0 gap-x-2 Sdesktop:gap-x-6">
              <button className="flex items-center justify-center mx-auto Sdesktop:mx-0 btn btn-sm Sdesktop:btn-md Sdesktop:btn-Sdesktop2 btn-outline Sdesktop:gap-x-4">
                Lihat selengkapnya
              </button>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default AllProperty
