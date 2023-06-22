import React from "react"

const Update = () => {
  return (
    <section className="bg-bg">
      <div className="mx-auto containers">
        <div className="flex flex-col">
          <h2 className="mb-4 text-2xl font-bold text-center text-desc ">
            Lorem ipsum dolor sit amet.
          </h2>
          <div className="grid grid-cols-1 gap-4 mt-4 tablet:grid-cols-2 Sdesktop:grid-cols-4 ">
            <div className="flex items-start p-4 bg-white shadow-lg rounded-xl">
              <div className="flex items-center justify-center w-12 h-12 border border-blue-100 rounded-full bg-blue-50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                  />
                </svg>
              </div>
              <div className="ml-4">
                <h2 className="font-semibold">Property Deals</h2>
                <p className="mt-2 text-sm text-gray-500">
                  Last opened 4 days ago
                </p>
              </div>
            </div>
            <div className="flex items-start p-4 bg-white shadow-lg rounded-xl">
              <div className="flex items-center justify-center w-12 h-12 border border-orange-100 rounded-full bg-orange-50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-orange-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <div className="ml-4">
                <h2 className="font-semibold">Client</h2>
                <p className="mt-2 text-sm text-gray-500">
                  Last checked 3 days ago
                </p>
              </div>
            </div>
            <div className="flex items-start p-4 bg-white shadow-lg rounded-xl">
              <div className="flex items-center justify-center w-12 h-12 border border-red-100 rounded-full bg-red-50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-red-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <div className="ml-4">
                <h2 className="font-semibold">Team Members</h2>
                <p className="mt-2 text-sm text-gray-500">
                  Last authored 1 day ago
                </p>
              </div>
            </div>
            <div className="flex items-start p-4 bg-white shadow-lg rounded-xl">
              <div className="flex items-center justify-center w-12 h-12 border border-indigo-100 rounded-full bg-indigo-50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-indigo-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                  />
                </svg>
              </div>
              <div className="ml-4">
                <h2 className="font-semibold">Comments</h2>
                <p className="mt-2 text-sm text-gray-500">
                  Last commented 8 days ago
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Update
