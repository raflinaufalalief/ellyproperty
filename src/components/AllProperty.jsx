import React from "react"
import { Link } from "react-router-dom"
import TabsProduct from "./product/TabsProduct"

const AllProperty = () => {
  return (
    <section className="">
      <div id="product" className="container mx-auto">
        <div className="items-center justify-center mb-20 text-center">
          <h1 className="section-title">Property Listing</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt,
            dolores.
          </p>
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
