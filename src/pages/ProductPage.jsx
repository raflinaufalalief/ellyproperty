import React from "react"
import Filter from "../components/Filter"
import Product from "../components/propertyterbaru/Product"
//

const ProductPage = () => {
  return (
    <div>
      <div className="relative h-[500px] w-full rounded-b-Sdesktop bg-cover bg-center bg-no-repeat shadow-Sdesktop bg-[url('https://img.freepik.com/premium-photo/blue-living-room_828688-1221.jpg?size=626&ext=jpg&ga=GA1.1.628561962.1680109885&semt=sph')]">
        <div className="absolute bottom-24 left-[400px] rounded-md pt-10 px-10 w-[700px] bg-gradient-to-br from-[#e4f9ff] via-[#ffffff] to-[#e5f3f6]">
          <Filter />
        </div>
      </div>
      <div className="mx-auto containers">
        <Product />
      </div>
    </div>
  )
}

export default ProductPage
