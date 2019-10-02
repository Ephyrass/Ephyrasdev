import React, { useState } from "react";
import Slide from "./Slide";
import etape1 from "../../../assets/etape1.svg";
import etape2 from "../../../assets/etape2.svg";
import etape3 from "../../../assets/etape3.svg";
import etape4 from "../../../assets/etape4.svg";
import etape5 from "../../../assets/etape5.svg";
import etape6 from "../../../assets/etape6.svg";
import next from "../../../assets/next.svg";
import back from "../../../assets/back.svg";

const Slider = () => {
  const [index, setIndex] = useState(0);

  index === 6 && setIndex(0);
  index === -1 && setIndex(5);

  const slides = [
    <Slide
      title="Etude du projet:"
      text="Dans un premier temps, nous commençons par définir toutes les fonctionnalités , pages, mots clefs, titres et charte graphique. Nous étudions aussi vos objectifs et attentes afin de vous proposer la meilleure solution pour votre site web, tout en s'adaptant à votre budget. "
      number="1"
      icon={etape1}
    />,
    <Slide
      title="*Maquette graphique:"
      text="Si vous n’avez pas de maquette, nous allons élaborer celle-ci afin de disposer l’ensemble des éléments pour avoir une vision plus concrète de votre projet.
      "
      option="*optionelle "
      number="2"
      icon={etape2}
    />,
    <Slide
      title="Phase de développement:"
      text="La phase la plus longue commence, il s’agit pour moi de coder votre projet.
      À savoir que cette phase peut prendre plus de temps en fonction du type de projet.
      Vous aurez une estimation lors de votre devis. "
      number="3"
      icon={etape3}
    />,
    <Slide
      title="Optimisation SEO poussée:"
      text="Nous allons dans cette partie optimiser le référencement naturel de votre site sur les moteurs de recherche,  pour que vous soyez le plus visible possible sur le web."
      number="4"
      icon={etape4}
    />,
    <Slide
      title="Test et corrections:"
      text="Une fois terminé, nous vous proposons de tester pendant 2-3 jours votre site internet afin d'effectuer les modifications de dernière minute.
"
      number="5"
      icon={etape5}
    />,
    <Slide
      title="Livraison du projet:"
      text="Enfin ! Votre projet est prêt, et si besoin je le déplois pour vous sur un hébergeur  "
      number="6"
      icon={etape6}
    />
  ];

  return (
    <div className="slider">
      <div className="slider-title">
        <h2>Déroulement d'un projet</h2>
        <p>Voici une feuille de route type d’un dévéloppement</p>
        <hr />
      </div>
      <div className="slide">
        <img
          className="back"
          src={back}
          alt="Flèche précédent"
          onClick={() => setIndex(index - 1)}
        />

        <img
          src={next}
          alt="Flèche suivant"
          className="next"
          onClick={() => setIndex(index + 1)}
        />
        {slides[index]}
      </div>
    </div>
  );
};

export default Slider;
