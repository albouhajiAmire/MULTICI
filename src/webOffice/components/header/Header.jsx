import React from "react";

function Header() {

  const toggleMenu = (e) => {
    const navbar = e.target.parentElement;
    navbar.classList.toggle("navbar-mobile");
    e.target.classList.toggle("fa-bars-staggered");
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

  return (
    <>
      {" "}
      <header id="header" className="fixed-top">
        <div className="container d-flex align-items-center justify-content-between">
          <h1 className="logo">
            <a href="index.html">Multici</a>
          </h1>
          {/* Uncomment below if you prefer to use an image logo */}
          {/* <a href="index.html" class="logo"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <a className="nav-link scrollto active" href="#hero">
                  acuille
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#about">
                  propos
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#services">
                  Service
                </a>
              </li>
              <li className="dropdown">
                <a href="#" onClick={(e) => {
                  handleDropDown(e);
                }}>
                  <span>Societe</span> <i className="bi bi-chevron-down" />
                </a>
                <ul>
                  <li>
                    <a href="#">notre mission</a>
                  </li>
                  <li className="dropdown">
                    <a href="#" onClick={(e) => {
                      handleDropDown(e);
                    }}>
                      <span>Sécurité du centre d'appels et gestion des risques</span>{" "}
                      <i className="bi bi-chevron-right" />
                    </a>
                    <ul>
                      <li>
                        <a href="#">responsabilité sociale des entreprises</a>
                      </li>
                      <li>
                        <a href="#">emplacement</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 3</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 4</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 5</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">nos valeurs</a>
                  </li>
                  <li>
                    <a href="#">l'excellence opérationnelle</a>
                  </li>
                  <li>
                    <a href="#">témoignages-associés</a>
                  </li>
                  <li>
                    <a href="#">témoignages-clients</a>
                  </li>
                </ul>
              </li>
              <li>
                <a className="nav-link scrollto" href="#contact">
                  Contact
                </a>
              </li>
              <li>
                <a className="getstarted scrollto" href="#about">
                  Get Started
                </a>
              </li>
            </ul>
            <i class="fa-solid fa-bars-staggered mobile-nav-toggle"
              onClick={(e) => {
                toggleMenu(e);
              }}></i>
          </nav>
          {/* .navbar */}
        </div>
      </header>
    </>
  );
}

export default Header;
