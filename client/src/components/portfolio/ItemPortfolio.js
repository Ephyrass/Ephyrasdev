import React from "react";

const ItemPortfolio = ({ title, img, imgDesc, link, description }) => {
  return (
    <div className="item pt-5">
      <h4>{title}</h4>
      <figure>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img className="item-img" src={img} alt={imgDesc} />
        </a>
        <figcaption className="legend">{description}</figcaption>
      </figure>
    </div>
  );
};

export default ItemPortfolio;
