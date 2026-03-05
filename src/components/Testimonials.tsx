import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Razmik doesn't just write code — he thinks about the product. He proactively flagged UX issues we hadn't even noticed and delivered a solution 3 weeks ahead of schedule.",
    name: "Armen Hovhannisyan",
    role: "CEO",
    company: "TechStart AM",
  },
  {
    quote: "The Nuxt.js migration Razmik led was seamless. Our load times dropped from 4 seconds to under a second, and our SEO rankings jumped significantly within two months.",
    name: "Sophie Marchand",
    role: "Head of Product",
    company: "Lumio Digital",
  },
  {
    quote: "Working with Razmik felt like having a CTO on call. He explained every technical decision clearly, met every deadline, and the final product exceeded all our expectations.",
    name: "Daniel Osei",
    role: "Founder",
    company: "Growpath",
  },
  {
    quote: "Clean code, clean communication, clean delivery. Razmik built our entire dashboard from scratch — Vue frontend, Node backend, the works — and it's been rock-solid for 18 months.",
    name: "Irina Volkov",
    role: "CTO",
    company: "Dataflow Labs",
  },
  {
    quote: "I've worked with a lot of freelance developers. Razmik is the rare one who understands both the technical and business side. Highly recommend for any serious project.",
    name: "James Harrington",
    role: "Director of Engineering",
    company: "Nexbridge",
  },
];

const Testimonials = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" className="py-32 overflow-hidden" ref={ref}>
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Clients & Collaborators</h2>
          <p className="mt-4 text-sm text-muted-foreground">Don't just take my word for it.</p>
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="animate-marquee flex gap-6 py-4">
          {[...testimonials, ...testimonials].map((t, i) => (
            <div
              key={i}
              className="glass-card rounded-xl p-6 min-w-[320px] max-w-[380px] flex-shrink-0"
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="w-3 h-3 fill-foreground/40 text-foreground/40" />
                ))}
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed mb-6 line-clamp-4">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-surface-elevated border border-border flex items-center justify-center text-[10px] font-bold text-foreground/60">
                  {t.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <p className="text-xs font-semibold text-foreground">{t.name}</p>
                  <p className="text-[10px] text-muted-foreground">{t.role}, {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
