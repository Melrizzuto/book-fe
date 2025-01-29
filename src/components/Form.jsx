import { useState } from "react";
import axios from "axios";

const newReview = {
    name: "",
    text: "",
    vote: "",
};

function AddReviews({ book_id, reloadReviews }) {
    const [formData, setFormData] = useState(newReview);

    const apiUrl = import.meta.env.VITE_API_URL;

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

    return (
        <section className="my-4 container">
            <h2>Add a New Review</h2>
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
                        onChange={handleInput}
                        name="name"
                        required
                    />
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
                        required
                    />
                </div>
                <button type="submit" className="btn myBtn">
                    Submit
                </button>
            </form>
        </section>
    )
}

export default AddReviews;
