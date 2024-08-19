import { skills } from "../assets/skills/skills";

const Skills = () => {
  return (
    <section className="bg-slate-100 pt-44 pb-24">
      <h1 className="text-center text-xl sm:text-3xl font-mono font-medium text-slate-700 pb-20">
        Skills &amp; Techniques
      </h1>
      <ul className="w-3/4 m-auto grid grid-cols-2 sm:grid-cols-6 gap-5 sm:gap-7">
        {skills.map((skill, index) => (
          <li
            key={index}
            className="hover:scale-110 duration-300 z-0 grid gap-5 place-items-center bg-white py-5 object-cover shadow shadow-slate-300 text-lg rounded font-semibold select-none cursor-pointer border-2"
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className="h-14 w-14 sm:h-24 sm:w-24"
            />
            <p className="text-sm sm:text-base">{skill.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
