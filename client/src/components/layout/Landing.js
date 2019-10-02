import React from "react";
import { Link } from "react-router-dom";
import arrowDown from "../../assets/arrow down.svg";
import startup from "../../assets/startup.svg";
import group from "../../assets/group.svg";
import SectionAbout from "../sections/SectionAbout";
import Slider from "../sections/sliderSection/Slider";
import PriceSection from "../sections/priceSection/PriceSection";

const Landing = () => {
  return (
    <div className="landing">
      <div className="filter"></div>
      <div className="landing-container">
        <div className="header">
          <h1>Développeur Web.</h1>
          <h4>Création de site et d'application web</h4>
        </div>
        <div className="buttons">
          <Link to="/portfolio">
            <button>Réalisations</button>
          </Link>
          <Link to="/contact">
            <button>Contact</button>
          </Link>
        </div>
        <div className="arrow-down">
          <a href="#intro">
            <img src={arrowDown} alt="flèches vers le bas" />
          </a>
        </div>
      </div>
      <SectionAbout
        img={startup}
        title="Pourquoi un site web ?"
        text="Que vous ayez besoin d’un coup de pouce pour votre visibilité, montrer un savoir-faire, ou simplement  exposer les produits de votre enseigne. Un site internet et un atout essentiel pour tisser des liens avec votre clientèle et la developpez."
        div="container-intro"
        div1="startup-icon"
        div2="intro-text"
      />
      <SectionAbout
        img={group}
        title="Création, refonte et développement d'applications"
        text="Que vous soyez particulier ou professionnel, je prends en charge votre projet de sa conception à son référencement tout en tenant compte de votre budget. "
        div="container-intro2"
        div1="startup-icon2"
        div2="intro-text2"
      />
      <Slider />
      <PriceSection />
    </div>
  );
};

export default Landing;
