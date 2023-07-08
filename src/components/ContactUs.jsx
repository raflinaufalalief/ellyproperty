import React from "react"
import { BsArrowRight } from "react-icons/bs"
import { Link } from "react-router-dom"

const ContactUs = () => {
  return (
    <>
      <section>
        <div className="mx-auto mobile:px-4 containers">
          <div className="items-center justify-center gap-8 Sdesktop:flex">
            <div className="Sdesktop:w-[800px] ">
              <img
                src="https://img.freepik.com/free-vector/hand-drawn-contact-information-background-template_23-2148189662.jpg?size=626&ext=jpg&ga=GA1.1.628561962.1680109885&semt=ais"
                alt="hair_care"
                className="block Sdesktop:block md:hidden"
              />
              <img
                src="https://img.freepik.com/free-vector/hand-drawn-contact-information-background-template_23-2148189662.jpg?size=626&ext=jpg&ga=GA1.1.628561962.1680109885&semt=ais"
                alt
                className="hidden Sdesktop:hidden md:block"
              />
            </div>
            <div className="mobile:mt-5">
              <h1 className="mb-5 title">
                Konsultasi <span className="text-accent">Dengan</span> Kami
              </h1>
              <div className="pl-3 mt-5 border-l-4 border-accent">
                <p className="subtitle">
                  Kami siap membantu Anda dengan pertanyaan atau permintaan yang
                  Anda miliki. Mari terhubung dan temukan solusi terbaik untuk
                  Anda.
                </p>
              </div>
              <div className="flex items-center max-w-sm mx-0 Sdesktop:max-w-full gap-x-2 Sdesktop:gap-x-6">
                <Link to="/contact">
                  <button className="flex items-center justify-center mx-0 mt-5 btn-sm Sdesktop:btn-md btn-outline Sdesktop:gap-x-4 mobile:gap-x-2">
                    Contact Us <BsArrowRight />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactUs
