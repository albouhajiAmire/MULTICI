import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Logout } from "../../redux/actions/auth";
import { useDispatch, useSelector } from "react-redux";
import { isAuthentication } from "../../redux/actions/auth";
function Header() {
  const toggleMenu = (e) => {
    const navbar = e.target.parentElement;
    navbar.classNameList.toggle("navbar-mobile");
    e.target.classNameList.toggle("fa-bars-staggered");
    e.target.classNameList.toggle("fa-xmark");
  };
  const handleDropDown = (e) => {
    if (e.target.tagName === "A") {
      e.target.nextElementSibling.classNameList.toggle("dropdown-active");
      return;
    }
    e.target.parentElement.nextElementSibling.classNameList.toggle(
      "dropdown-active"
    );
  };
  // -----checked login

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.auth);

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
      <header id="header" className="fixed-top">
        <div className="container d-flex align-items-center justify-content-between">
          <h1 className="logo">
            <NavLink to={"/"}>
              <img
                src="/img/Logo (1).png"
                className="img-fluid"
                alt="logo"
                style={{ width: "10%" }}
              />
            </NavLink>
          </h1>
          <nav id="navbar" className="navbar">
            <ul>
              {isAuth ? (
                <>
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
                      href="#test"
                      onClick={(e) => {
                        handleDropDown(e);
                      }}
                    >
                      <span>
                   name profile
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
                </>
              ) : (
                <>
                  <li>
                    <NavLink to={"/"} className="nav-link scrollto active">
                      acuille
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={"/comment-nous-aidons"}
                      className="nav-link scrollto"
                    >
                      comment-nous-aidons
                    </NavLink>
                  </li>
                  <li className="dropdown">
                    <a
                      href="#test"
                      onClick={(e) => {
                        handleDropDown(e);
                      }}
                    >
                      <span>Societe</span> <i className="bi bi-chevron-down" />
                    </a>
                    <ul>
                      <li className="dropdown">
                        <a
                          href="#profil"
                          onClick={(e) => {
                            handleDropDown(e);
                          }}
                        >
                          <span>
                            Sécurité du centre d'appels et gestion des risques
                          </span>
                          <i className="bi bi-chevron-right" />
                        </a>
                      </li>
                      <li>
                        <NavLink to={"/proposnous"}>à propos de nous</NavLink>
                      </li>
                      <li>
                        <NavLink to={"/durabilite"}>durabilité</NavLink>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <NavLink to={"/"} className="nav-link scrollto">
                      Contact
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={"/login"}
                      className="getstarted scrollto"
                      href="#about"
                    >
                      Se Connecter
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
            <i
              className="fa-solid fa-bars-staggered mobile-nav-toggle"
              onClick={(e) => {
                toggleMenu(e);
              }}
            ></i>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
