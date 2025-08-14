import React, { useEffect, useState } from 'react'
import { WorkCarousel } from './WorkCarousel'

const projects = [
    {
        id:1,
        title:'ScanTooth',
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a accumsan risus, ut lobortis magna.",
        image:["../../public/projects/SCANTOOTH.png","../../public/projects/SCANTOOTH2.png"],
        tags:["Python", "Tensorflow", "OpenCV", "Kivy", "VSCode", "Anaconda", "Git/GitHub", "Raspberry Pi"],
        demoUrl:"#",
        githubUrl:"https://github.com/Raniell15/bsu_thesis",
    },
    {
        id:2,
        title:'RFChat',
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a accumsan risus, ut lobortis magna.",
        image:["../../public/projects/RFCHAT.png","../../public/projects/RFCHAT2.png"],
        tags:["ReactJS", "Tailwind CSS", "ExpressJS", "MongoDB", "VSCode", "NodeJS", "Git/GitHub", "Figma"],
        demoUrl:"https://rfchat-2tl6.onrender.com/login",
        githubUrl:"https://github.com/Raniell15/RFChat",
    },
    {
        id:3,
        title:'NexPos API',
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a accumsan risus, ut lobortis magna.",
        image:["../../public/projects/NEXPOS.png","../../public/projects/NEXPOS2.png"],
        tags:["Laravel Lumen", "PHP", "Postman", "VSCode", "Git/GitHub", "SQL"],
        demoUrl:"#",
        githubUrl:"https://gitlab.com/live_nb/nexpos-new-laravel-api-web",
    },
    
]

export const Works = () => {

  return (
    <section id='work' className="flex flex-col items-center justify-center min-h-screen space-y-10">
        <h2 className={`text-2p text-3xl md:text-4xl`}>My <span className='text-app-primary'>Works</span></h2>
        <ul className="timeline timeline-vertical">
            {projects.map((project) => (
                <li key={project.id}>
                    {project.id != 1 && <hr/>}
                    <div  className={`timeline-box ${project.id % 2 === 0 ? "timeline-end" : "timeline-start"}`}>
                        <h2 className='text-2p'>{project.title}</h2>
                        <WorkCarousel image={project.image}/>
                    </div>
                    {project.id != projects.length && <hr/>}
                </li>
            ))}
        </ul>
    </section>
  )
}
