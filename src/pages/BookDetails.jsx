// IMPORTO GLI HOOK USE EFFECT / USE STATE
import { useEffect, useState } from "react";
// importo il metodo useParams
import { useParams } from "react-router-dom";
// importo axios
import axios from "axios";
export default function BookDetails() {
  const url = import.meta.env.VITE_API_URL;
  const endPoint = "books";
  const imgUrl = "http://localhost:3000/images/";
  // useParams per ottenere l'ID del Book dalla URL
  const { id } = useParams();
  // useState per dichiarare una variabile di stato che conterrà il Book richiesto con il suo ID
  const [bookDetails, setBookDetails] = useState(null);

  useEffect(() => {
    const getDataDetails = () => {
      // Eseguo una richiesta GET all'API con l'ID del book.
      axios
        .get(`${url}/${endPoint}/${id}`)
        .then((res) => {
          console.log(res.data);
          setBookDetails(res.data);
        })
        .catch((err) => {
          console.log("Book details not found", err);
        });
    };
    // Chiamo la funzione per recuperare i dettagli
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
                    <strong className="DetailsBadge">Comment :</strong>
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
