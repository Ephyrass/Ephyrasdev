import React, { useState } from "react";
import { Link } from "react-router-dom";
import iconHeader from "../../assets/iconHeader.svg";
import portfolio from "../../assets/portfolio.svg";
import about from "../../assets/about.svg";
import contact from "../../assets/contact.svg";
import useWindowScrollPosition from "@rehooks/window-scroll-position";

const Navbar = () => {
  const [change, setChange] = useState(false);
  const changePosition = 10;

  const position = useWindowScrollPosition();

  if (position.y > changePosition && !change) {
    setChange(true);
  }

  if (position.y <= changePosition && change) {
    setChange(false);
  }

  const navStyle = {
    backgroundColor: change ? "#111b25" : "transparent",
    color: change ? "#111b25" : "black",
    transition: "400ms ease"
  };

  return (
    <div className="nav" style={navStyle}>
      <Link className="link" to="/">
        <div className="logo">
          <img src={iconHeader} alt="Developpement web icon" />{" "}
          <h1 className="logo-ephyras">Ephyras'Dev</h1>
        </div>
      </Link>
      <div className="menu">
        <ul>
          <Link to={"/portfolio"}>
            <li>
              <img src={portfolio} alt="icon portfolio" /> Portfolio
            </li>
          </Link>
          <Link to={"/about"}>
            <li>
              <img src={about} alt="icon A propos" /> À Propos
            </li>
          </Link>
          <Link to={"/contact"}>
            <li>
              <img src={contact} alt="icon contact" /> Contact
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
