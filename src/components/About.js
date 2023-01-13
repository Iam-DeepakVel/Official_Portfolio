import { motion } from "framer-motion";
import React from "react";
import { BiChevronsRight } from "react-icons/bi";

const About = () => {
  return (
    <div
      name="about"
      className="w-full pt-20 sm:pt-24 md:h-full  bg-gradient-to-b  from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto   flex flex-col  justify-center lg:text-justify">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="pb-8"
        >
          <h2 className="text-5xl ml-4 font-Dance font-bold inline border-b-4 border-gray-500">
            About
          </h2>
        </motion.div>
        {/* Paragraph 1 */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="flex flex-row text-xl mt-5"
        >
          <div className="mt-[5px]">
            <BiChevronsRight color="darkGray" />
          </div>
          <div className="ml-3 text-gray-300 ">
            As a skilled web developer with 1 year of experience, I am
            passionate about utilizing my technical abilities to create
            solutions that effectively address the unique needs of individuals
            and businesses. My expertise in both front-end and back-end
            development, coupled with my ability to understand and empathize
            with my clients, allows me to craft custom software solutions that
            truly meet their requirements. I am dedicated to staying current
            with the latest tech stacks, such as MERN and JAM, in order to
            continue delivering cutting-edge solutions.
          </div>
        </motion.div>
        {/* Paragraph 1 End */}

        <br />

        {/* Paragraph 2 */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="flex flex-row text-xl mt-4 "
        >
          <div className="mt-[5px]">
            <BiChevronsRight color="darkGray" />
          </div>
          <div className="ml-3 text-gray-300">
            I am currently pursuing my BTech degree in Information Technology
            from Coimbatore Institute of Technology, and I am set to graduate in
            2024. In addition to my technical expertise, I am also proficient in
            programming languages such as C and C++, and I have developed strong
            problem-solving skills, communication and interpersonal skills. I
            have built over 10 landing pages using various technologies, and I
            am always eager to learn new skills and build innovative, responsive
            web apps in the future.
          </div>
        </motion.div>
        {/* Paragraph 2 End */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="flex flex-row text-xl mt-10"
        >
          <div className="mt-[5px]">
            <BiChevronsRight color="darkGray" />
          </div>
          <div className="ml-3 text-gray-300">
            As a full-stack web developer, I am responsible for participating in
            the complete lifecycle of website development projects, and for
            implementing and maintaining best practices in all areas of my work.
            I also take charge of writing content for websites. I believe in
            life-long learning, and I am constantly on the lookout for more
            efficient ways to do things. To find out more about what I can do
            for you, check out my work below.
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
