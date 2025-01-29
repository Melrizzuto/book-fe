export default function Jumbotron({ onDiscoverMore }) {
    return (
        <div
            className="hero hero-wave has-overlap-img has-overlap-img-with-text"
            style={{
                backgroundColor: "rgb(181, 198, 172)",
                height: "100vh",
                minHeight: "100vh"
            }}
        >
            <div className="container h-100">
                <div className="row align-items-center h-100">
                    <div className="col-lg-5 offset-xxl-1 col-xxl-6 mb-4 mb-lg-0 text-center text-lg-left">
                        <p className="h2 font-weight-normal mb-0">
                            The nerdiest
                            <br />
                            italian <i>book community</i>.
                        </p>
                        <br />
                        <p className="h2 mb-4">
                            We help you read reviews of
                            <br />
                            your favorite books.
                        </p>
                        {/* Pulsante "Scopri di più" */}
                        <button
                            onClick={onDiscoverMore}
                            className="btn btn-primary text-white font-weight-bold text-uppercase"
                            style={{
                                backgroundColor: "#aba9ee",
                                borderRadius: "20px",
                                padding: "10px 20px",
                                border: "white"
                            }}
                        >
                            Discover more
                        </button>
                    </div>
                    <div className="col-lg-7 col-xxl-5 z-index-9 position-relative">
                        <img
                            src="https://assets.acciobooks.com/images/home-hero-illustration.svg"
                            className="hero-illustration img-fluid w-100"
                            alt="Hero Illustration"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
