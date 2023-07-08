import React from "react"
import Navbar from "../components/Navbar"
// import emailjs from "@emailjs/browser"

// const sendEmail = (e) => {
//   e.preventDefault()

//   emailjs.sendForm(
//     "service_rbcw8vs",
//     "template_p6nhy5l",
//     e.target,
//     "RwkpmQP7FhQBiyhda"
//   )
// }
const Contact = () => {
  return (
    <section>
      <div>
        <Navbar />
      </div>
      {/* <div className="bg-white dark:bg-gray-900">
        <div className="px-4 py-8 mx-auto containers Sdesktop:py-16">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-center text-gray-900 dark:text-white">
            Contact Us
          </h2>
          <p className="mb-8 font-light text-center text-gray-500 Sdesktop:mb-16 dark:text-gray-400 sm:text-xl">
            Got a technical issue? Want to send feedback about a beta feature?
            Need details about our Business plan? Let us know.
          </p>
          <form className="space-y-8" onSubmit={sendEmail}>
            <div>
              <label
                for="emailForm"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Name
              </label>
              <input
                type="text"
                name="name_form"
                id="nameForm"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-Sdesktop focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="name@flowbite.com"
                required
              />
            </div>
            <div>
              <label
                for="emailForm"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your email
              </label>
              <input
                type="email"
                name="email_form"
                id="emailForm"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-Sdesktop focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="name@flowbite.com"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                for="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Your message
              </label>
              <textarea
                id="message"
                name="message"
                rows="6"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-5 py-3 text-sm font-medium text-center text-white rounded-lg bg-bg mobile:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 "
            >
              Send message
            </button>
          </form>
        </div>
      </div> */}
    </section>
  )
}

export default Contact
