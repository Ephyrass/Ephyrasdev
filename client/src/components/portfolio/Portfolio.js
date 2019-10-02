import React from "react";
import ItemPortfolio from "./ItemPortfolio";
import webagency from "../../assets/WebAgencyMini.png";
import navibike from "../../assets/NaviBikeMini.png";
import strasboug from "../../assets/StrasbourgMini.png";
import devconnector from "../../assets/DevConnector.png";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <h2 className="pt-10">Réalisations</h2>
      <p className="center">Voici une partie des projets que j'ai réalisés.</p>
      <hr />

      <div className="items">
        <ItemPortfolio
          title="WebAgency"
          img={webagency}
          link="http://ephyras.fr/Projet1/"
          description="Site pour une agence web."
        />

        <ItemPortfolio
          title="Navi'Bike"
          img={navibike}
          description="Application de réservation de vélo sur lyon"
        />

        <ItemPortfolio
          title="Office de tourisme de Strasbourg"
          img={strasboug}
          link="http://ephyras.fr/Projet3/wordpress/"
          description="Site Wordpress pour l'office de tourisme Strasbourg "
        />

        <ItemPortfolio
          title="DevConnector"
          img={devconnector}
          link="https://ephyras.herokuapp.com/"
          description="Réseau social pour développeur "
        />
      </div>
    </div>
  );
};

export default Portfolio;
