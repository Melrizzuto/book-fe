import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import ReviewList from "../components/ReviewList"; // Importo ReviewList

export default function BookDetails() {
  const url = import.meta.env.VITE_API_URL;
  const endPoint = "books";
  const imgUrl = "http://localhost:3000/images/";
  const { id } = useParams(); // Ottieni l'ID del libro dalla URL

  const [bookDetails, setBookDetails] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getDataDetails = () => {
      axios
        .get(`${url}/${endPoint}/${id}`)
        .then((res) => {
          setBookDetails(res.data.item); // Imposto i dettagli del libro
        })
        .catch((err) => {
          console.log("Book details not found", err);
          navigate("/NotFound"); // Se non trovo il libro, vado alla pagina "NotFound"
        });
    };
    getDataDetails(); // Chiamo la funzione per ottenere i dettagli del libro
  }, [id]);

  return (
    <section className="d-flex g-5 wrapper">
      {bookDetails && (
        <div className="card CardDetails">
          <img
            src={`${imgUrl}${bookDetails.image}`}
            className="card-img-top imgDetails"
            alt={bookDetails.title}
          />
          <div className="card-body">
            <h5 className="card-title">{bookDetails.title}</h5>
            <p className="card-text">{bookDetails.abstract}</p>
          </div>
        </div>
      )}
      {bookDetails && <ReviewList bookId={id} />}
    </section>
  );
}
