import React from 'react';
import ParticlesBackground from './ParticlesBackground'; // adjust the path as needed

const projects = [
  {
    id: 1,
    title: 'Project One',
    description:
      'An innovative solution that redefines user experience with cutting-edge design.',
  },
  {
    id: 2,
    title: 'Project Two',
    description:
      'A robust project that combines modern technology and creative design.',
  },
  {
    id: 3,
    title: 'Project Three',
    description:
      'Exploring the possibilities of technology with seamless integration and aesthetics.',
  },
  {
    id: 4,
    title: 'Project Four',
    description:
      'An award-winning project that pushes the boundaries of digital creativity.',
  },
  {
    id: 5,
    title: 'Project Five',
    description:
      'An innovative solution that redefines user experience with cutting-edge design.',
  },
  {
    id: 6,
    title: 'Project Six',
    description:
      'A robust project that combines modern technology and creative design.',
  },
  {
    id: 7,
    title: 'Project Seven',
    description:
      'Exploring the possibilities of technology with seamless integration and aesthetics.',
  },
  {
    id: 8,
    title: 'Project Eight',
    description:
      'An award-winning project that pushes the boundaries of digital creativity.',
  },
];

const ProjectGallery = () => {
  return (
    <div className="relative min-h-screen w-full">
      {/* Particles Background */}
      <ParticlesBackground />

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center p-4 min-h-screen">
        <div className="w-full max-w-6xl bg-white/20 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-10 flex flex-col">
          <header className="mb-8">
            <h1 className="text-center text-white text-4xl font-extrabold tracking-wide">
              Our Projects
            </h1>
            <p className="text-center text-white/80 max-w-2xl mx-auto mt-4 text-lg">
              Discover our range of projects that blend innovative technology with creative design
              to deliver impactful solutions.
            </p>
          </header>

          {/* Scrollable project cards container with custom gradient scrollbar */}
          <div className="custom-scrollbar flex-1 overflow-y-auto pr-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-white/25 backdrop-blur-md border border-white/30 rounded-xl p-6 transform transition duration-300 hover:scale-105 hover:bg-white/30 cursor-pointer"
                >
                  <h2 className="text-white text-2xl font-bold mb-3">{project.title}</h2>
                  <p className="text-white/70">{project.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectGallery;
