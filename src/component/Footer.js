import React from "react";
import '../css/Footer.css'
import '../css/FooterFontAwesome.css'

export default function Footer() {
  return (
      <footer class="text-center text-lg-start bg-dark text-muted">
        <section class="footStyle">
          <div class="container text-center text-md-start mt-5">
            <div class="row mt-3">
              <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4" style={{marginTop:"30px"}}>
                  <i class="fas fa-gem me-3"></i>Buggie
                </h6>
                <p>
                  Here you can use rows and columns to organize your footer
                  content. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                </p>
              </div>
              <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4" style={{marginTop:"30px"}}>Company</h6>
                <p>
                  <a href="#!" class="text-reset">
                    Angular
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    React
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    Vue
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    Laravel
                  </a>
                </p>
              </div>
              <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4" style={{marginTop:"30px"}}>Contact</h6>
                <p>
                  <a href="#!" class="text-reset">
                    Pricing
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    Settings
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    Orders
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    Help
                  </a>
                </p>
              </div>
              <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 class="text-uppercase fw-bold mb-4" style={{marginTop:"30px"}}>Social Links</h6>
                <p class="instagram">
                <i class="fa fa-instagram" style={{fontSize:"40px"}}></i>
                </p>
                <p class="twitter">
                <i class="fa fa-twitter" style={{fontSize:"40px"}}></i>
                </p>
                <p class="phone">
                <i class="fa fa-phone" style={{fontSize:"40px"}}></i>
                </p>
                <p class="mail">
                <i class="fa fa-envelope" style={{fontSize:"40px"}}></i>
                </p>
              </div>
            </div>
          </div>
        </section>

        <div
          class="text-center p-4"
          style={{backgroundColor: "rgba(0, 0, 0, 0.05)"}}
        >
        </div>
      </footer>
  );
}
