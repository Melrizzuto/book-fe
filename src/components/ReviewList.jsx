import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { FaStar, FaRegStar } from "react-icons/fa";

// import Form from "./Form"
import ReviewCard from './ReviewCard';

export default function ReviewList() {
    const { id } = useParams(); //si usa per recuperare l'id 
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);  // Stato per il caricamento


    useEffect(() => {
        setLoading(true); // Inizia il caricamento
        axios.get(`http://localhost:3000/books/${id}`)
            .then(response => {
                setReviews(response.data.item.reviews || []);  // Fallback se non ci sono recensioni
                setLoading(false);
            })
            .catch(error => {
                console.error('Errore nel recuperare i dettagli della recensione:', error);
                setLoading(false);  // In ogni caso, termina il caricamento
            });
    }, [id]);

    const drawStars = (vote) => {
        let stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                i <= vote ? <FaStar key={i} /> : <FaRegStar key={i} />
            );
        }
        return stars;
    };


    // Render della pagina
    if (loading) {
        return <div className="container"><p>Caricamento...</p></div>;
    }

    return (
        <div>
            {loading ? (
                <p>Loading Reviews...</p>
            ) : (
                <div className="row">
                    {reviews.length === 0 ? (
                        <p>No reviews available.</p> // messaggio se non ci sono libri disponibili
                    ) : (
                        reviews.map((review) => (
                            <ReviewCard key={review.id} review={review} stars={drawStars(review.vote)} />
                        )) // Mappa i libri e li passa al componente Card
                    )}
                </div>
            )
            }
        </div>
    );
}


