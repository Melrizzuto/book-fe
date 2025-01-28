import { useRef } from "react";

import BookList from "../pages/BookList";
import Jumbotron from "../components/Jumbotron";

function HomePage() {
    const bookListRef = useRef(null);

    const scrollToBookList = () => {
        bookListRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div>
            <Jumbotron onDiscoverMore={scrollToBookList} />
            <div ref={bookListRef}>
                <BookList />
            </div>
        </div>
    );
}

export default HomePage;
