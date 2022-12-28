import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Mayank.
            <br className="hidden lg:inline-block" />I love problem solving.
          </h1>
          <p className="mb-8 leading-relaxed">
            I am currently pursuing M.Tech in CSE from IIIT Hyderabad.Prior to my Masters I had a 2 year work experience working with RS labs, Pune as
Android/Web Developer. I was working closely with the LinkedIn Team & dealt majorly with
Architecture Migration, Bug Solving & Other Feature Implementation Tasks. My experience at
RS Labs taught me to juggle between technologies as & when needed.
After RS Labs I joined IIIT Hyderabad to broaden my knowledge in Computers . Till Now I have
worked on several projects related to Operating Systems, System Design, Object Oriented
Programming & Data Structures & Algorithms.
In my Masters I got the opportunity to work with Jio Platforms Limited as a Software Engineer in
the Summer of 2022. There I got to work on the FrontEnd of a Data Extraction Tool which was
built using React & Konva.js Libraries. I also got to work with React-Redux-Saga during my
InterShip.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Hire Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Projects
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./coding.svg"
          />
        </div>
      </div>
    </section>
  );
}
