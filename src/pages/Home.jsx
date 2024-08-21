import { services } from "../assets/services/services";
import { assets } from "./../assets/assets";

const Home = () => {
  return (
    <section className="bg-white text-slate-900 py-16 2xl:py-32">
      <div className="relative">
        <p className="absolute grid place-items-center inset-0 z-1 text-xs sm:text-lg xl:text-3xl 2xl:text-5xl text-center text-white bg-white bg-opacity-15 font-mono px-1 lg:px-3">
          I enjoy coding things from scratch and bringing ideas to life as
          interactive experiences in the browser.
        </p>
        <img
          src={assets.banner}
          alt="Developer"
          className="w-full h-full object-cover z-0"
        />
      </div>
      <div className="grid sm:grid-cols-2 gap-10 sm:gap-3 place-items-center py-16 2xl:py-36 px-3">
        <div className="sm:w-11/12 m-auto order-2 sm:order-1">
          <img src={assets.developer} alt="Developer" />
        </div>
        <div className="sm:w-5/6 m-auto order-1 sm:order-2">
          <h2 className="text-center text-2xl xl:text-3xl 2xl:text-6xl font-mono py-5 text-slate-950">
            Who am I?
          </h2>
          <p className="text-center text-xl xl:text-2xl 2xl:text-5xl text-slate-600 leading-relaxed sm:font-dancing xl:leading-loose 2xl:leading-[5rem]">
            I am a creative thinker, designer, and developer who enriches brands
            and delivers comprehensive technology services that meet the full
            spectrum of business needs.
          </p>
        </div>
      </div>
      <div className="bg-slate-950 py-8 2xl:py-20">
        <h2 className="text-2xl 2xl:text-5xl text-slate-50 text-center pb-3 2xl:pb-10 border-b border-slate-800 sm:font-dancing">
          About me
        </h2>
        <p className="px-3 pt-8 sm:px-5 xl:px-20 text-center text-slate-400 font-mono leading-loose xl:text-xl 2xl:text-4xl 2xl:leading-[3.5rem]">
          I am a passionate, friendly, and dedicated Frontend Developer who
          thrives on challenging my skills as both a UI designer and developer.
          My work is not just my profession, but also my hobby. This passion
          drives me to continuously push the boundaries of my knowledge and
          skills in pursuit of perfection. I am adaptable, quick to learn, and
          always focused on security and design, which makes me an excellent
          collaborator.
        </p>
      </div>
      <div className="w-5/6 m-auto">
        <h2 className="text-center text-xl sm:text-2xl 2xl:text-5xl font-mono text-slate-950 py-16 2xl:py-32">
          My Services
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 place-items-center gap-6 md:gap-8 xl:gap-10 2xl:gap-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="grid place-items-center gap-4 2xl:gap-10 bg-slate-100 hover:bg-slate-200 w-full py-4 xl:py-6 2xl:py-10 rounded-lg border"
            >
              <img
                src={service.icon}
                alt={service.title}
                className="h-10 w-10 sm:h-16 sm:w-16 2xl:h-28 2xl:w-28"
              />
              <p className="font-medium text-slate-700 text-sm sm:text-base 2xl:text-4xl text-center">
                {service.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
