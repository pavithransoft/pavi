import developer from "../assets/developer.png";

const Home = () => {
  return (
    <section className="bg-slate-100 text-slate-900 pt-36 pb-20">
      <div className="w-3/4 m-auto grid grid-cols-2 gap-10">
        <img src={developer} alt="Developer" className="" />
        <img src={developer} alt="Developer" className="" />
      </div>
    </section>
  );
};

export default Home;
