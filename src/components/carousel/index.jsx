import React, { useState, useEffect } from "react";
import "./index.css";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

const CustomCarousel = ({ data }) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide((slide) => (slide === data.length - 1 ? 0 : slide + 1));
  };

  const prevSlide = () => {
    setSlide((slide) => (slide === 0 ? data.length - 1 : slide - 1));
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 5000); // Auto slide every 5 seconds

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, [nextSlide, data.length]); // Include nextSlide in the dependency array

  return (
    <div className="carousel">
      <BsArrowLeftCircleFill onClick={prevSlide} className="arrow arrow-left" />
      {data.map((item, idx) => (
        <div key={idx} className={slide === idx ? "slide" : "slide slide-hidden"}>
          <img src={item.src} alt={item.alt} />
          <div className="button-container">
            <button>Watch Now</button>
            <button>Watch List +</button>
          </div>
        </div>
      ))}
      <BsArrowRightCircleFill onClick={nextSlide} className="arrow arrow-right" />
      <span className="indicators">
        {data.map((_, idx) => (
          <button
            key={idx}
            className={slide === idx ? "indicator" : "indicator indicator-inactive"}
            onClick={() => setSlide(idx)}
          ></button>
        ))}
      </span>
    </div>
  );
};

export default CustomCarousel;
