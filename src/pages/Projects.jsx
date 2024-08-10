import { projects } from "../assets/projects/projects";
import { FaArrowRight } from "react-icons/fa6";

const Projects = () => {
  return (
    <section className="bg-slate-100 pt-36 pb-24">
      <h1 className="text-center text-3xl font-mono font-medium text-slate-700 pb-20">
        Projects {`i've`} worked with
      </h1>
      <ul className="w-3/4 m-auto grid grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <li
            key={index}
            className="hover:scale-105 duration-300 z-0 grid gap-5 place-items-center bg-white p-5 object-cover text-lg rounded font-semibold select-none"
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover"
            />
            <div className="flex items-center gap-2 py-5">
              <img src={project.logo} alt="HTML" className="h-8 w-8" />
              <p className="font-semibold text-slate-700">{project.name}</p>
            </div>
            <span className="flex items-center gap-2 text-sm font-medium text-slate-400 cursor-pointer">
              SEE MORE <FaArrowRight />
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
