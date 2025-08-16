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
    <div className={`flex items-center h-auto overflow-hidden w-auto`}>
      <div
        className="flex transition-transform duration-750 ease-in-out delay-200"
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
