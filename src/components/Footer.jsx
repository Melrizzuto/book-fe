import "@fortawesome/fontawesome-free/css/all.min.css";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer>
      <div className="bg-light">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-lg-3 col-xxl-2">
              {/* logo personalizzato che rappresenta l'azienda */}
              <div className={styles["footer-logo"]}>
                <h3>BoolBooks</h3>
              </div>
              {/* descrizione breve su ciò che offriamo */}
              <p className="mb-0 font-weight-bold">Get free books,</p>
              <p className="mb-0 font-weight-bold">spread culture,</p>
              <p className="font-weight-bold">read eco-friendly reviews.</p>
              {/* icone dei social media */}
              <div style={{ display: "flex", maxWidth: "10rem" }}>
                <div className="col-3 p-0 text-center">
                  <a
                    href="#"
                    rel="nofollow"
                    target="_blank"
                    aria-label="Instagram"
                    className={styles["social-icons"]}
                  >
                    <i className="h3 fab fa-instagram"></i>
                  </a>
                </div>
                <div className="col-3 p-0 text-center">
                  <a
                    href="#"
                    rel="nofollow"
                    target="_blank"
                    aria-label="Facebook"
                    className={styles["social-icons"]}
                  >
                    <i className="h3 fab fa-facebook-f"></i>
                  </a>
                </div>
                <div className="col-3 p-0 text-center">
                  <a
                    href="#"
                    rel="nofollow"
                    target="_blank"
                    aria-label="Facebook Groups"
                    className={styles["social-icons"]}
                  >
                    <i className="h3 fas fa-users"></i>
                  </a>
                </div>
                <div className="col-3 p-0 text-center">
                  <a
                    href="#"
                    rel="nofollow"
                    target="_blank"
                    aria-label="Spotify"
                    className={styles["social-icons"]}
                  >
                    <i className="h3 fab fa-spotify"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-9 m-auto">
              <div className="row">
                {/* sezione BoolBooks con link alla pagina "About" e "Contact" */}
                <div className="col-lg-4 col-6 mt-4">
                  <p className="text-uppercase font-weight-bold">BoolBooks</p>
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a href="/about" className="nav-link">
                        About
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/about" className="nav-link">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>

                {/* sezione Upgrade con link a BoolBooks PRO */}
                <div className="col-lg-4 col-6 mt-4">
                  <p className="text-uppercase font-weight-bold">Upgrade</p>
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a href="/acciobooks-pro" className="nav-link">
                        BoolBooks PRO
                      </a>
                    </li>
                  </ul>
                </div>

                {/* sezione Support con link per "Contact us" */}
                <div className="col-lg-4 col-6 mt-4">
                  <p className="text-uppercase font-weight-bold">Support</p>
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a href="/contact" className="nav-link">
                        Contact us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* barra di copyright e condizioni */}
        <div className="copyright-bar">
          <div className="container py-4">
            <div className="row">
              <div className="col-12 text-center">
                <p className="mb-0">
                  © 2025 BoolBooks s.r.l. All rights reserved. |{" "}
                  <a href="/terms-and-conditions">Terms and conditions</a> |{" "}
                  Made with &hearts; to Mondadori Team | Italy
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
