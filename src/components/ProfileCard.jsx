import React from "react"
import { BsWhatsapp } from "react-icons/bs"
const ProfileCard = () => {
  return (
    <>
      <div className="max-w-sm mx-10 my-10 mt-0">
        <div className="px-4 pt-8 pb-10 bg-white border rounded-lg shadow-lg">
          <div className="relative w-20 mx-auto rounded-full">
            <span className="absolute right-0 w-3 h-3 m-3 bg-green-500 rounded-full ring-2 ring-green-300 ring-offset-2"></span>
            <img
              className="w-full h-auto mx-auto rounded-full"
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
              alt=""
            />
          </div>
          <h1 className="my-1 text-xl font-bold leading-8 text-center text-gray-900">
            Ely Futura
          </h1>
          <h3 className="leading-6 text-center text-gray-600 font-lg text-semibold">
            Marketing Exec. at Denva Corp
          </h3>

          <div className="px-3 py-1 mt-3 text-gray-600 bg-green-700 rounded shadow-sm hover:shadow hover:bg-green-800">
            <div className="flex items-center justify-center py-2 text-lg text-white gap-x-3">
              <BsWhatsapp />
              WhatsApp
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProfileCard
