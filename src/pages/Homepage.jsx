import BookList from "../pages/BookList";
import Jumbotron from "../components/Jumbotron";

function HomePage() {
    return (
        <div>
            <Jumbotron />
            <BookList /> {/*qui mostriamo la lista dei libri */}
        </div>
    );
};

export default HomePage;