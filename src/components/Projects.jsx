import React from "react";

const projects = [
  { id: 1, title: "Project 1", description: "Website e-commerce", image: "https://via.placeholder.com/300" },
  { id: 2, title: "Project 2", description: "Landing page perusahaan", image: "https://via.placeholder.com/300" },
];

const Projects = () => {
  return (
    <section id="projects" className="p-8">
      <h2 className="text-3xl font-bold text-center">My Projects</h2>
      <div className="grid md:grid-cols-2 gap-6 mt-6">
        {projects.map((project) => (
          <div key={project.id} className="border rounded-lg p-4 shadow-md">
            <img src={project.image} alt={project.title} className="w-full rounded-md" />
            <h3 className="text-xl font-semibold mt-2">{project.title}</h3>
            <p className="text-gray-600">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
