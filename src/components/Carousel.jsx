import { ArrowLeft, ArrowRight } from 'lucide-react'
import React, { useEffect, useState } from 'react'

export const Carousel = () => {
  const images = [
    {src: '../../tmp.jpg', alt: 'Image 1'},
    {src: '../../tmp2.jpg', alt: 'Image 2'},
    {src: '../../tmp3.jpg', alt: 'Image 3'},
  ]

  const [activeImg, setActiveImg] = useState(0);

  const prevImg = () => {
    setActiveImg(activeImg === 0 ? images.length - 1 : activeImg - 1);
  }

    const nextImg = () => {
    setActiveImg(activeImg === images.length - 1 ? 0 : activeImg + 1);
  }

  return (
    <div className={`flex items-center h-120 max-w-screen overflow-hidden transition-transform duration-500 ease-in-out w-160`} style={{transform: `translateX(-${activeImg * 100 }%)`}}>
        {images.map((image) => (
          <img src={image.src} alt={image.alt} className='h-120 w-200 object-cover'/>
        ))}
        <button className="absolute" onClick={nextImg}>NEXT IMAGE</button>
    </div>
  )
}
