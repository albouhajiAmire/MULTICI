import React from 'react'
import { NavLink } from 'react-router-dom'

function NotFound() {
  return (
    <>
    <div className="container">
        <section className="section error-404 min-vh-100 d-flex flex-column align-items-center justify-content-center">
          {/* <h1>404</h1> */}
          <img src="/img/404.svg" alt="" srcset="" style={{width:"50%"}}/>
          <h2>La page que vous recherchez n'existe pas.</h2>
          <NavLink to={"/"} className="btn" >
           Retour à l'accuille
          </NavLink>
        </section>
      </div>
    </>
  )
}

export default NotFound