import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },

    {
      id: 4,
      link: "skills",
    },

    {
      id: 5,
      link: "experience",
    },
    {
      id: 6,
      link: "contact",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 text-white bg-black shadow-md shadow-sky-200 fixed px-4">
      <div>
        <h1 className="font-signature cursor-pointer text-4xl ml-2  text-indigo-200 md:ml-8">
          Deepak
        </h1>
      </div>

      <ul className="hidden md:flex">
        {/* Destructured id and link in initial point itself */}

        {links.map((item) => {
          return (
            <li
              key={item.id}
              className="px-4 cursor-pointer capitalize font-medium text-lg text-gray-300 hover:scale-105 duration-200 hover:text-white"
            >
              <Link to={item.link} smooth duration={500}>
                {item.link}
              </Link>
            </li>
          );
        })}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 hover:text-white duration-300 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {/* Mobile Menu */}
      {nav && (
        <ul className="flex flex-col justify-center  items-center absolute top-0 left-0 w-full h-screen space-y-6 bg-gradient-to-b from-black to-gray-700 md:hidden">
          {links.map((item) => {
            return (
              <li
                className="cursor-pointer capitalize text-3xl text-gray-500 hover:scale-105 hover:text-white duration-200"
                key={item.id}
              >
                <Link
                  onClick={() => setNav(!nav)}
                  to={item.link}
                  smooth
                  duration={500}
                >
                  {item.link}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
