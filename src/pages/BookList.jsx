import { useEffect, useState } from "react";
import axios from "axios";

import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
        autoplay: true, // Attiva lo scorrimento automatico
        autoplaySpeed: 800, // Tempo tra una slide e l'altra (in ms)
        cssEase: "ease-in-out", // Transizione più fluida
        pauseOnHover: true,
        pauseOnFocus: true,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="container mt-4">

            {loading ? (
                <p>Loading books...</p>
            ) : (
                <div className="row">
                    <Slider {...settings}>
                        {books.map((book) => (
                            <Card key={book.id} book={book} />
                        ))}
                    </Slider>
                </div>
            )}
        </div>
    );
};

export default BooksList;
