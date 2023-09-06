import React from "react";
import './Carousel.css';
import img1 from './1.jpg';
import img2 from './2.jpg';
import img3 from './3.jpg';
function Carousel() {
    return (
        <div className="Carousel">
            <div className="Slider-Wrapper">
                <div className="Slider">
                    <img src={img1} alt="" id="img1" />
                    <img src={img2} alt="" id="img2" />
                    <img src={img3} alt="" id="img3" />
                </div>
                <div className="Slider-Nav">
                    <a href="#img1"></a>
                    <a href="#img2"></a>
                    <a href="#img3"></a>
                </div>
            </div>
        </div>
    )
};
export default Carousel;