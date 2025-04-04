import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Posts from "./pages/Posts.jsx";
import Nav from "./components/Nav.jsx";
import Users from "./pages/Users.jsx";
import Popup from "./components/Popup.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users/:id" element={<Users />} />
      </Routes>
      <div></div>
    </Router>
  );
}

export default App;
