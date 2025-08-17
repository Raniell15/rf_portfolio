import React, { useState, useEffect } from "react";
import { ThemeToggle } from "../components/ThemeToggle";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Work", href: "#work" },
  { name: "Contact", href: "#contact" },
];
export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`flex w-screen items-center justify-between p-4 fixed z-20 transition-all duration-300 ${
        isScrolled ? " bg-background/80 backdrop-blur-md shadow-xs" : ""
      }`}
    >
      <a href="#home">
        <img src="../../LOGO.svg" alt="Logo" className="h-10" />
      </a>
      {/*desktop nav*/}
      <div className="hidden justify-center space-x-6 items-center  text-2p  md:flex ">
        {navItems.map((item, key) => (
          <a
            key={key}
            href={item.href}
            className="uppercase text-foreground hover:text-app-primary"
            onClick={() => setIsMenuOpen(false)}
          >
            {item.name}
          </a>
        ))}
        <ThemeToggle />
      </div>
      {/*mobile nav*/}

      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="z-50 md:hidden"
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      <div
        className={`fixed h-screen inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center transition-all duration-300 md:hidden ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className=" flex flex-col text-xl space-y-4">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="uppercase text-2p text-foreground hover:text-app-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};
