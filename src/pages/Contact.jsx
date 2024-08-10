import { FaEnvelope, FaPhoneVolume, FaMapMarkedAlt } from "react-icons/fa";

const Contact = () => {
  const iframeSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63722933.44855178!2d2.17736290000005!3d12.885896999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525b320cc24c8f%3A0x3af6807615e5e88a!2sTrends%20Mens%20Hostel%20%26%20PG!5e0!3m2!1sen!2sin!4v1723229508838!5m2!1sen!2sin";

  return (
    <section className="bg-slate-100 text-slate-900 pt-36 pb-20">
      <div className="w-3/4 m-auto grid grid-cols-2 gap-10">
        <div className="rounded overflow-hidden p-1 bg-white border hover:bg-slate-200">
          <iframe
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            src={iframeSrc}
            title="Map"
          ></iframe>
        </div>
        <div className="border p-5 rounded bg-slate-200">
          <h2 className="text-2xl font-medium pb-3 text-slate-900">
            {` Let's`} connect
          </h2>
          <p className="px-3">
            I look forward to connecting with you. <br /> If you have any
            questions or need further information, please feel free to reach out
            to me.
          </p>
          <span className="flex items-center gap-4 px-5 pt-10">
            <FaEnvelope className="h-7 w-7 fill-slate-700" />
            <p>pavithran.soft@gmail.com</p>
          </span>
          <span className="flex items-center gap-4 p-5">
            <FaPhoneVolume className="h-8 w-8 fill-slate-700" />
            <p>+91 8012322922</p>
          </span>
          <span className="flex items-center gap-4 px-5 pb-5">
            <FaMapMarkedAlt className="h-10 w-10 fill-slate-700" />
            <p>
              Plot No. 4, Saravana Nagar, Sholinganallur, Chennai, Tamil Nadu,
              India - 600119
            </p>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
