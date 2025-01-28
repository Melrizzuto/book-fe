import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styles from './Header.module.css'; // Importa il CSS Module

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={styles.header}
      style={{
        transition: "background-color 0.3s, box-shadow 0.3s",
        position: "fixed",
        top: "0",
        left: "0",
        right: "0",
        zIndex: 1000,
        width: "100%",
        backgroundColor: isScrolled ? "white" : "transparent",
        boxShadow: isScrolled ? "0 2px 10px rgba(0, 0, 0, 0.1)" : "none",
      }}
    >
      <nav className={`navbar navbar-expand-lg navbar-light fixed-top ${isScrolled ? styles['navbar-scrolled'] : ''}`}>
        {/* Logo con NavLink per andare alla home */}
        <NavLink to="/" className={`navbar-brand d-block d-lg-none ${styles['navbar-brand']}`} style={{ cursor: "pointer" }}>
          <img src="#" className="img-fluid" alt="Logo" />
        </NavLink>
        <button
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          className="navbar-toggler"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div id="navbarSupportedContent" className="collapse navbar-collapse">
          <div className="row mx-auto w-100 py-4 py-lg-0">
            <div className="col-lg-3">
              <NavLink to="/" className={`navbar-brand ${styles['navbar-brand']}`} style={{ cursor: "pointer" }}>
                <strong>BoolBooks</strong>
              </NavLink>
            </div>
            <div className="col-lg-6 d-flex align-items-center justify-content-lg-center">
              <ul className="nav navbar-nav">
                <li className="nav-item">
                  <NavLink to="/about" className={`nav-link text-uppercase font-weight-bold ${styles['nav-link']}`}>
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/contact" className={`nav-link text-uppercase font-weight-bold ${styles['nav-link']}`}>
                    Contact us
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 mt-4 mt-lg-0 d-flex align-items-center justify-content-lg-end">
              <ul className="navbar-nav d-flex align-items-start align-items-md-center">
                <li className="nav-item mx-md-2 mb-2 mb-lg-0">
                  <NavLink
                    to="/login"
                    className={`btn btn-block ${styles['btnLogin']}`}
                    style={{
                      backgroundColor: "white",
                      color: "#aba9ee",
                      border: "2px solid #aba9ee",
                      borderRadius: "20px",
                      padding: "5px 15px",
                      fontWeight: "bold",
                    }}
                  >
                    LOG IN
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/register"
                    className={`btn btn-block text-white ${styles['btnRegister']}`}
                    style={{
                      backgroundColor: "#aba9ee",
                      borderRadius: "20px",
                      padding: "5px 15px",
                      fontWeight: "bold",
                    }}
                  >
                    REGISTER
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
