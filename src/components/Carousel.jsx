import { ArrowLeft, ArrowRight } from "lucide-react";
import React, { useEffect, useState } from "react";

export const Carousel = () => {
  const images = [
    { src: "../../carousel1.jpg", alt: "Image 1" },
    { src: "../../carousel2.jpg", alt: "Image 2" },
    { src: "../../carousel3.jpg", alt: "Image 3" },
  ];

  const [activeImg, setActiveImg] = useState(0);

  const nextImg = () => {
    setActiveImg(activeImg === images.length - 1 ? 0 : activeImg + 1);
  };

  useEffect(() => {
    const interval = setInterval(nextImg, 3000);
    return () => clearInterval(interval);
  });

  return (
    <div className={`flex items-center h-120 overflow-hidden w-100 md:w-160`}>
      <div
        className="flex max-w-screen transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${activeImg * 100}%)` }}
      >
        {images.map((image) => (
          <img
            key={image.src}
            src={image.src}
            alt={image.alt}
            className=" object-cover"
          />
        ))}
      </div>
    </div>
  );
};
