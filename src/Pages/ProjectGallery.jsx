import React from "react";
import ParticlesLoader from "../Components/ParticlesLoader";
import ParticlesConfig from "../Components/ParticlesConfig";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "Password Generator",
    description:
      "An innovative solution that redefines user experience with cutting-edge design.",
    navigate: "/password-generator",
  },
  {
    id: 2,
    title: "Currency Converter",
    description:
      "A robust project that combines modern technology and creative design.",
    navigate: "/currency-converter",
  },
  {
    id: 3,
    title: "Project Three",
    description:
      "Exploring the possibilities of technology with seamless integration and aesthetics.",
    navigate: "/password-generator",
  },
  {
    id: 4,
    title: "Project Four",
    description:
      "An award-winning project that pushes the boundaries of digital creativity.",
    navigate: "/password-generator",
  },
  {
    id: 5,
    title: "Project Five",
    description:
      "An innovative solution that redefines user experience with cutting-edge design.",
    navigate: "/password-generator",
  },
  {
    id: 6,
    title: "Project Six",
    description:
      "A robust project that combines modern technology and creative design.",
    navigate: "/password-generator",
  },
  {
    id: 7,
    title: "Project Seven",
    description:
      "Exploring the possibilities of technology with seamless integration and aesthetics.",
    navigate: "/password-generator",
  },
  {
    id: 8,
    title: "Project Eight",
    description:
      "An award-winning project that pushes the boundaries of digital creativity.",
    navigate: "/password-generator",
  },
];

const ProjectGallery = () => {
  const options = ParticlesConfig();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-purple-800 via-black to-gray-900">
      {/* Particles Background */}

      {/* Glassmorphic Container */}
      <div className="relative z-10 w-full max-w-5xl lg:max-h-[90vh] bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl scrollbar-none shadow-2xl p-6 lg:p-10 flex flex-col">
        <div className="absolute top-0 left-0 w-full h-full">
          <ParticlesLoader options={options} id="particles-2" />
        </div>
        <header className="mb-8">
          <h1 className="text-center text-pink-600 text-4xl font-extrabold tracking-wide animate-fade-in">
            Our Projects
          </h1>
          <p className="text-center text-teal-500 max-w-2xl mx-auto mt-4 text-lg animate-fade-in delay-1s">
            Discover our range of projects that blend innovative technology with
            creative design to deliver impactful solutions.
          </p>
        </header>

        {/* Scrollable Projects */}
        <div className="flex-1 scrollbar-none overflow-y-auto pr-2 lg:scrollbar-thin lg:scrollbar-thumb-pink-700 lg:scrollbar-track-transparent">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                onClick={() => navigate(project.navigate)}
                key={project.id}
                className="group bg-white/25 backdrop-blur-md rounded-xl p-6 transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_20px_4px_rgba(255,249,196,0.7)] cursor-pointer border-2 border-[#FFF9C4] hover:border-none animate-neonBorder"
              >
                <h2 className="text-grey-900 text-2xl font-bold mb-3 group-hover:text-pink-400 text-semibold">
                  {project.title}
                </h2>
                <p className="text-white/70 group-hover:text-white">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectGallery;
