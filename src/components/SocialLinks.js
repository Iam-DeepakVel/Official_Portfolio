import React from "react";
import { FaGithub } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        <li className="flex justify-between rounded-tr-md items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:rounded-md hover:ml-[-10px] duration-300">
          <a
            href="https://www.linkedin.com/in/iamdeepakvel"
            className="flex justify-between items-center w-full text-white"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
            <GrLinkedin size={30} />
          </a>
        </li>
        <li className="flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:rounded-md hover:ml-[-10px] duration-300">
          <a
            href="https://github.com/Iam-DeepakVel"
            className="flex justify-between items-center w-full text-white"
            target="_blank"
            rel="noreferrer"
          >
            Github
            <FaGithub size={30} />
          </a>
        </li>
        <li className="flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:rounded-md hover:ml-[-10px] duration-300">
          <a
            href="mailto:deepakvel82@gmail.com"
            className="flex justify-between items-center w-full text-white"
            target="_blank"
            rel="noreferrer"
          >
            Mail
            <HiOutlineMail size={30} />
          </a>
        </li>
        <li className="flex justify-between rounded-br-md items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:rounded-md hover:ml-[-10px] duration-300">
          <a
            href="/DEEPAK RESUME.pdf"
            className="flex justify-between items-center w-full text-white"
            download={true}
            target="_blank"
            rel="noreferrer"
          >
            Resume
            <BsFillPersonLinesFill size={30} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialLinks;
