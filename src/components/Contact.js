import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="flex w-full pt-24 sm:pt-48 pb-40 md:h-full p-4 bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg flex  mx-auto">
        {/* Left section  */}

        <div className="flex flex-col w-full p-4 justify-center  mx-auto ">
          <div>
            <h2 className="text-5xl ml-4 font-Dance font-bold inline border-b-4 border-gray-500">
              Contact
            </h2>
            <p className="w-full flex text-2xl   pt-6 pb-4  justify-start ml-3">
              Submit the form below to get in touch with me
            </p>
          </div>

          <div className="flex ml-4">
            <form
              action="https://getform.io/f/784f6408-5f77-43a9-bb33-d85652f901a7"
              method="POST"
              className="flex flex-col w-full  md:w-3/4"
            >
              <label
                for="website-admin"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your Name
              </label>

              <input
                type="text"
                name="name"
                placeholder="Deepak V"
                id="default-input"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />

              <label
                for="input-group-1"
                class="block mb-2 mt-6 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your Email
              </label>
             
              
              <input
                type="text"
                name="email"
                placeholder="name@email.com"
                id="default-input"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
         

              <label
                for="message"
                class="block mt-5 mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your message
              </label>
              <textarea
                id="message"
                name="message"
                rows="10"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Convey your message here..."
              ></textarea>

              <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 mt-4 mx-auto flex items-center rounded-md hover:scale-110 duration-100">
                Let's Talk
              </button>
            </form>
          </div>
        </div>

        {/* Right Section */}
        <div className="hidden md:flex items-center ">
          <h2 className="flex items-center text-4xl font-Dance h-80   text-white">
            “We don't just sell websites, we build websites that Sells”
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Contact;
