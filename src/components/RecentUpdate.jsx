import React from "react"

const RecentUpdate = () => {
  return (
    <div className="mt-10 mb-8">
      <div className="flex items-center justify-start gap-x-5 mobile:px-3">
        <div className="border-white ">
          <h1 className="font-bold title">
            200 <span className=" text-accent">+</span>
          </h1>
          <h1>Best Deals</h1>
        </div>
        <div className="border-white ">
          <h1 className="font-bold title">
            700 <span className=" text-accent">+</span>
          </h1>
          <h1>Property Deals</h1>
        </div>
        <div className="border-white ">
          <h1 className="font-bold title">
            100 <span className=" text-accent">+</span>
          </h1>
          <h1>Customer Deals</h1>
        </div>
      </div>
    </div>
  )
}

export default RecentUpdate
