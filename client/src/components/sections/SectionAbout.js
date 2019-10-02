import React from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const SectionAbout = ({ img, title, text, div, div1, div2 }) => {
  return (
    <div className="introduction" id="intro">
      <div className={div}>
        <div className={div1}>
          <img src={img} alt="icon de pc et fusée" />
        </div>
        <div className={div2} data-aos="zoom-in" data-aos-duration="1000">
          <h3>{title}</h3>
          <p>{text}</p>
          <Link to="/contact">
            <button>Demandez un devis</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SectionAbout;
