import React from "react";
import './Carousel.css';
import img1 from './1.jpg';
import img2 from './2.jpg';
import img3 from './3.jpg';
import SliderWrapper from "./Slider-Wrapper/SliderWrapper";
function Carousel() {
    return (
        <div className="Carousel">
            <SliderWrapper images={[img1,img2,img3]} />
        </div>
    )
};
export default Carousel;