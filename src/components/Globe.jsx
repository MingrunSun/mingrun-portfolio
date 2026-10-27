import { motion } from "framer-motion";

import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

// Stand-in for the Contact section while the form is hidden:
// shows only the rotating Earth. Remove this from App.jsx when
// <Contact /> is restored (Contact already includes the Earth).
const Globe = () => {
  return (
    <div className="flex justify-center overflow-hidden">
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="w-full xl:h-[600px] md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Globe, "globe");
