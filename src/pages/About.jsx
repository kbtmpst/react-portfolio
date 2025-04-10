import React from "react";

const About = () => {
  const techStack = [
    { name: "HTML", icon: "./icons/html.svg" },
    { name: "CSS", icon: "./icons/css.svg" },
    { name: "JavaScript", icon: "./icons/javascript.svg" },
    { name: "React", icon: "./icons/react.svg" },
    { name: "Tailwind CSS", icon: "./icons/tailwindcss.svg" },
    { name: "Git", icon: "./icons/git.svg" },
    { name: "GitHub", icon: "./icons/github.svg" },
    { name: "C#", icon: "./icons/csharp.svg" },
    { name: "Java", icon: "./icons/java.svg" },
    { name: "MySQL", icon: "./icons/mysql.svg" },
    { name: "C++", icon: "./icons/cpp.svg" },
  ];

  return (
    <section className="min-h-screen w-full flex items-start justify-center py-20 relative">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mt-8 mb-8  text-center">About Me</h2>

        <div className="rounded-xl p-8 border-white/10 border  mb-3 ">
          <p className="text-gray-300 text-justify space-grotesk-font text-md mb-4">
            Hello! I'm{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-purple-600 bg-clip-text text-transparent font-bold">
              Jhun Carlo Ramos
            </span>
            , you can call me{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-purple-600 bg-clip-text text-transparent font-bold">
              Carlo
            </span>{" "}
            for short, also known as{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-purple-600 bg-clip-text text-transparent font-bold">
              Keybi
            </span>
            , a passionate web developer dedicated to crafting responsive,
            user-friendly, and impactful websites. Im eager to explore the
            creative and technical aspects of web design, transforming ideas
            into functional and visually appealing websites. My passion lies in
            crafting digital experiences that are not only engaging but also
            intuitive and accessible to all users. I look forward to learning,
            growing, and contributing to projects that make a meaningful impact.
          </p>

          <div>
            <div className="rounded-xl p-6 ">
              <h3 className="text-xl font-bold mb-4 text-center">Tech Stack</h3>
              <div className="flex flex-wrap gap-4 mx-1 justify-center">
                {techStack.map((tech, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-3 py-2 bg-zinc-900 border border-zinc-700 rounded-md shadow hover:scale-105 transition-transform"
                  >
                    <img src={tech.icon} alt={tech.name} className="w-5 h-5" />
                    <span className="text-sm font-medium">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-justify">
          <div className="p-6 rounded-xl border-white/10 border hover:-transition-y-1 transition-all ">
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
            <ul>
              <li>
                <strong> Playing Online Games</strong>
                <p className="space-grotesk-font text-sm mt-2 mb-4 text-gray-300">
                  I am a gamer at heart. I love playing online games, especially
                  mobile games. I enjoy playing games like Mobile Legends, Call
                  of Duty Mobile, and Roblox with my friends. I play some online
                  games to unwind and relax after a long day of studying and
                  learning web development.
                </p>
                <strong>Watching Animes</strong>
                <p className="space-grotesk-font text-sm mt-2 mb-4 text-gray-300">
                  Watching anime became a part of my daily routine. I enjoy
                  watching anime series and movies, and I love discussing them
                  with my friends. Some of my favorite anime include That Time I
                  Got Reincarnated as a Slime, Mushoku Tensei, One Piece, and
                  Sword Art Online. I also like watching romance and
                  slice-of-life anime. I find it relaxing and enjoyable to
                  immerse myself in different worlds.
                </p>
                <strong>Coding</strong>
                <p className="space-grotesk-font text-sm mt-2 mb-4 text-gray-300">
                  I am currently learning web development. I am focusing on
                  frontend development using HTML, CSS, JavaScript, and ReactJS.
                  I am also learning how to use Tailwind CSS for styling my web
                  applications. I enjoy coding and learning new technologies, I
                  also want to dive into Next JS and NodeJS in the future as my
                  skills advance.
                </p>
                <strong>Riding a Bicycle</strong>
                <p className="space-grotesk-font text-sm mt-2 mb-4 text-gray-300">
                  I used to regularly ride my bike around with my friends. We
                  would ride our bikes to the mall, parks, and even to school.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
