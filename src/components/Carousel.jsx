import React, { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export const Carousel = ({ data, setCategory }) => {
  console.log("jjjj", data);
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const previousSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  return (
    <>
      <div className="carousel-styled">
        <BsArrowLeftCircleFill
          className="arrow leftArrow"
          onClick={previousSlide}
        />
        {data.map((item, idx) => {
          return (
            <div className={slide === idx ? "slide" : "slide slide-hidden"}>
              <img src={item} alt={item} key={idx} />
              <button
                className="close"
                onClick={() => {
                  setCategory("");
                }}
              >
                X
              </button>
            </div>
          );
        })}
        <BsArrowRightCircleFill
          className="arrow rightArrow"
          onClick={nextSlide}
        />
        <span className="indicators">
          {data.map((_, idx) => {
            return (
              <button
                key={idx}
                className={
                  slide === idx ? "indicator" : "indicator indicator-current"
                }
                onClick={() => setSlide(idx)}
              ></button>
            );
          })}
        </span>
      </div>
    </>
  );
};
