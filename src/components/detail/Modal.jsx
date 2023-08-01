import React, { useEffect, useState } from "react"
import { data } from "../../data/ListingTerbaru/DataTerbaru.json"
import { useParams } from "react-router-dom"
import { AiOutlineCloseCircle } from "react-icons/ai"

const Modal = () => {
  const [showModal, setShowModal] = useState(false)
  const { title } = useParams()
  const myData = data.find((myData) => myData.title === String(title))
  useEffect(() => {}, [data])

  return (
    <>
      <button
        className="text-base font-medium"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Lihat Selengkapnya
      </button>
      {showModal ? (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
            <div className="relative w-screen mx-auto ">
              {/*content*/}
              <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between px-2 py-5 mt-10 border-b border-solid rounded-t border-slate-200">
                  <h3 className="text-3xl font-semibold">Detail</h3>
                  <button
                    className="float-right p-1 ml-auto text-3xl font-semibold leading-none text-black bg-transparent border-0 outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <AiOutlineCloseCircle />
                  </button>
                </div>
                <div className="flex-auto w-full px-4 py-0">
                  <div className="">
                    <div className="flex items-center justify-between border-b-1 border-black/20">
                      <h1 className="text-sm font-medium mobile:py-4 Sdesktop:py-3 text-black/70">
                        Kamar Tidur
                      </h1>
                      <h2 className="text-sm font-medium mobile:py-4 Sdesktop:py-3 text-black/60 ">
                        {myData.kt}
                      </h2>
                    </div>
                    <div className="flex items-center justify-between border-t-2 border-black/20">
                      <h1 className="text-sm font-medium mobile:py-4 Sdesktop:py-3 text-black/70">
                        Kamar Mandi
                      </h1>
                      <h2 className="text-sm font-medium mobile:py-4 Sdesktop:py-3 text-black/60 ">
                        {myData.km}
                      </h2>
                    </div>
                    <div className="flex items-center justify-between border-t-2 border-black/20">
                      <h1 className="text-sm font-medium mobile:py-4 Sdesktop:py-3 text-black/70">
                        Luas Bangunan
                      </h1>
                      <h2 className="text-sm font-medium mobile:py-4 Sdesktop:py-3 text-black/60 ">
                        {myData.lb}
                      </h2>
                    </div>
                    <div className="flex items-center justify-between border-t-2 border-black/20">
                      <h1 className="text-sm font-medium mobile:py-4 Sdesktop:py-3 text-black/70">
                        Luas Bangunan + Balkon
                      </h1>
                      <h2 className="text-sm font-medium mobile:py-4 Sdesktop:py-3 text-black/60 ">
                        {myData?.lbb ? myData.lbb : "-"}
                      </h2>
                    </div>
                    <div className="flex items-center justify-between border-t-2 border-black/20">
                      <h1 className="text-sm font-medium mobile:py-4 Sdesktop:py-3 text-black/70">
                        Luas Tanah
                      </h1>
                      <h2 className="text-sm font-medium mobile:py-4 Sdesktop:py-3 text-black/60 ">
                        {myData?.lt ? myData.lt : "-"}
                      </h2>
                    </div>
                    <div className="flex items-center justify-between border-t-2 border-black/20">
                      <h1 className="text-sm font-medium mobile:py-4 Sdesktop:py-3 text-black/70">
                        Garasi
                      </h1>
                      <h2 className="text-sm font-medium mobile:py-4 Sdesktop:py-3 text-black/60 ">
                        {myData?.garasi ? myData.garasi : "-"}
                      </h2>
                    </div>
                    <div className="flex items-center justify-between border-t-2 border-black/20">
                      <h1 className="text-sm font-medium mobile:py-4 Sdesktop:py-3 text-black/70">
                        Carport
                      </h1>
                      <h2 className="text-sm font-medium mobile:py-4 Sdesktop:py-3 text-black/60 ">
                        {myData?.garasi ? myData.garasi : "parkiran umum"}
                      </h2>
                    </div>
                    <div className="flex items-center justify-between border-t-2 border-black/20">
                      <h1 className="text-sm font-medium mobile:py-4 Sdesktop:py-3 text-black/70">
                        Tipe Properti
                      </h1>
                      <h2 className="text-sm font-medium mobile:py-4 Sdesktop:py-3 text-black/60 ">
                        {myData?.type}
                      </h2>
                    </div>
                    <div className="flex items-center justify-between border-t-2 border-black/20">
                      <h1 className="text-sm font-medium mobile:py-4 Sdesktop:py-3 text-black/70">
                        Sertifikat
                      </h1>
                      <h2 className="text-sm font-medium mobile:py-4 Sdesktop:py-3 text-black/60 ">
                        {myData?.serti}
                      </h2>
                    </div>
                    <div className="flex items-center justify-between border-t-2 border-black/20">
                      <h1 className="text-sm font-medium mobile:py-4 Sdesktop:py-3 text-black/70">
                        Listrik
                      </h1>
                      <h2 className="text-sm font-medium mobile:py-4 Sdesktop:py-3 text-black/60 ">
                        {myData?.listrik}
                      </h2>
                    </div>
                    <div className="flex items-center justify-between border-t-2 border-black/20">
                      <h1 className="text-sm font-medium mobile:py-4 Sdesktop:py-3 text-black/70">
                        KT. Pembantu
                      </h1>
                      <h2 className="text-sm font-medium mobile:py-4 Sdesktop:py-3 text-black/60 ">
                        {myData?.ktp ? myData.ktp : "-"}
                      </h2>
                    </div>
                    <div className="flex items-center justify-between border-t-2 border-black/20">
                      <h1 className="text-sm font-medium mobile:py-4 Sdesktop:py-3 text-black/70">
                        KM. Pembantu
                      </h1>
                      <h2 className="text-sm font-medium mobile:py-4 Sdesktop:py-3 text-black/60 ">
                        {myData?.kmp ? myData.kmp : "-"}
                      </h2>
                    </div>
                    <div className="flex items-center justify-between border-t-2 border-black/20">
                      <h1 className="text-sm font-medium mobile:py-4 Sdesktop:py-3 text-black/70">
                        Jumlah Lantai
                      </h1>
                      <h2 className="text-sm font-medium mobile:py-4 Sdesktop:py-3 text-black/60 ">
                        {myData?.jl ? myData.jl : "-"}
                      </h2>
                    </div>
                    <div className="flex items-center justify-between border-t-2 border-black/20">
                      <h1 className="text-sm font-medium mobile:py-4 Sdesktop:py-3 text-black/70">
                        Pemandangan
                      </h1>
                      <h2 className="mobile:py-4 Sdesktop:py-3 text-sm font-medium w-[10rem] text-right text-black/60 ">
                        {myData?.pemandang ? myData.pemandang : "-"}
                      </h2>
                    </div>
                  </div>
                </div>
                {/*footer*/}
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
