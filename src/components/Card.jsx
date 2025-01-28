import { Link } from "react-router-dom";

function Card({ book }) {
    // url completo dell'immagine
    const imgUrl = "http://localhost:3000/images/" + book.image;

    return (
        <div className="col-md-4 mb-4">
            <div className="card h-100">
                <img
                    src={`${imgUrl}`}
                    className="card-img-top"
                    alt={book.title} // Aggiungo il titolo come alt per l'immagine per l'accessibilità.
                />
                <div className="card-body">
                    <h5 className="card-title">{book.title}</h5>
                    <p className="card-text">
                        <strong>By {book.author}</strong>
                    </p>
                    <p className="card-text">
                        {book.abstract}
                    </p>
                    {/* Usa un Link per navigare alla pagina dei dettagli del libro */}
                    <Link to={`/books/${book.id}`} className="myBtn">
                        See more
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Card;
