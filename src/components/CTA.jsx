import React from "react"
import { BsArrowRight } from "react-icons/bs"
import { Link } from "react-router-dom"

const CTA = () => {
  return (
    <section className="bg-gradient-to-br from-[#e4f9ff] via-[#ffffff] to-[#e5f3f6]">
      <div className="relative flex flex-col mx-auto Sdesktop:flex-row containers mobile:px-4 ">
        {/* <!-- Left Column --> */}
        <div className="flex w-full max-w-xl mx-auto ">
          <div className="mb-16">
            <div className="Sdesktop:w-[500px]">
              <h2 className="title">
                Renovasi
                <span className="inline-block px-2 font-bold text-accent">
                  Rumah
                </span>
                Anda
              </h2>
              <div className="pl-3 mt-5 border-l-4 border-accent">
                <p className="subtitle">
                  Kami juga menyediakan solusi lengkap untuk memperbarui dan
                  memodernisasi rumah. Mereka merencanakan, merancang, dan
                  melaksanakan perubahan interior dan eksterior rumah sesuai
                  kebutuhan Anda. Dengan manajemen proyek yang baik, mereka
                  membantu memastikan proyek berjalan lancar dan menghasilkan
                  hasil renovasi yang memuaskan.
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex items-center max-w-sm mx-0 mt-5 Sdesktop:max-w-full gap-x-2 Sdesktop:gap-x-6">
                <Link to="/about">
                  <button className="flex items-center justify-center mx-auto Sdesktop:mx-0 btn-sm Sdesktop:btn-md btn-accent Sdesktop:gap-x-4 mobile:gap-x-2">
                    Selengkapnya <BsArrowRight />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- /Left Column --> */}

        {/* <!-- Right Column --> */}
        <div className="flex w-full h-full space-x-3 overflow-hidden Sdesktop:justify-end">
          {/* <!-- Col 2 --> */}
          <div className="items-center hidden w-56 space-y-3 Sdesktop:flex">
            <div className="overflow-hidden bg-yellow-400 rounded-md shadow-lg">
              <img
                className="object-cover w-full h-full rounded-md"
                src="https://img.freepik.com/premium-photo/3d-visualization-villa-dubai-modern-architecture-evening-illumination-facade_727625-88.jpg?size=626&ext=jpg&ga=GA1.2.628561962.1680109885&semt=ais"
                alt=""
              />
            </div>
          </div>
          <div className="flex-col w-full py-4 space-y-3 Sdesktop:flex Sdesktop:w-80">
            <div className="h-40 overflow-hidden rounded-md shadow-lg bg-green-600/60">
              <img
                className="object-cover w-full h-full mx-auto rounded-md"
                src="https://img.freepik.com/premium-photo/stylish-bathroom-interior-design-with-marble-panels-bathtub-towels-other-personal-bathroom-accessories-modern-glamour-interior-concept-roof-window-template_431307-6887.jpg?size=626&ext=jpg&ga=GA1.1.628561962.1680109885&semt=ais"
                alt=""
              />
            </div>
            <div className="h-40 overflow-hidden rounded-md shadow-lg bg-pink-600/60">
              <img
                className="object-cover w-full h-full mx-auto rounded-md"
                src="https://img.freepik.com/free-photo/modern-studio-apartment-design-with-bedroom-living-space_1262-12375.jpg?size=626&ext=jpg&ga=GA1.1.628561962.1680109885&semt=ais"
                alt=""
              />
            </div>
          </div>
        </div>
        {/* <!-- /Right Column --> */}
      </div>
    </section>
  )
}

export default CTA
