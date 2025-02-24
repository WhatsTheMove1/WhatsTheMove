import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom"; // Make sure you're importing these
import App from "./App"; // Assuming App is your main component
import Posts from "./Posts"; // Assuming Posts is your component for the posts page
import NewPost from "./NewPost"; // Assuming NewPost is your component for the new post page

function AppWrapper() {
  return (
    <BrowserRouter basename="/WhatsTheMove">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/new-post" element={<NewPost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppWrapper;
