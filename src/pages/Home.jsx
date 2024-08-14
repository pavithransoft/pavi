// import developer from "../assets/developer.png";

import { services } from "../assets/services/services";

const Home = () => {
  return (
    <section className="bg-slate-100 text-slate-900 pt-36 pb-20">
      <div className="w-3/4 m-auto">
        <h2 className="text-center text-2xl font-mono font-medium text-slate-700 py-20">
          My Services
        </h2>
        <div className="grid grid-cols-3 place-items-center gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="grid place-items-center gap-5 bg-slate-200 w-full py-5 rounded-lg border-2 border-slate-300"
            >
              <img
                src={service.icon}
                alt={service.title}
                className="h-24 w-24"
              />
              <p className="text-xl font-medium text-slate-700">
                {service.title}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* <div className="w-3/4 m-auto grid grid-cols-2 gap-10">
        <img src={developer} alt="Developer" className="" />
        <img src={developer} alt="Developer" className="" />
      </div> */}
    </section>
  );
};

export default Home;
