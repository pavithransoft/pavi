import { services } from "../assets/services/services";
import { assets } from "./../assets/assets";

const Home = () => {
  return (
    <section className="bg-white text-slate-900 pb-20">
      <div className="relative">
        <p className="absolute grid place-items-center inset-0 z-1 text-3xl text-center text-white bg-white bg-opacity-15 font-dancing">
          I enjoy coding things from scratch and bringing ideas to life as
          interactive experiences in the browser.
        </p>
        <img
          src={assets.banner}
          alt="Developer"
          className="w-full h-full object-cover z-0"
        />
      </div>
      <div className="grid grid-cols-2 place-items-center pt-10 pb-20">
        <div className="w-4/5 m-auto">
          <img src={assets.developer} alt="Developer" />
        </div>
        <div className="w-4/5 m-auto">
          <h2 className="text-center text-3xl font-mono py-5 text-slate-950">
            Who am I?
          </h2>
          <p className="text-center font-dancing text-2xl text-slate-600">
            I am a creative thinker, designer, and developer who enriches brands
            and delivers comprehensive technology services that meet the full
            spectrum of business needs.
          </p>
        </div>
      </div>
      <div className="bg-slate-950 py-14">
        <h2 className="text-2xl text-slate-50 text-center pb-5 font-dancing">
          About me
        </h2>
        <p className="px-48 text-center text-lg text-slate-400 font-mono">
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
        <h2 className="text-center text-2xl font-mono text-slate-950 py-20">
          My Services
        </h2>
        <div className="grid grid-cols-3 place-items-center gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="grid place-items-center gap-5 bg-slate-100 hover:bg-slate-200 w-full py-5 rounded-lg border"
            >
              <img
                src={service.icon}
                alt={service.title}
                className="h-12 w-12"
              />
              <p className="font-medium text-slate-700">{service.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
