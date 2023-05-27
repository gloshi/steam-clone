import React from "react";

import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import "../styles/Slider.scss";
import { useResize } from "./useResize";

const SliderImg = ({img}) => {
  const size = useResize();
  return (
    <CarouselProvider
      naturalSlideWidth={500}
      naturalSlideHeight={500}
      totalSlides={7}
      visibleSlides={size.width < 1330? 2: 3}
    >
      <Slider  className="slider">
        <Slide  index={0}><img src={img} alt="game" /></Slide>
        <Slide index={1}><img src={img} alt="game" /></Slide>
        <Slide index={2}><img src={img} alt="game" /></Slide>
        <Slide index={3}><img src={img} alt="game" /></Slide>
        <Slide index={4}><img src={img} alt="game" /></Slide>
        <Slide index={5}><img src={img} alt="game" /></Slide>
        <Slide index={6}><img src={img} alt="game" /></Slide>
      </Slider>
      <ButtonBack className="none">Back</ButtonBack>
      <ButtonNext className="none">Next</ButtonNext>
    </CarouselProvider>
  );
};

export default SliderImg;
