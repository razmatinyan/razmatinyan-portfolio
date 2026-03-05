import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, FileText } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Full Stack",
    description: "A high-performance storefront built with Nuxt.js and Node.js, featuring server-side rendering, real-time inventory, and a custom CMS.",
    tech: ["Nuxt.js", "Node.js", "MongoDB", "Tailwind CSS"],
    metrics: ["+240% performance", "4.9s → 1.1s load time"],
    filters: ["Nuxt.js", "Node.js"],
  },
  {
    title: "SaaS Dashboard",
    category: "Frontend + Backend",
    description: "A real-time analytics dashboard with role-based access, data visualization, and a RESTful API backend in Node.js.",
    tech: ["Vue.js", "Node.js", "MySQL", "Tailwind CSS"],
    metrics: ["15k+ daily active users", "Sub-200ms API response"],
    filters: ["Vue.js", "Node.js"],
  },
  {
    title: "Agency Website",
    category: "Frontend",
    description: "Award-worthy marketing website with scroll animations, 3D elements, and perfect Lighthouse scores.",
    tech: ["Nuxt.js", "Tailwind CSS", "JavaScript"],
    metrics: ["100/100 Lighthouse", "Top 3 organic ranking"],
    filters: ["Nuxt.js"],
  },
  {
    title: "Healthcare Portal",
    category: "Full Stack",
    description: "HIPAA-compliant patient portal with appointment scheduling, secure messaging, and a PHP/MySQL backend.",
    tech: ["Vue.js", "PHP", "MySQL"],
    metrics: ["60% less admin workload", "Zero downtime post-launch"],
    filters: ["Vue.js", "PHP"],
  },
];

const filterTabs = ["All", "Vue.js", "Nuxt.js", "Node.js", "PHP"];

const Works = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter((p) => p.filters.includes(activeFilter));

  return (
    <section id="works" className="py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">Portfolio</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Selected Works</h2>
          <p className="mt-4 text-sm text-muted-foreground">A few projects I'm proud of.</p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              className={`text-[10px] uppercase tracking-widest px-4 py-2 rounded-full border transition-all ${
                activeFilter === tab
                  ? "border-foreground/40 text-foreground bg-foreground/5"
                  : "border-border text-muted-foreground hover:border-foreground/20"
              }`}
            >
              {tab}
            </button>
          ))}
        </motion.div>

        {/* Projects */}
        <div className="space-y-6">
          {filteredProjects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
              className="glass-card rounded-xl overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-0">
                {/* Mockup */}
                <div className="bg-surface-elevated p-8 flex items-center justify-center min-h-[240px]">
                  <div className="w-full max-w-sm rounded-lg border border-border bg-background overflow-hidden">
                    <div className="flex items-center gap-1.5 px-3 py-2 border-b border-border">
                      <div className="w-2 h-2 rounded-full bg-muted-foreground/30" />
                      <div className="w-2 h-2 rounded-full bg-muted-foreground/30" />
                      <div className="w-2 h-2 rounded-full bg-muted-foreground/30" />
                    </div>
                    <div className="h-32 flex items-center justify-center text-muted-foreground/30 text-[10px] uppercase tracking-widest">
                      {project.title}
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="p-8 flex flex-col justify-center">
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground mb-2">{project.category}</span>
                  <h3 className="text-lg font-bold text-foreground mb-3">{project.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t) => (
                      <span key={t} className="text-[10px] uppercase tracking-wider px-2 py-1 rounded-full border border-border text-muted-foreground">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-1 mb-4">
                    {project.metrics.map((m) => (
                      <p key={m} className="text-[10px] text-foreground/60">↗ {m}</p>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <button className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors">
                      <ExternalLink className="w-3 h-3" /> Live Demo
                    </button>
                    <button className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors">
                      <FileText className="w-3 h-3" /> Case Study
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
