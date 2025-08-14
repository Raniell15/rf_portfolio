import { ArrowLeft, ArrowRight } from "lucide-react";
import React, { useEffect, useState } from "react";

export const WorkCarousel = ({image}) => {
  const images = image;

  const [activeImg, setActiveImg] = useState(0);

  const nextImg = () => {
    setActiveImg(activeImg === images.length - 1 ? 0 : activeImg + 1);
  };

  useEffect(() => {
    const interval = setInterval(nextImg, 3000);
    return () => clearInterval(interval);
  });

  return (
    <div className={`flex items-center h-100  overflow-hidden w-150`}>
      <div
        className="flex max-w-screen transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${activeImg * 100}%)` }}
      >
        {images.map((image) => (
          <img
            key={image}
            src={image}
            className="object-cover"
          />
        ))}
      </div>
    </div>
  );
};
