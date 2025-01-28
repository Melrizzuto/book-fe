import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import ReviewCard from "../components/ReviewCard"; // Importa ReviewCard
import { FaStar, FaRegStar } from "react-icons/fa";
// Form
import Form from "../components/Form";

export default function BookDetails() {
  const url = import.meta.env.VITE_API_URL;
  const endPoint = "books";
  const imgUrl = "http://localhost:3000/images/";
  const { id } = useParams(); // Otteniamo l'ID del libro dalla URL

  const [bookDetails, setBookDetails] = useState(null);
  const [reviews, setReviews] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getDataDetails = () => {
      axios
        .get(`${url}/${endPoint}/${id}`)
        .then((res) => {
          setBookDetails(res.data.item); // Impostiamo i dettagli del libro
          setReviews(res.data.item.reviews || []); // Impostiamo le recensioni del libro
        })
        .catch((err) => {
          console.log("Book details not found", err);
          navigate("/NotFound"); // Se non trovo il libro, vado alla pagina "NotFound"
        });
    };
    getDataDetails(); // Chiamo la funzione per ottenere i dettagli del libro
  }, [id]);

  // Funzione per disegnare le stelle
  const drawStars = (vote) => {
    let stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        i <= Math.ceil(vote / 2) ? <FaStar key={i} /> : <FaRegStar key={i} />
      );
    }
    return stars;
  };

  return (
    <section className="d-flex g-5 wrapper">
      {/* Card principale del libro */}
      {bookDetails && (
        <div className="card CardDetails mb-4">
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

      {/* Card per le recensioni, sotto la card principale */}
      {bookDetails && (
        <div className="card CardReviews">
          <div className="card-body">
            <h5 className="card-title">Recensioni</h5>
            {/* Rendering delle recensioni usando ReviewCard */}
            {reviews.length === 0 ? (
              <p>No reviews available.</p>
            ) : (
              reviews.map((review) => (
                <ReviewCard
                  key={review.id}
                  review={review}
                  stars={drawStars(review.vote)}
                />
              ))
            )}
          </div>
        </div>
      )}
      <Form />
    </section>
  );
}
