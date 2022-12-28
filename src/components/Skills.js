import React from "react";
import html from "../assets/Skills/html.png";
import css from "../assets/Skills/css.png";
import tailwind from "../assets/Skills/tailwind.png";
import javascript from "../assets/Skills/javascript.png";
import reactImage from "../assets/Skills/react.png";
import node from "../assets/Skills/node.png";
import express from "../assets/Skills/express.png";
import mongodb from "../assets/Skills/mongoDB.png";
import postgres from "../assets/Skills/postgres.png";
import aws from "../assets/Skills/aws.png";
import git from "../assets/Skills/git.png";
import github from "../assets/Skills/github.png";

import { motion } from "framer-motion";

const Skills = () => {
  const technologies = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-sky-400",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: node,
      title: "Node",
      style: "shadow-green-400",
    },
    {
      id: 7,
      src: express,
      title: "Express",
      style: "shadow-gray-400",
    },
    {
      id: 8,
      src: mongodb,
      title: "mongoDB",
      style: "shadow-green-400",
    },
    {
      id: 9,
      src: postgres,
      title: "PostgreSQL",
      style: "shadow-blue-600",
    },
    {
      id: 10,
      src: git,
      title: "Git",
      style: "shadow-orange-500",
    },
    {
      id: 11,
      src: github,
      title: "GitHub",
      style: "shadow-gray-500",
    },
    {
      id: 12,
      src: aws,
      title: "AWS",
      style: "shadow-gray-400 items-center flex flex-col justify-center",
    },
  ];

  return (
    // Skills Container
    <div
      name="skills"
      className="pt-24 sm:pt-24 bg-gradient-to-b from-gray-800  to-black w-full md:h-full"
    >
      {/* Skills section */}
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <motion.div initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }} >
          <h2 className="text-5xl ml-4 font-Dance font-bold inline border-b-4 border-gray-500">
            Skills
          </h2>
          <p className="w-full flex text-2xl text-gray-400 pt-6 pb-4  justify-start ml-3">
            These are the technologies I've worked with !!
          </p>
        </motion.div>

        {/* Skill Card Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.2 },
            },
          }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0"
        >
          {/* Skill Card */}
          {technologies.map(({ id, src, title, style }) => {
            return (
              <motion.div
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 },
                }}
                key={id}
                className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style} `}
              >
                <img src={src} alt={title} className="w-20 mx-auto" />
                <p className="mt-4">{title}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
