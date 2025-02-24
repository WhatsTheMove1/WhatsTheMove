import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const NewPost = () => {
  const [place, setPlace] = useState("");

  const availableVibes = ["Chill", "Loud", "Dancing", "Quiet", "Great Drinks"];

  const [vibes, setVibes] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Place:", place);
    console.log("Vibes:", vibes);
  };

  const toggleVibe = (vibe) => {
    setVibes((prevVibes) =>
      prevVibes.includes(vibe)
        ? prevVibes.filter((v) => v !== vibe)
        : [...prevVibes, vibe]
    );
  };

return (
    <div className="container mt-5">
        <h1 className="text-white">Create a New Post</h1>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="place" className="form-label text-white">
                    Place:
                </label>
                <input
                    type="text"
                    id="place"
                    className="form-control"
                    value={place}
                    onChange={(e) => setPlace(e.target.value)}
                    required
                />
            </div>
            <div className="mb-3">
                <div className="mt-3">
                    {availableVibes.map((vibe, index) => (
                        <button
                            key={index}
                            type="button"
                            className={`btn me-3 mb-2 ${
                                vibes.includes(vibe) ? "btn-primary" : "btn-secondary"
                            }`}
                            onClick={() => toggleVibe(vibe)}
                        >
                            {vibe}
                        </button>
                    ))}
                </div>
            </div>
            <button type="submit" className="btn btn-primary">
                Submit
            </button>
        </form>
    </div>
);
};

export default NewPost;
