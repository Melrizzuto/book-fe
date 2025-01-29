import styles from './Jumbotron.module.css';

export default function Jumbotron({ onDiscoverMore }) {
    return (
        <div className={styles.hero}>
            {/* Container principale per il jumbotron */}
            <div className={`${styles.heroContainer} container`}>
                {/* Colonna di testo */}
                <div className="col-lg-5 offset-xxl-1 col-xxl-6 mb-4 mb-lg-0">
                    <div className={styles.heroText}>
                        {/* Titolo del jumbotron */}
                        <p className={`${styles.heroTitle} font-weight-normal mb-0`}>
                            The nerdiest
                            <br />
                            italian <i>book community</i>.
                        </p>
                        <br />
                        {/* Sottotitolo del jumbotron */}
                        <p className={`${styles.heroSubtitle} mb-4`}>
                            We help you read reviews of
                            <br />
                            your favorite books.
                        </p>
                        {/* Pulsante "Scopri di più" che attiva la funzione onDiscoverMore */}
                        <button
                            onClick={onDiscoverMore}  // Gestore dell'evento quando viene cliccato
                            className={`${styles.heroButton} btn text-white`}  // Stili per il pulsante
                        >
                            Discover more
                        </button>
                    </div>
                </div>
                {/* Colonna dell'immagine */}
                <div className={`${styles.heroImageWrapper} col-lg-7 col-xxl-5`}>
                    {/* Immagine principale del jumbotron */}
                    <img
                        src="https://assets.acciobooks.com/images/home-hero-illustration.svg"  // URL dell'immagine
                        className={`${styles.heroImage} img-fluid`}  // Classe per rendere l'immagine fluida e responsiva
                        alt="Hero Illustration"  // Descrizione dell'immagine
                    />
                </div>
            </div>
        </div>
    );
}
