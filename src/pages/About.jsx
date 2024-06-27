const About = () => {
  return (
    <div className="text-slate-900 pb-16" id="about">
      <div className="bg-slate-300 px-5">
        <div className="flex items-center gap-4">
          <h1 className="font-dancing text-2xl pb-4 font-semibold text-slate-900">
            Professional Summary
          </h1>
          <hr className="border-2 border-violet-500 w-16" />
        </div>
        <p className="font-mono text-xs p-2 font-medium bg-yellow-400 border-2 border-white">
          Experienced Front-End Web Application Developer with over 2 years of
          expertise in developing user-friendly and responsive user experience.
        </p>
        <p className="font-mono text-xs p-2 font-medium bg-lime-500 border-2 border-white my-1">
          Proficient in developing responsive, user-friendly web applications
          using HTML, CSS, JavaScript, React, Tailwind CSS, and Git version
          control.
        </p>
        <p className="font-mono text-xs p-2 font-medium bg-teal-500 border-2 border-white">
          Strong understanding of the fundamentals of modern web development
          principles.
        </p>
        <div className="flex items-center gap-4">
          <hr className="border-2 border-violet-500 w-16" />
          <h1 className="font-dancing text-2xl pt-5 pb-4 font-semibold text-slate-900">
            Education
          </h1>
        </div>
        <p className="font-mono text-xs p-2 font-medium bg-orange-400 border-2 border-white">
          Bachelor of Engineering in Computer Science SSM College of
          Engineering, Komarapalayam | affiliated with Anna University, Chennai.
          Graduated in November 2016.
        </p>
        <div className="flex items-center gap-4">
          <h1 className="font-dancing text-2xl pt-5 pb-4 font-semibold text-slate-900">
            Professional Experience
          </h1>
          <hr className="border-2 border-violet-500 w-16" />
        </div>
        <p className="font-mono text-xs p-2 font-medium bg-emerald-500 border-2 border-white mb-1">
          Organization : IDesk Technologies Pvt Ltd Designation : Junior
          Frontend Developer Duration : December 2022 - Present
        </p>
        <p className="font-mono text-xs p-2 font-medium bg-amber-500 border-2 border-white">
          Organization : IDesk Technologies Pvt Ltd Designation : Internship
          Trainee <br />
          Duration : June 2022 - December 2022
        </p>
      </div>
    </div>
  );
};

export default About;
