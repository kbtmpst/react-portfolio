import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Keybi Dev | Portfolio</title>
        <meta
          name="description"
          content="Hi, I'm Keybi Dev — an aspiring Frontend Developer and student at Batangas State University. Explore my projects, skills, and contact information."
        />
        <meta
          name="keywords"
          content="Frontend Developer, React, Vite, Tailwind, Portfolio, Batangas State University, Web Developer"
        />
        <meta
          name="author"
          content="Jhun Carlo Ramos, Keybi Dev, Keybi Tempest, Keybi"
        />
        <meta property="og:title" content="Keybi Dev | Portfolio" />
        <meta
          property="og:description"
          content="Aspiring Frontend Developer based in Batangas, Philippines. View my projects and get in touch!"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://keybipf.vercel.app/" />
      </Helmet>
      <section
        id="home"
        className="min-h-screen w-full flex items-center justify-center relative"
      >
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-500 to-purple-600 bg-clip-text text-transparent">
            Hi, I'm Keybi Dev
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-md mx-auto ">
            Aspiring Frontend Developer and a student at Batangas State
            University, based in Batangas, Philippines
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              to={"/projects"}
              className="bg-purple-500/80 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-1 hover:shadow-[0,0,15px_rgba(0, 180, 180, 1)] group"
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
    </>
  );
};

export default Home;
