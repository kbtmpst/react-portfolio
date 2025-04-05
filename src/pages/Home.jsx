import { section } from "framer-motion/client";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <div className="text-center z-10 px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-500 to-green-600 bg-clip-text text-transparent leading-right">
          Hi, Im Keybi Dev
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Hello! I'm Carlo, a passionate web developer dedicated to crafting
          responsive, user-friendly, and impactful websites. I’m eager to
          explore the creative and technical aspects of web design, transforming
          ideas into functional and visually appealing websites. My passion lies
          in crafting digital experiences that are not only engaging but also
          intuitive and accessible to all users. I look forward to learning,
          growing, and contributing to projects that make a meaningful impact.
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            to={"/projects"}
            className="bg-cyan-500 text-white py-3 px-6 rounded font-mrdium transition relative overflow-hidden hover:-translate-y-1 hover:shadow-[0,0,15px_rgba(0, 180, 180, 1)] group"
          >
            View Projects
          </Link>
          <Link
            to={"/contact"}
            className="border border-cyan-500/50 text-cyan-500 py-3 px-6 rounded font-medium transition-all  duration-200 hover:shadow-[0,0,15px_rgba(0, 180, 180, 1)] hover:bg-cyan-500/25 group"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
