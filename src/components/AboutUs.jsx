import { Link } from "react-router-dom"
const AboutUs = () => {
  return (
    <section className="py-24 bg-[#F5F5F5]">
      <div className="mx-auto containers">
        <div className="flex flex-wrap gap-10 mobile:px-3 mobile:text-center">
          <div className="relative flex-1 basis-[18rem] border">
            <img
              src="https://img.freepik.com/free-photo/house-isolated-field_1303-23773.jpg?size=626&ext=jpg&uid=R83530561&ga=GA1.1.628561962.1680109885&semt=sph"
              alt=""
              className="object-cover w-full h-full rounded-lg"
            />
            <img
              src="https://img.freepik.com/free-psd/modern-interior-design-living-room_176382-1266.jpg?size=626&ext=jpg&uid=R83530561&ga=GA1.2.628561962.1680109885&semt=ais"
              alt=""
              className="absolute object-cover w-48 h-64 border-4 border-white rounded-lg sm:w-72 sm:h-80 -bottom-20 -right-2 md:-right-20"
            />
          </div>
          <div className="relative flex-1 basis-[22rem]">
            <h1 className="text-lg font-normal uppercase text-accent">
              About us
            </h1>
            <div className="mb-2">
              <span className="inline-block w-40 h-1 rounded-full bg-accent"></span>
              <span className="inline-block w-3 h-1 ml-1 rounded-full bg-accent"></span>
              <span className="inline-block w-1 h-1 ml-1 rounded-full bg-accent"></span>
            </div>
            <h1 className="title text-primary r">
              Membantu Anda Menemukan Rumah Impian Anda
            </h1>
            <div className="pl-3 mt-5 border-l-4 border-accent">
              <p className="lead text-secondary">
                Ellyfuturaproperty adalah perusahaan manajemen properti yang
                berfokus untuk membantu pemilik dan penyewa menemukan satu sama
                lain. Kami ingin memastikan bahwa setiap orang memiliki akses ke
                perumahan yang aman dan terjangkau, jadi kami bekerja keras
                untuk menurunkan batasan bagi orang yang mencari rumah atau
                apartemen.
              </p>
            </div>

            <Link to="/about">
              <div className="flex items-center max-w-sm pt-8 mx-auto Sdesktop:max-w-full Sdesktop:mx-0 gap-x-2 Sdesktop:gap-x-6">
                <button className="flex items-center justify-center mx-auto Sdesktop:mx-0 btn btn-sm Sdesktop:btn-md Sdesktop:btn-Sdesktop2 btn-outline Sdesktop:gap-x-4">
                  Lihat selengkapnya
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
