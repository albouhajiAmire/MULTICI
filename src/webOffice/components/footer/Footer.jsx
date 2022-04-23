import React, { useState } from "react";
import { toast } from "react-toastify";
import { Subscribe } from "../../axios/service/subscribe";
import ChatBox from "../chat/chatBox";
function Footer() {
  const [formData, setFormData] = useState({
    email: "",
  });
  const { email } = formData;
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubscribe = (e) => {
    e.preventDefault();
    //  axios.post("http://localhost:3002/v1/api/subscribe/create", dataToaSubmit)
    Subscribe(formData)
      .then(({ data }) => {
        if (data.err) {
          toast.error("Oops!! désolé,nous pensons qu'il y a un probléme.");
        } else {
          toast.success("Merci de votre bonnement et de votre confiance");
        }
      })
      .catch((err) => {
        toast.error("Oooh!! il y'a un probléme!!");
      });
  };
  return (
    <>
      <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="footer-info">
                  <h3>Multi-c</h3>
                  <p className="pb-3">
                    <em>
                      {/* Qui repudiandae et eum dolores alias sed ea. Qui suscipit
                      veniam excepturi quod. */}
                    </em>
                  </p>
                  <p>
                    <br />
                    2 Place Abou Baker Essadik APT8, Agdal.
                    <br />
                    <br />
                    <strong>Phone:</strong> +212 537 682 496
                    <br />
                    <strong>Email:</strong> rekrute.multic@gmail.com
                    <br />
                  </p>
                  <div className="social-links mt-3">
                    <a href="#text" className="facebook">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                    <a href="#text" className="instagram">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a href="#text" className="linkedin">
                      <i className="fa-brands fa-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 footer-links">
                <h4>Liens utiles</h4>
                <ul>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <a href="text">Acuille</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <a href="#text">A propos</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <a href="#text">Service</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <a href="#text">Contacter</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-6 footer-links">
                <h4>Nos services</h4>
                <ul>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <a href="#text">Création de sites web</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <a href="#text">Développement web</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <a href="#text">Gestion des produits</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <a href="#text">Commercialisation</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <a href="#text">Conseillers Client</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-6 footer-newsletter">
                <h4>Rejoignez notre alliances it</h4>
                <p>
                  Bienvenue, votre participation est importante pour nous,
                  merci!
                </p>
                <form onSubmit={handleSubscribe}>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => handleInputChange(e)}
                  />
                  <input type="submit" defaultValue="Subscribe" />
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="copyright">
            © droits d'auteur
            <strong>Multi-ci</strong>. Tous les droits sont réservés
          </div>
          <div className="credits">
            Développeurs by{" "}
            <a href="http://wa.me/+212 688727657" target="_blank">
              amine albouhaji && karim Manssour
            </a>
          </div>
        </div>
      </footer>
  
      <a
        href="#hero"
        className="back-to-top d-flex align-items-center justify-content-center active"
      >
        <i className="fa-solid fa-arrow-up"></i>
      </a>
    </>
  );
}

export default Footer;
