import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "5+", label: "Years of Experience" },
  { value: "40+", label: "Projects Delivered" },
  { value: "15+", label: "Happy Clients" },
  { value: "100%", label: "Commitment Rate" },
];

const techStack = ["Vue.js", "Nuxt.js", "Tailwind CSS", "JavaScript", "Node.js", "PHP", "MySQL", "MongoDB"];

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">About</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Hey, I'm Razmik.
            </h2>
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                I'm a full stack developer with a passion for building fast, elegant, and purposeful digital products. I bridge the gap between design and engineering — creating interfaces users love and backends that just work.
              </p>
              <p>
                With hands-on experience across the full stack — from pixel-perfect Vue.js interfaces to robust Node.js APIs and PHP backends — I build web products end to end.
              </p>
              <p>
                Whether you're a startup launching your MVP, a business modernizing a legacy system, or an agency needing a reliable tech partner — I bring clarity, craftsmanship, and commitment to every project.
              </p>
              <p className="text-foreground/70 italic">
                I believe great software is invisible: it simply works, delights, and scales.
              </p>
            </div>
          </motion.div>

          {/* Right - Image placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative w-72 h-80 rounded-2xl border border-border bg-surface-elevated overflow-hidden group">
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground text-xs uppercase tracking-widest">
                Photo
              </div>
              <div className="absolute inset-0 rounded-2xl border border-foreground/0 group-hover:border-foreground/10 transition-colors duration-500" />
              <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--glow)/0.05),transparent_70%)]" />
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-12 border-t border-border"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-foreground">{stat.value}</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mt-2">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 flex flex-wrap justify-center gap-3"
        >
          {techStack.map((tech, i) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3, delay: 0.7 + i * 0.05 }}
              className="px-4 py-2 text-[10px] uppercase tracking-widest border border-border rounded-full text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
