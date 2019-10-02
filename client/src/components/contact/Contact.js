import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [formdata, setFormData] = useState({
    fullName: "",
    mail: "",
    subj: "",
    message: ""
  });

  const { fullName, mail, subj, message } = formdata;

  const onChange = e => {
    setFormData({
      ...formdata,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = e => {
    e.preventDefault();
    const user = {
      fullName: fullName,
      email: mail,
      subj: subj,
      message: message
    };
    axios.post("/send", user).then(res => {
      res.data.msg === "success"
        ? alert("Message Envoyé !")
        : alert("Erreur ! Le message n'a pas pu être envoyé.");
      res.data.msg === "success" && window.location.reload();
    });
  };

  return (
    <div className="contact">
      <div
        className="container contact"
        onSubmit={e => handleSubmit(e)}
        method="POST"
      >
        <div className="title-contact">
          <h2 className="display-3">Me Contacter</h2>
          <p>
            Vous voulez me proposer un projet, besoin d'un devis ou
            d'informations ? <br />
            N'hésitez pas à me contacter, je vous repondrai au plus vite.
          </p>
          <hr />
          <div className="button-contact">
            <button>Téléphone: 06 37 61 89 45</button>
          </div>
        </div>
        <br />
        <div className="form"></div>
        <form>
          <div className="form-group ">
            <label>Nom et prénom:</label>
            <br />
            <input
              placeholder="Votre Nom et prénom"
              className="form-control"
              name="fullName"
              value={fullName}
              onChange={e => onChange(e)}
              required
            />
            <br />
            <br />
            <label>Mail:</label>
            <br />
            <input
              type="email"
              placeholder="Votre email"
              className="form-control"
              name="mail"
              value={mail}
              onChange={e => onChange(e)}
              required
            />
            <br />
            <br />
            <label>Sujet:</label>
            <br />

            <input
              placeholder="Le sujet de votre mail"
              className="form-control"
              name="subj"
              value={subj}
              onChange={e => onChange(e)}
              required
            />
            <br />
            <br />
            <label>Message:</label>
            <br />

            <textarea
              className="form-control"
              rows="6"
              placeholder="Votre message"
              name="message"
              value={message}
              onChange={e => onChange(e)}
              required
            ></textarea>

            <br />
            <div className="submit-btn">
              <button>Envoyer</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
