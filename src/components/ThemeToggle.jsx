import { Moon, Sun } from "lucide-react";
import React, { useState, useEffect } from "react";

export const ThemeToggle = () => {
  const [isLightMode, setIsLightMode] = useState(false);
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsLightMode(false);
    } else {
      document.documentElement.classList.remove("dark");
      setIsLightMode(true);
    }
  }, []);

  const toggleTheme = () => {
    if (isLightMode) {
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
      setIsLightMode(false);
    } else {
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
      setIsLightMode(true);
    }
  };
  return (
    <button onClick={toggleTheme}>
      {isLightMode ? <Moon color="blue" /> : <Sun color="yellow" />}
    </button>
  );
};
