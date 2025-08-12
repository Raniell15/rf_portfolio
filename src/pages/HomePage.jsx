import React from "react";

import { Navbar } from "../components/Navbar";
import { Background } from "../components/Background";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Skills } from "../components/Skills";

export const HomePage = () => {
  return (
    <div className="min-h-screen max-w-screen">
      <Navbar />
      <Background />
      <main>
        <Hero />
        <About/>
        <Skills/>
      </main>
    </div>
  );
};
