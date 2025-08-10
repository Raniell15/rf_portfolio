import React from "react";

import { Navbar } from "../components/Navbar";
import { Background } from "../components/Background";
import { Hero } from "../components/Hero";

export const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Background />
      <main>
        <Hero />
      </main>
    </div>
  );
};
