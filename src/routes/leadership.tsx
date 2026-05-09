import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Award, Quote, Star } from "lucide-react";
import founderImg from "@/assets/founder.jpg";

export const Route = createFileRoute("/leadership")({
  head: () => ({
    meta: [
      { title: "Leadership & Testimonials — Rise and Restore" },
      { name: "description", content: "Meet our founder M. Shahzaib Asmat and read what global leaders say about Rise and Restore." },
      { property: "og:title", content: "Leadership — Rise and Restore" },
      { property: "og:description", content: "Founded by Pakistan's youngest research-based book writer." },
    ],
  }),
  component: LeadershipPage,
});

const achievements = [
  "Global Youth Leadership Award",
  "Stanford University Recognition",
  "Connected Pakistan 30 Under 30 — 2026",
  "Pride of Pakistan Award",
  "Commonwealth Essay Gold Honor",
  "SEAMO International Gold Medal",
  "SDGs Ambassador Pakistan",
  "UN Youth Ambassador",
];

const testimonials = [
  { quote: "Rise and Restore is creating meaningful change in communities that have long been overlooked.", name: "Veena Khan", role: "President, Wajood Society" },
  { quote: "Shahzaib Asmat has shown remarkable dedication to uplifting the most marginalized.", name: "Irish Khan", role: "Principal, Transgender School Gujranwala" },
  { quote: "The work highlights the importance of youth-led initiatives in driving real social change.", name: "Hina Jilani", role: "Human Rights Activist" },
  { quote: "Such initiatives demonstrate how youth can contribute powerfully to global development goals.", name: "Pernille Ironside", role: "International Development Leader" },
  { quote: "Shahzaib represents the true spirit of youth leadership for our time.", name: "Ijaz Khan", role: "Chairman, World Youth Council" },
];

function LeadershipPage() {
  return (
    <>
      <section className="bg-gradient-dark text-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-pink">Leadership</span>
          <h1 className="mt-3 text-5xl sm:text-7xl font-black max-w-4xl leading-[1.05]">
            Meet the <span className="text-gradient">visionary</span> behind the movement.
          </h1>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid lg:grid-cols-5 gap-8 items-stretch"
          >
            <div className="lg:col-span-2 relative rounded-3xl overflow-hidden shadow-elegant min-h-[420px]">
              <img src={founderImg} alt="M. Shahzaib Asmat" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-ink to-transparent">
                <div className="text-white">
                  <div className="text-2xl font-bold">M. Shahzaib Asmat</div>
                  <div className="text-sm text-white/70">Founder & President</div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-3 p-8 sm:p-10 rounded-3xl bg-card border border-border shadow-card">
              <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-bold uppercase tracking-widest rounded-full bg-gradient-soft text-purple">
                <Star size={12} /> Founder Story
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-black leading-tight">
                A remarkable young Pakistani author, researcher and globally recognized youth leader.
              </h2>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                Shahzaib founded Rise and Restore at the age of twelve and has since become Pakistan's
                youngest research-based book writer. His work has earned global recognition from
                institutions including Stanford and the United Nations.
              </p>
              <div className="mt-7 flex flex-wrap gap-2">
                {achievements.map((a) => (
                  <span key={a} className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-full bg-secondary border border-border hover:bg-gradient-soft hover:text-purple transition-colors">
                    <Award size={12} /> {a}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-pink">Testimonials</span>
            <h2 className="mt-3 text-4xl sm:text-5xl font-black">Voices of recognition.</h2>
          </div>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="p-7 rounded-3xl bg-card border border-border shadow-card hover:shadow-glow transition-shadow"
              >
                <Quote className="text-pink" size={28} />
                <p className="mt-4 text-foreground/85 leading-relaxed">"{t.quote}"</p>
                <div className="mt-6 pt-5 border-t border-border">
                  <div className="font-bold">{t.name}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{t.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
