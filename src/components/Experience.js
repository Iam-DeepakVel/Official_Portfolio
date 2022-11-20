import React from "react";
import { BsDot } from "react-icons/bs";

const Experience = () => {
  return (
    <div
      name="experience"
      className="pt-24 sm:pt-20 w-full md:h-full bg-gradient-to-b  from-black to-gray-800 text-white"
    >
      <div className="max-w-screen-lg flex flex-col  justify-center w-full h-full mx-auto p-4">
        <div className="pb-12">
          <h2 className="text-5xl ml-4 font-Dance font-bold inline border-b-4 border-gray-500">
            Experience
          </h2>
        </div>

        {/* Skematix Technologies */}
        <div className="shadow-lg hover:scale-105 duration-200 py-4 rounded-lg shadow-gray-100">
          <div className="flex text-black  justify-between">
            <h2 className="text-2xl font-bold text-gray-400 pl-4">
              Skematix Technologies
            </h2>
            <p className="font-semibold pr-6 text-gray-300">
              Sep 2022 - Present
            </p>
          </div>

          <h4 className="ml-4 mt-2">
            <span className="mr-1 font-bold">Role:</span> Full Stack Developer
            Intern
          </h4>

          <div className="flex flex-row text-md mt-2">
            <BsDot size={40} color="darkGray" />
            <p className="ml-2 mt-2 text-gray-300">
              Responsible for front end development for a dental products
              website.
            </p>
          </div>

          <div className="flex flex-row text-md mt-2">
            <BsDot size={40} color="darkGray" />
            <p className="ml-2 mt-2 text-gray-300">
              Building an website using Eleventy, Nunjucks, Tailwindcss and
              NetlifyCMS.
            </p>
          </div>

          <div className="flex flex-row text-md mt-2">
            <BsDot size={40} color="darkGray" />
            <p className="ml-2 mt-2 text-gray-300">
              Learnt to use AWS EC2, lambda function, Simple Email Service(SES).
            </p>
          </div>

          <div className="flex flex-row text-md mt-2">
            <BsDot size={40} color="darkGray" />
            <p className="ml-2 mt-2 text-gray-300">
              Exposure with Shopify, Hydrogen, Oxygen and worked with PostgreSQL
              and Postgraphile.
            </p>
          </div>

          <div className="flex flex-row text-md mt-2">
            <BsDot size={40} color="darkGray" />
            <p className="ml-2 mt-2 text-gray-300">
              Implemented Agile development process for Software Development Life Cycle.
            </p>
          </div>
        </div>

        {/* Neophron Technologies */}
        <div className="mt-8 sm:mt-14 shadow-lg hover:scale-105 duration-200 py-5 rounded-lg shadow-gray-100">
          <div className="flex text-black  justify-between">
            <h2 className="text-2xl font-bold text-gray-400 pl-4">
              Neophron Technologies
            </h2>
            <p className="font-semibold pr-6 text-gray-300">July 2022</p>
          </div>

          <h4 className="ml-4 mt-2">
            <span className="mr-1 font-bold">Role:</span> Backend Developer
            Intern
          </h4>

          <div className="flex flex-row text-md mt-2">
            <BsDot size={40} color="darkGray" />
            <p className="ml-2 mt-2 text-gray-300">
              Responsible for backend development with popular technologies like
              Node.js, Express.js and MongoDB.
            </p>
          </div>

          <div className="flex flex-row text-md mt-2">
            <BsDot size={40} color="darkGray" />
            <p className="ml-2 mt-2 text-gray-300">
              Built API with REST Architecture for a project and got exposure
              with Postman.
            </p>
          </div>

          <div className="flex flex-row text-md mt-2">
            <BsDot size={40} color="darkGray" />
            <p className="ml-2 mt-2 text-gray-300">
              Handled project phases from planning stage to deployment and
              maintenance stage
            </p>
          </div>

          <div className="flex flex-row text-md mt-2">
            <BsDot size={40} color="darkGray" />
            <p className="ml-2 mt-2 text-gray-300">
              Learnt about distributed version control system like git and
              hosting service like Github
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
