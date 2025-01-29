import { Link } from "react-router-dom";
import styles from './Card.module.css';  // Importa il modulo CSS

function Card({ book }) {
    const imgUrl = "http://localhost:3000/images/" + book.image;

    return (
        <div className="col-md-6 mb-4">
            <div className={`card h-100 ${styles.card}`}>
                <div className={styles.cardImageWrapper}>
                    <img
                        src={`${imgUrl}`}
                        className={`${styles.cardImgTop}`}
                        alt={book.title}
                    />
                    <div className={styles.cardOverlay}>
                        <div className={styles.cardBody}>
                            <h5 className={styles.cardTitle}>{book.title}</h5>
                            <p className={styles.cardText}><strong>By {book.author}</strong></p>
                            <p className={styles.cardText}>{book.abstract}</p>
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

