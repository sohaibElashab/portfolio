import React, { useState } from "react";
import {
  Sun,
  Moon,
  Briefcase,
  GraduationCap,
  Code,
  User,
  MessageSquare,
} from "lucide-react";
const Nav = ({
  darkMode,
  setDarkMode,
  activeSection,
  setActiveSection,
  handleHover,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navItems = [
    { id: "about", label: "About", icon: User },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "projects", label: "Projects", icon: GraduationCap },
    { id: "skills", label: "Skills", icon: Code },
    { id: "contact", label: "Contact", icon: MessageSquare },
  ];

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
      setMobileMenuOpen(false);
    }
  };
  return (
    <nav className="fixed w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md z-40 py-4 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <h1
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            onMouseEnter={() => handleHover(true)}
            onMouseLeave={() => handleHover(false)}
          >
            SE.
          </h1>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`flex items-center space-x-2 text-sm font-medium transition-colors relative group
                          ${
                            activeSection === id
                              ? "text-blue-600 dark:text-blue-400"
                              : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                          }`}
                onMouseEnter={() => handleHover(true)}
                onMouseLeave={() => handleHover(false)}
              >
                <Icon className="w-4 h-4" />
                <span>{label}</span>
                {activeSection === id && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-500 dark:bg-blue-400" />
                )}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 dark:bg-blue-400 transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              onMouseEnter={() => handleHover(true)}
              onMouseLeave={() => handleHover(false)}
            >
              {darkMode ? (
                <Sun className="text-white w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>

            <button
              className="md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <div className="w-6 flex flex-col items-end space-y-1.5">
                <span
                  className={`block h-0.5 bg-gray-800 dark:bg-gray-200 transition-all duration-300 ${
                    mobileMenuOpen ? "w-6 rotate-45 translate-y-2" : "w-6"
                  }`}
                ></span>
                <span
                  className={`block h-0.5 bg-gray-800 dark:bg-gray-200 transition-all duration-300 ${
                    mobileMenuOpen ? "opacity-0" : "w-4"
                  }`}
                ></span>
                <span
                  className={`block h-0.5 bg-gray-800 dark:bg-gray-200 transition-all duration-300 ${
                    mobileMenuOpen ? "w-6 -rotate-45 -translate-y-2" : "w-5"
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden fixed inset-0 z-30 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md transition-transform duration-300 h-[100vh] ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="absolute top-6 right-6 px-3 py-1.5 rounded-full bg-gray-200 dark:bg-gray-800 
             hover:bg-gray-300 dark:hover:bg-gray-700 transition-all duration-200"
          onClick={() => setMobileMenuOpen(false)}
        >
          <span className="text-gray-700 dark:text-gray-300 text-xl font-bold">
            ✕
          </span>
        </button>
        <div className="container h-full mx-auto px-4 py-20 flex flex-col justify-center">
          <div className="space-y-8">
            {navItems.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`flex items-center space-x-4 text-xl font-medium w-full py-3 border-b border-gray-100 dark:border-gray-800
                          ${
                            activeSection === id
                              ? "text-blue-600 dark:text-blue-400"
                              : "text-gray-800 dark:text-gray-200"
                          }`}
              >
                <Icon className="w-6 h-6" />
                <span>{label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
