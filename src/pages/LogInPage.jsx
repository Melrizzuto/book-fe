export default function LogInPage() {
    return (<>
        <section className="position-relative py-5 bg-light">
            <div className="container text-center">
                <h2 className="mb-4">Log In Page</h2>
                <p>Accedi per vedere tutti i tuoi libri:</p>

                <form>
                    <div className="mb-3">
                        <label for="email" className="form-label">Email</label>
                        <input type="email" className="form-control w-75 mx-auto" id="email" placeholder="Inserisci la tua email" required />
                    </div>
                    <div className="mb-3">
                        <label for="password" className="form-label ">Password</label>
                        <input type="password" className="form-control w-75 mx-auto" id="password" placeholder="Inserisci la tua password" required />
                    </div>
                    <button type="submit" className="btn btn-primary w-30">Accedi</button>
                </form>

                <div class="text-center mt-3">
                    <p>Non hai un account? <a href="/register">Registrati qui</a></p>
                </div>

            </div>
        </section>
    </>
    )
}