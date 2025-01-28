import { Link } from "react-router-dom";

function Card({ book }) {
    // url completo dell'immagine
    // const imageUrl = `http://localhost:3000/images/${book.image}`;
    const imgUrl = "http://localhost:3000/images/" + book.image;

    return (
        // La card è strutturata in una colonna di Bootstrap con un margine inferiore.
        <div className="col-md-4 mb-4">

            <div className="card h-100">
                {/* Inserisco un'immagine del libro, usando l'URL passato dalla prop 'book'. */}
                <img
                    src={`${imgUrl}`}
                    className="card-img-top"
                    alt={book.title} // Aggiungo il titolo come alt per l'immagine per l'accessibilità.
                />
                <div className="card-body">
                    {/* Mostro il titolo del libro nella card. */}
                    <h5 className="card-title">{book.title}</h5>
                    <p className="card-text">
                        {/* Mostro il nome dell'autore in modo che sia ben visibile. */}
                        <strong>By {book.author}</strong>
                    </p>
                    <p className="card-text">
                        {/* Aggiungo una breve descrizione del libro per fornire più informazioni. */}
                        {book.abstract}
                    </p>
                    {/* Usa un Link per navigare alla pagina dei dettagli del libro */}
                    <Link to={`/books/${book.id}`} className="btn btn-primary">
                        See more
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Card;
