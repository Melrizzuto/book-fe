import { useState } from 'react';
import './LogInPage.module.css'; // Aggiungi il file CSS per gli stili personalizzati

export default function LogInPage() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simula l'invio del form
        setIsSubmitted(true);

        // Resetta il form dopo 2 secondi (simulazione del reset dopo invio)
        setTimeout(() => {
            setFormData({
                email: '',
                password: ''
            });
            setIsSubmitted(false);
        }, 2000);
    };

    return (
        <section className="position-relative py-5 bg-light">
            <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
                <div className="form-container card shadow-sm p-5">
                    <h2 className="mb-4 text-center">Log In</h2>
                    <p className="text-center">Log in to see all your books:</p>

                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="Your email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                placeholder="Your password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button type="submit" className="myBtn w-100">Log In</button>
                    </form>

                    {/* Fictitious submission message */}
                    {isSubmitted && (
                        <div className="mt-3 text-success text-center">
                            <p>Logged in successfully! 🎉</p>
                        </div>
                    )}

                    <div className="text-center mt-3">
                        <p>Dont have an account? <a href="/register">Sign up here</a></p>
                    </div>
                </div>
            </div>
        </section>
    );
}
