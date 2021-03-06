import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./login.css";
import { Auth, isAuthentication } from "../webOffice/redux/actions/auth";
import { toast } from "react-toastify";
import { CLEAR_MESSAGE } from "../webOffice/redux/constans/message";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isAuth } = useSelector((state) => state.auth);
  const { errorMsg } = useSelector((state) => state.message);
  const { loading } = useSelector((state) => state.loading);

  //START BTN Show && HIDE :
  const [eye, SetEye] = useState(false);
  const toggleBtn = () => {
    SetEye((prevState) => !prevState);
  };
  //END BTN Show && HIDE :::
  useEffect(() => {
    dispatch(isAuthentication());
  }, [dispatch]);

  useEffect(() => {
    if (isAuth) {
      navigate("/emploi");
    }
  }, [isAuth]);

  useEffect(() => {
    if (errorMsg !== "") {
      toast.error(errorMsg);
      dispatch({ type: CLEAR_MESSAGE });
    }
  }, [errorMsg]);

  const [formData, setFormData] = useState({ email: "", password: "" });
  const { email, password } = formData;
  const [inputError, setInputError] = useState({
    email: "",
    password: "",
  });

  const handleLoginData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    if (e.target.name === "email") {
      if (e.target.value.length <= 5) {
        setInputError({ ...inputError, email: "e-mail  obligatoire!" });
      } else if (!e.target.value.includes("@")) {
        setInputError({
          ...inputError,
          email: "vous devez entrer votre email correct!!",
        });
      } else {
        setInputError({ ...inputError, email: "" });
      }
    } else if (e.target.name === "password") {
      if (e.target.value.length <= 2) {
        setInputError({ ...inputError, password: "mot de passe obligatoire!" });
      } else {
        setInputError({ ...inputError, password: "" });
      }
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    for (const input in inputError) {
      if (inputError[input] !== "") {
        alert("still error");
        return;
      }
    }
    dispatch(Auth(formData));
  };

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
              <h1>Bienvenue pour vous connecter</h1>
            </div>
            <div className="formbg-outer">
              <div className="formbg">
                <div className="formbg-inner padding-horizontal--48">
                  <span className="padding-bottom--15 spanlogin">
                    <strong>Vous n'avez pas de compte ?</strong>
                    <br />
                    <NavLink to={"/login"}>S'inscrire</NavLink>
                  </span>
                  <div className="">
                    {errorMsg !== "" && <div className="err">{errorMsg}</div>}
                  </div>

                  <form
                    id="stripe-login"
                    onSubmit={(e) => {
                      handleOnSubmit(e);
                    }}
                  >
                    <div className="field padding-bottom--24">
                      <label className="labellogin" htmlFor="email">
                        E-mail
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => {
                          handleLoginData(e);
                        }}
                      />
                      {inputError.email !== "" && (
                        <small style={{ color: "tomato" }}>
                          {inputError.email}
                        </small>
                      )}
                    </div>
                    <div className="field padding-bottom--24">
                      <div className="grid--50-50">
                        <label className="labellogin" htmlFor="password">
                          Mot de passe
                        </label>
                        <div className="reset-pass">
                          <NavLink to={"/forgotpassword"}>
                            Mot de passe oubli???
                          </NavLink>
                        </div>
                      </div>
                      <input
                        className="password-field"
                        name="password"
                        value={password}
                        onChange={(e) => {
                          handleLoginData(e);
                        }}
                        type={eye ? "text" : "password"}
                      />
                      <button
                        type="button"
                        className="btnEye"
                        onClick={toggleBtn}
                      >
                        {eye ? (
                          <i className="fa-solid fa-eye"></i>
                        ) : (
                          <i className="fa-solid fa-eye-slash"></i>
                        )}
                      </button>
                      {inputError.password !== "" && (
                        <small style={{ color: "tomato" }}>
                          {inputError.password}
                        </small>
                      )}
                    </div>
                    {/* <div className="field field-checkbox padding-bottom--24 flex-flex align-center">
                      <label className="labellogin" htmlFor="checkbox">
                        <input type="checkbox" name="checkbox" /> Restez
                        connect?? pendant une semaine
                      </label>
                    </div> */}
                    <div className="field padding-bottom--24">
                      {!loading && (
                        <input
                          type="submit"
                          name="submit"
                          value="se connecter"
                          defaultValue="Continue"
                        />
                      )}
                        {loading && <strong style={{textAlign:'center'}}> En cour de traitement...</strong>}
                    </div>
                    <div className="field">
                      <NavLink to={"/"} className="ssolink">
                        Accuille page
                      </NavLink>
                    </div>
                  </form>
                </div>
              </div>
              <div className="footer-link padding-top--24">
                <span>
                  Vous n'avez pas de compte???
                  <NavLink to={"/register"}>S'inscrire</NavLink>
                </span>
                <div className="listing padding-top--24 padding-bottom--24 flex-flex center-center">
                  <span>
                    <NavLink to={""}>?? Multici</NavLink>
                  </span>
                  <span>
                    <NavLink to={""}>Contact</NavLink>
                  </span>
                  <span>
                    <NavLink to={""}>Confidentialit?? &amp; termes</NavLink>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
