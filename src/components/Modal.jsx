import React, { useEffect, useState } from "react"
import { data } from "../data/ListingTerbaru/DataTerbaru.json"
import { useParams } from "react-router-dom"

const Modal = () => {
  const [showModal, setShowModal] = useState(false)
  const { title } = useParams()
  const myData = data.find((data) => data.title === String(title))
  useEffect(() => {}, [myData])

  return (
    <>
      <button
        className="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-accent hover:shadow-lg focus:outline-none"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Selengkapnya
      </button>
      {showModal ? (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
            <div className="relative w-auto max-w-sm mx-auto my-6">
              {/*content*/}
              <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid rounded-t border-slate-200">
                  <h3 className="text-3xl font-semibold">Detail</h3>
                  <button
                    className="float-right p-1 ml-auto text-3xl font-semibold leading-none text-black bg-transparent border-0 outline-none opacity-5 focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <h1 className="block w-6 h-6 text-2xl text-black bg-transparent outline-none opacity-5 focus:outline-none">
                      ×
                    </h1>
                  </button>
                </div>
                {/*body*/}
                <div className="">
                  <div className="px-5 pt-4 mt-4 border-t border-gray-200 Sdesktop:py-8 Sdesktop:border-t-0 Sdesktop:mt-0 Sdesktop:text-left">
                    <div className="flex py-2 border-gray-200">
                      <h1 className="text-gray-500">Area</h1>
                      <h1 className="ml-auto text-gray-900">{myData.area}</h1>
                    </div>
                    <div className="flex py-2 border-t border-gray-200">
                      <h1 className="text-gray-500">luas bangunan</h1>
                      <h1 className="ml-auto text-gray-900">{myData.lb}</h1>
                    </div>
                    <div className="flex items-center py-2 border-t border-gray-200">
                      <h1 className="text-gray-500">
                        luas bangunan <br /> keseluruhan
                      </h1>
                      <h1 className="ml-auto text-gray-900">{myData.lbb}</h1>
                    </div>
                    <div className="flex py-2 border-t border-gray-200">
                      <h1 className="text-gray-500">Kamar tidur</h1>
                      <h1 className="ml-auto text-gray-900">{myData.kt}</h1>
                    </div>
                    <div className="flex py-2 border-t border-gray-200">
                      <h1 className="text-gray-500">Kamar mandi</h1>
                      <h1 className="ml-auto text-gray-900">{myData.km}</h1>
                    </div>
                    <div className="flex py-2 border-t border-gray-200">
                      <h1 className="text-gray-500">Lantai</h1>
                      <h1 className="ml-auto text-gray-900">{myData.lantai}</h1>
                    </div>
                    <div className="flex py-2 border-t border-gray-200">
                      <h1 className="text-gray-500">Sertifikat</h1>
                      <h1 className="ml-auto text-gray-900">{myData.serti}</h1>
                    </div>
                    <div className="flex py-2 border-t border-gray-200">
                      <h1 className="text-gray-500">Pemandangan</h1>
                      <h1 className="ml-auto text-gray-900">
                        {myData.pemandang}
                      </h1>
                    </div>
                    <div className="flex py-2 border-t border-gray-200">
                      <h1 className="text-gray-500">Listrik</h1>
                      <h1 className="ml-auto text-gray-900">
                        {myData.listrik}
                      </h1>
                    </div>
                    <div className="flex py-2 border-t border-gray-200">
                      <h1 className="text-gray-500">Air</h1>
                      <h1 className="ml-auto text-gray-900">{myData.air}</h1>
                    </div>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid rounded-b border-slate-200">
                  <button
                    className="px-6 py-2 mb-1 mr-1 text-sm font-bold text-red-500 uppercase transition-all duration-150 ease-linear outline-none background-transparent focus:outline-none"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-lg focus:outline-none"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
        </>
      ) : null}
    </>
  )
}
export default Modal
