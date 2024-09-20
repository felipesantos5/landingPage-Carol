// import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import card1 from "../../assets/slider/card1.svg";
import card2 from "../../assets/slider/card2.svg";
import card3 from "../../assets/slider/card3.svg";
import card4 from "../../assets/slider/card4.svg";
import card5 from "../../assets/slider/card5.svg";
import card6 from "../../assets/slider/card6.svg";
import card7 from "../../assets/slider/card7.svg";
import card8 from "../../assets/slider/card8.svg";
import card9 from "../../assets/slider/card9.svg";

const animation = { duration: 12000, easing: (t) => t };

export const Slider = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: false,
    slides: {
      perView: 8,
    },
    breakpoints: {
      "(max-width: 1440px)": {
        slides: { perView: 7 },
      },
      "(max-width: 1200px)": {
        slides: { perView: 6 },
      },
      "(max-width: 1050px)": {
        slides: { perView: 5 },
      },
      "(max-width: 900px)": {
        slides: { perView: 4 },
      },
      "(max-width: 720px)": {
        slides: { perView: 3 },
      },
      "(max-width: 580px)": {
        slides: { perView: 2 },
      },
      "(max-width: 320px)": {
        slides: { perView: 1 },
      },
    },
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });

  return (
    <div className="slider-wrapper">
      <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide number-slide1">
          <img src={card1} alt="Logo 1" />
        </div>
        <div className="keen-slider__slide number-slide2">
          <img src={card2} alt="Logo 2" />
        </div>
        <div className="keen-slider__slide number-slide3">
          <img src={card3} alt="Logo 3" />
        </div>
        <div className="keen-slider__slide number-slide4">
          <img src={card4} alt="Logo 4" />
        </div>
        <div className="keen-slider__slide number-slide5">
          <img src={card5} alt="Logo 5" />
        </div>
        <div className="keen-slider__slide number-slide5">
          <img src={card6} alt="Logo 5" />
        </div>
        <div className="keen-slider__slide number-slide5">
          <img src={card7} alt="Logo 5" />
        </div>
        <div className="keen-slider__slide number-slide5">
          <img src={card8} alt="Logo 5" />
        </div>
        <div className="keen-slider__slide number-slide5">
          <img src={card9} alt="Logo 5" />
        </div>
      </div>
    </div>
  );
};
