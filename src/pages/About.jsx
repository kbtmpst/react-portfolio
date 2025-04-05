import React from "react";

const About = () => {
  const techStacks = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "C#",
    "Java",
    "MySQL",
    ".NET",
    "C++",
    "Node.js",
  ];
  return (
    <section className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-3xl mx-auto -my-4">
        <h2 className="text-3xl font-bold mt-8 mb-8 bg-gradient-to-r from-cyan-600 to-green-400 bg-clip-text text-transparent text-center">
          About Me
        </h2>

        <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all mb-3 ">
          <p className="text-gray-300 text-justify space-grotesk-font text-md mb-4">
            Hello! I'm Carlo, a passionate web developer dedicated to crafting
            responsive, user-friendly, and impactful websites. I’m eager to
            explore the creative and technical aspects of web design,
            transforming ideas into functional and visually appealing websites.
            My passion lies in crafting digital experiences that are not only
            engaging but also intuitive and accessible to all users. I look
            forward to learning, growing, and contributing to projects that make
            a meaningful impact {":]"}.
          </p>
          <div>
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4 text-center">Tech Stack</h3>
              <div className="flex flex-wrap gap-2 mx-10 justify-center">
                {techStacks.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0,2px,8px_rgba(59,130,246,0.2)] transition all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="p-6 rounded-xl border-white/10 border hover:-transition-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4"> 🎓 Education</h3>
            <ul>
              <li>
                <strong> Grade 10 (2021 - 2022) </strong>
                <p className="space-grotesk-font text-sm mt-2 mb-4 text-gray-300">
                  Still undecided about the strand that I should take. But I am
                  also fond of online gaming which poked my interest in
                  programming.
                </p>
                <strong>Grade 11 TVL-ICT (2022 - 2023)</strong>
                <p className="space-grotesk-font text-sm mt-2 mb-4 text-gray-300">
                  I took the ICT strand, and discovered my passion for
                  programming. I learned the basics of HTML, and CSS. I also
                  learned how to use Java along with MySQL as a database.
                </p>
                <strong>Grade 12 TVL-ICT (2023 - 2024)</strong>
                <p className="space-grotesk-font text-sm mt-2 mb-4 text-gray-300">
                  I am currently in my last year of high school. I am now
                  learning the basics of C# and .NET. I am also learning how to
                  use C++ for programming. Along with my friends, we decided to
                  dive into BSIT in college.
                </p>
                <strong>
                  1st Year BS Information Technology (2024 - Present)
                </strong>
                <p className="space-grotesk-font text-sm mt-2 mb-4 text-gray-300">
                  In first semester, I learned the basics of computing and
                  programming. I'm in second semester right now, learning more
                  about C++ from lessons, I am currently working and focused on
                  ReactJS alongside with TailwindCSS through self-studying as I
                  see my self as a frontend developer.
                </p>
              </li>
            </ul>
          </div>
          <div className="p-6 rounded-xl border-white/10 border hover:-transition-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4"> 💻 Hobbies</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
