import { Moon, Sun } from "lucide-react";
import React, { useState, useEffect } from "react";

export const ThemeToggle = () => {
  const [isLightMode, setIsLightMode] = useState(false);
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      document.documentElement.classList.add("light");
      setIsLightMode(true);
    } else {
      document.documentElement.classList.remove("light");
      setIsLightMode(false);
    }
  }, []);

  const toggleTheme = () => {
    if (!isLightMode) {
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
      setIsLightMode(true);
    } else {
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
      setIsLightMode(false);
    }
  };
  return (
    <button onClick={toggleTheme}>
      {isLightMode ? <Moon color="blue" /> : <Sun color="yellow" />}
    </button>
  );
};
