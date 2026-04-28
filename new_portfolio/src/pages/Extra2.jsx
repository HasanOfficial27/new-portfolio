import React, { useState, useEffect, useRef } from "react";

// ==========================================
// 1. Navbar Component (save as components/Navbar.jsx)
// ==========================================
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a
            href="#home"
            className="text-2xl font-black tracking-tighter text-white"
          >
            Hasan<span className="text-indigo-500">.</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-8">
              <a
                href="#home"
                className="text-slate-300 hover:text-indigo-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-slate-300 hover:text-indigo-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                About
              </a>
              <a
                href="#skills"
                className="text-slate-300 hover:text-indigo-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Skills
              </a>
              <a
                href="#projects"
                className="text-slate-300 hover:text-indigo-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-slate-300 hover:text-indigo-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Contact
              </a>
              <a
                href="#contact"
                className="bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg shadow-indigo-500/30"
              >
                Hire Me
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white p-2"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 absolute w-full shadow-2xl">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <a
              href="#home"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-base font-medium text-slate-300 hover:text-indigo-400 hover:bg-slate-800 rounded-md"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-base font-medium text-slate-300 hover:text-indigo-400 hover:bg-slate-800 rounded-md"
            >
              About
            </a>
            <a
              href="#skills"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-base font-medium text-slate-300 hover:text-indigo-400 hover:bg-slate-800 rounded-md"
            >
              Skills
            </a>
            <a
              href="#projects"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-base font-medium text-slate-300 hover:text-indigo-400 hover:bg-slate-800 rounded-md"
            >
              Projects
            </a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-base font-medium text-indigo-400 hover:bg-slate-800 rounded-md"
            >
              Contact Me
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

