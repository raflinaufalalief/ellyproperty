import { Link } from "react-router-dom"
const AboutUs = () => {
  return (
    <section className="">
      <div className="mx-auto containers">
        <div className="flex flex-wrap gap-24 mobile:px-3 mobile:text-center">
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
            <h1 className="title">About us</h1>
            <h1 className="heading">we decorate your home environment</h1>
            <p className="mt-3">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non
              consequatur quisquam, dicta dolorum obcaecati modi fugiat sint
              eaque voluptate ex dolore! Ipsum exercitationem doloribus illo
              similique consectetur animi dignissimos eos delectus voluptate
              suscipit, ex minima veritatis aperiam obcaecati optio beatae
              officiis! Mollitia ipsum ad debitis reiciendis velit fuga
              assumenda architecto?
            </p>

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
