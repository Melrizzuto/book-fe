//  Importo gli hook useEffect, useState da React per la gestione degli effetti collaterali e dello stato.
import { useEffect, useState } from "react";
// Importo i metodi useParams per ottenere i parametri dell'URL
import { useParams, useNavigate } from "react-router-dom";
// Importo la libreria axios per effettuare richieste HTTP
import axios from "axios";
import ReviewList from "../components/ReviewList";
import ReviewCard from "../components/ReviewCard";
export default function bookDetails() {
  // Dichiaro il mio URL

  const url = import.meta.env.VITE_API_URL;
  const endPoint = "books";
  const imgUrl = "http://localhost:3000/images/";
  // useParams per ottenere l'ID del book dalla URL
  const { id } = useParams();

  // useState per dichiarare una variabile di stato che conterrà il book richiesto con il suo ID
  const [bookDetails, setBookDetails] = useState(null);
  const navigate = useNavigate();
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
          navigate("/NotFound");
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
          </div>
        </div>
      )}
      {/* <div className="card-text">
        <ReviewCard />
        <ReviewList />
      </div> */}
    </section>
  );
}
