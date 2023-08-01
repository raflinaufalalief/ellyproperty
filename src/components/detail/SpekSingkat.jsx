import React from "react"
import { BsFillBuildingFill } from "react-icons/bs"
import { FaBath, FaBed } from "react-icons/fa6"
import { GiResize } from "react-icons/gi"
import { MdApartment } from "react-icons/md"

const SpekSingkat = ({ props }) => {
  return (
    <div className="pb-5">
      <div className="flex py-4 overflow-auto gap-x-3">
        <div className="flex flex-col items-center justify-center px-3 py-2 text-center bg-white rounded-md shadow-lg">
          <h1 className="text-sm font-semibold text-black/70">L.Bangunan</h1>
          <div className="flex space-x-2">
            <p className="text-sm text-medium text-black/60">{props.lb}</p>
            <GiResize />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center px-3 py-2 text-center bg-white rounded-md shadow-lg">
          <h1 className="text-sm font-semibold text-black/70">
            L.Tanah/Keseluruhan
          </h1>
          <div className="flex space-x-2">
            <p className="text-sm text-medium text-black/60">{props.lbb}</p>
            <BsFillBuildingFill />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center px-3 py-2 text-center bg-white rounded-md shadow-lg">
          <h1 className="text-sm font-semibold text-black/70">K.Mandi</h1>
          <div className="flex space-x-2">
            <p className="text-sm text-medium text-black/60">{props.km}</p>
            <FaBath />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center px-3 py-2 text-center bg-white rounded-md shadow-lg">
          <h1 className="text-sm font-semibold text-black/70">K.Tidur</h1>
          <div className="flex space-x-2">
            <p className="text-sm text-medium text-black/60">{props.kt}</p>
            <FaBed />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center px-3 py-2 text-center bg-white rounded-md shadow-lg">
          <h1 className="text-sm font-semibold text-black/70">Lantai</h1>
          <div className="flex space-x-2">
            <p className="text-sm text-medium text-black/60">{props.lantai}</p>
            <MdApartment />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center px-3 py-2 text-center bg-white rounded-md shadow-lg">
          <h1 className="text-sm font-semibold text-black/70">Pemandangan</h1>
          <p className="text-xs text-medium text-black/60">{props.pemandang}</p>
        </div>
      </div>
    </div>
  )
}

export default SpekSingkat
