import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { db } from "./firebase"; // Ensure correct Firebase import
import { collection, getDocs, doc, updateDoc } from "firebase/firestore";

const Posts = () => {
  const [reviews, setReviews] = useState([]);
  const [likedPosts, setLikedPosts] = useState({}); // Track liked posts

  useEffect(() => {
    const fetchReviews = async () => {
      const querySnapshot = await getDocs(collection(db, "posts"));
      const reviewsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
        date: doc.data().createdAt.toDate(),
      }));
      reviewsData.sort((a, b) => b.date - a.date);
      setReviews(reviewsData);
    };

    fetchReviews();
  }, []);

  const handleLike = async (id, currentLikes) => {
    if (likedPosts[id]) return; // Prevent multiple likes on the same post

    try {
      const postRef = doc(db, "posts", id);
      await updateDoc(postRef, { likes: currentLikes + 1 });

      setReviews((prevReviews) =>
        prevReviews.map((review) =>
          review.id === id ? { ...review, likes: currentLikes + 1 } : review
        )
      );

      setLikedPosts((prev) => ({ ...prev, [id]: true })); // Mark as liked
    } catch (error) {
      console.error("Error updating likes:", error);
    }
  };

  return (
    <div className="container text-center mt-4">
      <h2 className="text-white">Recent Reviews</h2>
      <Link className="btn btn-primary mt-3" to="/new-post">
        Create New Post
      </Link>
      <div className="d-flex flex-column align-items-center mt-3">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="card bg-dark text-light mb-3 border border-white"
            style={{ width: "100%", maxWidth: "400px" }}
          >
            <div className="card-body">
              <h5 className="card-place">📍 {review.place}</h5>
              {review.uploadedFileUrl && (
                <img
                  src={review.uploadedFileUrl}
                  alt="Uploaded"
                  className="img-fluid mb-3"
                  style={{ maxHeight: "200px", objectFit: "cover" }}
                />
              )}
              <div className="mb-2">
                {review.vibes.map((vibe, i) => (
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
              <div className="d-flex justify-content-between align-items-center">
                <button
                  className={`btn btn-sm ${likedPosts[review.id] ? "btn-light" : "btn-outline-light"}`}
                  onClick={() => handleLike(review.id, review.likes)}
                >
                  ❤️ Like
                </button>
                <span>{review.likes} Likes</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;

