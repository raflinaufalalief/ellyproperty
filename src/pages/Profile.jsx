import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import profile from "../assets/profile.png"
import { GrMapLocation } from "react-icons/gr"
import { IoBusinessOutline } from "react-icons/io5"

const Profile = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  })
  return (
    <>
      {/* <!-- component --> */}
      <div className="relative block h-[500px] w-full">
        <div className="absolute top-0 w-full h-full bg-center bg-cover bg-no-repeat bg-[url('./assets/bg-profile.jpg')]">
          <span className="absolute w-full h-full bg-black opacity-50"></span>
        </div>
      </div>
      <div className="relative py-16 bg-blueGray-200">
        <div className="px-4 mx-auto containers">
          <div className="relative flex flex-col w-full min-w-0 mb-6 -mt-64 break-words bg-white rounded-lg shadow-xl">
            <div className="px-6">
              <div className="flex flex-wrap justify-center">
                <div className="flex justify-center w-full px-4">
                  <div className="relative">
                    <img
                      alt="..."
                      src={profile}
                      className="absolute h-auto -ml-20 pt-10 align-middle border-none rounded-full shadow-xl  max-w-[150px]"
                    />
                  </div>
                </div>
              </div>
              {/*  */}

              <div className="pt-56">
                <div className="flex items-center justify-center mt-2 space-x-2">
                  <h1 className="text-2xl font-bold leading-normal ">
                    Ely Futura
                  </h1>
                  <span
                    className="p-1 bg-blue-500 rounded-full"
                    title="Verified"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-gray-100 h-2.5 w-2.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="4"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </span>
                </div>
                <div className="flex items-center justify-center my-5 text-base font-medium leading-normal capitalize text-secondary mobile:text-sm">
                  <div className="mr-2 text-sm text-black">
                    <GrMapLocation />
                  </div>
                  Cengkareng, Jakarta Barat
                </div>
                <div className="flex items-center justify-center my-5 text-base font-medium leading-normal capitalize text-secondary mobile:text-sm">
                  <div className="mr-2 text-sm text-black">
                    <IoBusinessOutline />
                  </div>
                  Principal Consultant at Futura Property
                </div>
              </div>
              <Link
                to="/contact"
                className="flex items-center justify-center text-lg  py-3 mx-auto my-3 font-semibold text-white border rounded-lg w-[20%] mobile:w-[50%] bg-accent hover:bg-accent/50"
              >
                Hubungi Saya
              </Link>
              <div className="py-10 mt-10 text-center border-t border-blueGray-200">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full px-4 Sdesktop:w-9/12">
                    <p className="mb-4 text-lg leading-relaxed text-secondary mobile:text-sm">
                      Perkenalkan saya Ely, Profesi saya sebagai property
                      consultant, Saya sudah bergerak di bidang ini sejak 2009.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile
