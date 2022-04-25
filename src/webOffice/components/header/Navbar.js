import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Logout } from "../../redux/actions/auth";
import { useDispatch, useSelector } from "react-redux";
import { isAuthentication } from "../../redux/actions/auth";
const Navbar = () => {
  const toggleMenu = (e) => {
    const navbar = e.target.parentElement;
    navbar.classList.toggle("navbar-mobile");
    e.target.classList.toggle("fa-bars");
    e.target.classList.toggle("fa-xmark");
  };
  const handleDropDown = (e) => {
    if (e.target.tagName === "A") {
      e.target.nextElementSibling.classList.toggle("dropdown-active");
      return;
    }
    e.target.parentElement.nextElementSibling.classList.toggle(
      "dropdown-active"
    );
  };
  // -----checked login

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuth, user } = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(isAuthentication());
  }, [dispatch]);

  const handelOut = (evt) => {
    evt.preventDefault();
    dispatch(
      Logout(() => {
        navigate("/login");
      })
    );
  };
  return (
    <>
      <header id="header" className="fixed-top ">
        <div className="container d-flex align-items-center">
          <h1 className="logo me-auto">
            <NavLink to="/">Multi-c</NavLink>
          </h1>
          <nav id="navbar" className="navbar">
            {isAuth ? (
              <>
                <ul>
                  <li>
                    <NavLink className="nav-link scrollto active" to="/">
                      <i className="fas fa-acorn"></i> accueil
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={"/emploi"}
                      className="nav-link scrollto active"
                    >
                      d'emande d'emploi
                    </NavLink>
                  </li>
                  <li className="dropdown">
                    <a
                      onClick={(e) => {
                        handleDropDown(e);
                      }}
                      href="#dropdown"
                    >
                      <span>Societe</span>&nbsp;{" "}
                      <i className="fa fa-chevron-down"></i>
                    </a>
                    <ul>
                      <li>
                        <NavLink to={"/proposnous"}>à propos de nous</NavLink>
                      </li>
                      <li>
                        <NavLink to={"/durabilite"}>durabilité</NavLink>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a
                      href="#test"
                      onClick={(e) => {
                        handleDropDown(e);
                      }}
                    >
                      <span>
                        {/* {user.firstname + " "+ user.lastname} */}
                        {`${user.firstname} ${user.lastname}`}
                      </span>
                      <i className="fa-solid fa-chevron-down"></i>
                    </a>
                    <ul>
                      <li>
                        <NavLink to={"/profile"}>profile</NavLink>
                      </li>
                      <li>
                        <a href="#deconnecter" onClick={handelOut}>
                          se déconnecter
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="dropdown">
                    <a
                      onClick={(e) => {
                        handleDropDown(e);
                      }}
                      href="#"
                    >
                      <span>Langue</span>&nbsp;{" "}
                      <i className="fa fa-chevron-down"></i>{" "}
                    </a>
                    <ul>
                      <li>
                        <a href="#">
                          <img
                            className="logotranslate"
                            src={""}
                            alt="frensh"
                          />
                          Francais
                        </a>
                      </li>

                      <li>
                        <a href="#">
                          <img
                            className="logotranslate"
                            src={""}
                            alt="arabic"
                          />{" "}
                          Arabe
                        </a>
                      </li>

                      <li>
                        <a href="#">
                          <img
                            className="logotranslate"
                            src={""}
                            alt="english"
                          />
                          Anglais
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </>
            ) : (
              <>
                <ul>
                  <li>
                    <NavLink className="nav-link scrollto active" to="/">
                      <i className="fas fa-acorn"></i> accueil
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={"/comment-nous-aidons"}
                      className="nav-link scrollto"
                    >
                      comment nous aidons
                    </NavLink>
                  </li>
                  <li className="dropdown">
                    <a
                      onClick={(e) => {
                        handleDropDown(e);
                      }}
                      href="#"
                    >
                      <span>Societe</span>&nbsp;{" "}
                      <i className="fa fa-chevron-down"></i>
                    </a>
                    <ul>
                      <li>
                        <NavLink to={"/proposnous"}>à propos de nous</NavLink>
                      </li>
                      <li>
                        <NavLink to={"/durabilite"}>durabilité</NavLink>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <NavLink
                      to={"/contact"}
                      className="nav-link scrollto"
                      href="/#contact"
                    >
                      Contact
                    </NavLink>
                  </li>
                  <li className="dropdown">
                    <a
                      onClick={(e) => {
                        handleDropDown(e);
                      }}
                      href="#dropdown"
                    >
                      <span>Langue</span>&nbsp;{" "}
                      <i className="fa fa-chevron-down"></i>{" "}
                    </a>
                    <ul>
                      <li>
                        <a href="#francais">
                          <img
                            className="logotranslate"
                            src={""}
                            alt="frensh"
                          />
                          Francais
                        </a>
                      </li>

                      <li>
                        <a href="#arabe">
                          <img
                            className="logotranslate"
                            src={""}
                            alt="arabic"
                          />{" "}
                          Arabe
                        </a>
                      </li>

                      <li>
                        <a href="#english">
                          <img
                            className="logotranslate"
                            src={""}
                            alt="english"
                          />
                          Anglais
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <NavLink to={"/login"} className="getstarted scrollto">
                      Se connecter
                    </NavLink>
                  </li>
                </ul>
              </>
            )}

            <i
              className="fa-solid fa-bars mobile-nav-toggle"
              onClick={(e) => {
                toggleMenu(e);
              }}
            ></i>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
