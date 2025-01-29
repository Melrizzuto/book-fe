import styles from './Jumbotron.module.css';

export default function Jumbotron({ onDiscoverMore }) {
    return (
        <div className={styles.hero}>
            <div className={`${styles.heroContainer} container`}>
                <div className="col-lg-5 offset-xxl-1 col-xxl-6 mb-4 mb-lg-0">
                    <div className={styles.heroText}>
                        <p className={`${styles.heroTitle} font-weight-normal mb-0`}>
                            The nerdiest
                            <br />
                            italian <i>book community</i>.
                        </p>
                        <br />
                        <p className={`${styles.heroSubtitle} mb-4`}>
                            We help you read reviews of
                            <br />
                            your favorite books.
                        </p>
                        {/* Pulsante "Scopri di più" */}
                        <button
                            onClick={onDiscoverMore}
                            className={`${styles.heroButton} btn text-white`}
                        >
                            Discover more
                        </button>
                    </div>
                </div>
                <div className={`${styles.heroImageWrapper} col-lg-7 col-xxl-5`}>
                    <img
                        src="https://assets.acciobooks.com/images/home-hero-illustration.svg"
                        className={`${styles.heroImage} img-fluid`}
                        alt="Hero Illustration"
                    />
                </div>
            </div>
        </div>
    );
}
