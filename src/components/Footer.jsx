import { FaLinkedinIn, FaGithub, FaReact } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-50 grid place-items-center">
      <section className="grid grid-cols-3 place-items-center gap-36 py-10 2xl:py-16">
        <div className="font-light text-center">
          <h2 className="text-xl 2xl:text-4xl font-medium py-4">Location</h2>
          <p className="py-1 2xl:text-3xl 2xl:leading-relaxed">
            Plot No. 4, Saravana Nagar, <br />
            Sholinganallur, Chennai, Tamil Nadu,
            <br />
            India - 600119
          </p>
        </div>
        <div className="font-light text-center">
          <h2 className="text-xl 2xl:text-4xl font-medium py-5">Follow</h2>
          <p className="grid grid-cols-2 place-items-center gap-5">
            <FaLinkedinIn className="h-5 w-5 2xl:h-9 2xl:w-9 cursor-pointer" />
            <FaGithub className="h-5 w-5 2xl:h-9 2xl:w-9 cursor-pointer" />
          </p>
        </div>
        <div className="font-light text-center">
          <h2 className="text-xl 2xl:text-4xl font-medium py-4">Contact</h2>
          <p className="py-1 2xl:text-3xl 2xl:leading-relaxed">
            pavithran.soft@gmail.com <br />
            +91 8012322922
          </p>
        </div>
      </section>
      <hr className="border border-slate-600 w-full" />
      <p className="flex items-center gap-1 font-thin text-sm 2xl:text-2xl p-10 2xl:p-14">
        Made in dp &copy; 2024 . powered by
        <span>
          <FaReact className="fill-cyan-600" />
        </span>
        React.
      </p>
    </footer>
  );
};

export default Footer;
