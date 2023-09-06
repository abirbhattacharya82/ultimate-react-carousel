import React from "react";

function SliderWrapper(props) {
  return (
    <div className="Slider-Wrapper">
      <div className="Slider">
        {props.images.map((image, index) => (
          <img key={index} src={image} alt={`img${index + 1}`} id={`img${index + 1}`} />
        ))}
      </div>
      <div className="Slider-Nav">
        {props.images.map((_, index) => (
          <a key={index} href={`#img${index + 1}`}></a>
        ))}
      </div>
    </div>
  );
}

export default SliderWrapper;