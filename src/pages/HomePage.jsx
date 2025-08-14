import React from "react";

import { Navbar } from "../components/Navbar";
import { Background } from "../components/Background";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Skills } from "../components/Skills";
import { Works } from "../components/Works";

export const HomePage = () => {
  return (
    <div id="home" className=" max-w-screen">
      <Navbar />
      <Background />
      <main>
        <Hero />
        <About/>
        <Skills/>
        <Works/>
      </main>
    </div>
  );
};
