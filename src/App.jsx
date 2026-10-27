import { BrowserRouter } from "react-router-dom";

// HIDDEN SECTIONS (restore any time):
//   Future plans  -> add `Future,` to the import list below and `<Future />` after <Tech />
//   Testimonials -> add `Feedbacks,` to the import list below and `<Feedbacks />` after <Works />
//   Contact form -> add `Contact,` to the import list below and replace `<Globe />` with `<Contact />`
//                   (Globe is just the rotating Earth; Contact already includes it)
//                   (also needs EmailJS keys in .env and the "contact" link in src/constants/index.js navLinks)
import {
  About,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  Globe,
  StarsCanvas,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <div className="relative z-0">
          <Globe />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
