import React from "react";
import PriceContent from "./PriceContent";
import onepage from "../../../assets/one-page.svg";
import vitrine from "../../../assets/vitrine.svg";
import app from "../../../assets/app.svg";

const PriceSection = () => {
  return (
    <div className="delivery">
      <h2>Mes prestations:</h2>
      <h4 className="center">Découvrez mes offres.</h4>
      <hr />
      <div className="price-section">
        <PriceContent
          icon={onepage}
          iconDesc="image d'une icone représentant un site one page"
          title="One Page :"
          text="Un site en une seule page, basique avec plusieurs sections. Idéal pour faire passer un message clair et direct    (événement professionnel, sportif, promotion d'un nouveau produit, etc) et commencer à avoir de la visibilité sur le Web  "
          price="A partir de 99€ TTC"
        />
        <PriceContent
          icon={vitrine}
          iconDesc="image d'une icone représentant un site vitrine"
          title="Site Vitrine / Blog / E-commerce"
          text="Un site vitrine est un site internet qui présente les produits et services de votre activité, sans vendre en ligne.
                Un site E-commerce permet de vendre directement vos produits en ligne et de les vendres 24h/24h.
                Et un blog permet de rédiger des articles pour une communauté.
          "
          price="A partir de 250€ TTC"
        />
        <PriceContent
          icon={app}
          iconDesc="image d'une icone représentant un téphone avec une application ouverte"
          title=" Freelance / Application:"
          text="Vous avez besoin de mes compétences pour une mission sur des technologies particulières ou besoin d'un application (réseau social, gestion, etc) ? N'hesitez pas à me contacter !"
          price="A partir de 250€/jour TTC"
        />
      </div>
    </div>
  );
};

export default PriceSection;
