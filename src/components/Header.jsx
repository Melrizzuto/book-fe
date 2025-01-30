import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css"; // Importa il CSS Module

export default function Header() {
  // Stato che gestisce se l'utente ha fatto scroll o no
  const [isScrolled, setIsScrolled] = useState(false);
  // Stato che gestisce se il menu è aperto o no
  const [isOpen, setIsOpen] = useState(false);

  // Uso useEffect per aggiungere l'event listener quando il componente viene montato
  useEffect(() => {
    const handleScroll = () => {
      // Funzione per controllare lo scroll
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // Aggiungo l'event listener per lo scroll

  // Funzione per chiudere il menu dopo un click su un link
  const handleNavLinkClick = () => {
    setIsOpen(false);
  };

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
      <nav className={`navbar navbar-expand-lg navbar-light fixed-top ${isScrolled ? styles["navbar-scrolled"] : ""}`}>
        <NavLink to="/" className={`navbar-brand d-block d-lg-none px-2 ${styles["navbar-brand"]}`}>
          <strong>BoolBooks</strong>
        </NavLink>

        {/* Bottone per il toggle manuale */}
        <button
          type="button"
          className="navbar-toggler"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu con classe dinamica */}
        <div id="navbarSupportedContent" className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
          <div className="row mx-auto w-100 py-4 py-lg-0">
            {/* Menu navigazione (spostato a destra) */}
            <div className="col-lg-9 d-flex align-items-center justify-content-lg-start">
              <ul className="nav navbar-nav">
                <li className="nav-item">
                  <NavLink
                    to="/about"
                    className={`nav-link text-uppercase font-weight-bold ${styles["nav-link"]}`}
                    onClick={handleNavLinkClick}
                  >
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/contact"
                    className={`nav-link text-uppercase font-weight-bold ${styles["nav-link"]}`}
                    onClick={handleNavLinkClick}
                  >
                    Contact us
                  </NavLink>
                </li>
              </ul>
            </div>

            {/* Pulsanti Login/Register sempre all'estrema destra */}
            <div className="col-lg-3 mt-4 mt-lg-0 d-flex align-items-center justify-content-lg-end">
              <ul className="navbar-nav d-flex align-items-start align-items-md-center">
                <li className="nav-item mx-md-2 mb-2 mb-lg-0">
                  <NavLink
                    to="/login"
                    className={`btn btn-block ${styles["btnLogin"]}`}
                    onClick={handleNavLinkClick}
                  >
                    LOG IN
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/register"
                    className={`btn btn-block text-white ${styles["btnRegister"]}`}
                    style={{
                      backgroundColor: "#aba9ee",
                      borderRadius: "20px",
                      padding: "5px 15px",
                      fontWeight: "bold",
                    }}
                    onClick={handleNavLinkClick}
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
