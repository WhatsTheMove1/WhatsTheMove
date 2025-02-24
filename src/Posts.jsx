import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const reviews = [
  {
    title: "On The Rox",
    vibe:
      "Crowded, Dancing, Loud",
    date: new Date("2023-10-01T22:00:00"),
  },
  {
    title: "Mate Bar",
    vibe:
      "Chill, Quiet, Good drinks",
    date: new Date("2023-10-02T21:00:00"),
  },
  {
    title: "The Ice Club",
    vibe: "Crowded, Dancing, Loud",
    date: new Date("2023-10-01T20:00:00"),
  },
];

reviews.sort((a, b) => b.date - a.date);

const Posts = () => {
  

  return (
    <div className="container text-center mt-4">
      <h2 className="text-white">Recent Reviews</h2>
      <Link className="btn btn-primary mt-3" to="/new-post">Create New Post</Link>
      <div className="d-flex flex-column align-items-center mt-3">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="card bg-dark text-light mb-3 border border-white"
            style={{ width: "100%", maxWidth: "400px" }}
          >
            <div className="card-body">
              <h5 className="card-title">📍 {review.title}</h5>
              <div className="mb-2">
                {review.vibe.split(", ").map((vibe, i) => (
                  <button key={i} className="btn btn-primary btn-sm me-2">
                    {vibe}
                  </button>
                ))}
              </div>
              <p className="card-text">
                <small className="card-text">
                  {review.date.toLocaleString()}
                </small>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
