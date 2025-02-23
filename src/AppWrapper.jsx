import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Make sure you're importing these
import App from "./App"; // Assuming App is your main component
import Posts from "./Posts"; // Assuming Posts is your component for the posts page

function AppWrapper() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </Router>
  );
}

export default AppWrapper;
