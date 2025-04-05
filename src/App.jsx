import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Nav from "./components/Nav.jsx";
import LoadingScreen from "./components/LoadingScreen.jsx";
import { useState } from "react";
import MobileMenu from "./components/MobileMenu.jsx";
import Projects from "./pages/Projects.jsx";

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <Router>
      <>
        {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
        <div
          className={`min-h-screen transition-opacity duration-700 ${
            isLoaded ? "opacity-100" : "opacity-0"
          } bg-black text-gray-100`}
        >
          <Nav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/about"} element={<About />} />
            <Route path={"/projects"} element={<Projects />} />
            <Route path={"/contact"} element={<Contact />} />
          </Routes>
        </div>
      </>
    </Router>
  );
};

export default App;
