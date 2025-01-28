export default function RegisterPage() {
    return (
        <section className="position-relative py-5 bg-light">
            <div className="container text-center">
                <h2 className="mb-4">Registrati qui:</h2>

                <form>
                    <div className="mb-3">
                        <label for="name" className="form-label">Nome</label>
                        <input type="text" className="form-control w-75 mx-auto" id="name" placeholder="Inserisci il tuo nome" required />
                    </div>
                    <div className="mb-3">
                        <label for="email" className="form-label">Email</label>
                        <input type="email" className="form-control w-75 mx-auto" id="email" placeholder="Inserisci la tua email" required />
                    </div>
                    <div class="mb-3">
                        <label for="password" className="form-label">Password</label>
                        <input type="password" className="form-control w-75 mx-auto" id="password" placeholder="Inserisci la tua password" required />
                    </div>
                    <div class="mb-3">
                        <label for="confirmPassword" className="form-label">Conferma Password</label>
                        <input type="password" className="form-control w-75 mx-auto" id="confirmPassword" placeholder="Conferma la tua password" required />
                    </div>
                    <button type="submit" className="btn btn-primary w-30">Crea account</button>
                </form>

                <div class="text-center mt-3">
                    <a href="/login">Hai già un account? Accedi</a>
                </div>

            </div>
        </section>
    )
}