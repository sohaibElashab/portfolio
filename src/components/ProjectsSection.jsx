import { motion } from "framer-motion";
import { ExternalLink, FolderSearch } from "lucide-react";

const ProjectsSection = ({ handleHover }) => {
  const projects = [
    {
      title: "Demenagement Platform",
      description: "A moving service platform built with Node.js and React.js.",
      image: "./assets/moving.jpg",
      tech: ["Node.js", "React.js", "Nodemailer"],
      link: "https://elboustanitrans.com/",
      featured: true,
    },
    {
      title: "Social Media Platform",
      description:
        "A feature-rich social media platform developed using Laravel and Vue.js.",
      image: "./assets/social.png",
      tech: ["Laravel", "Vue.js", "MySQL"],
      link: "https://github.com/sohaibElashab/socialchat",
      featured: true,
    },
    {
      title: "Web Scraping Tool",
      description:
        "A data extraction and scraping tool built with Django and React.",
      image: "./assets/scraping.png",
      tech: ["Django", "React.js", "MongoDB"],
      link: "https://github.com/sohaibElashab/Slinker",
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 max-w-6xl flex flex-col items-center">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto"></div>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-6 mb-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {projects.map((project, index) => (
            <motion.div
              className="bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
              whileHover={{ scale: 1.05 }}
              key={index}
            >
              <div className="relative overflow-hidden h-64">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                  <h3 className="text-2xl font-bold text-white">
                    {project.title}
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-500/20 text-blue-500 backdrop-blur-sm rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                >
                  View Project <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.a
          href="https://github.com/sohaibElashab"
          target="_blank"
          className="w-fit mt-10 flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-full transition-all"
          onMouseEnter={() => handleHover(true)}
          onMouseLeave={() => handleHover(false)}
          whileHover={{ scale: 1.05 }}
        >
          <span>Explore More</span>
          <motion.div
            animate={{ y: [0, 3, 0] }}
            transition={{ repeat: Infinity, duration: 1 }}
          >
            <FolderSearch className="w-4 h-4" />
          </motion.div>
        </motion.a>
      </div>
    </section>
  );
};

export default ProjectsSection;
