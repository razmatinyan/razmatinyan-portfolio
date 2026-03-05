import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Server, Database, Layers, Zap, Lightbulb } from "lucide-react";

const icons: Record<string, React.ReactNode> = {
  sparkles: <Sparkles className="w-5 h-5" />,
  server: <Server className="w-5 h-5" />,
  database: <Database className="w-5 h-5" />,
  layers: <Layers className="w-5 h-5" />,
  zap: <Zap className="w-5 h-5" />,
  lightbulb: <Lightbulb className="w-5 h-5" />,
};

const services = [
  {
    icon: "sparkles",
    title: "Frontend Development",
    description: "Pixel-perfect, lightning-fast interfaces built with Vue.js and Nuxt.js. Responsive, accessible, and optimized for conversion.",
    tags: ["Vue.js", "Nuxt.js", "Tailwind CSS", "JavaScript"],
    highlight: true,
  },
  {
    icon: "server",
    title: "Backend & API Development",
    description: "Scalable REST APIs, business logic layers, and server-side rendering with Node.js and PHP.",
    tags: ["Node.js", "PHP", "REST APIs"],
    highlight: false,
  },
  {
    icon: "database",
    title: "Database Architecture",
    description: "Thoughtful data modeling and optimization across relational and NoSQL databases.",
    tags: ["MySQL", "MongoDB"],
    highlight: false,
  },
  {
    icon: "layers",
    title: "Full Stack Web Apps",
    description: "From idea to deployment — complete web application development, end to end. One developer, full ownership.",
    tags: ["Vue.js", "Node.js", "MySQL", "MongoDB"],
    highlight: true,
  },
  {
    icon: "zap",
    title: "Performance & SEO",
    description: "SSR with Nuxt.js, Core Web Vitals optimization, and technical SEO best practices baked in from day one.",
    tags: ["Nuxt.js", "SSR", "Core Web Vitals"],
    highlight: false,
  },
  {
    icon: "lightbulb",
    title: "Tech Consulting",
    description: "Stuck choosing a stack? Inheriting messy code? I help teams and founders make confident technical decisions.",
    tags: ["Architecture", "Code Review", "Strategy"],
    highlight: false,
  },
];

const Services = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">Services</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">What I Can Do For You</h2>
          <p className="mt-4 text-sm text-muted-foreground max-w-xl mx-auto">
            End-to-end web development services, tailored to move your business forward.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`glass-card rounded-xl p-6 ${service.highlight ? "lg:row-span-1" : ""}`}
            >
              <div className="text-foreground/60 mb-4">{icons[service.icon]}</div>
              <h3 className="text-sm font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed mb-4">{service.description}</p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span key={tag} className="text-[10px] uppercase tracking-wider px-2 py-1 rounded-full border border-border text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
