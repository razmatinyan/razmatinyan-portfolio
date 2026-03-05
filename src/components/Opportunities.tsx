import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Rocket, Calendar, Users } from "lucide-react";

const opportunities = [
  {
    icon: <Rocket className="w-5 h-5" />,
    title: "Project-Based",
    description: "You have a product to build. I scope it, build it, ship it — on time, on budget, no surprises.",
    idealFor: "Startups, MVP launches, product rebuilds",
    cta: "Start a Project",
  },
  {
    icon: <Calendar className="w-5 h-5" />,
    title: "Monthly Retainer",
    description: "Ongoing development and maintenance, a set number of hours per month. Predictable costs, reliable output.",
    idealFor: "Growing products, continuous iteration",
    cta: "Discuss Retainer",
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: "Team Collaboration",
    description: "Embed me in your existing team as a senior developer or tech lead. I integrate fast and contribute from day one.",
    idealFor: "Agencies, scale-ups, tech teams",
    cta: "Let's Collaborate",
  },
];

const Opportunities = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">Engagement</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">How We Can Work Together</h2>
          <p className="mt-4 text-sm text-muted-foreground">Flexible engagement models to fit your project's needs.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4">
          {opportunities.map((opp, i) => (
            <motion.div
              key={opp.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass-card rounded-xl p-6 flex flex-col"
            >
              <div className="text-foreground/60 mb-4">{opp.icon}</div>
              <h3 className="text-sm font-semibold text-foreground mb-2">{opp.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed mb-4 flex-1">{opp.description}</p>
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground/60 mb-4">
                Ideal for: {opp.idealFor}
              </p>
              <button
                onClick={scrollToContact}
                className="text-[10px] uppercase tracking-widest px-4 py-2 border border-foreground/20 rounded-full text-foreground hover:bg-foreground hover:text-background transition-all self-start"
              >
                {opp.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Opportunities;
