import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, GraduationCap, Heart, Users, Globe2 } from "lucide-react";
import { Counter } from "@/components/Counter";
import heroImg from "@/assets/hero-women.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rise and Restore — Empowering Women, Transforming Futures" },
      { name: "description", content: "A dynamic youth-led NGO empowering women, promoting inclusive education, and advancing transgender rights across Pakistan." },
      { property: "og:title", content: "Rise and Restore — Together we Rise" },
      { property: "og:description", content: "Empowering Women. Advancing Equality. Transforming Futures." },
    ],
  }),
  component: HomePage,
});

const stats = [
  { n: 60000, label: "Youth Trained" },
  { n: 8000, label: "Women Impacted" },
  { n: 1000, label: "Transgender Individuals Supported" },
  { n: 500, label: "Ambassadors" },
  { n: 10, label: "Countries" },
];

const cores = [
  { icon: Heart, title: "Women Empowerment & Gender Equality", desc: "Advocating for the rights, leadership and economic independence of women across Pakistan." },
  { icon: GraduationCap, title: "Inclusive Education", desc: "Free, quality education for marginalized children and underserved communities." },
  { icon: Sparkles, title: "Transgender Rights & Inclusion", desc: "Education, mentorship and dignified opportunities for transgender individuals." },
  { icon: Users, title: "Youth Leadership", desc: "Training the next generation of changemakers through capacity-building programs." },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-gradient-dark text-white">
        <div className="absolute inset-0">
          <img src={heroImg} alt="" className="h-full w-full object-cover" width={1536} height={1024} />
          <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.6)" }} />
          <div className="absolute inset-0 bg-gradient-to-br from-ink/60 via-ink/40 to-transparent" />
          <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-purple/30 blur-3xl" />
          <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-pink/30 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest rounded-full bg-white/10 border border-white/20 backdrop-blur">
              <Globe2 size={14} /> Youth-led • Pakistan
            </span>
          </motion.div>
          <h1 className="mt-6 text-5xl sm:text-6xl lg:text-8xl font-black leading-[0.95] max-w-5xl">
            {(() => {
              const lines = [
                ["Empowering", "Women,"],
                ["Advancing", "Equality,"],
                ["Transforming", "Futures."],
              ];
              let i = 0;
              return lines.map((line, li) => (
                <span key={li} className="block">
                  {line.map((word) => {
                    const delay = 0.15 + i++ * 0.1;
                    const isAccent = word === "Equality,";
                    return (
                      <motion.span
                        key={word + li}
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
                        className={`inline-block mr-[0.25em] ${isAccent ? "text-gradient" : ""}`}
                      >
                        {word}
                      </motion.span>
                    );
                  })}
                </span>
              ));
            })()}
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 max-w-2xl text-lg sm:text-xl text-white/75 leading-relaxed"
          >
            Rise and Restore is a dynamic, youth-led organization committed to empowering women,
            promoting inclusive education, and advancing the rights of transgender communities
            across Pakistan.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <Link to="/contact" className="group inline-flex items-center gap-2 px-7 py-4 rounded-full bg-gradient-brand text-white font-semibold shadow-glow hover:scale-[1.02] transition-transform">
              Join the Movement <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link to="/programs" className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white/10 border border-white/20 backdrop-blur text-white font-semibold hover:bg-white/15 transition-colors">
              Our Programs
            </Link>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="relative -mt-12 z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[4px] bg-card shadow-elegant border border-border/60 p-6 sm:p-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-gradient">
                  <Counter to={s.n} />
                </div>
                <div className="mt-2 text-xs sm:text-sm text-muted-foreground font-medium leading-tight">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE AREAS */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-pink">Our Focus</span>
            <h2 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-black leading-tight">
              Building futures across <span className="text-gradient">four core pillars</span>.
            </h2>
          </div>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {cores.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative p-7 rounded-3xl bg-card border border-border shadow-card hover:shadow-glow hover:-translate-y-1 transition-all duration-500"
              >
                <div className="h-14 w-14 rounded-2xl bg-gradient-brand flex items-center justify-center text-white shadow-glow">
                  <c.icon size={26} />
                </div>
                <h3 className="mt-5 text-lg font-bold leading-tight">{c.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-brand p-10 sm:p-16 text-white text-center">
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 30% 20%, white 0%, transparent 40%)" }} />
            <h2 className="relative text-3xl sm:text-5xl font-black max-w-3xl mx-auto leading-tight">Be part of the movement that's reshaping Pakistan.</h2>
            <p className="relative mt-4 text-white/80 max-w-xl mx-auto">Volunteer, partner, donate or become an ambassador. Together, we rise.</p>
            <Link to="/contact" className="relative mt-8 inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white text-purple font-bold hover:scale-105 transition-transform">
              Get Involved <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
