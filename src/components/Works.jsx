import React, { useEffect, useState } from "react";
import { WorkCarousel } from "./WorkCarousel";
import { Github, Link } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "ScanTooth",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a accumsan risus, ut lobortis magna.",
    image: ["../../projects/SCANTOOTH.png", "../../projects/SCANTOOTH2.png"],
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
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a accumsan risus, ut lobortis magna.",
    image: ["../../projects/RFCHAT.png", "../../projects/RFCHAT2.png"],
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
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a accumsan risus, ut lobortis magna.",
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
        setIsScrolled(scrollPosition > 3700);
      } else if (category === "software") {
        setIsScrolled(scrollPosition > 3100);
      } else if (category === "hardware") {
        setIsScrolled(scrollPosition > 2600);
      } else {
        setIsScrolled(scrollPosition > 2300);
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
      className="flex flex-col items-center py-24 justify-center min-h-screen space-y-10"
    >
      <h2
        className={`text-2p text-3xl opacity-0 md:text-4xl  ${
          isScrolled ? "animate-fade-in" : ""
        }`}
      >
        My <span className="text-app-primary">Works</span>
      </h2>
      <ul className="timeline timeline-vertical">
        {projects.map((project) => (
          <li key={project.id}>
            {project.id != 1 && <hr />}
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
                <a href={project.demoUrl}>
                  <Link />
                </a>
                <a href={project.githubUrl}>
                  <Github />
                </a>
              </div>
            </div>
            {project.id != projects.length && <hr />}
          </li>
        ))}
      </ul>
    </section>
  );
};
