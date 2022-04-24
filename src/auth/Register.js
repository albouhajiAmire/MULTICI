import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { SignupAuth } from "../webOffice/axios/service/auth";
import "./login.css";
import { toast } from "react-toastify";
toast.configure();
function Register() {
  const [inputError, setInputError] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const [stuff, setStuff] = useState({
    errorMessage: "",
    successMessage: "",
    loader: false,
  });
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const { firstname, lastname, email, password, confirmpassword } = formData;
  const handleInputChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
    if (evt.target.name === "email") {
      if (evt.target.value.length <= 5) {
        setInputError({ ...inputError, email: "e-mail  obligatoire!" });
      } else if (!evt.target.value.includes("@")) {
        setInputError({
          ...inputError,
          email: "vous devez entrer votre email correct!!",
        });
      } else {
        setInputError({ ...inputError, email: "" });
      }
    } else if (evt.target.name === "firstname") {
      if (evt.target.value.length <= 2) {
        setInputError({ ...inputError, firstname: "nom  obligatoire!" });
      } else {
        setInputError({ ...inputError, firstname: "" });
      }
    } else if (evt.target.name === "lastname") {
      if (evt.target.value.length <= 2) {
        setInputError({ ...inputError, lastname: "prénom  obligatoire!" });
      } else {
        setInputError({ ...inputError, lastname: "" });
      }
    } else if (evt.target.name === "password") {
      if (evt.target.value.length <= 2) {
        setInputError({ ...inputError, password: "mot de passe obligatoire!" });
      } else {
        setInputError({ ...inputError, password: "" });
      }
    } else if (evt.target.name === "confirmpassword") {
      if (evt.target.value.length <= 2) {
        setInputError({
          ...inputError,
          confirmpassword: "confirme mot de passe obligatoire!",
        });
      } else {
        setInputError({ ...inputError, confirmpassword: "" });
      }
    }
  };

  const Signup = (evt) => {
    evt.preventDefault();
    setStuff({ ...stuff, loader: true });

    for (const input in inputError) {
      if (inputError[input] !== "") {
        toast.error('error');
        return;
      }
    }
    SignupAuth(formData)
      .then(({ data }) => {
        if (!data.err) {
          setStuff({
            loader: false,
            successMessage: "validate",
            errorMessage: "",
          });
          setFormData({
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            confirmpassword: "",
          });
        } else {
          const msg = typeof data.msg === "string" ? data.msg : data.msg[0];
          setStuff({
            loader: false,
            successMessage: "",
            errorMessage: msg,
          });
          toast.error(msg);
        }
      })
      .catch((err) => {
        setStuff({
          loader: false,
          successMessage: "",
          errorMessage: "someting went wrong,please try again",
        });
        toast.error('someting went wrong,please try again');
      });
  };
  useEffect(() => {
    if (stuff.successMessage === "validate") {
      toast.success('message succes');
      setStuff({
        ...stuff,
        successMessage: "",
      });
    }
  }, [stuff.successMessage]);
  return (
    <>
      <div className="login-root">
        <div
          className="box-root flex-flex flex-direction--column"
          style={{ minHeight: "100vh", flexGrow: 1 }}
        >
          <div className="loginbackground box-background--white padding-top--64">
            <div className="loginbackground-gridContainer">
              <div
                className="box-root flex-flex"
                style={{ gridArea: "top / start / 8 / end" }}
              >
                <div
                  className="box-root"
                  style={{
                    backgroundImage:
                      "linear-gradient(white 0%, rgb(247, 250, 252) 33%)",
                    flexGrow: 1,
                  }}
                ></div>
              </div>
              <div
                className="box-root flex-flex"
                style={{ gridArea: "4 / 2 / auto / 5" }}
              >
                <div
                  className="box-root box-divider--light-all-2 animationLeftRight tans3s"
                  style={{ flexGrow: 1 }}
                />
              </div>
              <div
                className="box-root flex-flex"
                style={{ gridArea: "6 / start / auto / 2" }}
              >
                <div
                  className="box-root box-background--blue800"
                  style={{ flexGrow: 1 }}
                />
              </div>
              <div
                className="box-root flex-flex"
                style={{ gridArea: "7 / start / auto / 4" }}
              >
                <div
                  className="box-root box-background--blue animationLeftRight"
                  style={{ flexGrow: 1 }}
                />
              </div>
              <div
                className="box-root flex-flex"
                style={{ gridArea: "8 / 4 / auto / 6" }}
              >
                <div
                  className="box-root box-background--gray100 animationLeftRight tans3s"
                  style={{ flexGrow: 1 }}
                />
              </div>
              <div
                className="box-root flex-flex"
                style={{ gridArea: "2 / 15 / auto / end" }}
              >
                <div
                  className="box-root box-background--cyan200 animationRightLeft tans4s"
                  style={{ flexGrow: 1 }}
                />
              </div>
              <div
                className="box-root flex-flex"
                style={{ gridArea: "3 / 14 / auto / end" }}
              >
                <div
                  className="box-root box-background--blue animationRightLeft"
                  style={{ flexGrow: 1 }}
                />
              </div>
              <div
                className="box-root flex-flex"
                style={{ gridArea: "4 / 17 / auto / 20" }}
              >
                <div
                  className="box-root box-background--gray100 animationRightLeft tans4s"
                  style={{ flexGrow: 1 }}
                />
              </div>
              <div
                className="box-root flex-flex"
                style={{ gridArea: "5 / 14 / auto / 17" }}
              >
                <div
                  className="box-root box-divider--light-all-2 animationRightLeft tans3s"
                  style={{ flexGrow: 1 }}
                />
              </div>
            </div>
          </div>
          <div
            className="box-root padding-top--24 flex-flex flex-direction--column"
            style={{ flexGrow: 1, zIndex: 9 }}
          >
            <div className="box-root padding-top--48 padding-bottom--24 flex-flex flex-justifyContent--center">
              <h1>
                <a href rel="dofollow">
                  Bienvenue pour vous S'inscrire
                </a>
              </h1>
            </div>
            <div className="formbg-outer">
              <div className="formbg">
                {stuff.loader && (
                  <div className="box">
                    <div className="container">
                      <span className="circle"></span>
                      <span className="circle"></span>
                      <span className="circle"></span>
                      <span className="circle"></span>
                    </div>
                  </div>
                )}
                {stuff.errorMessage && <div className="errorform">{stuff.errorMessage}</div>}
                {stuff.successMessage && <div className="succesform">{stuff.successMessage}</div>}
                <div className="formbg-inner padding-horizontal--48">
                  <span className="padding-bottom--15 spanlogin">
                    Connectez-vous à votre compte
                  </span>
                  <form id="stripe-login" onSubmit={Signup}>
                    <div className="row">
                      <div className="field padding-bottom--24 col-md-6">
                        <label className="labellogin" htmlFor="email">
                          Nom (*):
                        </label>
                        <input
                          type="text"
                          name="firstname"
                          value={firstname}
                          onChange={(evt) => handleInputChange(evt)}
                        />
                        {inputError.firstname !== "" && (
                          <div className="err">{inputError.firstname}</div>
                        )}
                      </div>
                      <div className="field padding-bottom--24 col-md-6">
                        <label className="labellogin" htmlFor="email">
                          Prénom (*):
                        </label>
                        <input
                          type="text"
                          name="lastname"
                          value={lastname}
                          onChange={(evt) => handleInputChange(evt)}
                        />
                        {inputError.lastname !== "" && (
                          <div  className="err">{inputError.lastname}</div>
                        )}
                      </div>
                    </div>
                    <div className="field padding-bottom--24">
                      <label className="labellogin" htmlFor="email">
                        E-mail (*):
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={(evt) => handleInputChange(evt)}
                      />
                      {inputError.email !== "" && <div  className="err">{inputError.email}</div>}
                    </div>
                    <div className="field padding-bottom--24">
                      <div className="grid--50-50">
                        <label className="labellogin" htmlFor="password">
                          Mot de passe (*):
                        </label>
                        <div className="reset-pass">
                          <NavLink to={""}>Mot de passe oublié?</NavLink>
                        </div>
                      </div>
                      <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={(evt) => handleInputChange(evt)}
                      />
                      {inputError.password !== "" && (
                        <div  className="err">{inputError.password}</div>
                      )}
                    </div>
                    <div className="field padding-bottom--24">
                      <label className="labellogin" htmlFor="email">
                        Confirmer mot de passe (*):
                      </label>
                      <input
                        type="password"
                        name="confirmpassword"
                        value={confirmpassword}
                        onChange={(evt) => handleInputChange(evt)}
                      />
                      {inputError.confirmpassword !== "" && (
                        <div  className="err">{inputError.confirmpassword}</div>
                      )}
                    </div>

                    <div className="field padding-bottom--24">
                      <input
                        type="submit"
                        name="submit"
                        defaultValue="Continue"
                      />
                    </div>
                    <div className="field">
                      <NavLink to={"/"} className="ssolink" href="#">
                        Accuille page
                      </NavLink>
                    </div>
                  </form>
                </div>
              </div>
              <div className="footer-link padding-top--24">
                <span>
                  Vous n'avez pas de compte ?
                  <NavLink to={"/login"}>Se connecter</NavLink>
                </span>
                <div className="listing padding-top--24 padding-bottom--24 flex-flex center-center">
                  <span>
                    <NavLink to={""}>© Multici</NavLink>
                  </span>
                  <span>
                    <NavLink to={""}>Contact</NavLink>
                  </span>
                  <span>
                    <NavLink to={""}>Confidentialité &amp; termes</NavLink>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
