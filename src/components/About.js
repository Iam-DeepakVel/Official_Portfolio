import React from "react";
import { BiChevronsRight } from "react-icons/bi";

const About = () => {
  return (
    <div
      name="about"
      className="w-full pt-20 sm:pt-24 md:h-full  bg-gradient-to-b  from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto   flex flex-col  justify-center text-justify">
        <div className="pb-8">
          <h2 className="text-5xl ml-4 font-Dance font-bold inline border-b-4 border-gray-500">
            About
          </h2>
        </div>
        {/* Paragraph 1 */}
        <div className="flex flex-row text-xl mt-5">
          <div className="mt-[5px]">
            <BiChevronsRight color="darkGray" />
          </div>
          <div className="ml-3 text-gray-300">
            Deepak is a Web developer who loves to build software to solve other
            people's problems. I've taken my experience in understanding people
            and their businesses and crafted custom-based software solutions to
            fulfilling their needs. I'm good enough at Front-End as well as
            Back-End web development. I'm keep on building my knowledge on the
            latest Tech Stacks (MERN & JAM).
          </div>
        </div>
        {/* Paragraph 1 End */}

        <br />

        {/* Paragraph 2 */}
        <div className="flex flex-row text-xl mt-4">
          <div className="mt-[5px]">
            <BiChevronsRight color="darkGray" />
          </div>
          <div className="ml-3 text-gray-300">
            I am currently pursuing my BTech degree in Information Technology from Coimbatore Institute of Technology. I will graduate in 2024. I am  proficient in programming languages like
            C, C++. I have developed strong problem-solving skills, communication and interpersonal skills.  I built
            more than 10 landing pages using different technologies and learning
            new skills to build more innovative and responsive web apps in
            future!!
          </div>
        </div>
        {/* Paragraph 2 End */}

        <div className="flex flex-row text-xl mt-10">
          <div className="mt-[5px]">
            <BiChevronsRight color="darkGray" />
          </div>
          <div className="ml-3 text-gray-300">
            I love building new web apps and i am responsible for participating
            in the complete life cycle of website develpment projects, and for
            implementation and maintaining best practice procedures in all areas
            of work. Also in charge of writing content for websites. I believe in life-long learning and always try to find more
            efficient ways of doing something. To find out more about what i can
            do for you, check out my work below.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
