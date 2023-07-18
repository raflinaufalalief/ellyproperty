import React from "react"
import { BsWhatsapp } from "react-icons/bs"

const ButtonWa = () => {
  return (
    <div className="w-full Sdesktop:hidden tablet:hidden">
      <div className="bg-primary mx-auto items-center justify-center gap-x-2 w-[15rem] py-3 px-4 rounded-md flex">
        <BsWhatsapp className="text-sm font-medium text-white" />
        <h1 className="text-sm font-medium text-white">WhatsApp</h1>
      </div>
    </div>
  )
}

export default ButtonWa
