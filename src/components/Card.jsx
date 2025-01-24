function Card({ book }) {
    return (
        // La card è strutturata in una colonna di Bootstrap con un margine inferiore.
        <div className="col-md-4 mb-4">
            <div className="card h-100">
                {/* Inserisco un'immagine del libro, usando l'URL passato dalla prop 'book'. */}
                <img
                    src={book.image_url}
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
                        {book.description}
                    </p>
                    {/* Creo un link per vedere più dettagli del libro, anche se al momento non ha una destinazione. */}
                    <a href="#" className="btn btn-primary">
                        See more
                    </a>
                </div>
            </div>
        </div>
    );
};

// Esporto il componente Card per poterlo riutilizzare in altre parti del progetto.
export default Card;