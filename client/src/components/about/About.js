import React from "react";

const About = () => {
  return (
    <div className="about-container">
      <h2 className="pt-10"> Qui suis-je ?</h2>
      <b>
        <p className="center ">Développeur web passioné.</p>
      </b>
      <hr />
      <div className="text-about pt-5">
        <p className="center">
          Je m'appelle Jean-Baptiste. Passionné par le monde de l'informatique
          depuis mon enfance j'ai décidé il y a deux ans de faire une formation
          diplômante grâce à l'organisme OpenClassrooms. J'ai pu apprendre les
          bases de plusieurs languages telles que :HTML5 & CSS3, JavaScript,
          PHP, l'utilasation de CMS comme wordpress.
          <br />
          <br />
          Après mon cursus de 6 mois je me suis davantage passioné pour le monde
          du développement web, et j'ai continué d'apprendre plusieurs
          technologies, j'ai appris à maitriser React, le framework de
          JavaScript et Node.js (avec Express) sa variante Backend, pour faire
          de moi un développeur full stack.
        </p>
        <h4 className="center pt-10">Les technologies que j'utilise:</h4>

        <div className="techno">
          <p>
            - JavaScript <br />
            - React <br />
            - Node.js <br />
            - Express <br />
            - MongoDB <br />
            - GraphQL <br />
            - Materialize <br />- GastbyJs
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
