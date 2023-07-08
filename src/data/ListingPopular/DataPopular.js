;<Swiper
  modules={[Autoplay]}
  autoplay={true}
  slidesPerView={1}
  spaceBetween={30}
  breakpoints={{
    640: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1170: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  }}
>
  {data.map((res, index) => (
    <SwiperSlide key={index}>
      <div className="relative w-full mx-auto">
        <div className="p-4 bg-white border rounded-lg shadow-md">
          <div className="relative flex justify-center overflow-hidden rounded-lg h-52">
            <div className="w-full transition-transform duration-500 ease-in-out transform hover:scale-110">
              <div className="absolute inset-0 bg-black ">
                <img src={res.thumnail} alt="" />
              </div>
            </div>
            <span className="absolute top-0 left-0 z-10 inline-flex px-3 py-2 mt-3 ml-3 text-sm font-medium text-white rounded-lg select-none bg-accent">
              {res.market}
            </span>
          </div>

          <div className="mt-4 text-center">
            <h2 className="text-base font-bold text-gray-800 Sdesktop:text-lg line-clamp-1">
              {res.title}
            </h2>
            <div>
              <div className="flex items-center justify-center mt-2 text-sm font-semibold text-gray-800 line-clamp-1">
                <MdLocationOn className=" text-black/80" />
                {location}
              </div>
            </div>
          </div>
          <div className="mt-2">
            <div className="flex items-center justify-between font-normal text-gray-800 ">
              <span className="mt-2">{desc}</span>
            </div>
            <hr className="bg-black/10 h-[1.5px] my-2" />
            <div className="flex items-center justify-between font-medium text-gray-800 ">
              <h1>{desc1.Lantai[0]}</h1>
              <h1>{desc1.Lantai[1]}</h1>
            </div>
            <div className="flex items-center justify-between font-medium text-gray-800 ">
              <h1>{desc1.LuasTanah[0]}</h1>
              <h1>{desc1.LuasTanah[1]}</h1>
            </div>
            <div className="flex items-center justify-between font-medium text-gray-800 ">
              <h1>{desc1.LuasBangunan[0]}</h1>
              <h1>{desc1.LuasBangunan[1]}</h1>
            </div>
            <div className="flex items-center justify-between font-medium text-gray-800">
              <h1>{desc1.KamarMandi[0]}</h1>
              <h1>{desc1.KamarMandi[1]}</h1>
            </div>
            <div className="flex items-center justify-between font-medium text-gray-800 ">
              <h1>{desc1.KamarTidur[0]}</h1>
              <h1>{desc1.KamarTidur[1]}</h1>
            </div>
          </div>
          <div className="grid grid-cols-2 mt-8">
            <div className="flex items-center">
              <Link to="/product">
                <button className="inline-flex w-full px-3 py-2 text-sm font-medium text-white transition-transform duration-300 ease-in-out transform rounded-lg select-none bg-accent hover:-translate-y-2">
                  view detail
                </button>
              </Link>
            </div>
            <div className="flex items-center justify-end">
              <p className="inline-block font-semibold leading-tight text-accent whitespace-nowrap rounded-xl">
                <span className="text-lg">{price}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </SwiperSlide>
  ))}
</Swiper>
