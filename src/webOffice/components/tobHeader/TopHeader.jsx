import React from "react";

function TopHeader() {
  return (
    <>
      <section id="topbar" className="d-flex align-items-center">
        <div className="row container">
          <div className="container col-md-6 d-flex justify-content-center justify-content-md-between">
            <div className="contact-info  align-items-center">
              <i className="fa-solid fa-envelope"></i>
              <a href="mailto:rekrute.multic@gmail.com">
                {" "}
                rekrute.multic@gmail.com
              </a>
              &nbsp;&nbsp;&nbsp;<i className="fa-solid fa-phone"></i> +1 5589
              55488 55
            </div>
            <div className="col-md-4">
              <div className="social-links d-none d-md-block">
                <a href="#" className="">
                  <i class="fa-solid fa-globe"></i>
                </a>
                <a href="#" className="facebook">
                  <i class="fa-brands fa-facebook"></i>
                </a>
                <a href="#" className="instagram">
                  <i class="fa-brands fa-instagram"></i>
                </a>
                <a href="#" className="linkedin">
                  <i class="fa-brands fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TopHeader;
