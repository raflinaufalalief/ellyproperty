import { services } from "../data/data"

const Services = () => {
  return (
    <section className="">
      <div className="text-center">
        <h1 className="mx-auto title ">Services</h1>
        <h1 className="pb-10">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum,
          similique.
        </h1>
      </div>
      <div className="py-5 mx-auto rounded-lg containers bg-bg px-9">
        <div className="grid grid-cols-1 gap-4 mt-5 tablet:grid-cols-2 Sdesktop:grid-cols-4">
          {services.map(({ id, name, icon, text }) => (
            <div
              className="p-3 text-center bg-white border border-t-4 rounded-lg hover:bg-bg hover:text-desc hover:card-shadow hover:border-t-white "
              key={id}
            >
              <div className="mx-auto opacity-100 icon-box w-14 h-14 hover:text-white ">
                <div className="">
                  <img src={icon} alt="" width={50} />
                </div>
              </div>
              <h1 className="mt-2 heading !text-xl">{name}</h1>
              <p className="mt-2 ">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
