export default function About() {
  return (
    <>
      <section className="position-relative py-5 bg-light">
        <div className="container text-center">
          <h2 className="mb-4">Il nostro Team</h2>
          <div className="row justify-content-center">
            <div className="col-md-4 mb-4">
              <div className="card shadow-sm">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Foto Profilo"
                  className="card-img-top rounded-circle mx-auto mt-3"
                  style={{ width: "120px", height: "120px" }}
                />
                <div className="card-body">
                  <h5 className="card-title">Mario Rossi</h5>
                  <p className="card-text">Front-end Developer</p>
                  <div>
                    <a href="#" className="text-primary mx-2">
                      <i className="fab fa-facebook"></i>
                    </a>
                    <a href="#" className="text-info mx-2">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="text-danger mx-2">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card shadow-sm">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Foto Profilo"
                  className="card-img-top rounded-circle mx-auto mt-3"
                  style={{ width: "120px", height: "120px" }}
                />
                <div className="card-body">
                  <h5 className="card-title">Giulia Bianchi</h5>
                  <p className="card-text">Back-end Developer</p>
                  <div>
                    <a href="#" className="text-primary mx-2">
                      <i className="fab fa-facebook"></i>
                    </a>
                    <a href="#" className="text-info mx-2">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="text-danger mx-2">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
