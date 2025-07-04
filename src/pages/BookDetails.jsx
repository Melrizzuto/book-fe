import { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import ReviewCard from "../components/ReviewCard"; // Importa ReviewCard
import { FaStar, FaRegStar } from "react-icons/fa";
// Form
import Form from "../components/Form";
import styles from "./BookDetails.module.css";

export default function BookDetails() {
  const url = import.meta.env.VITE_API_URL;
  const endPoint = "books";
  const imgUrl = `${url}/images/;`
  const { id } = useParams(); // Otteniamo l'ID del libro dalla URL

  const [bookDetails, setBookDetails] = useState(null);
  const [reviews, setReviews] = useState([]);
  const navigate = useNavigate();
  const reviewFormRef = useRef(null); // useRef per il form delle recensioni

  useEffect(() => {
    window.scrollTo(0, 0); // Forza lo scroll all'inizio della pagina
    getDataDetails(id); // Chiamo la funzione per ottenere i dettagli del libro
  }, [id]);

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

  // Funzione per disegnare le stelle
  const drawStars = (vote) => {
    let stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        getStar(vote, i)
      );
    }
    return stars;
  };
  // fn che ritorna l'icona della stella corretta con parametro voto e indice
  function getStar(vote, index) {
    let star = index <= Math.ceil(vote / 2) ? <FaStar key={index} /> : <FaRegStar key={index} />
    return star;
  }


  // Funzione per scrollare alla sezione del form
  const scrollToReviewForm = () => {
    if (reviewFormRef.current) {
      reviewFormRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className={`hero hero-wave ${styles['bg-verde']} book-hero py-2`}>
        <div className={`container ${styles.containerHero}`}>
          <div className="row">
            {/* Sezione copertina del libro */}
            <div className="col-12 col-md-4 text-center mb-4">
              {bookDetails && (
                <div className={`responsive-aspect-ratio square-aspect-ratio mb-3 ${styles['book-cover-container']}`}>
                  <img
                    src={`${imgUrl}${bookDetails.image}`}
                    className={`img-fluid ${styles['book-cover']}`}
                    alt={bookDetails.title}
                  />
                </div>
              )}
            </div>

            {/* Informazioni sul libro */}
            <div className="col-12 col-md-8 text-left">
              {bookDetails && (
                <>
                  <h1 className="h2">{bookDetails.title}</h1>
                  <h3 className="h5">
                    <a href="#" className="font-weight-normal">
                      {bookDetails.author}
                    </a>
                  </h3>
                  <div className="mb-3">
                    <span className="text-quinary">
                      {drawStars(bookDetails.vote_average)}
                    </span>
                  </div>
                  <p className="lead">{bookDetails.abstract}</p>
                  {/* Pulsante "Lascia una recensione" */}
                  <button className={`btn myBtn`} onClick={scrollToReviewForm}>
                    Add review
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Sezione delle recensioni */}
      <section className="book-negative-margin">
        <div className="container py-5 ">
          <div className="row">
            <div className="col-12">
              <div className={`card CardReviews shadow-sm rounded p-4`}>
                <div className="card-body">
                  <h5 className="card-title mb-5">Reviews</h5>
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
            </div>
          </div>

          {/* Sezione del form per lasciare una recensione */}
          <div className="container-sm my-5" ref={reviewFormRef}>
            <div className={`card shadow-sm rounded p-4`}>
              <Form book_id={id} reloadReviews={getDataDetails} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
