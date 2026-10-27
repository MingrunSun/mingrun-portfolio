import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";

import { fadeIn, textVariant } from "../utils/motion";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";

const overview = [
  "I’m a Ph.D. candidate in Health Services Research at Baylor University, with a background in applied economics and quantitative research.",
  "My research focuses on how institutional policies and educational pathways shape student outcomes, using administrative data and causal inference methods. I am also interested in the responsible use of artificial intelligence, particularly how AI can support human reasoning, interpretation, and decision-making without replacing human judgment.",
  "Across my work, I seek to connect rigorous empirical research with practical applications, bringing together economics, technology, and public policy.",
];

const ServiceCard = ({ index, title, subtitle, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt={title}
          className="w-16 h-16 object-contain"
        />

        <div className="flex flex-col items-center gap-1">
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
          <p className="text-secondary text-[14px] text-center">{subtitle}</p>
        </div>
      </div>
    </motion.div>
  </Tilt>
);
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      {overview.map((paragraph, index) => (
        <motion.p
          key={`overview-${index}`}
          variants={fadeIn("", "", 0.1 + index * 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          {paragraph}
        </motion.p>
      ))}

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} /> //spread the property all coming from orign, looping over
        ))}
      </div>
    </>
  );
};
export default SectionWrapper(About, "about");
