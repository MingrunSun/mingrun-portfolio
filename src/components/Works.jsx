import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  subtitle,
  description,
  note,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="sm:w-[360px] w-full flex"
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl w-full flex flex-col"
      >
        <div className="relative w-full h-[230px]">
          {image ? (
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover rounded-2xl"
            />
          ) : (
            <div className="w-full h-full rounded-2xl green-pink-gradient p-[1px]">
              <div className="w-full h-full rounded-2xl bg-black-100 flex items-center justify-center">
                <span className="text-white text-[64px] font-black opacity-20 select-none">
                  {name.charAt(0)}
                </span>
              </div>
            </div>
          )}
          {/* GitHub button only shows when the project has a source_code_link */}
          {source_code_link && (
            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={github}
                  alt="github"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          )}
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          {subtitle && (
            <p className="mt-1 text-white-100 text-[15px] font-medium italic">
              {subtitle}
            </p>
          )}
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
          {note && (
            <p className="mt-3 text-[#915EFF] text-[13px] font-semibold">
              {note}
            </p>
          )}
        </div>
        <div className="mt-auto">
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div>
        <p className={styles.sectionSubText}>MY WORK</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          A selection of research papers and applied projects. Each one pairs a
          question about education, technology, or policy with administrative
          data and causal inference methods, and some include links to the code.
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project=${index}`} index={index} {...project} />
          //want to return ProjectCard
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
