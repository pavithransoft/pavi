import { CgWebsite } from "react-icons/cg";
import { FaAppStoreIos, FaGlobeAmericas } from "react-icons/fa";

const Skills = () => {
  return (
    <div className="text-slate-900 px-5" id="skills">
      <div>
        <div className="flex items-center gap-4">
          <hr className="border-2 border-violet-500 w-16" />
          <h1 className="font-dancing text-2xl pb-20 font-semibold text-slate-900">
            Core Competencies <span className="text-yellow-600">!</span>
          </h1>
        </div>
        <div className="font-mono font-semibold grid grid-rows-3 gap-5 py-5">
          <div className="bg-orange-500 w-fit px-6 py-3 border-2 border-white hover:shadow-lg hover:shadow-orange-500">
            <CgWebsite className="h-7 w-7" />
            <h1 className="pt-1">UI Development</h1>
          </div>
          <div className="bg-yellow-500 w-fit px-6 py-3 border-2 border-white hover:shadow-lg hover:shadow-yellow-500 justify-self-center">
            <FaGlobeAmericas className="h-7 w-7" />
            <h1 className="pt-1">Web Development</h1>
          </div>
          <div className="bg-sky-500 w-fit px-6 py-3 border-2 border-white hover:shadow-lg hover:shadow-sky-500 justify-self-end">
            <FaAppStoreIos className="h-7 w-7" />
            <h1 className="pt-1">App Development</h1>
          </div>
        </div>
        <div className="flex items-center gap-4 pt-16 pb-5">
          <h1 className="font-dancing text-2xl pb-4 font-semibold text-slate-900">
            Technical Skills
          </h1>
          <hr className="border-2 border-violet-500 w-16" />
        </div>
        <div className="p-2">
          <div className="flex justify-between py-1">
            <h2 className="text-orange-500">HTML</h2>
            <h2>100%</h2>
          </div>
          <hr className="border-4 w-full mt-1 border-orange-500" />
        </div>
        <div className="p-2">
          <div className="flex justify-between py-1 w-[98%]">
            <h2 className="text-blue-500">CSS</h2>
            <h2>98%</h2>
          </div>
          <hr className="border-4 w-[98%] mt-1 border-blue-500" />
        </div>
        <div className="p-2">
          <div className="flex justify-between py-1 w-[96%]">
            <h2 className="text-yellow-500">Java Script</h2>
            <h2>96%</h2>
          </div>
          <hr className="border-4 w-[96%] mt-1 border-yellow-500" />
        </div>
        <div className="p-2">
          <div className="flex justify-between py-1 w-[99%]">
            <h2 className="text-cyan-600">React</h2>
            <h2>99%</h2>
          </div>
          <hr className="border-4 w-[99%] mt-1 border-cyan-600" />
        </div>
        <div className="p-2">
          <div className="flex justify-between py-1 w-[99%]">
            <h2 className="text-teal-500"> Tailwind CSS</h2>
            <h2>99%</h2>
          </div>
          <hr className="border-4 w-[99%] mt-1 border-teal-500" />
        </div>
        <div className="p-2">
          <div className="flex justify-between py-1 w-[98%]">
            <h2 className="text-pink-500"> Sass</h2>
            <h2>98%</h2>
          </div>
          <hr className="border-4 w-[98%] mt-1 border-pink-500" />
        </div>
        <div className="p-2">
          <div className="flex justify-between py-1 w-[92%]">
            <h2 className="text-sky-500"> Type Script</h2>
            <h2>92%</h2>
          </div>
          <hr className="border-4 w-[92%] mt-1 border-sky-500" />
        </div>
        <div className="p-2">
          <div className="flex justify-between py-1 w-[96%]">
            <h2 className="text-purple-600">Redux</h2>
            <h2>96%</h2>
          </div>
          <hr className="border-4 w-[96%] mt-1 border-purple-600" />
        </div>
        <div className="p-2">
          <div className="flex justify-between py-1 w-[100%]">
            <h2 className="text-slate-700">GitHub</h2>
            <h2>100%</h2>
          </div>
          <hr className="border-4 w-[100%] mt-1 border-slate-700" />
        </div>
        <div className="p-2">
          <div className="flex justify-between py-1 w-[100%]">
            <h2 className="text-violet-600">Git</h2>
            <h2>100%</h2>
          </div>
          <hr className="border-4 w-[100%] mt-1 border-violet-600" />
        </div>
        <div className="p-2">
          <div className="flex justify-between py-1 w-[96%]">
            <h2 className="text-green-800">Mongo DB</h2>
            <h2>96%</h2>
          </div>
          <hr className="border-4 w-[96%] mt-1 border-green-800" />
        </div>
        <div className="p-2">
          <div className="flex justify-between py-1 w-[90%]">
            <h2 className="text-lime-600">Node.js</h2>
            <h2>90%</h2>
          </div>
          <hr className="border-4 w-[90%] mt-1 border-lime-600" />
        </div>
        <div className="p-2">
          <div className="flex justify-between py-1 w-[89%]">
            <h2 className="text-slate-900">Next.js</h2>
            <h2>89%</h2>
          </div>
          <hr className="border-4 w-[89%] mt-1 border-slate-900" />
        </div>
        <div className="p-2">
          <div className="flex justify-between py-1 w-[95%]">
            <h2 className="text-red-600">Java</h2>
            <h2>95%</h2>
          </div>
          <hr className="border-4 w-[95%] mt-1 border-red-600" />
        </div>
        <div className="p-2">
          <div className="flex justify-between py-1 w-[100%]">
            <h2 className="text-amber-500">XML</h2>
            <h2>100%</h2>
          </div>
          <hr className="border-4 w-[100%] mt-1 border-amber-500" />
        </div>
        <div className="p-2">
          <div className="flex justify-between py-1 w-[94%]">
            <h2 className="text-blue-600">SQL</h2>
            <h2>94%</h2>
          </div>
          <hr className="border-4 w-[94%] mt-1 border-blue-600" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
