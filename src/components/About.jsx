import React, { useEffect, useState } from "react";
import { Carousel } from "./Carousel";
import { Blocks, CodeXml, Cpu } from "lucide-react";

export const About = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrolled2, setIsScrolled2] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 950);
      setIsScrolled2(scrollPosition > 350);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      id="about"
      className="flex flex-col min-h-screen max-w-screen items-center justify-center z-10 md:space-y-20 mt-20"
    >
      {/*About Me*/}
      <h2
        className={`text-2p text-3xl opacity-0 md:text-4xl ${
          isScrolled2 ? "animate-fade-in" : ""
        }`}
      >
        About <span className="text-app-primary">Me</span>
      </h2>
      <div className="flex flex-col xl:flex-row items-center justify-center md:space-x-10">
        <div
          className={`rounded-md overflow-hidden opacity-0 ${
            isScrolled2 ? "animate-fade-in-delay-1" : ""
          }`}
        >
          <Carousel />
        </div>
        <div className={` space-y-6 `}>
          <p
            className={`flex opacity-0 flex-col text-2p text-justify w-90 md:w-125  ${
              isScrolled2 ? "animate-fade-in-delay-2" : ""
            }`}
          >
            Hello! I am Raniell Fontiveros, a recent Computer Engineering
            graduate with a passion for software development. During my studies,
            I explored both hardware and software, but I found myself especially
            drawn to programming —whether it's low-level tasks like writing in
            assembly or high-level projects like building GUIs in Python or
            training an object detection model. I'm currently focused on
            learning web development to grow my career and better understand the
            web apps I use every day.
          </p>
          <div className="flex justify-evenly">
            <a
               href="#contact" className={`bg-app-primary/80 text-silk  p-3 px-4 rounded-full opacity-0 hover:bg-primary-foreground cursor-pointer  ${
                isScrolled2 ? "animate-fade-in-delay-3" : ""
              }`}
            >
              Get In Touch
            </a>
            <a
              className={`border-2 border-solid border-app-primary p-3 px-4 text-silk rounded-full opacity-0  hover:bg-app-primary cursor-pointer ${
                isScrolled2 ? "animate-fade-in-delay-4" : ""
              }`}
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
      {/*Skill Cards*/}
      <span
        className={`text-2p text-3xl opacity-0 mt-20 md:mt-10 mb-10 md:text-4xl ${
          isScrolled ? "animate-fade-in-delay-1" : ""
        }`}
      >
        Overview
      </span>
      <div className="flex flex-col items-center justify-center space-y-8 md:space-y-0 lg:flex-row md:space-x-15">

        <div
          className={`opacity-0 flex flex-col items-center card-hover justify-center rounded-lg bg-gray-900 min-h-50 max-w-100 p-5 space-y-3 ${
            isScrolled ? "animate-fade-in-delay-1" : ""
          }`}
        >
          <div className="rounded-lg w-fit space-x-3 flex p-3 bg-gray-950 text-app-primary">
            <CodeXml />
            <span className="text-2p">Programming</span>
          </div>
          <p className="text-justify text-2p text-sm">
            As a Computer Engineer, I have grasped key programming concepts like data types and OOP; 
            allowing me to be a versatile programmer. These concepts has allowed me to learn
            multiple programming languages both high and low level. 
          </p>
        </div>
        <div
          className={`opacity-0 flex flex-col items-center card-hover justify-center rounded-lg bg-gray-900 min-h-50 max-w-100 p-5 space-y-3 ${
            isScrolled ? "animate-fade-in-delay-2" : ""
          }`}
        >
          <div className="rounded-lg w-fit space-x-3 flex p-3 bg-gray-950 text-app-primary">
            <Cpu />
            <span className="text-2p">Hardware</span>
          </div>
          <p className="text-justify text-2p text-sm">
            Essential to being a Computer Engineer is learning the how a Computer functions; from its components
            to its operating system. From basic electronic components, to Gate-level Modeling, slowly building up
            to a CPU and Its instruction set.
            
          </p>
        </div>
        <div
          className={`opacity-0 flex flex-col items-center card-hover justify-center rounded-lg bg-gray-900 min-h-50 max-w-100 p-5 space-y-3 ${
            isScrolled ? "animate-fade-in-delay-3" : ""
          }`}
        >
          <div className="rounded-lg w-fit space-x-3 flex p-3 bg-gray-950 text-app-primary">
            <Blocks />
            <span className="text-2p">Learner</span>
          </div>
          <p className="text-justify text-2p text-sm">
            The most essential realization I have had as my time as a student, is that every day is an
            opportunity to learn. This mindset has shaped me and allowed me to finish my studies. I aim to continue
            building upon my knowledge and skills, as a passionate learner.
          </p>
        </div>
      </div>
    </section>
  );
};
