import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { GraduationCap, Heart, Sparkles, Quote } from "lucide-react";
import eduImg from "@/assets/education.jpg";
import tgImg from "@/assets/transgender.jpg";
import womenImg from "@/assets/hero-women.jpg";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Programs & Impact — Rise and Restore" },
      { name: "description", content: "Education, transgender inclusion and women empowerment programs — and the stories of lives transformed." },
      { property: "og:title", content: "Programs & Impact — Rise and Restore" },
      { property: "og:description", content: "Real programs, real stories of change across Pakistan." },
    ],
  }),
  component: ProgramsPage,
});

const programs = [
  { icon: GraduationCap, title: "Education Programs", desc: "Providing free, high-quality education and learning resources to underprivileged children.", img: eduImg },
  { icon: Sparkles, title: "Transgender Inclusion Initiatives", desc: "Supporting transgender individuals through education, mentorship and advocacy in Gujranwala.", img: tgImg },
  { icon: Heart, title: "Women Empowerment Programs", desc: "Awareness sessions, leadership training and skill development initiatives.", img: womenImg },
];

const stories = {
  Transgender: [
    { name: "Ayesha Noor", text: "Regained confidence through our mentorship program — now aspires to become a teacher." },
    { name: "Sana Gul", text: "Now an active voice in advocacy for transgender rights in Gujranwala." },
    { name: "Aliya Khan", text: "Transformed into a confident, independent individual through education." },
  ],
  Children: [
    { name: "Ahmed Raza", text: "A top-performing student in his class with dreams that now feel within reach." },
    { name: "Fatima Zahra", text: "Dreams of becoming a doctor — and we're walking that journey with her." },
    { name: "Bilal Hassan", text: "Improved literacy scores and a renewed love for learning." },
    { name: "Ayesha Siddiqua", text: "Active in school activities, leading projects with her peers." },
  ],
  Women: [
    { name: "Khadija Bibi", text: "Now promotes girls' education in her community — a champion for the next generation." },
    { name: "Shazia Parveen", text: "Supports her family financially through skills she learned in our programs." },
    { name: "Nadia Akhtar", text: "Stands tall as a women's rights advocate in her region." },
  ],
} as const;

type Tab = keyof typeof stories;
const tabs: Tab[] = ["Transgender", "Children", "Women"];

function ProgramsPage() {
  const [tab, setTab] = useState<Tab>("Transgender");

  return (
    <>
      <section className="bg-gradient-dark text-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-pink">What We Do</span>
          <h1 className="mt-3 text-5xl sm:text-7xl font-black max-w-4xl leading-[1.05]">
            Programs that <span className="text-gradient">change lives</span> — every single day.
          </h1>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-6">
          {programs.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group rounded-3xl overflow-hidden bg-card border border-border shadow-card transition-all duration-300 hover:-translate-y-1 hover:[box-shadow:0_18px_40px_-10px_rgba(233,30,140,0.5)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.title} loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
                <div className="absolute top-4 left-4 h-12 w-12 rounded-2xl bg-gradient-brand flex items-center justify-center text-white shadow-glow">
                  <p.icon size={22} />
                </div>
              </div>
              <div className="p-7">
                <h3 className="text-xl font-bold">{p.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-pink">Impact Stories</span>
            <h2 className="mt-3 text-4xl sm:text-5xl font-black">Lives transformed.</h2>
          </div>

          <div className="mt-10 inline-flex p-1.5 rounded-full bg-card border border-border shadow-card">
            {tabs.map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-5 sm:px-6 py-2.5 text-sm font-semibold rounded-full transition-all ${tab === t ? "bg-gradient-brand text-white shadow-glow" : "text-muted-foreground hover:text-foreground"}`}
              >
                {t}
              </button>
            ))}
          </div>

          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {stories[tab].map((s) => (
              <div key={s.name} className="p-7 rounded-3xl bg-card border border-border shadow-card relative">
                <Quote className="text-pink/30 absolute top-5 right-5" size={32} />
                <p className="text-foreground/80 leading-relaxed">"{s.text}"</p>
                <div className="mt-5 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-brand flex items-center justify-center text-white font-bold">
                    {s.name[0]}
                  </div>
                  <div>
                    <div className="font-bold text-sm">{s.name}</div>
                    <div className="text-xs text-muted-foreground">{tab} Program</div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
