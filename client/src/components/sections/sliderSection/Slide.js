import React from "react";

const Slide = ({ icon, alt, title, text, number, option }) => {
  return (
    <div className="slide ">
      <div className="slide-icon">
        <img src={icon} alt={alt} />
      </div>
      <div className="slide-text">
        <h3>{title}</h3>
        <p>{text}</p>
        <p className="pt-5">{option}</p>
      </div>
      <div className="slide-number">
        <h1>{number}</h1>
      </div>
    </div>
  );
};

export default Slide;
