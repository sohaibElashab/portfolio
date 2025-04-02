import { motion } from "framer-motion";
import { Briefcase, Clock, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Front-End Developer",
    company: "LoftyService",
    location: "Marrakech",
    period: "Feb 2025 – Present",
    achievements: [
      "Enhanced UI consistency and usability by fixing design inconsistencies and improving responsiveness across various devices",
      "Developed a dynamic eCommerce builder page, enabling users to create and customize their online stores with an intuitive drag-and-drop interface",
      "Resolved critical front-end bugs that improved website stability and user experience, reducing reported UI issues by a significant margin",
      "Optimized application performance by refactoring code, implementing lazy loading, and reducing unnecessary re-renders",
      "Collaborated with designers and backend developers to streamline workflows and ensure seamless integration of new features",
    ],
  },
  {
    title: "Front-End Developer",
    company: "Niloom.ai",
    location: "New York",
    period: "Jan 2023 – Feb 2025",
    achievements: [
      "Developed and maintained dynamic front-end features using Vue.js, React.js, and Next.js, ensuring seamless user interactions",
      "Integrated AI-driven features into the platform, enhancing automation and user experience through machine learning models",
      "Conducted in-depth code reviews and debugging sessions to optimize performance, reducing load times by 30%",
      "Implemented modern UI/UX principles to enhance user engagement and accessibility",
      "Collaborated with backend engineers to integrate APIs, improving data retrieval efficiency",
      "Designed and executed automated end-to-end testing using TestSigma and Cypress, ensuring software reliability and performance",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "H BUSINESS SQUARE",
    location: "Rabat",
    period: "Nov 2021 – Feb 2022 & Dec 2022 – Apr 2023",
    achievements: [
      "Developed and optimized full-stack applications using Angular, NestJS, Vue.js, and Node.js, improving system efficiency",
      "Designed scalable and reusable UI components, reducing development time for future projects",
      "Integrated RESTful APIs and WebSockets to enhance real-time data communication",
      "Led debugging and performance-tuning initiatives, boosting backend response times by 40%",
      "Worked closely with cross-functional teams to deploy and scale applications across multiple environments",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Bigwall Technology",
    location: "Marrakech",
    period: "Oct 2022 – Dec 2022",
    achievements: [
      "Engineered responsive user interfaces using React.js and Angular, ensuring seamless performance across devices",
      "Developed and integrated smart contracts using Solidity and Ethers.js, enabling secure blockchain transactions",
      "Implemented Web3 functionalities to enhance decentralized applications (dApps) and improve blockchain interactions",
      "Optimized front-end performance by reducing redundant API calls, improving load times by 25%",
      "Enhanced accessibility and user experience by applying best design practices and modern frameworks",
    ],
  },
  {
    title: "Web Development Intern",
    company: "MOAJ - Agence Web",
    location: "Marrakech",
    period: "Jun 2022 – Aug 2022",
    achievements: [
      "Assisted in developing dynamic web applications using Angular and NestJS, contributing to a 20% increase in client engagement",
      "Collaborated with senior developers to troubleshoot and resolve bugs, ensuring stable application releases",
      "Integrated version control best practices using Git, streamlining development workflows",
    ],
  },
  {
    title: "Web Development Intern",
    company: "Eysi Agence Web",
    location: "Marrakech",
    period: "Mar 2020 – Apr 2020 & Jul 2021 – Sep 2021",
    achievements: [
      "Developed a web application for soccer field reservations using Laravel and Vue.js, improving booking efficiency",
      "Created a web scraping solution with Django, Scrapy, and MongoDB, automating data collection",
      "Implemented Redux for state management, enhancing the performance of a React.js-based project",
      "Utilized Git for version control and collaborated with a team to optimize the deployment process",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="flex flex-col items-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold inline-block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Professional Experience
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
          </motion.div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="experience-item relative pl-8 md:pl-0 md:grid md:grid-cols-5 md:gap-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="absolute md:relative flex md:justify-center">
                  <div className="md:hidden absolute top-5 -left-1 w-2 h-full bg-gradient-to-b from-blue-500 to-purple-500"></div>
                  <div className="md:hidden absolute top-5 -left-[7px] w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>

                  <div className="hidden md:flex md:flex-col md:items-center">
                    <div className="flex flex-col items-center space-y-1 text-gray-600 dark:text-gray-300">
                      <Clock className="w-4 h-4" />
                      {exp.period.includes("&") ? (
                        exp.period.split("&").map((p, i) => (
                          <span key={i} className="text-sm block">
                            {p.trim()}
                          </span>
                        ))
                      ) : (
                        <span className="text-sm">{exp.period}</span>
                      )}
                    </div>
                    <div className="mt-3 h-full w-px bg-gradient-to-b from-blue-500 to-purple-500"></div>
                  </div>
                </div>

                <motion.div
                  className="md:col-span-4"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100 dark:border-gray-700">
                    <div className="flex flex-wrap justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {exp.title}
                        </h3>
                        <p className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400">
                          <Briefcase className="w-4 h-4" />
                          <span>{exp.company}</span>
                        </p>
                      </div>
                      <div className="mt-2 md:mt-0 flex items-center text-gray-600 dark:text-gray-400">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <p className="md:hidden text-sm text-gray-500 dark:text-gray-500 mb-4">
                      {exp.period}
                    </p>

                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="text-gray-700 dark:text-gray-300 flex items-start"
                        >
                          <span className="mr-2 text-blue-500 dark:text-blue-400 mt-1">
                            •
                          </span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
