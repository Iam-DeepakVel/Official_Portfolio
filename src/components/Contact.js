import React from "react";
import { TfiTwitter } from "react-icons/tfi";
import { SlSocialLinkedin } from "react-icons/sl";
import { FiGithub } from "react-icons/fi";
import { BiMailSend } from "react-icons/bi";
import validator from "validator";

const Contact = () => {
  const [emailError, setEmailError] = React.useState("");

  const validateEmail = (e) => {
    var email = e.target.value;
    if (validator.isEmail(email)) {
      setEmailError("Valid Email");
      document.getElementById('valid').classList.remove('hidden')
      document.getElementById('invalid').classList.add('hidden')
    } else {
      setEmailError("Enter valid Email!");
      document.getElementById('invalid').classList.remove('hidden')
      document.getElementById('valid').classList.add('hidden')
    }
    };
   
  return (
    <div
      name="contact"
      className="flex w-full pt-24 sm:pt-28 pb-14 md:h-full p-4 bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg flex  mx-auto">
        {/* Left section  */}

        <div className="flex flex-col w-full p-4 justify-center  mx-auto ">
          <div>
            <h2 className="text-5xl ml-4 font-Dance font-bold inline border-b-4 border-gray-500">
              Contact
            </h2>
            <p className="w-full flex text-2xl text-gray-400 pt-6 pb-4  justify-start ml-3">
              Submit the form below to get in touch with me !!
            </p>
          </div>

          <div className="flex ml-4">
            <form
              action="https://getform.io/f/784f6408-5f77-43a9-bb33-d85652f901a7"
              method="POST"
              className="flex flex-col w-full  md:w-3/4"
            >
              <label
                htmlFor="website-admin"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
               
              >
                Your Name
              </label>

              <input
                type="text"
                name="name"
                required
                placeholder="Deepak V"
                id="default-input"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />

              <label
                htmlFor="input-group-1"
                className="block mb-2 mt-6 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your Email
              </label>

              <input
                type="text"
                name="email"
                required
                onChange={(e) => validateEmail(e)}
                placeholder="name@email.com"
                id="default-input"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              <span id="valid" className="hidden mt-2 text-sm text-green-300"
              >
                {emailError}
              </span>
              <span id="invalid" className="hidden mt-2 text-sm text-red-300"
              >
                {emailError}
              </span>

              <label
                htmlFor="message"
                className="block mt-5 mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows="10"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Convey your message here..."
              ></textarea>
               <span id="submission" className="hidden mt-2 text-sm  text-red-300"
              >
                Please enter the details before submitting!
              </span>

              <button type="submit" className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 mt-4 mx-auto flex items-center rounded-md hover:scale-110 duration-100">
                Let's Talk
              </button>
              <p className="w-full rounded-lg mt-6 h-[0.7px] bg-gray-600" />
              <div className="flex flex-col items-center justify-center w-full">
                <h2 className="mt-4 text-gray-400">
                  Get connected with me on Social Platforms!!
                </h2>
                <ul className="flex space-x-6 mt-4 text-gray-400 ">
                  <a
                    href="https://twitter.com/Iam_DeepakVel"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-gray-500 duration-300"
                  >
                    <TfiTwitter size={20} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/iamdeepakvel/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-gray-500 duration-300"
                  >
                    <SlSocialLinkedin size={20} />
                  </a>
                  <a
                    href="https://github.com/Iam-DeepakVel/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-gray-500 duration-300"
                  >
                    <FiGithub size={20} />
                  </a>
                  <a
                    href="mailto:deepakvel82@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-gray-500 duration-300"
                  >
                    <BiMailSend size={20} />
                  </a>
                </ul>
              </div>
            </form>
          </div>
        </div>

        {/* Right Section */}
        <div className="hidden md:flex  items-center ">
          <h2 className="flex items-center font-bold text-4xl font-Quote1 h-80   text-white">
            “ We don't just sell websites,
            <br />
            we build websites that Sells ”
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Contact;
