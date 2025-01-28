import { FaFacebook, FaTwitter, FaInstagram, FaUserCircle } from "react-icons/fa";

export default function About() {
  return (
    <>
      <section className="position-relative py-5 bg-light">
        <div className="container text-center">
          <h2 className="mb-4">Il nostro Team</h2>

          {/* Prima riga */}
          <div className="row justify-content-center">
            {/* Card: Fabio Doria */}
            <div className="col-md-6 mb-4">
              <div className="card shadow-sm">
                {/* Icona profilo */}
                <div className="text-center mt-3">
                  <FaUserCircle size={120} color="#aba9ee" />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Fabio Doria</h5>
                  <p className="card-text">Web Developer</p>
                  {/* Icone social */}
                  <div>
                    <a href="#" className="text-primary mx-2">
                      <FaFacebook />
                    </a>
                    <a href="#" className="text-info mx-2">
                      <FaTwitter />
                    </a>
                    <a href="#" className="text-danger mx-2">
                      <FaInstagram />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Card: Orsouene */}
            <div className="col-md-6 mb-4">
              <div className="card shadow-sm">
                {/* Icona profilo */}
                <div className="text-center mt-3">
                  <FaUserCircle size={120} color="#aba9ee" />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Orsouene Elaouizeb</h5>
                  <p className="card-text">Web Developer</p>
                  {/* Icone social */}
                  <div>
                    <a href="#" className="text-primary mx-2">
                      <FaFacebook />
                    </a>
                    <a href="#" className="text-info mx-2">
                      <FaTwitter />
                    </a>
                    <a href="#" className="text-danger mx-2">
                      <FaInstagram />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Seconda riga */}
          <div className="row justify-content-center">
            {/* Card: Eleonora Cappellesso */}
            <div className="col-md-6 mb-4">
              <div className="card shadow-sm">
                {/* Icona profilo */}
                <div className="text-center mt-3">
                  <FaUserCircle size={120} color="#aba9ee" />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Eleonora Cappellesso</h5>
                  <p className="card-text">Web Developer</p>
                  {/* Icone social */}
                  <div>
                    <a href="#" className="text-primary mx-2">
                      <FaFacebook />
                    </a>
                    <a href="#" className="text-info mx-2">
                      <FaTwitter />
                    </a>
                    <a href="#" className="text-danger mx-2">
                      <FaInstagram />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Card: Melania Rizzuto */}
            <div className="col-md-6 mb-4">
              <div className="card shadow-sm">
                {/* Icona profilo */}
                <div className="text-center mt-3">
                  <FaUserCircle size={120} color="#aba9ee" />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Melania Rizzuto</h5>
                  <p className="card-text">Web Developer</p>
                  {/* Icone social */}
                  <div>
                    <a href="#" className="text-primary mx-2">
                      <FaFacebook />
                    </a>
                    <a href="#" className="text-info mx-2">
                      <FaTwitter />
                    </a>
                    <a href="#" className="text-danger mx-2">
                      <FaInstagram />
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
