import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react"; // For state to handle like button toggle
import theMark from "./assets/TheMark.png"; // Import image from assets folder

function Posts() {
  const [liked, setLiked] = useState(false); // State to toggle like button

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="container text-center mt-5">
      <h1 className="display-4 text-white">Recent Posts</h1>
      <div className="row justify-content-center mt-4">
        {/* Post Card */}
        <div className="col-md-6">
          <div className="card" style={{ width: "100%", color: "white" }}>
            <img
              src={theMark} // Replace with your image URL
              className="card-img-top"
              alt="Post Image"
              style={{ backgroundColor: "white" }}
            />
            <div className="card-body">
              <p className="card-text">
                The Mark opened its doors in 2018 and has quickly become one of
                SLO’s favorites. Cheers!
              </p>
              {/* Like Button */}
              <button
                className={`btn ${
                  liked ? "btn-success" : "btn-outline-success"
                }`}
                onClick={toggleLike}
              >
                {liked ? "Liked" : "Like"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
