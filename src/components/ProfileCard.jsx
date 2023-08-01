import React from "react"
import logo from "../assets/logo-futura.png"
import { BsTelephone, BsWhatsapp } from "react-icons/bs"
import profile from "../assets/profile.png"

const ProfileCard = ({ pesanwa }) => {
  const pesan = `https://wa.me/+6285648355728?text=Saya ingin beli property ini ${pesanwa}`
  return (
    <div>
      <div className="w-full max-w-lg px-8 py-8 mx-auto space-y-2 bg-white border shadow-lg rounded-xl Sdesktop:items-center Sdesktop:space-y-0 h-vit">
        <div className="flex flex-col items-center space-x-5 ">
          <img
            className="block h-16 mx-auto my-3 rounded-full Sdesktop:shrink-0"
            src={profile}
            alt="Woman's Face"
          />
          <p className="text-lg font-semibold text-center text-black">
            Ely Futura
          </p>
          <p className="text-xs">Principal Consultant at Futura Property</p>
        </div>

        <div className="space-y-5 text-center Sdesktop:text-left">
          <hr className="my-3 rounded-full bg-black/10" />
          <div>
            <a className="flex items-center justify-center w-full py-2 text-sm font-normal bg-transparent border rounded-lg shadow-md gap-x-2 hover:bg-slate-200 ">
              <BsTelephone className="text-lg" />
              +62 856 4835 5728
            </a>
          </div>
          <div>
            <a
              href={pesan}
              className="flex items-center justify-center w-full py-2 text-sm font-normal bg-transparent border rounded-lg shadow-md gap-x-2 hover:bg-slate-200 "
            >
              <BsWhatsapp className="text-lg text-green-700" /> WhatsApp
            </a>
          </div>
          <hr className="my-3 rounded-full bg-black/10" />
          <div className="flex justify-center">
            <img src={logo} className="w-20" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard
