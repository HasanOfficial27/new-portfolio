import { useState, useEffect } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Navbar shadow on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll helper
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const navLinks = [
    { label: "Home", id: "hero" },
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ];

  const skills = [
    { name: "React / Next.js", level: 95 },
    { name: "Tailwind CSS", level: 92 },
    { name: "Node.js / Express", level: 88 },
    { name: "TypeScript", level: 85 },
    { name: "Figma / Design", level: 80 },
    { name: "SEO & Performance", level: 78 },
  ];

  const projects = [
    {
      title: "SaaS Dashboard",
      img: "https://picsum.photos/id/1/600/400",
      tags: ["React", "Tailwind", "Firebase"],
    },
    {
      title: "E-Commerce App",
      img: "https://picsum.photos/id/20/600/400",
      tags: ["Next.js", "Stripe", "MongoDB"],
    },
    {
      title: "Portfolio CMS",
      img: "https://picsum.photos/id/26/600/400",
      tags: ["WordPress", "PHP", "REST API"],
    },
    {
      title: "AI Chatbot",
      img: "https://picsum.photos/id/60/600/400",
      tags: ["Python", "FastAPI", "OpenAI"],
    },
    {
      title: "Task Manager",
      img: "https://picsum.photos/id/180/600/400",
      tags: ["Vue", "Vite", "Pinia"],
    },
    {
      title: "Fitness Tracker",
      img: "https://picsum.photos/id/250/600/400",
      tags: ["React Native", "GraphQL"],
    },
  ];

  return (
    <div className="font-sans text-gray-800 scroll-smooth bg-white">
      {/* ===== NAVBAR ===== */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white/90 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a
            href="#hero"
            className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
          >
            Hasan<span className="text-gray-800">.</span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex gap-8 font-medium">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="hover:text-indigo-600 transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <i className={`fa-solid ${menuOpen ? "fa-xmark" : "fa-bars"}`} />
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden ${menuOpen ? "block" : "hidden"} bg-white/95 backdrop-blur-md shadow-xl absolute top-full left-0 w-full`}
        >
          <div className="flex flex-col px-6 pb-6 gap-4 font-medium">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-left py-2 border-b border-gray-100"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <section
        id="hero"
        className="min-h-screen flex items-center bg-gradient-to-br from-indigo-50 via-white to-purple-50 pt-20"
      >
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center">
          <div className="w-full md:w-1/2">
            <p className="text-indigo-600 font-semibold mb-2 tracking-wide">
              👋 Hello, I’m
            </p>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4">
              Mohammad <br />
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Hasan
              </span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              A passionate full‑stack developer crafting clean, performant web
              applications with modern technologies.
            </p>
            <div className="flex gap-4">
              <button
                onClick={() => scrollTo("projects")}
                className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-full shadow-lg hover:bg-indigo-700 transition-all"
              >
                View Work
              </button>
              <button
                onClick={() => scrollTo("contact")}
                className="px-8 py-3 border-2 border-indigo-600 text-indigo-600 font-semibold rounded-full hover:bg-indigo-50 transition-all"
              >
                Hire Me
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center">
            <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 p-1 shadow-2xl">
              <div className="w-full h-full rounded-full bg-white overflow-hidden">
                <img
                  src="https://picsum.photos/id/64/400/400"
                  alt="Hasan"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center gap-12">
          <div className="w-full lg:w-1/2">
            <img
              src="https://picsum.photos/id/177/600/500"
              alt="Working"
              className="rounded-3xl shadow-2xl w-full object-cover"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <p className="text-indigo-600 font-semibold mb-1">About Me</p>
            <h2 className="text-4xl font-bold mb-6">
              Turning ideas into digital reality
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              I’m a full‑stack developer with 4+ years of experience building
              scalable web apps, APIs, and stunning user interfaces. I love
              solving real‑world problems with clean code and modern design.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              When I’m not coding, you’ll find me exploring new tech,
              contributing to open‑source, or sipping a cup of coffee.
            </p>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-full hover:bg-indigo-700 transition-all"
            >
              <i className="fa-solid fa-download" /> Download CV
            </a>
          </div>
        </div>
      </section>

      {/* ===== SKILLS ===== */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-indigo-600 font-semibold text-center mb-1">
            My Skills
          </p>
          <h2 className="text-4xl font-bold text-center mb-16">
            Technologies I work with
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-1 text-sm font-medium">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-indigo-600 h-2.5 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROJECTS ===== */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-indigo-600 font-semibold text-center mb-1">
            Portfolio
          </p>
          <h2 className="text-4xl font-bold text-center mb-16">
            Recent Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className="overflow-hidden h-52">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-indigo-50 text-indigo-700 text-xs font-semibold px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button className="px-8 py-3 border-2 border-indigo-600 text-indigo-600 font-semibold rounded-full hover:bg-indigo-50 transition-all">
              View All Projects <i className="fa-solid fa-arrow-right ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap gap-12">
          <div className="w-full lg:w-1/2">
            <p className="text-indigo-600 font-semibold mb-1">Contact</p>
            <h2 className="text-4xl font-bold mb-6">Let’s work together</h2>
            <p className="text-gray-600 mb-8">
              Have a project in mind? Let’s chat. Fill out the form and I’ll get
              back to you within 24 hours.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <i className="fa-solid fa-envelope text-indigo-600 text-xl" />
                <span>hasan@example.com</span>
              </div>
              <div className="flex items-center gap-3">
                <i className="fa-solid fa-location-dot text-indigo-600 text-xl" />
                <span>Rajshahi, Bangladesh</span>
              </div>
              <div className="flex gap-4 mt-6">
                <a
                  href="#"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600 hover:bg-indigo-600 hover:text-white transition-all"
                >
                  <i className="fa-brands fa-github" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600 hover:bg-indigo-600 hover:text-white transition-all"
                >
                  <i className="fa-brands fa-linkedin-in" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600 hover:bg-indigo-600 hover:text-white transition-all"
                >
                  <i className="fa-brands fa-twitter" />
                </a>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <form className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-5 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-5 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all"
                />
              </div>
              <div className="mb-6">
                <textarea
                  rows="5"
                  placeholder="Your Message"
                  className="w-full px-5 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all"
              >
                Send Message <i className="fa-solid fa-paper-plane ml-2" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-gray-900 text-gray-300 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <p>
            &copy; {new Date().getFullYear()} Mohammad Hasan. All rights
            reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
