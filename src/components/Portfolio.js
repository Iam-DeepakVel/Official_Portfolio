import React from "react";
import Web1 from "../assets/portfolio/Web1.png";
import Web2 from "../assets/portfolio/Web2.png";
import Web3 from "../assets/portfolio/Web3.png";
import Web4 from "../assets/portfolio/Web4.png";
import Web5 from "../assets/portfolio/Web5.png";
import Web6 from "../assets/portfolio/Web6.png";

import { motion } from "framer-motion";

const Portfolio = () => {
  const showCases = [
    {
      id: 1,
      src: Web1,
      demoLink: "https://eleventybasicwebsite.netlify.app/",
      codeLink: "https://github.com/Iam-DeepakVel/Eleventy-Tailwind",
    },
    {
      id: 2,
      src: Web2,
      demoLink: "https://11tyblogsite.netlify.app/",
      codeLink: "https://github.com/Iam-DeepakVel/11ty-JAMStack-BlogSite",
    },
    {
      id: 3,
      src: Web3,
      demoLink: "https://11tytailwindlandingpage.netlify.app/",
      codeLink: "https://github.com/Iam-DeepakVel/11tyTailwindcss_LandingPage",
    },
    {
      id: 4,
      src: Web4,
      demoLink: "https://reactapi-project1-cocktails.netlify.app/",
      codeLink: "https://github.com/Iam-DeepakVel/React-APIFetch-Project-1",
    },
    {
      id: 5,
      src: Web5,
      demoLink: "https://tailwindproject1.netlify.app/",
      codeLink: "https://github.com/Iam-DeepakVel/Tailwind-Static-Web-1",
    },
    {
      id: 6,
      src: Web6,
      demoLink: "https://wingsblogs.netlify.app/",
      codeLink: "https://github.com/Iam-DeepakVel/WingsBlog-Client",
    },
  ];

  return (
    <div
      name="portfolio"
      className="pt-20 sm:pt-24 md:pt-24 bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-full"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col w-full h-full">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          variants={{
            hidden: { opacity: 0, x: +70 },
            visible: { opacity: 1, x: 0 },
          }}
          className="pb-8"
        >
          <h2 className="text-5xl ml-4 font-Dance font-bold inline border-b-4 border-gray-500">
            Portfolio
          </h2>
          <p className="w-full flex text-2xl  text-gray-400 pt-6 pb-4  justify-start ml-3">
            Check out some of my work right here !!
          </p>
        </motion.div>

        {/* Card Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.3 },
            },
          }}
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0"
        >
          {/* Card */}
          {showCases.map(({ id, src, demoLink, codeLink }) => {
            return (
              <motion.div
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 },
                }}
                key={id}
                className="shadow-md shadow-gray-600 rounded-lg"
              >
                <img
                  src={src}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105"
                />
                <div className="flex items-center justify-center ">
                  <a
                    href={demoLink}
                    target="_blank"
                    rel="noreferrer"
                    className="w-1/2 px-6 py-3 m-4 text-lg duration-200 hover:scale-105"
                  >
                    Demo
                  </a>
                  <a
                    href={codeLink}
                    target="_blank"
                    rel="noreferrer"
                    className="w-1/2 px-6 py-3 m-4 text-lg duration-200 hover:scale-105"
                  >
                    Code
                  </a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default Portfolio;
