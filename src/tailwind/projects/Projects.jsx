import React from "react";
import html from "../../assets/tech_logo/html.png";
import reactjs from "../../assets/tech_logo/reactjs.png";
import c from "../../assets/tech_logo/c.png";

const projects = [
  {
    title: "Project 1",
    description:
      "This is a description of project 1.It is a web application that allows user to do smoething",
    image: html,
    link: "",
    github: "",
  },
  {
    title: "Project 2",
    description:
      "This is a description of project 1.It is a web application that allows user to do smoething",
    image: reactjs,
    link: "",
    github: "",
  },
  {
    title: "Project ",
    description:
      "This is a description of project 1.It is a web application that allows user to do smoething",
    image: c,
    link: "",
    github: "",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[15vw]"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Projects</h2>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A showcase of my latest project
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg translation"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-contain rounded-t-xl p-4"
              />
              <div className="p-6 bg-red-50">
                <h3 className="text-xl font-bold mb-2 text-black">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex gap-4 justify-center">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white px-4 py-3 rounded hover:bg-green-400 transition"
                  >
                    Live Site
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-600 text-white px-4 py-3 rounded hover:bg-green-400 transition"
                  >
                    Github
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
