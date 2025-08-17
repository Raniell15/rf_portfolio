import React, { useEffect, useState } from "react";
import { WorkCarousel } from "./WorkCarousel";
import { Github, GitPullRequestClosed, Link, Link2, Link2Off } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "ScanTooth",
    description:
      "ScanTooth is a device powered by a Raspberry Pi. It captures pictures of teeth and analyzes it using a Object Detection Model " +
      "to predict if a tooth has caries.",
    image: ["../../projects/SCANTOOTH.png", "../../projects/SCANTOOTH2.png", "../../projects/SCANTOOTH3.jpg", "../../projects/SCANTOOTH4.jpg", "../../projects/SCANTOOTH5.jpg",],
    tags: [
      "Python",
      "Tensorflow",
      "OpenCV",
      "Kivy",
      "VSCode",
      "Anaconda",
      "Git/GitHub",
      "Raspberry Pi",
    ],
    demoUrl: "#",
    githubUrl: "https://github.com/Raniell15/bsu_thesis",
  },
  {
    id: 2,
    title: "RFChat",
    description:
      "RFChat is a real-time chat application, made using the MERN stack",
    image: ["../../projects/RFCHAT.png", "../../projects/RFCHAT2.png", "../../projects/RFCHAT3.png", "../../projects/RFCHAT4.png", "../../projects/RFCHAT5.png",],
    tags: [
      "ReactJS",
      "Tailwind CSS",
      "ExpressJS",
      "MongoDB",
      "VSCode",
      "NodeJS",
      "Git/GitHub",
      "Figma",
    ],
    demoUrl: "https://rfchat-2tl6.onrender.com/login",
    githubUrl: "https://github.com/Raniell15/RFChat",
  },
  {
    id: 3,
    title: "NexPos API",
    description:
      "The NexPos API is the API for NexBridge Technologies Inc. in-house business dashboard. " +
      "It allows businesses to track Inventory, manage locations, and generate finance reports",
    image: ["../../projects/NEXPOS.png", "../../projects/NEXPOS2.png"],
    tags: ["Laravel Lumen", "PHP", "Postman", "VSCode", "Git/GitHub", "SQL"],
    demoUrl: "#",
    githubUrl: "https://gitlab.com/live_nb/nexpos-new-laravel-api-web",
  },
];

export const Works = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    console.log(window.scrollY);

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const category = localStorage.getItem("category");
      if (category === "all") {
        setIsScrolled(scrollPosition > 3500);
      } else if (category === "software") {
        setIsScrolled(scrollPosition > 2900);
      } else if (category === "hardware") {
        setIsScrolled(scrollPosition > 2400);
      } else {
        setIsScrolled(scrollPosition > 1900);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      id="work"
      className="flex flex-col items-center p-16 justify-center min-h-screen space-y-10"
    >
      <h2
        className={`text-2p text-3xl opacity-0 md:text-4xl  ${
          isScrolled ? "animate-fade-in" : ""
        }`}
      >
        My <span className="text-app-primary">Works</span>
      </h2>
      <ul className="space-y-10 md:space-y-0 md:timeline md:timeline-vertical">
        {projects.map((project) => (
          <li key={project.id}>
            {project.id != 1 && <hr className="hidden md:block"/>}
            <div
              className={`timeline-box overflow-hidden space-y-4 max-w-100 md:max-w-150 card-hover opacity-0 ${
                isScrolled
                  ? `animate-fade-in-delay-${
                      project.id <= 5 ? `${project.id}` : "5"
                    }`
                  : ""
              } ${project.id % 2 === 0 ? "timeline-end" : "timeline-start"}`}
              style={{ padding: 0 }}
            >
              <WorkCarousel image={project.image} />
              <div className="flex text-silk gap-3 flex-wrap p-4 ">
                {project.tags.map((tag, index) => (
                  <h2
                    key={index}
                    className="rounded-full border-solid border-1 border-app-primary p-2"
                  >
                    {tag}
                  </h2>
                ))}
              </div>
              <h2 className="text-2p text-2xl text-app-primary mt-5">
                {project.title}
              </h2>
              <p className="text-silk text-sm px-4">{project.description}</p>
              <div className="flex p-4 space-x-2">
                <a className={project.demoUrl === "#" ? "pointer-events-none" : "pointer-events-auto"} target="_blank" href={project.demoUrl}>
                  {project.demoUrl === "#" ? (<Link2Off/>) : (<Link2/>)}
                </a>
                <a className={project.githubUrl === "#" ? "pointer-events-none" : "pointer-events-auto"} target="_blank" href={project.githubUrl}>
                  {project.githubUrl === "#" ? (<GitPullRequestClosed/>) : (<Github/>)}
                </a>
              </div>
            </div>
            {project.id != projects.length && <hr className="hidden md:block"/>}
          </li>
        ))}
      </ul>
    </section>
  );
};
