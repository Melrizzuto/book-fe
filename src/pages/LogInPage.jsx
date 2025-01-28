import { Link } from "react-router-dom"

export default function LogInPage() {
    return (<>
        <h1>Log In</h1>
        <p>Accedi per vedere tutti i tuoi libri.....</p>
        <p>Non hai un account?
            <Link to={`/register`} className="btn btn-primary">
                Registrati qui!
            </Link>
        </p>
    </>
    )
}