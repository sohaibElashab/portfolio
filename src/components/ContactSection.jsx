import React from "react";
import {
  Mail,
  MapPin,
  Award,
} from "lucide-react";
import { motion } from "framer-motion";

const ContactSection = ({ handleHover , social }) => {
  return (
    <section id="contact" className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="flex flex-col items-center text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-3"></div>
            <p className="mt-6 text-gray-700 dark:text-gray-300 max-w-2xl">
              I'm always open to discussing new projects, opportunities, or just
              having a good conversation about development.
            </p>
          </motion.div>

          {/* Contact Info Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Mail,
                title: "Email",
                text: "sohaibelashab06@gmail.com",
                bg: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
              },
              {
                icon: MapPin,
                title: "Location",
                text: "Marrakech, Morocco",
                bg: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
              },
              {
                icon: Award,
                title: "Availability",
                text: "Open to opportunities",
                bg: "bg-green-500/10 text-green-600 dark:text-green-400",
              },
            ].map(({ icon: Icon, title, text, bg }, i) => (
              <motion.div
                key={i}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
              >
                <div className="flex items-center">
                  <div className={`p-3 rounded-lg ${bg} mr-4`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white">
                      {title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {text}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Social Icons */}
          <motion.div
            className="flex justify-center space-x-4 mt-8"
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
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
