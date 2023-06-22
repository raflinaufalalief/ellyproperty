import React from "react"
import CardsTestimoni from "./CardsTestimoni"

const Testimoni = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="items-center justify-center text-center">
          <h1 className="section-title">Client Testimoni</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. In,
            reprehenderit.
          </p>
          <div className="pt-5">
            <CardsTestimoni />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimoni
