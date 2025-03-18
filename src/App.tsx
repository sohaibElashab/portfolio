import { useEffect, useState, useRef } from "react";
import { useInView } from "react-intersection-observer";
import HeroSection from "./components/HeroSection";
import SkillsSection from "./components/SkillsSection";
import AboutSection from "./components/AboutSection";
import Nav from "./components/Nav";
import ExperienceSection from "./components/ExperienceSection";
import ContactSection from "./components/ContactSection";
import FooterSection from "./components/Footer";
import ProjectsSection from "./components/ProjectsSection";
import { Mail, Github, Linkedin, MessageCircle } from "lucide-react";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState("home");
  const [cursorHovering, setCursorHovering] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const cursorRef = useRef<HTMLDivElement>(null);

  const { ref: aboutRef, inView: aboutInView } = useInView({ threshold: 0.3 });
  const { ref: skillsRef, inView: skillsInView } = useInView({
    threshold: 0.3,
  });
  const { ref: experienceRef, inView: experienceInView } = useInView({
    threshold: 0.3,
  });
  const { ref: projectsRef, inView: projectsInView } = useInView({
    threshold: 0.3,
  });
  const { ref: contactRef, inView: contactInView } = useInView({
    threshold: 0.3,
  });

  const social = [
    { href: "https://github.com/sohaibElashab/", Icon: Github },
    { href: "https://www.linkedin.com/in/sohaib-elashab/", Icon: Linkedin },
    {
      href: "mailto:sohaibelashab06@gmail.com?subject=Let's Connect&body=Hi, I'd like to get in touch!",
      Icon: Mail,
    },
    { href: "https://wa.me/+212697851121", Icon: MessageCircle },
  ];

  useEffect(() => {
    if (!cursorRef.current) return;

    const handleMouseMove = (e: any) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPosition = window.scrollY;
      setScrollProgress((scrollPosition / totalHeight) * 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (aboutInView) setActiveSection("about");
    if (skillsInView) setActiveSection("skills");
    if (experienceInView) setActiveSection("experience");
    if (projectsInView) setActiveSection("projects");
    if (contactInView) setActiveSection("contact");
  }, [
    aboutInView,
    skillsInView,
    experienceInView,
    projectsInView,
    contactInView,
  ]);

  const handleHover = (isHovering: boolean) => {
    setCursorHovering(isHovering);
  };

  return (
    <div className={`min-h-screen ${darkMode ? "dark" : ""}`}>
      {/* Custom cursor */}
      <div
        ref={cursorRef}
        className={`hidden md:block fixed rounded-full pointer-events-none z-50 mix-blend-difference transition-all duration-100 ${
          cursorHovering
            ? "w-12 h-12 bg-white"
            : "w-6 h-6 border-2 border-white bg-transparent"
        }`}
      />

      {/* Scroll progress indicator */}
      <div className="fixed top-0 left-0 w-full h-1 z-50">
        <div
          className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
        {/* Navigation */}
        <Nav
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          handleHover={handleHover}
        />

        {/* Hero Section */}
        <HeroSection handleHover={handleHover} social={social} />

        {/* About Section */}
        <div ref={aboutRef}>
          <AboutSection />
        </div>

        {/* Experience Section */}
        <div ref={experienceRef}>
          <ExperienceSection />
        </div>

        {/* Projects Section */}
        <div ref={projectsRef}>
          <ProjectsSection handleHover={handleHover} />
        </div>

        {/* Skills Section */}
        <div ref={skillsRef}>
          <SkillsSection darkMode={darkMode} />
        </div>

        {/* Contact Section */}
        <div ref={contactRef}>
          <ContactSection handleHover={handleHover} social={social} />
        </div>

        {/* Footer */}
        <FooterSection />
      </div>
    </div>
  );
}

export default App;
