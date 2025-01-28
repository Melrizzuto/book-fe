import { useState } from "react";
import axios from "axios";

const newReview = {
    name: "",
    vote: "",
    text: "",
};

const apiUrl = import.meta.env.VITE_APIURL;

function AddReviews({ book_id, reloadReviews }) {
    const [formData, setFormData] = useState(newReview);

    function handleSubmit(e) {
        e.preventDefault();
        axios.post(`${apiUrl}/books/${book_id}/reviews`, formData).then((res) => {
            console.log("Review creata:", res.data);
            setFormData(newReview);
            reloadReviews();
        }).catch((err) => {
            console.log("errore", err);
        })
            .finally(() => {
                console.log("Finito");
            })
    }

    function handleInput(e) {
        const value =
            e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setFormData({ ...formData, [e.target.name]: value });
    }

    // function AddReview(e) {
    //     e.preventDefault();
    //     handleSubmit({ ...formData });
    //     setFormData(newReview);
    // }

    return (
        <section className="my-4 container">
            <h2>Aggiungi nuova recensione</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                        Nome:
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        aria-describedby="namelHelp"
                        value={formData.name}
                        onChange={handleInput}
                        name="name"
                        required
                    />
                    <div id="namelHelp" className="form-text">
                        Scrivi il tuo nome
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="text" className="form-label">
                        Testo recensione:
                    </label>
                    <textarea
                        className="form-control"
                        id="text"
                        value={formData.text}
                        onChange={handleInput}
                        name="text"
                    ></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="vote" className="form-label">
                        Valutazione:
                    </label>
                    <input
                        type="number"
                        className="form-control"
                        id="vote"
                        min="0"
                        max="10"
                        value={formData.vote}
                        onChange={handleInput}
                        name="vote"
                        required
                    />
                    <div id="namelHelp" className="form-text">
                        Inserisci un voto da 1 a 10
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>

        </section>
    )
}

export default AddReviews;

