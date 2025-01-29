import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styles from './Header.module.css'; // Importa il CSS Module

export default function Header() {
  // Stato che gestisce se l'utente ha fatto scroll o no
  const [isScrolled, setIsScrolled] = useState(false);

  // Uso useEffect per aggiungere l'event listener quando il componente viene montato
  useEffect(() => {
    // Funzione per controllare lo scroll
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true); // Se lo scroll è maggiore di 100px, cambio lo stato
      } else {
        setIsScrolled(false); // Se lo scroll è minore di 100px, resetto lo stato
      }
    };

    window.addEventListener("scroll", handleScroll); // Aggiungo l'event listener per lo scroll

    // Rimuovo l'event listener quando il componente viene smontato
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={styles.header}
      style={{
        transition: "background-color 0.3s, box-shadow 0.3s", // Transizioni per l'animazione del background e della box-shadow
        position: "fixed", // Posiziono l'header in alto alla pagina
        top: "0",
        left: "0",
        right: "0",
        zIndex: 1000, // Aumento lo z-index per far sì che l'header sia sopra gli altri elementi
        width: "100%",
        backgroundColor: isScrolled ? "white" : "transparent", // Cambia il colore di sfondo quando scorro
        boxShadow: isScrolled ? "0 2px 10px rgba(0, 0, 0, 0.1)" : "none", // Aggiungo una shadow quando scorro
      }}
    >
      <nav className={`navbar navbar-expand-lg navbar-light fixed-top ${isScrolled ? styles['navbar-scrolled'] : ''}`}>
        {/* Logo con NavLink per andare alla home */}
        <NavLink to="/" className={`navbar-brand d-block d-lg-none px-2 ${styles['navbar-brand']}`}>
          <strong>BoolBooks</strong>
        </NavLink>
        {/* Bottone per la navigazione su dispositivi mobile */}
        <button
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          className="navbar-toggler"
        >
          <span className="navbar-toggler-icon"></span> {/* Icona del menù hamburger */}
        </button>

        {/* Menu della navbar */}
        <div id="navbarSupportedContent" className="collapse navbar-collapse">
          <div className="row mx-auto w-100 py-4 py-lg-0">
            <div className="col-lg-3">
              {/* Logo visibile su schermi grandi */}
              <NavLink to="/" className={`navbar-brand ${styles['navbar-brand']}`}>
                <strong>BoolBooks</strong>
              </NavLink>
            </div>

            {/* Sezione centrale per i link di navigazione */}
            <div className="col-lg-6 d-flex align-items-center justify-content-lg-center">
              <ul className="nav navbar-nav">
                {/* Link alla pagina About */}
                <li className="nav-item">
                  <NavLink to="/about" className={`nav-link text-uppercase font-weight-bold ${styles['nav-link']}`}>
                    About
                  </NavLink>
                </li>
                {/* Link alla pagina Contact */}
                <li className="nav-item">
                  <NavLink to="/contact" className={`nav-link text-uppercase font-weight-bold ${styles['nav-link']}`}>
                    Contact us
                  </NavLink>
                </li>
              </ul>
            </div>

            {/* Sezione per i pulsanti di login e registrazione */}
            <div className="col-lg-3 mt-4 mt-lg-0 d-flex align-items-center justify-content-lg-end">
              <ul className="navbar-nav d-flex align-items-start align-items-md-center">
                {/* Pulsante di login */}
                <li className="nav-item mx-md-2 mb-2 mb-lg-0">
                  <NavLink
                    to="/login"
                    className={`btn btn-block ${styles['btnLogin']}`}
                  >
                    LOG IN
                  </NavLink>
                </li>
                {/* Pulsante di registrazione */}
                <li className="nav-item">
                  <NavLink
                    to="/register"
                    className={`btn btn-block text-white ${styles['btnRegister']}`}
                    style={{
                      backgroundColor: "#aba9ee", // Colore di sfondo del bottone
                      borderRadius: "20px", // Arrotondo gli angoli del bottone
                      padding: "5px 15px", // Aggiungo un po' di padding
                      fontWeight: "bold", // Imposto il testo in grassetto
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
