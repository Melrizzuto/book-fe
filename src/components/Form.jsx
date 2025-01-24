import { useState } from "react";
import axios from "axios";

const newReview = {

};

const apiUrl = import.meta.env.VITE_APIURL;

function AddReviews() {
    const [formData, setFormData] = useState(newReview);

    function handleInput(e) {
        const value =
            e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setFormData({ ...formData, [e.target.name]: value });
    }

    function AddReview(e) {
        e.preventDefault();
        setFormData(newReview);
    }
}

export default AddReviews;

