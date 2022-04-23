import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { Confirmemail } from "../../axios/service/auth";

function Confirm() {
  const [message, setMessage] = useState("");
  const params = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    Confirmemail(params.id)
      .then(({ data }) => {
        if (!data.err) {
          setMessage("ok");
        } else {
          setMessage(data.msg);
        }
      })
      .catch((err) => {
        navigate("/");
      });
  });
  return (
    <>
      <div className="container">
       
        <section className="section confirm min-vh-100 d-flex flex-column align-items-center justify-content-center">
        {
          message === 'ok' ? 
          <>
          <h1>confirmation de compte</h1>
          <h2>vérifiez votre e-mail et revenez pour continuer !</h2>
          <img
            src="/img/confirm.svg"
            alt="confirmation"
            srcset=""
            style={{ width: "30%" }}
          />
          </> :    
           <>
          <h1> Ooops E-mail n'est pas confirmer </h1>
          <h2> revenez pour vérifiez votre e-mail !</h2>
          <img
            src="/img/denied.svg"
            alt="confirmation"
            srcset=""
            style={{ width: "30%" }}
          />
          </>
        }
          <NavLink to={"/login"} className="btn">
            Se connecter
          </NavLink>
        </section>
      </div>
    </>
  );
}

export default Confirm;
