import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Code, User, MapPin, Heart } from "lucide-react";

const AboutSection = () => {
  return (
    <motion.section
      id="about"
      className="py-24 bg-white dark:bg-gray-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col items-center mb-16">
            <motion.h2
              className="text-3xl md:text-4xl font-bold inline-block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              About Me
            </motion.h2>
            <motion.div
              className="w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            ></motion.div>
          </div>

          <div className="grid md:grid-cols-12 gap-12 items-start">
            <motion.div
              className="md:col-span-4 flex flex-col items-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full transform -rotate-6 scale-105" />
                <motion.div
                  className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src="./assets/profile.jpg"
                    alt="Sohaib ELASHAB"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>

              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Sohaib ELASHAB
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">
                  Front-End Developer
                </p>
                <div className="flex items-center justify-center space-x-1">
                  <Heart className="w-4 h-4 text-red-500" fill="currentColor" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Based in Marrakech, Morocco
                  </span>
                </div>
              </motion.div>
            </motion.div>

            <div className="md:col-span-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="about-content">
                  <div className="prose prose-lg dark:prose-invert">
                    <motion.h3
                      className="text-2xl font-semibold mb-4 flex items-center text-gray-900 dark:text-white"
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      <User className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" />
                      Professional Journey
                    </motion.h3>
                    <motion.p
                      className="mb-6 text-gray-700 dark:text-gray-300"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      With over 4 years of experience in front-end development,
                      I've worked with cutting-edge technologies to create
                      exceptional user experiences. My focus has always been on
                      building responsive, accessible, and performance-optimized
                      web applications.
                    </motion.p>

                    <motion.h3
                      className="text-2xl font-semibold mb-4 flex items-center text-gray-900 dark:text-white"
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Code className="w-5 h-5 mr-2 text-purple-600 dark:text-purple-400" />
                      Technical Expertise
                    </motion.h3>
                    <motion.p
                      className="text-gray-700 dark:text-gray-300"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      I specialize in modern front-end frameworks including
                      React.js, Next.js, Angular, and Vue.js. My expertise
                      extends to state management, responsive design, and
                      creating seamless UI/UX experiences. I'm passionate about
                      clean code practices and developing scalable applications.
                    </motion.p>
                  </div>
                </div>

                <div className="about-content">
                  <div className="prose prose-lg dark:prose-invert">
                    <motion.h3
                      className="text-2xl font-semibold mb-4 flex items-center text-gray-900 dark:text-white"
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      <GraduationCap className="w-5 h-5 mr-2 text-yellow-600 dark:text-yellow-400" />
                      Education
                    </motion.h3>
                    <div className="flex items-center mb-6">
                      <motion.p
                        className="text-gray-700 dark:text-gray-300 m-0"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                      >
                        Professional Bachelor's Degree in Computer Science
                      </motion.p>
                    </div>
                    <motion.h3
                      className="text-2xl font-semibold mb-4 flex items-center text-gray-900 dark:text-white"
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      <MapPin className="w-5 h-5 mr-2 text-green-600 dark:text-green-400" />
                      Current Focus
                    </motion.h3>
                    <motion.p
                      className="mb-6 text-gray-700 dark:text-gray-300"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      Based in Marrakech, Morocco, I'm currently focusing on
                      advancing my frontend technology skills. I'm deeply
                      invested in modern frontend frameworks, component
                      architecture, and creating performant, accessible web
                      applications. I'm also exploring advanced CSS techniques,
                      state management solutions, and innovative approaches to
                      building intuitive user interfaces.
                    </motion.p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
