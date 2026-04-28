import { useState, useEffect } from "react";

// Functional icons (all from Lucide)
import {
  Menu,
  X,
  Code2,
  Paintbrush,
  Smartphone,
  LineChart,
  Download,
  ArrowRight,
  ExternalLink,
  Mail,
  MapPin,
  Send,
} from "lucide-react";

// Brand icons only (from react-icons)
import {
  FaGithub,
  FaLinkedinIn,
  FaNode,
  FaReact,
  FaTwitter,
} from "react-icons/fa";
import { SiReact, SiNodedotjs, SiX } from "react-icons/si";

export default function Home2() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const navLinks = [
    { label: "Home", id: "hero" },
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Experience", id: "experience" },
    { label: "Projects", id: "projects" },
    { label: "Testimonials", id: "testimonials" },
    { label: "Contact", id: "contact" },
  ];

  // ---------- DATA ----------
  const services = [
    {
      icon: Code2,
      title: "Web Development",
      desc: "Full‑stack apps with React, Next.js, Node, and modern databases.",
    },
    {
      icon: Paintbrush,
      title: "UI/UX Design",
      desc: "Pixel‑perfect mockups turned into interactive prototypes with Figma.",
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      desc: "Cross‑platform apps using React Native and Flutter.",
    },
    {
      icon: LineChart,
      title: "SEO & Performance",
      desc: "Speed optimizations, Core Web Vitals, and organic growth strategies.",
    },
  ];

  const skillCategories = [
    {
      name: "Frontend",
      skills: [
        { name: "React / Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 92 },
        { name: "Vue.js", level: 75 },
      ],
    },
    {
      name: "Backend",
      skills: [
        { name: "Node.js / Express", level: 88 },
        { name: "Python / Django", level: 80 },
        { name: "PostgreSQL/MongoDB", level: 85 },
        { name: "REST & GraphQL", level: 90 },
      ],
    },
    {
      name: "DevOps & Tools",
      skills: [
        { name: "Docker / K8s", level: 70 },
        { name: "Git / GitHub Actions", level: 92 },
        { name: "AWS / Vercel", level: 80 },
        { name: "Figma / Adobe XD", level: 85 },
      ],
    },
  ];

  const experience = [
    {
      role: "Senior Frontend Developer",
      company: "TechVista Inc.",
      period: "2022 – Present",
      desc: "Led a team of 5 to rebuild the customer dashboard with Next.js and Tailwind, reducing load time by 60%.",
    },
    {
      role: "Full‑Stack Developer",
      company: "DigitalCraft Studio",
      period: "2020 – 2022",
      desc: "Delivered 15+ client projects, built REST APIs with Node.js, and integrated payment gateways.",
    },
    {
      role: "Junior Web Developer",
      company: "WebGen Agency",
      period: "2018 – 2020",
      desc: "Converted Figma designs into responsive HTML/CSS/JS, later migrated sites to React.",
    },
  ];

  const projects = [
    {
      title: "SaaS Dashboard",
      img: "https://picsum.photos/id/1/600/400",
      tags: ["React", "Tailwind", "Firebase"],
      desc: "Real‑time analytics dashboard with role‑based access and dark mode.",
      live: "#",
      code: "#",
    },
    {
      title: "E‑Commerce Store",
      img: "https://picsum.photos/id/20/600/400",
      tags: ["Next.js", "Stripe", "MongoDB"],
      desc: "Full‑featured shop with cart, checkout, and admin panel.",
      live: "#",
      code: "#",
    },
    {
      title: "AI Blog Writer",
      img: "https://picsum.photos/id/60/600/400",
      tags: ["Python", "FastAPI", "OpenAI"],
      desc: "AI‑powered tool that generates blog posts from keywords.",
      live: "#",
      code: "#",
    },
    {
      title: "Task Manager",
      img: "https://picsum.photos/id/180/600/400",
      tags: ["Vue", "Pinia", "Vite"],
      desc: "Kanban‑style project management app with drag‑and‑drop.",
      live: "#",
      code: "#",
    },
    {
      title: "Fitness Tracker",
      img: "https://picsum.photos/id/250/600/400",
      tags: ["React Native", "GraphQL"],
      desc: "Mobile app to log workouts, meals, and progress photos.",
      live: "#",
      code: "#",
    },
    {
      title: "Portfolio CMS",
      img: "https://picsum.photos/id/26/600/400",
      tags: ["WordPress", "PHP", "REST API"],
      desc: "Custom headless CMS for creative portfolios with live preview.",
      live: "#",
      code: "#",
    },
  ];

  const testimonials = [
    {
      quote:
        "Hasan delivered our website on time with stunning design and flawless performance. Highly recommended!",
      name: "Sarah Ahmed",
      title: "Founder, Bloom Studio",
      img: "https://i.pravatar.cc/80?img=47",
    },
    {
      quote:
        "A true professional. He understood our requirements perfectly and built a scalable back‑end that handles heavy traffic.",
      name: "David Lee",
      title: "CTO, FinData Ltd.",
      img: "https://i.pravatar.cc/80?img=12",
    },
    {
      quote:
        "Working with Hasan was a breeze. He communicates clearly and turns complex ideas into simple, elegant UIs.",
      name: "Emma Williams",
      title: "Product Manager, Artify",
      img: "https://i.pravatar.cc/80?img=5",
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
            className="text-2xl font-bold bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
          >
            Hasan<span className="text-gray-800">.</span>
          </a>

          <div className="hidden lg:flex gap-8 font-medium">
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

          <button
            className="lg:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <X />
          </button>
        </div>

        {menuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-md shadow-xl absolute top-full left-0 w-full">
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
        )}
      </nav>

      {/* ===== HERO ===== */}
      <section
        id="hero"
        className="min-h-screen flex items-center bg-linear-to-br from-indigo-50 via-white to-purple-50 pt-20"
      >
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center">
          <div className="w-full lg:w-1/2">
            <p className="text-indigo-600 font-semibold mb-2 tracking-wide">
              👋 Hello, I am
            </p>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4">
              Md.{" "}
              <span className="bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Hasanuzzaman
              </span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Full‑Stack Developer & UI Designer crafting clean, performant
              digital experiences with modern technologies.
            </p>
            <div className="flex gap-4 mb-10">
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
            {/* Quick stats */}
            <div className="flex gap-10 text-sm text-gray-500">
              <div>
                <span className="block text-2xl font-bold text-gray-800">
                  50+
                </span>
                Projects
              </div>
              <div>
                <span className="block text-2xl font-bold text-gray-800">
                  30+
                </span>
                Happy Clients
              </div>
              <div>
                <span className="block text-2xl font-bold text-gray-800">
                  4+
                </span>
                Years Exp.
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 mt-12 lg:mt-0 flex justify-center">
            <div className="relative">
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-linear-to-br from-indigo-400 to-purple-500 p-1.5 shadow-2xl">
                <div className="w-full h-full rounded-full bg-white overflow-hidden">
                  <img
                    src="https://i.pravatar.cc/400?img=68"
                    alt="Hasan"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* Floating tech icons */}
              <div className="absolute -top-4 -right-4 w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center text-indigo-600 text-2xl">
                <FaReact />
                {/* <Code2/> */}
              </div>
              <div className="absolute bottom-8 -left-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-700 text-xl">
                <SiNodedotjs />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center gap-16">
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
              My background in Electrical & Electronic Engineering gives me a
              unique analytical edge, and I’m constantly learning new
              technologies to stay ahead. When I’m not coding, you’ll find me
              contributing to open‑source projects or sharing knowledge through
              blog posts.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-full hover:bg-indigo-700 transition-all"
              >
                <Download size={20} />
                Download CV
              </a>
              <a
                href="https://linkedin.com/in/hasan"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-indigo-600 text-indigo-600 font-semibold rounded-full hover:bg-indigo-50 transition-all"
              >
                <FaLinkedinIn />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-indigo-600 font-semibold text-center mb-1">
            What I Do
          </p>
          <h2 className="text-4xl font-bold text-center mb-16">
            Services I provide
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((srv, idx) => {
              const IconComponent = srv.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center"
                >
                  <div className="w-14 h-14 mx-auto rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 text-2xl mb-5">
                    <IconComponent site={20} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{srv.title}</h3>
                  <p className="text-gray-600 text-sm">{srv.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== SKILLS (DRAGGABLE? No, just clean) ===== */}
      <section id="skills" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-indigo-600 font-semibold text-center mb-1">
            My Skills
          </p>
          <h2 className="text-4xl font-bold text-center mb-16">
            Technologies I work with
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {skillCategories.map((cat, idx) => (
              <div key={idx}>
                <h3 className="text-xl font-bold mb-6 text-indigo-600">
                  {cat.name}
                </h3>
                <div className="space-y-5">
                  {cat.skills.map((skill, i) => (
                    <div key={i}>
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
            ))}
          </div>
        </div>
      </section>

      {/* ===== EXPERIENCE TIMELINE ===== */}
      <section id="experience" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-indigo-600 font-semibold text-center mb-1">
            Experience
          </p>
          <h2 className="text-4xl font-bold text-center mb-16">
            Where I’ve worked
          </h2>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-indigo-200" />
            {experience.map((exp, idx) => (
              <div
                key={idx}
                className={`flex flex-col md:flex-row items-start mb-12 ${
                  idx % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-indigo-600 rounded-full border-4 border-white shadow" />
                <div
                  className={`w-full md:w-1/2 ${idx % 2 === 0 ? "md:pl-12" : "md:pr-12"}`}
                >
                  <div className="bg-white p-6 rounded-2xl shadow-lg">
                    <span className="text-indigo-600 font-semibold text-sm">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-bold mt-1">{exp.role}</h3>
                    <p className="text-gray-700 font-medium">{exp.company}</p>
                    <p className="text-gray-600 mt-2 text-sm">{exp.desc}</p>
                  </div>
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
            Featured Projects
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
                  <p className="text-gray-600 text-sm mb-4">{project.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-indigo-50 text-indigo-700 text-xs font-semibold px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1 text-indigo-600 font-medium text-sm hover:underline"
                    >
                      Live <ExternalLink size={18} />
                    </a>
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1 text-gray-600 font-medium text-sm hover:underline"
                    >
                      Code
                      <Code2 size={18} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12 flex items-center justify-center align-middle">
            <button className=" flex flex-row justify-center items-center gap-1 px-8 py-3 border-2 border-indigo-600 text-indigo-600 font-semibold rounded-full hover:bg-indigo-50 transition-all">
              View All Projects <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-indigo-600 font-semibold text-center mb-1">
            Testimonials
          </p>
          <h2 className="text-4xl font-bold text-center mb-16">
            What my clients say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center text-center"
              >
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-16 h-16 rounded-full object-cover mb-4 shadow"
                />
                <p className="text-gray-600 italic mb-4">“{t.quote}”</p>
                <h4 className="font-bold text-gray-800">{t.name}</h4>
                <span className="text-sm text-gray-500">{t.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section id="contact" className="py-20 bg-white">
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
                <Mail size={20} className="text-indigo-600 text-xl" />
                <span>h27.contact@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={20} className="text-indigo-600 text-xl" />
                <span>Rajshahi, Bangladesh</span>
              </div>
              <div className="flex gap-4 mt-6">
                <a
                  href="#"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600 hover:bg-indigo-600 hover:text-white transition-all"
                >
                  <FaGithub />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600 hover:bg-indigo-600 hover:text-white transition-all"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600 hover:bg-indigo-600 hover:text-white transition-all"
                >
                  <SiX />
                </a>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <form className="bg-gray-50 p-8 rounded-2xl shadow-lg">
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-5 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all"
                />
              </div>
              <div className="mb-5">
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
                className="flex justify-center items-center gap-2 w-full py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all"
              >
                Send Message
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-gray-900 text-gray-300 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <p>
            &copy; {new Date().getFullYear()} Md. Hasanuzzaman. All rights
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
