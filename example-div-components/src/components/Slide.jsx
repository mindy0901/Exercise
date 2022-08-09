import React, { useState } from 'react'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import styled from 'styled-components';
import { slide } from "./../constants/data";

const SlideContainer = styled.div`
height: 100%;
display: flex;
transform: translateX(${(props) => props.slideIndex * -100}vw);
transition: all 1.5s ease;
`;

const Slide = () => {
      const [slideIndex, setSlideIndex] = useState(0);

      const handleClick = (direction) => {
            if (direction === "left") {
                  setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 0);
            } else {
                  setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 2);
            }
      };

      return (
            <div className="slide__carousel">
                  <SlideContainer slideIndex={slideIndex}>
                        {slide.map(img => (
                              <div key={img.id} className="slide__item">
                                    <img src={img.src} alt="#" />
                              </div>
                        ))}
                  </SlideContainer>
                  <div className="slide__arrow">
                        <MdKeyboardArrowLeft onClick={() => handleClick("left")} style={{ fontSize: "60px", color: "white" }} />
                        <MdKeyboardArrowRight onClick={() => handleClick("right")} style={{ fontSize: "60px", color: "white" }} />
                  </div>
                  <div className="slide__toggle">
                        {slide.map((img, index) => (
                              <div key={img.id} onClick={() => setSlideIndex(index)} className="slide__toggle__item">
                              </div>
                        ))}
                  </div>
            </div>
      )
}

export default Slide