import React from "react";
import { ThemeToggle } from "../components/ThemeToggle";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4">
      <img src="../../LOGO.svg" alt="Logo" className="h-10" />
      <div className="flex space-x-9 text-2p">
        <button>ABOUT ME</button>
        <button>SKILLS</button>
        <button>WORKS</button>
      </div>
      <div className="flex space-x-4">
        <button className="text-2p">CONTACT ME!</button>
        <ThemeToggle />
      </div>
    </nav>
  );
};
