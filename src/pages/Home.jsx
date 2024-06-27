import {
  IoIosMail,
  IoIosPaper,
  IoIosPhonePortrait,
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoWhatsapp,
  IoMdDownload,
  IoMdPin,
} from "react-icons/io";
import Profile_Photo from "../assets/profile_photo.png";

const Home = () => {
  return (
    <div className="bg-slate-300 pt-32 pb-16 px-9" id="home">
      <div className="pt-5 bg-slate-900 text-white rounded-lg border-2 border-white">
        <div className="flex items-center justify-center">
          <img
            src={Profile_Photo}
            alt="Profile_Photo"
            className="bg-violet-300 h-36 w-36 rounded-md"
          />
        </div>
        <div className="text-center pt-5">
          <h1 className="text-2xl font-tapestry font-medium text-slate-100">
            Pavithran Gopalakrishnan
          </h1>
          <h3 className="font-dancing font-medium py-1 text-slate-400">
            Frontend Developer
          </h3>
        </div>
        <div className="flex items-center justify-center gap-5 pt-5">
          <a
            href={"https://www.linkedin.com/in/pavithran-gopalakrishnan/"}
            target="_blank"
            className="bg-slate-100 p-1 rounded-md"
          >
            <IoLogoLinkedin className="h-6 w-6 fill-blue-700" />
          </a>
          <a
            href={"https://github.com/pavithransoft"}
            target="_blank"
            className="bg-slate-100 p-1 rounded-md"
          >
            <IoLogoGithub className="h-6 w-6 fill-purple-900" />
          </a>
          <a
            href={`https://wa.me/${8012322922}?text=${encodeURIComponent(
              "Hai, I am interested in your services"
            )}`}
            target="_blank"
            className="bg-slate-100 p-1 rounded-md"
          >
            <IoLogoWhatsapp className="h-6 w-6 fill-green-600" />
          </a>
        </div>
        <ul className="grid grid-rows-3 justify-center gap-5 font-mono pt-10 pb-5">
          <li className="flex items-center gap-5">
            <IoIosPhonePortrait className="h-6 w-6 fill-slate-400" />
            <div>
              <h3 className="text-xs text-slate-400">Phone</h3>
              <a href={`tel:+${918012322922}`}>
                <h2 className="text-sm text-slate-100">+91-8012322922</h2>
              </a>
            </div>
          </li>
          <li className="flex items-center gap-5">
            <IoIosMail className="h-6 w-6 fill-slate-400" />
            <div>
              <h3 className="text-xs text-slate-400">Email</h3>
              <a href={"mailto:pavithran.soft@gmail.com"}>
                <h2 className="text-sm text-slate-100">
                  pavithran.soft@gmail.com
                </h2>
              </a>
            </div>
          </li>
          <li className="flex items-center gap-5">
            <IoMdPin className="h-6 w-6 fill-slate-400" />
            <div>
              <h3 className="text-xs text-slate-400">Location</h3>
              <h2 className="text-sm text-slate-100">Chennai</h2>
            </div>
          </li>
        </ul>
        <a
          href={
            "https://drive.google.com/file/d/13CIPjQSDst0wdNnWRZquKBbiB-Sh4oiI/view?usp=sharing"
          }
          target="_blank"
          className="flex items-center justify-center gap-2 bg-green-500 hover:bg-violet-600 p-2 rounded-b-md"
        >
          <IoMdDownload className="h-6 w-6" />
          <h2 className="text-sm font-medium">Download CV</h2>
          <IoIosPaper className="h-6 w-6" />
        </a>
      </div>
    </div>
  );
};

export default Home;
