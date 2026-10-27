import { github } from "../assets";

const SHOW_GITHUB = false;

const emails = ["mingrunsun@gmail.com", "mingrun_sun2@baylor.edu"];

const Footer = () => {
  return (
    <footer className="relative z-10 w-full px-6 sm:px-16 pb-10 pt-6 flex flex-col items-center gap-4 text-center">
      <p className="text-secondary text-[14px] uppercase tracking-wider">
        Get in touch
      </p>
      <div className="flex flex-col sm:flex-row sm:gap-8 gap-2 items-center">
        {emails.map((email) => (
          <a
            key={email}
            href={`mailto:${email}`}
            className="text-white-100 text-[16px] hover:text-[#915EFF] transition-colors"
          >
            {email}
          </a>
        ))}
      </div>
      {/* GitHub link hidden for now. Set SHOW_GITHUB to true to show it. */}
      {SHOW_GITHUB && (
        <a
          href="https://github.com/MingrunSun"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="black-gradient w-10 h-10 rounded-full flex justify-center items-center hover:scale-110 transition-transform"
        >
          <img src={github} alt="GitHub" className="w-1/2 h-1/2 object-contain" />
        </a>
      )}
      <p className="text-secondary text-[12px] mt-2">
        © {new Date().getFullYear()} Mingrun Sun
      </p>
    </footer>
  );
};

export default Footer;
