import { Link } from "react-router-dom";
import styles from './Card.module.css';  // Importo il modulo CSS per la personalizzazione della card

function Card({ book }) {
    // creo l'url per l'immagine del libro
    const imgUrl = "http://localhost:3000/images/" + book.image;

    return (
        <div className="col-md-6 mb-4">
            {/* creo la card con una classe personalizzata tramite il modulo CSS */}
            <div className={`card h-100 ${styles.card}`}>
                <div className={styles.cardImageWrapper}>
                    {/* inserisco l'immagine del libro con la classe personalizzata per la card */}
                    <img
                        src={`${imgUrl}`}
                        className={`${styles.cardImgTop}`}
                        alt={book.title}  // uso il titolo del libro come alt per l'immagine
                    />
                    {/* creo l'overlay che appare sopra l'immagine */}
                    <div className={styles.cardOverlay}>
                        <div className={styles.cardBody}>
                            {/* titolo del libro */}
                            <h5 className={styles.cardTitle}>{book.title}</h5>
                            {/* nome dell'autore */}
                            <p className={styles.cardText}><strong>By {book.author}</strong></p>
                            {/* abstract del libro */}
                            <p className={styles.cardText}>{book.abstract}</p>
                            {/* link che porta alla pagina del libro, con una classe per personalizzare il pulsante */}
                            <Link to={`/books/${book.id}`} className="Btn myBtn">
                                See more
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;

