import React, { useEffect, useState } from "react";

export const Background = () => {
  const [chars, setChars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  const generateMeteors = () => {
    const numberOfMeteors = 4;
    const newMeteors = [];
    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 20,
        animationDuration: Math.random() * 3 + 3,
      });
    }
    setMeteors(newMeteors);
  };

  const generateChars = () => {
    const numberOfChars = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000
    );
    const newChars = [];
    for (let i = 0; i < numberOfChars; i++) {
      newChars.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2,
      });
    }
    setChars(newChars);
  };

  useEffect(() => {
    generateChars();
    generateMeteors();

    const handleResize = () => {
      generateChars();
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {chars.map((char) => (
        <div
          key={char.id}
          className="star animate-pulse-subtle"
          style={{
            width: char.size + "px",
            height: char.size + "px",
            left: char.x + "%",
            top: char.y + "%",
            opacity: char.opacity,
            animationDuration: char.animationDuration + "s",
          }}
        />
      ))}
      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor animate-meteor"
          style={{
            width: meteor.size * 50 + "px",
            height: meteor.size * 2 + "px",
            left: meteor.x + "%",
            top: meteor.y + "%",
            animationDuration: meteor.animationDuration + "s",
          }}
        />
      ))}
    </div>
  );
};
