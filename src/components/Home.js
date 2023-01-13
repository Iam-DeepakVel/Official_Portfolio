import React from "react";
import HeroImage from "../assets/Home-Image/HeroImageDeepak.jpg";
import { FaHeart } from "react-icons/fa";
import { RiArrowRightSLine } from "react-icons/ri";
import { Link } from "react-scroll";
import Typed from "react-typed";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div
      name="home"
      className="md:h-screen pt-24 pb-12 sm:py-0  w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center space-y-12 h-full px-4 md:flex-row">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          variants={{
            hidden: { opacity: 0, x: -80 },
            visible: { opacity: 1, x: 0 },
          }}
          className="flex flex-col justify-center h-full"
        >
          <h2 className="text-4xl  sm:text-6xl font-bold text-white">
            I'm Deepak
          </h2>
          <div className="flex flex-row items-center  text-xl pt-4 sm:text-3xl font-semibold text-gray-400">
            <div className="text-3xl md:text-4xl pr-4">I</div>
            <div className=" cursor-pointer hover:scale-125 duration-500">
              <FaHeart color="red" size={27} />
            </div>
            <div className="text-2xl pl-4">
              <Typed
                strings={[
                  "Frontend Development",
                  "Backend Development",
                  "FullStack Development",
                ]}
                typeSpeed={60}
                backSpeed={45}
                loop
              />
            </div>
          </div>
          <p className="text-gray-300 max-w-lg py-4 md:text-lg">
            "Welcome to my portfolio! I am a web developer with 1 year of
            experience building dynamic and responsive web applications. I am
            continuously expanding my skillset, currently focusing on
            technologies such as{" "}
            <span className="text-white font-semibold">
              {" "}
              React, Node.js, Express, MongoDB, Eleventy, Tailwind CSS, and{" "}
              <span className="text-white font-semibold">PostgreSQL.</span>
            </span>{" "}
            Here, you will find a collection of my past projects and my
            experiences. Thanks for visiting!"{" "}
          </p>
          <div>
            <a
              href="/DEEPAK RESUME.pdf"
              download={true}
              className="lg:hidden group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md  cursor-pointer font-medium justify-center bg-gradient-to-r from-cyan-500 to-blue-500"
            >
              My Resume
              <span className="group-hover:rotate-90 duration-300 ml-1 mt-[0.5px]">
                <RiArrowRightSLine />
              </span>
            </a>

            <Link to="portfolio" smooth duration={500}>
              <div className="hidden lg:flex group text-white w-fit px-6 py-3 my-2 items-center rounded-md  cursor-pointer font-medium justify-center bg-gradient-to-r from-cyan-500 to-blue-500">
                Portfolio
                <span className="group-hover:rotate-90 duration-300 ml-1 mt-[0.5px]">
                  <RiArrowRightSLine />
                </span>
              </div>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          variants={{
            hidden: { opacity: 0, x: +80 },
            visible: { opacity: 1, x: 0 },
          }}
          className="mt-4 md:ml-12"
        >
          <img
            src={HeroImage}
            alt="Deepak's Profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
