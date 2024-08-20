import { FaLinkedinIn, FaGithub, FaReact } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-50">
      <section className="grid gap-8 sm:grid-cols-3 place-items-center py-8">
        <div className="text-center order-3 sm:order-1">
          <h2 className="text-lg font-medium py-1">Location</h2>
          <p className="py-1 text-sm text-slate-300 leading-relaxed">
            Plot No. 4, Saravana Nagar, <br />
            Sholinganallur, Chennai, Tamil Nadu, <br />
            India - 600119
          </p>
        </div>
        <div className="text-center order-2">
          <h2 className="text-lg font-medium py-1">Follow</h2>
          <div className="flex justify-center gap-4 py-2 text-slate-500">
            <FaLinkedinIn className="h-5 w-5 cursor-pointer" />
            <FaGithub className="h-5 w-5 cursor-pointer" />
          </div>
        </div>
        <div className="text-center order-1 sm:order-3">
          <h2 className="text-lg font-medium py-1">Contact</h2>
          <p className="py-1 text-sm leading-relaxed text-slate-300">
            pavithran.soft@gmail.com <br />
            +91 8012322922
          </p>
        </div>
      </section>
      <hr className="border border-slate-600 w-full" />
      <p className="flex items-center justify-center gap-1 font-thin text-xs p-5 text-center">
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
