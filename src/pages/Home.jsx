import { services } from "../assets/services/services";
import { assets } from "./../assets/assets";

const Home = () => {
  return (
    <section className="bg-white text-slate-900 py-16">
      <div className="relative">
        <p className="absolute grid place-items-center inset-0 z-1 text-xs text-center text-white bg-white bg-opacity-15 font-mono px-1">
          I enjoy coding things from scratch and bringing ideas to life as
          interactive experiences in the browser.
        </p>
        <img
          src={assets.banner}
          alt="Developer"
          className="w-full h-full object-cover z-0"
        />
      </div>
      <div className="grid sm:grid-cols-2 gap-10 place-items-center py-16 px-3">
        <div className="sm:w-4/5 m-auto order-2 sm:order-1">
          <img src={assets.developer} alt="Developer" />
        </div>
        <div className="sm:w-4/5 m-auto order-1 sm:order-2">
          <h2 className="text-center text-2xl font-mono py-5 text-slate-950">
            Who am I?
          </h2>
          <p className="text-center text-xl text-slate-600 leading-relaxed">
            I am a creative thinker, designer, and developer who enriches brands
            and delivers comprehensive technology services that meet the full
            spectrum of business needs.
          </p>
        </div>
      </div>
      <div className="bg-slate-950 py-8">
        <h2 className="text-2xl text-slate-50 text-center pb-8 border-b border-slate-700">
          About me
        </h2>
        <p className="px-3 pt-8 sm:px-48 text-center text-slate-400 font-mono leading-loose">
          I am a passionate, friendly, and dedicated Frontend Developer who
          thrives on challenging my skills as both a UI designer and developer.
          My work is not just my profession, but also my hobby. This passion
          drives me to continuously push the boundaries of my knowledge and
          skills in pursuit of perfection. I am adaptable, quick to learn, and
          always focused on security and design, which makes me an excellent
          collaborator.
        </p>
      </div>
      <div className="w-3/4 m-auto">
        <h2 className="text-center text-xl sm:text-2xl font-mono text-slate-950 py-16">
          My Services
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 place-items-center gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="grid place-items-center gap-4 bg-slate-100 hover:bg-slate-200 w-full py-4 rounded-lg border"
            >
              <img
                src={service.icon}
                alt={service.title}
                className="h-10 w-10 sm:h-16 sm:w-16"
              />
              <p className="font-medium text-slate-700 text-xs text-center">
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
