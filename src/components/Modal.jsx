import React, { useEffect, useState } from "react"
import { data } from "../data/ListingTerbaru/DataTerbaru.json"
import { useParams } from "react-router-dom"

const Modal = () => {
  const [showModal, setShowModal] = useState(false)
  const { title } = useParams()
  const myData = data.find((myData) => myData.title === String(title))
  useEffect(() => {}, [data])

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
            <div className="absolute w-auto mx-auto my-6 top-2 mobile:w-full mobile:px-2 Sdesktop:max-w-6xl">
              {/*content*/}
              <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid rounded-t border-slate-200">
                  <h3 className="text-3xl font-semibold">Detail</h3>
                </div>
                {/*body*/}
                <div className=" flex-auto p-6 Sdesktop:w-[500px]">
                  <div className="">
                    <div className="flex items-center justify-between border-t-2 border-black/20">
                      <h1 className="py-4 text-sm font-medium text-black/70">
                        Kamar Tidur
                      </h1>
                      <h2 className="py-4 text-sm font-medium text-black/60 ">
                        {myData.kt}
                      </h2>
                    </div>
                    <div className="flex items-center justify-between border-t-2 border-black/20">
                      <h1 className="py-4 text-sm font-medium text-black/70">
                        Kamar Mandi
                      </h1>
                      <h2 className="py-4 text-sm font-medium text-black/60 ">
                        {myData.km}
                      </h2>
                    </div>
                    <div className="flex items-center justify-between border-t-2 border-black/20">
                      <h1 className="py-4 text-sm font-medium text-black/70">
                        Luas Bangunan
                      </h1>
                      <h2 className="py-4 text-sm font-medium text-black/60 ">
                        {myData.lb}
                      </h2>
                    </div>
                    <div className="flex items-center justify-between border-t-2 border-black/20">
                      <h1 className="py-4 text-sm font-medium text-black/70">
                        Luas Bangunan + Balkon
                      </h1>
                      <h2 className="py-4 text-sm font-medium text-black/60 ">
                        {myData?.lbb ? myData.lbb : "-"}
                      </h2>
                    </div>
                    <div className="flex items-center justify-between border-t-2 border-black/20">
                      <h1 className="py-4 text-sm font-medium text-black/70">
                        Luas Tanah
                      </h1>
                      <h2 className="py-4 text-sm font-medium text-black/60 ">
                        {myData?.lt ? myData.lt : "-"}
                      </h2>
                    </div>
                    <div className="flex items-center justify-between border-t-2 border-black/20">
                      <h1 className="py-4 text-sm font-medium text-black/70">
                        Garasi
                      </h1>
                      <h2 className="py-4 text-sm font-medium text-black/60 ">
                        {myData?.garasi ? myData.garasi : "-"}
                      </h2>
                    </div>
                    <div className="flex items-center justify-between border-t-2 border-black/20">
                      <h1 className="py-4 text-sm font-medium text-black/70">
                        Carport
                      </h1>
                      <h2 className="py-4 text-sm font-medium text-black/60 ">
                        {myData?.garasi ? myData.garasi : "parkiran umum"}
                      </h2>
                    </div>
                    <div className="flex items-center justify-between border-t-2 border-black/20">
                      <h1 className="py-4 text-sm font-medium text-black/70">
                        Tipe Properti
                      </h1>
                      <h2 className="py-4 text-sm font-medium text-black/60 ">
                        {myData?.type}
                      </h2>
                    </div>
                    <div className="flex items-center justify-between border-t-2 border-black/20">
                      <h1 className="py-4 text-sm font-medium text-black/70">
                        Sertifikat
                      </h1>
                      <h2 className="py-4 text-sm font-medium text-black/60 ">
                        {myData?.serti}
                      </h2>
                    </div>
                    <div className="flex items-center justify-between border-t-2 border-black/20">
                      <h1 className="py-4 text-sm font-medium text-black/70">
                        Listrik
                      </h1>
                      <h2 className="py-4 text-sm font-medium text-black/60 ">
                        {myData?.listrik}
                      </h2>
                    </div>
                    <div className="flex items-center justify-between border-t-2 border-black/20">
                      <h1 className="py-4 text-sm font-medium text-black/70">
                        KT. Pembantu
                      </h1>
                      <h2 className="py-4 text-sm font-medium text-black/60 ">
                        {myData?.ktp ? myData.ktp : "-"}
                      </h2>
                    </div>
                    <div className="flex items-center justify-between border-t-2 border-black/20">
                      <h1 className="py-4 text-sm font-medium text-black/70">
                        KM. Pembantu
                      </h1>
                      <h2 className="py-4 text-sm font-medium text-black/60 ">
                        {myData?.kmp ? myData.kmp : "-"}
                      </h2>
                    </div>
                    <div className="flex items-center justify-between border-t-2 border-black/20">
                      <h1 className="py-4 text-sm font-medium text-black/70">
                        Jumlah Lantai
                      </h1>
                      <h2 className="py-4 text-sm font-medium text-black/60 ">
                        {myData?.jl ? myData.jl : "-"}
                      </h2>
                    </div>
                    <div className="flex items-center justify-between border-t-2 border-black/20">
                      <h1 className="py-4 text-sm font-medium text-black/70">
                        Pemandangan
                      </h1>
                      <h2 className="py-4 text-sm font-medium w-[10rem] text-right text-black/60 ">
                        {myData?.pemandang ? myData.pemandang : "-"}
                      </h2>
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