// ==========================================
// 2. Home Component (save as pages/Home.jsx)
// ==========================================
const Home = () => {
  const canvasRef = useRef(null);
  const homeRef = useRef(null);
  const typingRef = useRef(null);

  useEffect(() => {
    const words = [
      "Web Apps.",
      "User Interfaces.",
      "Digital Experiences.",
      "Clean Code.",
    ];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeoutId;

    const typeEffect = () => {
      const currentWord = words[wordIndex];
      const textToSet = currentWord.substring(0, charIndex);

      if (typingRef.current) {
        typingRef.current.innerHTML = textToSet;
      }

      if (!isDeleting && charIndex < currentWord.length) {
        charIndex++;
        timeoutId = setTimeout(typeEffect, 100);
      } else if (isDeleting && charIndex > 0) {
        charIndex--;
        timeoutId = setTimeout(typeEffect, 50);
      } else if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        timeoutId = setTimeout(typeEffect, 2000);
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        timeoutId = setTimeout(typeEffect, 500);
      }
    };

    timeoutId = setTimeout(typeEffect, 1500);
    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let particlesArray = [];

    const mouse = { x: null, y: null, radius: 120 };

    const setCanvasSize = () => {
      if (homeRef.current) {
        canvas.width = homeRef.current.offsetWidth;
        canvas.height = homeRef.current.offsetHeight;
      }
    };

    class Particle {
      constructor(x, y, directionX, directionY, size, color) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
      update() {
        if (this.x > canvas.width || this.x < 0)
          this.directionX = -this.directionX;
        if (this.y > canvas.height || this.y < 0)
          this.directionY = -this.directionY;

        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouse.radius + this.size && mouse.x != null) {
          if (mouse.x < this.x && this.x < canvas.width - this.size * 10)
            this.x += 3;
          if (mouse.x > this.x && this.x > this.size * 10) this.x -= 3;
          if (mouse.y < this.y && this.y < canvas.height - this.size * 10)
            this.y += 3;
          if (mouse.y > this.y && this.y > this.size * 10) this.y -= 3;
        }

        this.x += this.directionX;
        this.y += this.directionY;
        this.draw();
      }
    }

    const initParticles = () => {
      particlesArray = [];
      let numberOfParticles = (canvas.height * canvas.width) / 12000;
      for (let i = 0; i < numberOfParticles; i++) {
        let size = Math.random() * 2 + 1;
        let x = Math.random() * (canvas.width - size * 2 - size * 2) + size * 2;
        let y =
          Math.random() * (canvas.height - size * 2 - size * 2) + size * 2;
        let directionX = Math.random() * 1 - 0.5;
        let directionY = Math.random() * 1 - 0.5;
        let color = "rgba(99, 102, 241, 0.4)";
        particlesArray.push(
          new Particle(x, y, directionX, directionY, size, color),
        );
      }
    };

    const connectParticles = () => {
      let opacityValue = 1;
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          let distance =
            (particlesArray[a].x - particlesArray[b].x) *
              (particlesArray[a].x - particlesArray[b].x) +
            (particlesArray[a].y - particlesArray[b].y) *
              (particlesArray[a].y - particlesArray[b].y);

          if (distance < (canvas.width / 7) * (canvas.height / 7)) {
            opacityValue = 1 - distance / 15000;
            ctx.strokeStyle = `rgba(99, 102, 241, ${opacityValue * 0.3})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    };

    const animateParticles = () => {
      animationFrameId = requestAnimationFrame(animateParticles);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
      }
      connectParticles();
    };

    const handleResize = () => {
      setCanvasSize();
      initParticles();
    };

    const handleMouseMove = (e) => {
      const rect = homeRef.current.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    setCanvasSize();
    initParticles();
    animateParticles();

    window.addEventListener("resize", handleResize);
    const currentHomeRef = homeRef.current;
    if (currentHomeRef) {
      currentHomeRef.addEventListener("mousemove", handleMouseMove);
      currentHomeRef.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      if (currentHomeRef) {
        currentHomeRef.removeEventListener("mousemove", handleMouseMove);
        currentHomeRef.removeEventListener("mouseleave", handleMouseLeave);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section
      id="home"
      ref={homeRef}
      className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-900"
    >
      <canvas ref={canvasRef} className="absolute inset-0 z-0"></canvas>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pointer-events-none">
        <p
          className="text-indigo-400 font-bold tracking-[0.2em] uppercase mb-4 opacity-0 translate-y-4 animate-fade-in"
          style={{ animation: "fadeUp 0.8s forwards 0.2s" }}
        >
          Welcome to my digital space
        </p>
        <h1
          className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tight mb-6 drop-shadow-2xl opacity-0 translate-y-4"
          style={{ animation: "fadeUp 0.8s forwards 0.4s" }}
        >
          Md Hasanuzzaman
        </h1>
        <h2
          className="text-2xl md:text-4xl font-semibold text-slate-300 mb-8 opacity-0 translate-y-4"
          style={{ animation: "fadeUp 0.8s forwards 0.6s" }}
        >
          I build{" "}
          <span
            className="text-indigo-400 typing-cursor"
            ref={typingRef}
          ></span>
        </h2>
        <p
          className="text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed opacity-0 translate-y-4"
          style={{ animation: "fadeUp 0.8s forwards 0.8s" }}
        >
          A passionate Web Developer specializing in creating interactive,
          responsive, and high-performance digital experiences.
        </p>

        <div
          className="flex flex-col sm:flex-row justify-center items-center gap-4 pointer-events-auto opacity-0 translate-y-4"
          style={{ animation: "fadeUp 0.8s forwards 1s" }}
        >
          <a
            href="#projects"
            className="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full font-bold transition-all shadow-[0_0_20px_rgba(99,102,241,0.4)] hover:shadow-[0_0_30px_rgba(99,102,241,0.6)] hover:-translate-y-1"
          >
            View My Work
          </a>
          <a
            href="https://github.com/HasanOfficial27"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-transparent border border-slate-600 hover:border-indigo-400 text-slate-300 hover:text-indigo-400 rounded-full font-bold transition-all hover:-translate-y-1 flex items-center justify-center gap-2"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
            GitHub
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce pointer-events-auto">
        <a
          href="#about"
          className="text-slate-400 hover:text-indigo-400 transition-colors"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

// ==========================================
// 3. About Component (save as pages/About.jsx)
// ==========================================
const About = () => {
  return (
    <section
      id="about"
      className="py-24 bg-slate-900 border-t border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-1/2 relative group">
            <div className="absolute -inset-1 bg-linear-to-r from-indigo-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <img
              src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Programming Setup"
              className="relative rounded-2xl shadow-2xl object-cover h-100 w-full border border-slate-700"
            />
          </div>

          <div className="w-full md:w-1/2 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-sm font-medium border border-indigo-500/20">
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
              About Me
            </div>
            <h2 className="text-4xl font-bold text-white">
              Turning coffee into <span className="text-indigo-400">code</span>.
            </h2>
            <p className="text-slate-400 leading-relaxed text-lg">
              Hello! I'm Hasanuzzaman, a developer based in Bangladesh. I have a
              strong passion for designing and building clean, functional, and
              user-friendly web applications.
            </p>
            <p className="text-slate-400 leading-relaxed text-lg">
              My journey in tech revolves around constant learning. From
              crafting pixel-perfect interfaces to architecting robust backend
              systems, I enjoy every step of the development process.
            </p>

            <div className="pt-6 grid grid-cols-2 gap-4">
              <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
                <h3 className="text-white font-bold text-xl mb-1">
                  Modern Stack
                </h3>
                <p className="text-slate-400 text-sm">
                  React, Vite, Tailwind CSS
                </p>
              </div>
              <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
                <h3 className="text-white font-bold text-xl mb-1">
                  Clean Code
                </h3>
                <p className="text-slate-400 text-sm">
                  Maintainable & Scalable
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 4. Skills Component (save as pages/Skills.jsx)
// ==========================================
const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: (
        <svg
          className="w-6 h-6 text-indigo-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
      skills: [
        "React.js",
        "Vue.js",
        "JavaScript (ES6+)",
        "Tailwind CSS",
        "HTML5 & CSS3",
        "Next.js",
      ],
    },
    {
      title: "Backend & Database",
      icon: (
        <svg
          className="w-6 h-6 text-indigo-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
          />
        </svg>
      ),
      skills: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "Firebase",
        "REST APIs",
        "SQL Basics",
      ],
    },
    {
      title: "Tools & Workflow",
      icon: (
        <svg
          className="w-6 h-6 text-indigo-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      skills: [
        "Git & GitHub",
        "Vite",
        "VS Code",
        "Figma",
        "NPM/Yarn",
        "Postman",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-24 bg-slate-950 border-t border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            My <span className="text-indigo-400">Skills</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Technologies and tools I use to bring ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="bg-slate-900 rounded-2xl p-8 border border-slate-800 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-indigo-500/10 rounded-lg">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-slate-800 text-slate-300 rounded-lg text-sm font-medium border border-slate-700 hover:border-indigo-400 hover:text-indigo-300 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 5. Projects Component (save as pages/Projects.jsx)
// ==========================================
const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Dashboard",
      desc: "A comprehensive admin panel for e-commerce platforms featuring real-time data visualization and inventory management.",
      tags: ["React", "Tailwind"],
      img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Task Management App",
      desc: "A collaborative productivity tool allowing teams to organize projects, assign tasks, and track progress in real-time.",
      tags: ["Vue.js", "Firebase"],
      img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Interactive Portfolio",
      desc: "This very portfolio! Built utilizing React, Canvas API for background particle physics and Tailwind for rapid UI styling.",
      tags: ["React", "Canvas API"],
      img: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 bg-slate-900 border-t border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Featured <span className="text-indigo-400">Projects</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            A selection of my recent work. Things I've built with modern web
            technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="group relative bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/10"
            >
              <div className="h-56 overflow-hidden relative">
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img
                  src={proj.img}
                  alt={proj.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-6 relative z-20 bg-slate-950">
                <div className="flex gap-2 mb-4">
                  {proj.tags.map((tag, i) => (
                    <span
                      key={i}
                      className={`text-xs font-semibold px-2.5 py-1 rounded-md border ${i === 0 ? "bg-indigo-500/10 text-indigo-400 border-indigo-500/20" : "bg-slate-800 text-slate-300 border-slate-700"}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                  {proj.title}
                </h3>
                <p className="text-slate-400 mb-6 line-clamp-2">{proj.desc}</p>
                <div className="flex items-center gap-4">
                  <a
                    href="#"
                    className="text-sm font-semibold text-white hover:text-indigo-400 flex items-center gap-1 transition-colors"
                  >
                    Live Demo
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-sm font-semibold text-slate-400 hover:text-white flex items-center gap-1 transition-colors"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 6. Contact Component (save as pages/Contact.jsx)
// ==========================================
const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24 bg-slate-950 border-t border-slate-800 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 rounded-full bg-indigo-600/10 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-96 h-96 rounded-full bg-purple-600/10 blur-3xl pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Let's build something{" "}
          <span className="text-indigo-400">together</span>
        </h2>
        <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto">
          I'm currently open to new opportunities. Whether you have a project to
          discuss or just want to say hi, my inbox is open.
        </p>

        <a
          href="mailto:your.email@example.com"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-900 hover:bg-slate-200 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          Say Hello
        </a>

        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            &copy; 2026 Md Hasanuzzaman. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="https://github.com/HasanOfficial27"
              className="text-slate-500 hover:text-white transition-colors"
            >
              <span className="sr-only">GitHub</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="#"
              className="text-slate-500 hover:text-indigo-400 transition-colors"
            >
              <span className="sr-only">LinkedIn</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 7. Main App Component (src/App.jsx)
// ==========================================
export default function Extra2() {
  return (
    <div className="bg-slate-900 text-slate-100 font-sans antialiased selection:bg-indigo-500 selection:text-white overflow-x-hidden">
      {/* Global Custom Styles */}
      <style>{`
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: #0f172a; }
        ::-webkit-scrollbar-thumb { background: #334155; border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: #475569; }

        .typing-cursor::after {
          content: '|';
          animation: blink 1s step-start infinite;
        }
        @keyframes blink { 50% { opacity: 0; } }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Render Components */}
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
