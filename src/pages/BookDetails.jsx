//  Importo gli hook useEffect, useState da React per la gestione degli effetti collaterali e dello stato.
import { useEffect, useState } from "react";
// Importo i metodi useParams per ottenere i parametri dell'URL
import { useParams } from "react-router-dom";
// Importo la libreria axios per effettuare richieste HTTP
import axios from "axios";

export default function bookDetails() {
  // Dichiaro il mio URL

  const url = import.meta.env.VITE_API_URL;
  const endPoint = "books";
  const imgUrl = "http://localhost:3000/images/";
  // useParams per ottenere l'ID del book dalla URL
  const { id } = useParams();
  // useState per dichiarare una variabile di stato che conterrà il book richiesto con il suo ID
  const [bookDetails, setBookDetails] = useState(null);
  useEffect(() => {
    const getDataDetails = () => {
      // Eseguo una richiesta GET all'API con l'ID del book.
      axios
        .get(`${url}/${endPoint}/${id}`)
        .then((res) => {
          console.log(res.data.item);
          setBookDetails(res.data.item);
        })
        .catch((err) => {
          console.log("book details not found", err);
        });
    };
    // Chiamo la funzione per recuperare i dettagli del book
    getDataDetails();
  }, [id]);

  return (
    <section className="d-flex g-5 wrapper">
      {bookDetails && (
        <div className=" card CardDetails">
          <img
            src={`${imgUrl}${bookDetails.image}`}
            className="card-img-top imgDetails"
            alt={bookDetails.title}
          />
          <div className="card-body">
            <h5 className="card-title">{bookDetails.title}</h5>
            <p className="card-text">{bookDetails.abstract}</p>
            <div className="card-text">
              {bookDetails.reviews.map((review) => (
                <div key={review.id}>
                  <p
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <strong className="DetailsBadge">User :</strong>
                    {review.name}
                  </p>
                  <p
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <strong className="DetailsBadge">Comment : </strong>
                    {review.text}
                  </p>
                  <p
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <strong className="DetailsBadge">Vote :</strong>
                    {review.vote}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
