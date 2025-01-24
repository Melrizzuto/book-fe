import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";

function BooksList() {
    //  stato per i libri e per il caricamento
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);

    // fn per recuperare i dati dal server
    function fetchBooks() {
        // effettuo una richiesta GET per ottenere i dati dal server
        axios.get("http://localhost:3000/books")
            .then((response) => {
                // quando ottengo i dati, aggiorno lo stato dei libri
                setBooks(response.data.results);
                setLoading(false);
            })
            .catch((error) => {
                // se c è un errore, lo stampo sulla console
                console.error("Errore nel caricamento dei dati:", error);
            });
    };

    // lo uso per chiamare l'API al caricamento della pagina
    useEffect(() => {
        fetchBooks();
    }, []);

    return (
        <div className="container mt-4">
            <h1 className="text-primary">Bool Books</h1>
            <h3 className="text-secondary">The nerdiest book community</h3>

            {loading ? (
                <p>Loading books...</p>
            ) : (
                <div className="row">
                    {books.map((book) => (
                        <Card key={book.id} book={book} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default BooksList;
