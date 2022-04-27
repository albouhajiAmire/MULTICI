import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./login.css";
import { Auth, isAuthentication } from "../webOffice/redux/actions/auth";
import { ForgotAuth } from "../webOffice/axios/service/auth";
import { toast } from "react-toastify";

const Forgot = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isAuth } = useSelector((state) => state.auth);
  // const { errorMsg } = useSelector((state) => state.message);
  // const { loading } = useSelector((state) => state.loading);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    dispatch(isAuthentication());
  }, [dispatch]);

  useEffect(() => {
    if (isAuth) {
      navigate("/");
    }
  }, [isAuth]);

 

  const [email, setEmail] = useState ('');

  const [emailError, setIEmailError] = useState("");
  // const [stuff, setStuff] = useState({
  //   errorMessage: "",
  //   successMessage: "",
  //   loader: false,
  // });

  const handleLoginData = (e) => {
    setEmail( e.target.value );    
      if (e.target.value.length <= 5) {
        setIEmailError("e-mail obligatoire!");
      } else if (!e.target.value.includes("@")) {
        setIEmailError(
          "vous devez entrer votre email correct!!");
      } else {
        setIEmailError("");
      }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
      if (emailError !== "") {
       toast.error('email no correct')
        return;
      }
      ForgotAuth({email})
      .then(({ data }) => {
        if (!data.err) {
          setLoading(false);
          setEmail("");
        } else {
          const msg = typeof data.msg === "string" ? data.msg : data.msg[0];
          setLoading(false);
          toast.error(msg);
        }
      })
      .catch((err) => {
        setLoading(false);
        toast.error('Oooh!! quelque-chose ne va pas?');
      });
   
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
              <h1>
                <a href rel="dofollow">
                  Bienvenue pour vous connecter
                </a>
              </h1>
            </div>
            <div className="formbg-outer">
              <div className="formbg">
                <div className="formbg-inner padding-horizontal--48">
                  <span className="padding-bottom--15 spanlogin">
                    Connectez-vous à votre compte
                  </span>
                
                  {loading && (
                    <div className="loading">
                      <div className="ring">
                        Chargement...
                        <span className="spn"></span>
                      </div>
                    </div>
                  )}
               
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
                      {emailError !== "" && (
                        <small style={{ color: "tomato" }}>
                          {emailError}
                        </small>
                      )}
                    </div>

                    {/* <div className="field field-checkbox padding-bottom--24 flex-flex align-center">
                      <label className="labellogin" htmlFor="checkbox">
                        <input type="checkbox" name="checkbox" /> Restez
                        connecté pendant une semaine
                      </label>
                    </div> */}
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
                  Vous n'avez pas de compte ?
                  <NavLink to={"/register"}>S'inscrire</NavLink>
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
};

export default Forgot;
