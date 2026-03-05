import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const techTicker = ["Vue.js", "Nuxt.js", "Node.js", "PHP", "MySQL", "MongoDB", "Tailwind CSS", "JavaScript", "TypeScript", "REST APIs"];

const Hero = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden grid-bg">
      {/* Floating orbs */}
      <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-foreground/[0.03] blur-[100px]" />
      <div className="absolute bottom-40 left-10 w-80 h-80 rounded-full bg-foreground/[0.02] blur-[120px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6"
        >
          Full Stack Web Developer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-foreground"
        >
          Building the Web,
          <br />
          One Pixel at a Time.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 text-sm md:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed"
        >
          Specializing in Vue.js, Nuxt.js & Node.js — turning ideas into fast, scalable, beautiful web products.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={() => scrollTo("works")}
            className="px-8 py-3 bg-foreground text-background text-xs uppercase tracking-widest rounded-full hover:bg-foreground/90 transition-colors"
          >
            See My Work
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="px-8 py-3 border border-foreground/20 text-foreground text-xs uppercase tracking-widest rounded-full hover:border-foreground/50 transition-colors"
          >
            Let's Talk
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-20 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-5 h-5 text-muted-foreground" />
        </motion.div>
      </motion.div>

      {/* Tech ticker */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-border py-3 overflow-hidden">
        <div className="animate-ticker flex whitespace-nowrap">
          {[...techTicker, ...techTicker].map((tech, i) => (
            <span key={i} className="mx-8 text-[10px] uppercase tracking-[0.2em] text-muted-foreground/50">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
