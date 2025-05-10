import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { futures } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const FutureCard = ({ future }) => (
  <VerticalTimelineElement
    contentStyle={{
      background: "#1d1836",
      color: "#fff",
    }}
    contentArrowStyle={{ borderRight: "7px solid  #232631" }}
    date={future.date}
    iconStyle={{ background: future.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={future.icon}
          alt={future.company_name}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }
  >
    <div>
      <h3 className="text-white text-[24px] font-bold">{future.title}</h3>
      <p
        className="text-secondary text-[16px] font-semibold"
        style={{ margin: 0 }}
      >
        {future.company_name}
      </p>
    </div>
    <ul className="mt-5 list-disc ml-5 space-y-2">
      {future.points.map((point, index) => (
        <li
          key={`future-point-${index}`}
          className="text-white-100 text-[14px] pl-1 tracking-wider"
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);
//render the point {point}

const Future = () => {
  return (
    <>
      <motion.div>
        <p className={styles.sectionSubText}>What I plan to do in the future</p>
        <h2 className={styles.sectionHeadText}>Future Plans</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          The following outlines my 1-, 2-, 5-, and 10-year future plans. It
          highlights my aspirations, growth trajectory, and commitment to making
          a meaningful impact through research, technology, and policy.
        </motion.p>
      </div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {futures.map((future, index) => (
            <FutureCard key={index} future={future} /> //the {experience} will be passed above in Experience Card
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Future, ""); //the empty means no id, which means will not move to the navigation bar link on top
