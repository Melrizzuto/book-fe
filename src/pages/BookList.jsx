import { useEffect, useState } from "react";
import axios from "axios";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "../components/Card";
import styles from './BookList.module.css';

const url = import.meta.env.VITE_API_URL;

function BooksList() {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);  // nuovo stato per gestire gli errori

    // Funzione asincrona per recuperare i libri
    const fetchBooks = async () => {
        try {
            const response = await axios.get(url);
            console.log("Risposta API:", response.results);

            // Controllo sicurezza: assicuro che sia un array
            const booksData = response.data || response.data || [];
            setBooks(Array.isArray(booksData) ? booksData : []);
        } catch (err) {
            console.error("Errore nel caricamento dei dati:", err);
            setError("Errore nel caricamento dei libri.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchBooks();
    }, []);

    const CustomPrevArrow = (props) => (
        <button {...props} className="slick-prev">
            <FaChevronLeft size={35} color="#B5C6AC" />
        </button>
    );

    const CustomNextArrow = (props) => (
        <button {...props} className="slick-next">
            <FaChevronRight size={35} color="#B5C6AC" />
        </button>
    );

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 800,
        cssEase: "ease-in-out",
        pauseOnHover: true,
        pauseOnFocus: true,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        responsive: [
            {
                breakpoint: 992,
                settings: { slidesToShow: 3, slidesToScroll: 1 },
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 2, slidesToScroll: 1 },
            },
            {
                breakpoint: 576,
                settings: { slidesToShow: 1, slidesToScroll: 1 },
            },
        ],
    };

    return (
        <div className={styles.container}>
            <div className="font-bold px-5">
                <strong>Our Library</strong>
            </div>

            {loading && <p>Loading books...</p>}

            {error && <p>{error}</p>}

            {!loading && !error && Array.isArray(books) && books.length > 0 ? (
                <div className={`${styles.row} p-5`}>
                    <Slider {...settings}>
                        {books.map((book) => (
                            <Card key={book.id} book={book} />
                        ))}
                    </Slider>
                </div>
            ) : (!loading && !error && (
                <p>No books found.</p>
            ))}
        </div>
    );
}

export default BooksList;
