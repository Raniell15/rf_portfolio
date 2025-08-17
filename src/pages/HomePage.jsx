import React from "react";

import { Navbar } from "../components/Navbar";
import { Background } from "../components/Background";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Skills } from "../components/Skills";
import { Works } from "../components/Works";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

export const HomePage = () => {
  return (
    <div id="home" className="flex flex-col space-y-20 md:space-y-0 max-w-screen">
      <Navbar />
      <Background />
      <main>
        <Hero />
        <About/>
        <Skills/>
        <Works/>
        <Contact/>
        
      </main>
      <Footer/>
    </div>
  );
};
