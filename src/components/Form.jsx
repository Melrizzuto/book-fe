import { useState } from "react";
import axios from "axios";

// definisco un oggetto con i valori iniziali per la review
const newReview = {
    name: "",
    text: "",
    vote: "",
};

function AddReviews({ book_id, reloadReviews }) {
    // uso useState per gestire i dati del form e se il form è valido o meno
    const [formData, setFormData] = useState(newReview);
    const [isFormValid, setIsFormValid] = useState(true);

    // prendo l'API URL dalle variabili di ambiente
    const apiUrl = import.meta.env.VITE_API_URL;

    // funzione per validare i dati del form
    function validateForm() {
        // se manca il nome o il testo della review, ritorno falso
        if (!formData.text || !formData.name) return false;
        // se il voto non è un numero valido tra 1 e 10, ritorno falso
        if (isNaN(formData.vote) || formData.vote < 1 || formData.vote > 10)
            return false;
        return true; // se tutto è valido, ritorno vero
    }

    // funzione per gestire l'invio del form
    function handleSubmit(e) {
        e.preventDefault(); // prevengo il comportamento di default del form

        // controllo che i dati siano validi
        if (!validateForm()) {
            setIsFormValid(false); // se non sono validi, cambio lo stato del form
            return;
        }

        // se il form è valido, invio i dati all'API
        axios.post(`${apiUrl}/books/${book_id}/reviews`, formData).then((res) => {
            console.log("Review creata:", res.data); // stampo la risposta della creazione
            setIsFormValid(true); // resettare lo stato di validità del form
            setFormData(newReview); // resetto i dati del form
            reloadReviews(); // ricarico le recensioni
        }).catch((err) => {
            console.log("errore", err); // stampo eventuali errori
        })
            .finally(() => {
                console.log("Finito"); // log per indicare che il processo è finito
            })
    }

    // funzione per gestire l'input degli utenti
    function handleInput(e) {
        const value =
            e.target.type === "checkbox" ? e.target.checked : e.target.value; // se è un checkbox, prendo il valore booleano
        // aggiorno lo stato del form con i nuovi dati
        setFormData({ ...formData, [e.target.name]: value });
    }

    return (
        <section className="my-4 container">
            <h2>Add a New Review</h2>
            {/* se il form non è valido, mostro un messaggio di errore */}
            {!isFormValid && (
                <div className="alert alert-danger mb-3">
                    The data in the form is not valid
                </div>
            )}
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                        Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleInput} // aggiorno il valore quando cambia l'input
                        name="name"
                    />
                    <div className="valid-feedback">Looks good!</div>
                    <div className="invalid-feedback">Please choose a username.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="text" className="form-label">
                        Review Text
                    </label>
                    <textarea
                        className="form-control"
                        id="text"
                        placeholder="Write your review here"
                        value={formData.text}
                        onChange={handleInput}
                        name="text"
                    ></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="vote" className="form-label">
                        Vote
                    </label>
                    <input
                        type="number"
                        className="form-control"
                        id="vote"
                        min="0"
                        max="5"
                        placeholder="Rate the book (0-5)"
                        value={formData.vote}
                        onChange={handleInput}
                        name="vote"
                    />
                </div>
                <button type="submit" className="btn myBtn">
                    Submit
                </button>
            </form>
        </section>
    );
}

export default AddReviews;
