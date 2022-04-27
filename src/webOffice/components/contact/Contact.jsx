import React, { useState } from "react";
import "../../../assets/css/styleMessage.css";
import { create } from "../../axios/service/contact";
function Contact() {
  const [inputError, setInputError] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    comment: "",
  });
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    subject: "",
    comment: "",
  });
  const [stuff, setStuff] = useState({
    errorMessage: "",
    successMessage: "",
    loading: false,
  });
  const { firstname, lastname, email, phone, subject, comment } = formData;

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (e.target.name === "email") {
      if (e.target.value.length <= 5) {
        setInputError({ ...inputError, email: "e-mail obligatoire!" });
      } else if (!e.target.value.includes("@")) {
        setInputError({
          ...inputError,
          email: "vous devez entrer votre email correct slt-p!!",
        });
      } else {
        setInputError({ ...inputError, email: "" });
      }
    } else if (e.target.name === "firstname") {
      if (e.target.value.length <= 2) {
        setInputError({ ...inputError, firstname: " nom obligatoire!" });
      } else {
        setInputError({ ...inputError, firstname: "" });
      }
    } else if (e.target.name === "lastname") {
      if (e.target.value.length <= 2) {
        setInputError({ ...inputError, lastname: "prénom  obligatoire!" });
      } else {
        setInputError({ ...inputError, lastname: "" });
      }
    } else if (e.target.name === "phone") {
      if (e.target.value.length <= 2) {
        setInputError({ ...inputError, phone: "télephone obligatoire!" });
      } else {
        setInputError({ ...inputError, phone: "" });
      }
    } else if (e.target.name === "sujet") {
      if (e.target.value.length <= 2) {
        setInputError({ ...inputError, comment: "sujet obligatoire!" });
      } else {
        setInputError({ ...inputError, comment: "" });
      }
    } else if (e.target.name === "comment") {
      if (e.target.value.length <= 2) {
        setInputError({ ...inputError, comment: "subject obligatoire!" });
      } else {
        setInputError({ ...inputError, comment: "" });
      }
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setStuff({ ...stuff, loading: true });
    for (const input in inputError) {
      if (inputError[input] !== "") {
        alert("still error");
        return;
      }
    }
    create(formData).then(({ data }) => {
      if (!data.err) {
        setStuff({
          loader: false,
          successMessage: "Message d'opération réussie.",
          errorMessage: "",
        });
        setFormData({
          firstname: "",
          lastname: "",
          email: "",
          phone: "",
          subject: "",
          comment: "",
        });
      } else {
        setStuff({
          loader: false,
          successMessage: "",
          errorMessage: data.msg[0],
        });
      }
    });
    console.log("Submit");
  };

  return (
    <>
      <section id="contact" className="contact section-bg">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Contacter</h2>
            <p>NOUS CONTACTER</p>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="row">
                <div className="col-md-12">
                  <div className="info-box">
                    <i className="fa-solid fa-location-dot"></i>
                    <h3>Address :</h3>
                    <p>2 Place Abou Baker Essadik APT8, Agdal.</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="info-box mt-4">
                    <i className="fa-solid fa-envelope"></i>
                    <h3>E-mail :</h3>
                    <p>rekrute.multic@gmail.com</p>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="info-box mt-4 ">
                    <i className="fa-solid fa-phone"></i>
                    <h3>Tél :</h3>
                    <p>
                      +212 537 682 496
                      <br />
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <form
                onSubmit={handleSubmit}
                role="form"
                className="react-email-form"
              >
                <div className="row">
                  {stuff.loader && (
                    <div className="loading">
                      <div className="ring">
                        Chargement...
                        <span className="spn"></span>
                      </div>
                    </div>
                  )}
                  {stuff.errorMessage && (
                    <div className="error-msg">{stuff.errorMessage}</div>
                  )}
                  {stuff.successMessage && (
                    <div className="succes">{stuff.successMessage}</div>
                  )}
                  <div className="row mt-3">
                    <div className="col-md-12 form-group">
                      <input
                        type="text"
                        name="firstname"
                        className="form-control"
                        id="name"
                        placeholder="Nom"
                        value={firstname}
                        onChange={(e) => handleInputChange(e)}
                      />
                      {inputError.firstname !== "" && (
                        <div className="error">{inputError.firstname}</div>
                      )}
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-12 form-group ">
                      <input
                        type="text"
                        name="lastname"
                        className="form-control"
                        id="name"
                        placeholder="Prénom"
                        value={lastname}
                        onChange={(e) => handleInputChange(e)}
                      />
                      {inputError.lastname !== "" && (
                        <div className="error">{inputError.lastname}</div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-12 form-group mt-3 mt-md-0">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="E-mail"
                      value={email}
                      onChange={(e) => handleInputChange(e)}
                    />
                    {inputError.email !== "" && (
                      <div className="error">{inputError.email}</div>
                    )}
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-12 form-group mt-3 mt-md-0">
                    <input
                      type="number"
                      className="form-control"
                      name="phone"
                      id="phone"
                      placeholder="Télephone"
                      value={phone}
                      onChange={(e) => handleInputChange(e)}
                    />
                    {inputError.phone !== "" && (
                      <div className="error">{inputError.phone}</div>
                    )}
                  </div>
                </div>
                <div className="form-group mt-3">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Sujet"
                    value={subject}
                    onChange={(e) => handleInputChange(e)}
                  />
                  {inputError.subject !== "" && (
                    <div className="error">{inputError.subject}</div>
                  )}
                </div>
                <div className="form-group mt-3">
                  <textarea
                    className="form-control"
                    name="comment"
                    rows={5}
                    placeholder="Message"
                    value={comment}
                    onChange={(e) => handleInputChange(e)}
                  />
                  {inputError.comment !== "" && (
                    <div className="error">{inputError.comment}</div>
                  )}
                </div>
                <div className="my-3">
                  <div className="loading">
                    {stuff.loader && (
                      <div className="loading">
                        <div className="ring">
                          Chargement...
                          <span className="spn"></span>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="error-message">
                    {stuff.errorMessage && (
                      <div className="error-msg">{stuff.errorMessage}</div>
                    )}
                  </div>
                  <div className="sent-message">
                    Votre message a été envoyé. Merci!
                    {stuff.successMessage && (
                      <div className="succes">{stuff.successMessage}</div>
                    )}
                  </div>
                </div>
                <div className="text-center">
                  <button type="submit">Envoyer le message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
