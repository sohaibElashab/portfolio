import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Download } from "lucide-react";

const HeroSection = ({ handleHover, social }) => {
  const terminalTextRef = useRef(null);

  useEffect(() => {
    if (!terminalTextRef.current) return;

    const messages = [
      "> Hello World! I'm Sohaib",
      "> Front-End Developer",
      "> Specializing in React, Vue & Angular",
      "> Based in Marrakech, Morocco",
      "> Scroll down to explore my work...",
    ];

    let currentText = "";
    let messageIndex = 0;
    let charIndex = 0;
    let typingSpeed = 100;
    let lineBreakSpeed = 500;

    const typeMessage = () => {
      if (messageIndex < messages.length) {
        if (charIndex < messages[messageIndex].length) {
          currentText += messages[messageIndex].charAt(charIndex);
          terminalTextRef.current.innerHTML = currentText;
          charIndex++;
          setTimeout(typeMessage, typingSpeed);
        } else {
          messageIndex++;
          charIndex = 0;
          currentText += "<br>";
          terminalTextRef.current.innerHTML = currentText;
          setTimeout(typeMessage, lineBreakSpeed);
        }
      }
    };

    typeMessage();
  }, []);

  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1.5 } }}
      >
        <motion.div
          className="absolute top-20 left-20 w-64 h-64 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-3xl"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/10 dark:bg-pink-500/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <motion.div
          className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col space-y-8">
            <motion.h1
              className="text-5xl md:text-7xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Sohaib ELASHAB
              </span>
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-gray-700 dark:text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Crafting{" "}
              <span className="font-semibold text-blue-600 dark:text-blue-400">
                scalable
              </span>{" "}
              &{" "}
              <span className="font-semibold text-purple-600 dark:text-purple-400">
                intuitive
              </span>{" "}
              digital experiences
            </motion.p>

            {/* Social Icons */}
            <motion.div
              className="flex space-x-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              {social.map(({ href, Icon }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
                  onMouseEnter={() => handleHover(true)}
                  onMouseLeave={() => handleHover(false)}
                  whileHover={{ scale: 1.1 }}
                >
                  <Icon className="w-5 h-5 text-gray-800 dark:text-gray-200" />
                </motion.a>
              ))}
            </motion.div>

            {/* CV Button */}
            <motion.a
              href="https://drive.google.com/file/d/1UbyYpxebbaFPbSCsx5whEyqX_Y_KXfkT/view?usp=sharing"
              className="w-fit flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-full transition-all"
              onMouseEnter={() => handleHover(true)}
              onMouseLeave={() => handleHover(false)}
              whileHover={{ scale: 1.05 }}
            >
              <span>Download Resume</span>
              <motion.div
                animate={{ y: [0, 3, 0] }}
                transition={{ repeat: Infinity, duration: 1 }}
              >
                <Download className="w-4 h-4" />
              </motion.div>
            </motion.a>
          </div>

          {/* Terminal Effect */}
          <motion.div
            className="hidden md:block bg-gray-900 border border-gray-700 rounded-lg shadow-xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="flex items-center px-4 py-3 bg-gray-800 border-b border-gray-700">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="ml-4 text-xs text-gray-400">
                developer@portfolio:~
              </div>
            </div>
            <div
              ref={terminalTextRef}
              className="p-4 h-80 overflow-y-auto font-mono text-sm text-green-400"
            >
              <motion.div
                className="animate-pulse mt-1 inline-block h-5 w-2 bg-green-400"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ repeat: Infinity, duration: 1 }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1 }}
      >
        <ChevronDown className="w-6 h-6 text-gray-600 dark:text-gray-400" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
