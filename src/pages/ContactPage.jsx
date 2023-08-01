import React, { useEffect } from "react"
import { ImOffice } from "react-icons/im"
import { BiLogoGmail } from "react-icons/bi"
import { IoLogoWhatsapp } from "react-icons/io"

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  })
  return (
    <section>
      <div>
        <div className="flex flex-col px-4 mx-auto my-12 containers Sdesktop:flex-row Sdesktop:my-28 tablet:my-28">
          <div className="flex flex-col w-full ">
            <p className="my-4 text-3xl font-bold leading-relaxed text-primary Sdesktop:text-4xl Sdesktop:leading-snug">
              Hubungi Saya
            </p>
            <p className="my-2 font-sans text-sm Sdesktop:text-lg Sdesktop:my-4">
              Jika ada pertanyaan atau konsultasi seputar property silahkan
              Hubungi saya di bawah.
            </p>
            <p className="flex items-center my-2 font-sans text-sm Sdesktop:text-base gap-x-2 Sdesktop:my-4">
              <ImOffice /> +62 822-3333-5227
            </p>
            <p className="flex items-center my-2 font-sans text-sm Sdesktop:text-base gap-x-2 Sdesktop:my-4 ">
              <BiLogoGmail />
              elyfuturaproperty@gmail.com
            </p>
            <p className="flex items-center my-2 font-sans text-sm Sdesktop:text-base gap-x-2 Sdesktop:my-4 ">
              <IoLogoWhatsapp />
              +62 877-8907-0758
            </p>
          </div>
          <div className="flex flex-col justify-center w-full mobile:my-10 ">
            <div className="mx-auto containers">
              <div className="relative flex flex-col w-full min-w-0 break-words">
                <div className="flex-auto ">
                  <img
                    src="https://user-images.githubusercontent.com/54521023/152731049-cc744a56-1d6f-4945-9566-0fa3b7ad1d24.png"
                    alt="contact image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactPage
