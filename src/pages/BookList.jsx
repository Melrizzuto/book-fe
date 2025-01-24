import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";

const BooksList = () => {
    //  stato per i libri e per il caricamento


    return (
        <div className="container mt-4">
            <h1 className="text-primary">Bool Books</h1>
            <h3 className="text-secondary">The nerdiest book community</h3>

            {loading ? (
                <p>Loading books...</p>
            ) : (
                <div className="row">
                    {books.map((book) => (
                        <Card key={book.id} book={book} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default BooksList;