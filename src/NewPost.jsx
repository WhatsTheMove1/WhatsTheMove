import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import UploadWidget from "./UploadWidget";
import { db } from "./firebase"; // Make sure to import your firebase configuration
import { collection, addDoc } from "firebase/firestore"; 
import { useNavigate } from "react-router-dom";

const NewPost = () => {
  const [place, setPlace] = useState("");

  const availableVibes = ["Chill", "Loud", "Dancing", "Quiet", "Great Drinks"];

  const [vibes, setVibes] = useState([]);
  const navigate = useNavigate();

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        if (!place || !vibes.length || !uploadedFile) {
            alert("Please fill out all fields");
            return;
        }
        const docRef = await addDoc(collection(db, "posts"), {
            place,
            vibes,
            uploadedFile,
            createdAt: new Date()
        });
        console.log("Document written with ID: ", docRef.id);
        navigate("/posts");
    } catch (e) {
        console.error("Error adding document: ", e);
    }
};

  const toggleVibe = (vibe) => {
    setVibes((prevVibes) =>
      prevVibes.includes(vibe)
        ? prevVibes.filter((v) => v !== vibe)
        : [...prevVibes, vibe]
    );
  };

  const [uploadedFile, setUploadedFile] = useState(null);

  const handleUpload = (file) => {
    setUploadedFile(file);
    console.log("File uploaded:", file);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-white">Create a New Post</h1>
      <form >
        <div className="mb-3">
          {/* Make a drop down menu for the place */}
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
        <UploadWidget onUpload={handleUpload} />
        <br></br>
        <br></br>
        {uploadedFile && (
          <div className="mt-3">
            <h4>Uploaded Image:</h4>
          </div>
        )}
        <h4>{uploadedFile}</h4>
        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewPost;
