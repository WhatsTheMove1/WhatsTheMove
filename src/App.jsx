import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import beer from "./assets/beer.png";

function App() {
  return (
    <div
      className="container text-center mt-5"
      style={{
        backgroundColor: "black",
        color: "white",
        minHeight: "100vh",
        minWidth: "100vw",
        padding: "20px",
      }}
    >
      {/* Company Name with Images */}
      <div className="d-flex align-items-center justify-content-center">
        <img
          src={beer}
          style={{ height: "50px", width: "auto" }}
          alt="Beer"
          className="img-fluid rounded me-3"
        />
        <h1 className="display-4 text-white">What's the Move</h1>
        <img
          src={beer}
          style={{ height: "50px", width: "auto" }}
          alt="Beer"
          className="img-fluid rounded ms-3"
        />
      </div>

      {/* Hero Section */}
      <div className="row justify-content-center mt-4">
        <div className="col-md-8">
          <h1 className="display-6">Enhance Your Nightlife Experience</h1>
          <p className="lead">
            Our mobile nightlife platform empowers college partygoers by
            eliminating confusion and indecisiveness, providing real-time,
            reliable information on the best events, venues, and experiences.
          </p>
        </div>
      </div>

      {/* Email Subscription Section */}
      <div className="row justify-content-center mt-4">
        <div className="col-md-6">
          <div className="input-group mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              aria-label="Email"
            />
          </div>
          <button className="btn btn-primary" type="button">
            Find Your Next Move
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
