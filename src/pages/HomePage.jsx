import React from "react";

import { Navbar } from "../components/Navbar";
import { Background } from "../components/Background";
import { Hero } from "../components/Hero";
import { About } from "../components/About";

export const HomePage = () => {
  return (
    <div className="min-h-screen max-w-screen">
      <Navbar />
      <Background />
      <main>
        <Hero />
        <About/>
      </main>
    </div>
  );
};
