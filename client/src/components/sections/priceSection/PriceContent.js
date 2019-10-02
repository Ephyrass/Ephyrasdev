import React from "react";

const PriceContent = ({ icon, iconDesc, title, price, text }) => {
  return (
    <div className="price-content">
      <img src={icon} alt={iconDesc} />
      <h4 className="center">{title}</h4>
      <p className="center pt-5">{text}</p>

      <h3 className="center pt-15">{price}</h3>
    </div>
  );
};

export default PriceContent;
