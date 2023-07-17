import { useEffect } from "react"
import { FaCheck, FaMale, FaGlobe } from "react-icons/fa"
const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  })
  return (
    <>
      {/* Content */}
      <div className="pt-12">
        <div className="bg-center bg-no-repeat bg-cover Sdesktop:h-[50vh]    h-72 bg-[url('https://images.unsplash.com/photo-1605146769289-440113cc3d00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb3BlcnR5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60')]">
          <div className="flex items-center justify-center w-full h-full bg-black bg-opacity-50">
            <p className="p-8 text-5xl font-light text-white">About Us</p>
          </div>
        </div>
        <div className="gap-16 py-24 mx-auto containers Sdesktop:grid Sdesktop:grid-cols-2">
          <div className="col-span-1 space-y-8 text-gray-600">
            <p className="text-xl font-medium">
              For over a dozen years we have been providing the best transport
              services. We offer bus, passenger transport and limousine rental.
            </p>
            <p className="text-gray-500">
              We address our offer to all who want to travel in comfortable
              conditions. We have over 120 top-class vehicles, so our customers
              can be assured of comfort and safety.
            </p>
            <div className="space-y-3 text-gray-500">
              <div className="flex flex-row items-center space-x-4">
                <FaCheck className="p-2 border rounded-full w-9 h-9 text-amber-500" />
                <p>Professionally Trained Chauffeurs</p>
              </div>
              <div className="flex flex-row items-center space-x-4">
                <FaCheck className="p-2 border rounded-full w-9 h-9 text-amber-500" />
                <p>24/7 Full-Service Transportation</p>
              </div>
              <div className="flex flex-row items-center space-x-4">
                <FaCheck className="p-2 border rounded-full w-9 h-9 text-amber-500" />
                <p>Global network of Transportation Partners</p>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <img
              src="https://images.unsplash.com/photo-1605146769289-440113cc3d00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb3BlcnR5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
              alt="Picture of the author"
            />
          </div>
        </div>
        <div className="flex items-center justify-center text-center bg-gray-100">
          <div className="container px-16 py-24 mx-auto space-y-2">
            <p className="text-xl font-medium text-amber-600">
              COMMITMENT TO WORK
            </p>
            <p className="text-4xl font-light text-gray-600">Our Competences</p>
            <div className="grid gap-12 py-8 Sdesktop:grid-cols-2">
              <div className="col-span-1 space-y-3 bg-white">
                <img
                  src="https://images.unsplash.com/photo-1605146769289-440113cc3d00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb3BlcnR5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                  alt="Picture of the author"
                />

                <div className="p-8 space-y-5">
                  <p className="text-xl font-medium text-amber-600">
                    PROFESSIONALISM
                  </p>
                  <p className="text-gray-500">
                    Our experienced staff and highly professional chauffeurs are
                    committed to providing safe, reliable transportation,
                    exceptional customer service, and consistent pricing. We
                    provide in-house dispatchers who support our clients.
                  </p>
                </div>
              </div>
              <div className="col-span-1 space-y-3 bg-white">
                <img
                  src="https://images.unsplash.com/photo-1605146769289-440113cc3d00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb3BlcnR5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                  alt="Picture of the author"
                />

                <div className="p-8 space-y-5">
                  <p className="text-xl font-medium text-amber-600">
                    COMMITMENT
                  </p>
                  <p className="text-gray-500">
                    Our office is open twenty four hours a day, seven days a
                    week. You name the occasion – we’ll make the ride flawless.
                    Whether you require a chauffeured vehicle for business or
                    pleasure, close to home or in a new city we are always
                    there.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container flex flex-col items-center justify-center py-24 mx-auto space-y-2 text-center">
          <p className="text-xl font-medium text-amber-600">OUR FLEET</p>
          <p className="text-4xl font-light text-gray-600">Browse Our Limos</p>
          <div className="w-full gap-12 px-4 py-24 Sdesktop:grid Sdesktop:grid-cols-3">
            <div className="flex flex-col col-span-1 space-y-3 border border-gray-300">
              <div
                className="w-full h-64 bg-center bg-no-repeat bg-cover"
                // style={{
                //   backgroundImage: `url(/image_10-1-768x512.jpg)`,
                // }}
              >
                <div className="flex items-end justify-start w-full h-full bg-black bg-opacity-30">
                  <p className="p-8 text-xl text-white">Audi A8</p>
                </div>
              </div>
              <div className="flex flex-row items-center justify-center py-1 space-x-2">
                <FaMale className="w-5 h-5 text-gray-500" />
                <p className="p-2 text-gray-500 border rounded-full">4</p>
                <FaGlobe className="w-5 h-5 text-gray-500" />
                <p className="p-2 text-gray-500 border rounded-full">4</p>
              </div>
            </div>
            <div className="flex flex-col col-span-1 space-y-3 border border-gray-300">
              <div
                className="w-full h-64 bg-center bg-no-repeat bg-cover"
                // style={{
                //   backgroundImage: `url(/image_10-1-768x512.jpg)`,
                // }}
              >
                <div className="flex items-end justify-start w-full h-full bg-black bg-opacity-30">
                  <p className="p-8 text-xl text-white">Audi A8</p>
                </div>
              </div>
              <div className="flex flex-row items-center justify-center py-1 space-x-2">
                <FaMale className="w-5 h-5 text-gray-500" />
                <p className="p-2 text-gray-500 border rounded-full">4</p>
                <FaGlobe className="w-5 h-5 text-gray-500" />
                <p className="p-2 text-gray-500 border rounded-full">4</p>
              </div>
            </div>
            <div className="flex flex-col col-span-1 space-y-3 border border-gray-300">
              <div
                className="w-full h-64 bg-center bg-no-repeat bg-cover"
                // style={{
                //   backgroundImage: `url(/image_10-1-768x512.jpg)`,
                // }}
              >
                <div className="flex items-end justify-start w-full h-full bg-black bg-opacity-30">
                  <p className="p-8 text-xl text-white">Audi A8</p>
                </div>
              </div>
              <div className="flex flex-row items-center justify-center py-1 space-x-2">
                <FaMale className="w-5 h-5 text-gray-500" />
                <p className="p-2 text-gray-500 border rounded-full">4</p>
                <FaGlobe className="w-5 h-5 text-gray-500" />
                <p className="p-2 text-gray-500 border rounded-full">4</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End of Content */}
    </>
  )
}
export default AboutUs
