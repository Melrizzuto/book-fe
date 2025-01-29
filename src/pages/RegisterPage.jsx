import { useState } from 'react';
import './RegisterPage.module.css'; // Aggiungi il file CSS per gli stili personalizzati

export default function RegisterPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
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

        // Simula la validazione delle password
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        // Simula il comportamento dopo l'invio del form
        setIsSubmitted(true);

        // Resetta il form dopo 2 secondi (simulazione del reset dopo invio)
        setTimeout(() => {
            setFormData({
                name: '',
                email: '',
                password: '',
                confirmPassword: ''
            });
            setIsSubmitted(false);
        }, 2000);
    };

    return (
        <section className="position-relative bg-light">
            <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
                <div className="form-container card shadow-sm p-5">
                    <h2 className="mb-4 text-center">Register Here</h2>

                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="Your Email"
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
                                placeholder="Your Password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="confirmPassword"
                                placeholder="Confirm Your Password"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button type="submit" className="myBtn w-100">Create Account</button>
                    </form>

                    {/* Fictitious submission message */}
                    {isSubmitted && (
                        <div className="mt-3 text-success text-center">
                            <p>Account successfully created! 🎉</p>
                        </div>
                    )}

                    <div className="text-center mt-3">
                        <a href="/login">Already have an account? Login</a>
                    </div>
                </div>
            </div>
        </section>
    );
}
