import React from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-start justify-center py-20"
    >
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mt-8 mb-8 text-center">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:border-cyan-500/30 hover:shadow-[0,0,15px_rgba(0, 180, 180, 1)] transition-all">
            <h3 className="text-xl font-bold mb-4">First Web Portfolio</h3>
            <p className="text-gray-300 text-justify space-grotesk-font text-sm mb-4">
              This is my first web portfolio, a non-responsive design as i just
              started learning where i used javascript just for a particle
              background. I created this portfolio as a school project.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {[
                { name: "HTML", icon: "./icons/html.svg" },
                { name: "CSS", icon: "./icons/css.svg" },
                { name: "JavaScript", icon: "./icons/javascript.svg" },
              ].map((tech, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-2 py-1 bg-zinc-900 border border-zinc-700 rounded-md shadow hover:scale-105 hover:shadow-[0,2px,8px_rgba(59,130,246,0.2)] transition all"
                >
                  <img src={tech.icon} alt={tech.name} className="w-5 h-5" />
                  <span className="text-sm font-medium">{tech.name}</span>
                </div>
              ))}
            </div>
            <div>
              <Link
                to={"https://github.com/keybitempest/keybi-portfolio"}
                className="text-blue-400 hover:text-blue-300 transition color my-4"
              >
                View Project →
              </Link>
            </div>
          </div>

          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:border-cyan-500/30 hover:shadow-[0,0,15px_rgba(0, 180, 180, 1)]transition-all">
            <h3 className="text-xl font-bold mb-4">Project 2</h3>
            <p className="text-gray-300 text-justify space-grotesk-font text-sm mb-4">
              Description of Project 2. This project highlights my ability to
              create responsive and user-friendly interfaces.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {[
                { name: "HTML", icon: "./icons/html.svg" },
                { name: "CSS", icon: "./icons/css.svg" },
                { name: "JavaScript", icon: "./icons/javascript.svg" },
              ].map((tech, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-2 py-1  bg-zinc-900 border border-zinc-700 rounded-md shadow hover:scale-105 hover:shadow-[0,2px,8px_rgba(59,130,246,0.2)] transition all"
                >
                  <img src={tech.icon} alt={tech.name} className="w-5 h-5" />
                  <span className="text-sm font-medium">{tech.name}</span>
                </div>
              ))}
            </div>
            <div>
              <Link
                to={"/"}
                className="text-blue-400 hover:text-blue-300 transition color my-4"
              >
                View Project →
              </Link>
            </div>
          </div>

          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:border-cyan-500/30 hover:shadow-[0,0,15px_rgba(0, 180, 180, 1)]transition-all">
            <h3 className="text-xl font-bold mb-4">Project 3</h3>
            <p className="text-gray-300 text-justify space-grotesk-font text-sm mb-4">
              Description of Project 3. This project highlights my ability to
              create responsive and user-friendly interfaces.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {[
                { name: "HTML", icon: "./icons/html.svg" },
                { name: "CSS", icon: "./icons/css.svg" },
                { name: "JavaScript", icon: "./icons/javascript.svg" },
              ].map((tech, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-2 py-1 bg-zinc-900 border border-zinc-700 rounded-md shadow hover:scale-105 hover:shadow-[0,2px,8px_rgba(59,130,246,0.2)] transition all"
                >
                  <img src={tech.icon} alt={tech.name} className="w-5 h-5" />
                  <span className="text-sm font-medium">{tech.name}</span>
                </div>
              ))}
            </div>
            <div>
              <Link
                to={"/"}
                className="text-blue-400 hover:text-blue-300 transition color my-4"
              >
                View Project →
              </Link>
            </div>
          </div>

          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:border-cyan-500/30 hover:shadow-[0,0,15px_rgba(0, 180, 180, 1)]transition-all">
            <h3 className="text-xl font-bold mb-4">Project 4</h3>
            <p className="text-gray-300 text-justify space-grotesk-font text-sm mb-4">
              Description of Project 4. This project highlights my ability to
              create responsive and user-friendly interfaces.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {[
                { name: "HTML", icon: "./icons/html.svg" },
                { name: "CSS", icon: "./icons/css.svg" },
                { name: "JavaScript", icon: "./icons/javascript.svg" },
              ].map((tech, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-2 py-1 bg-zinc-900 border border-zinc-700 rounded-md shadow hover:scale-105 hover:shadow-[0,2px,8px_rgba(59,130,246,0.2)] transition all"
                >
                  <img src={tech.icon} alt={tech.name} className="w-5 h-5" />
                  <span className="text-sm font-medium">{tech.name}</span>
                </div>
              ))}
            </div>
            <div>
              <Link
                to={"/"}
                className="text-blue-400 hover:text-blue-300 transition color my-4"
              >
                View Project →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
