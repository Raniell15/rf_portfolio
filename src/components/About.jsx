import React from 'react'
import { Carousel } from './Carousel'

export const About = () => {
  return (
    <section id="about" className='flex min-h-screen max-w-screen items-center justify-center'>
        {/*About Me*/}
        <div className='flex flex-col items-center justify-center space-y-5'>
            <Carousel/>
            <p>
                Hi, I’m Raniell Fontiveros, a recent Computer Engineering graduate with a passion for software development. 
                During my studies, I explored both hardware and software, but I found myself especially drawn to programming
                —whether it's low-level tasks like writing in assembly or high-level projects like building GUIs in Python or 
                training an object detection model. I'm currently focused on learning web development to grow my career 
                and better understand the web apps I use every day.
            </p>
        </div>
        {/*Skill Cards*/}
        <div>

        </div>
    </section>
  )
}
