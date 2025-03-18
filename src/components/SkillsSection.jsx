import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaSass,
  FaReact,
  FaVuejs,
  FaNodeJs,
  FaLaravel,
  FaFigma,
  FaGithub,
  FaAngular,
  FaPython,
} from "react-icons/fa6";
import {
  SiTailwindcss,
  SiJavascript,
  SiNextdotjs,
  SiMongodb,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiNestjs,
  SiDjango,
  SiJira,
  SiTrello,
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";

const skills = [
  { name: "HTML5", icon: FaHtml5 },
  { name: "CSS3", icon: FaCss3Alt },
  { name: "Bootstrap", icon: FaBootstrap },
  { name: "Sass", icon: FaSass },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "JavaScript", icon: SiJavascript },
  { name: "React", icon: FaReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Vue.js", icon: FaVuejs },
  { name: "Angular", icon: FaAngular },
  { name: "Node.js", icon: FaNodeJs },
  { name: "NestJS", icon: SiNestjs },
  { name: "PHP Laravel", icon: FaLaravel },
  { name: "Python", icon: FaPython },
  { name: "Django", icon: SiDjango },
  { name: "MongoDB", icon: SiMongodb },
  { name: "SQL & MySQL", icon: GrMysql },
  { name: "GitHub", icon: FaGithub },
  { name: "Trello", icon: SiTrello },
  { name: "Jira", icon: SiJira },
  { name: "Photoshop", icon: SiAdobephotoshop },
  { name: "Illustrator", icon: SiAdobeillustrator },
  { name: "Figma", icon: FaFigma },
];

const carouselFadeIn = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { ease: [0.6, 0.01, 0.05, 0.95], duration: 1.5 },
  },
};

const SkillsSection = ({ darkMode }) => {
  const firstCarousel = skills.slice(0, Math.ceil(skills.length / 2));
  const secondCarousel = skills.slice(Math.ceil(skills.length / 2));

  return (
    <section
      id="skills"
      className="relative flex flex-col justify-center w-full text-center px-[2%] sm:px-[5%] my-28 overflow-x-clip"
    >
      <div className="flex flex-col items-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold inline-block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
          Skills
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
      </div>

      <div className="absolute bg-[#ffb7ff] dark:bg-[#9e5a84] top-[16rem] right-[4rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] -z-10"></div>
      <div className="absolute bg-[#dbd7fb] dark:bg-[#676394] top-[8rem] left-[-35rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] -z-10"></div>

      <motion.div
        variants={carouselFadeIn}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="flex mt-24"
      >
        <motion.div
          transition={{ duration: 14, ease: "linear", repeat: Infinity }}
          initial={{ translateX: 0 }}
          animate={{ translateX: "-50%" }}
          className="flex gap-14 md:gap-16 pr-16"
        >
          {[...firstCarousel, ...firstCarousel].map((skill, index) => (
            <motion.li
              key={index}
              className={`w-32 h-32 md:w-52 md:h-52 flex flex-col items-center justify-center gap-2 text-8xl ${
                darkMode ? "text-white" : "text-gray-700"
              } p-4 border border-black/[0.1] bg-white/10 rounded-xl shadow-lg backdrop-blur-lg`}
            >
              {skill.icon()}{" "}
              <span className="text-sm md:text-lg">{skill.name}</span>
            </motion.li>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        variants={carouselFadeIn}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="flex mt-14 md:mt-16"
      >
        <motion.div
          transition={{ duration: 14, ease: "linear", repeat: Infinity }}
          initial={{ translateX: "-50%" }}
          animate={{ translateX: 0 }}
          className="flex gap-14 md:gap-16 pr-16"
        >
          {[...secondCarousel, ...secondCarousel].map((skill, index) => (
            <motion.li
              key={index}
              className={`w-32 h-32 md:w-52 md:h-52 flex flex-col items-center justify-center gap-2 text-8xl ${
                darkMode ? "text-white" : "text-gray-700"
              } p-4 border border-black/[0.1] bg-white/10 rounded-xl shadow-lg backdrop-blur-lg`}
            >
              {skill.icon()}{" "}
              <span className="text-sm md:text-lg">{skill.name}</span>
            </motion.li>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SkillsSection;
