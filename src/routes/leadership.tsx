import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Award, Quote, Star, BookOpen, Globe, Users, GraduationCap, Compass } from "lucide-react";

const InstagramIcon = (p: { size?: number }) => (
  <svg width={p.size ?? 18} height={p.size ?? 18} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zm0 9.34a3.54 3.54 0 1 0 0 7.08 3.54 3.54 0 0 0 0-7.08zm5.68-7.74a1.28 1.28 0 1 1-2.56 0 1.28 1.28 0 0 1 2.56 0z"/></svg>
);
import founderImg from "@/assets/founder.jpg";
import tVeena from "@/assets/t-veena.jpg";
import tIrish from "@/assets/t-irish.jpg";
import tHina from "@/assets/t-hina.jpg";
import tPernille from "@/assets/t-pernille.jpg";
import tIjaz from "@/assets/t-ijaz.jpg";

export const Route = createFileRoute("/leadership")({
  head: () => ({
    meta: [
      { title: "Leadership & Testimonials — Rise and Restore" },
      { name: "description", content: "Meet our founder M. Shahzaib Asmat and read what global leaders say about Rise and Restore." },
      { property: "og:title", content: "Leadership — Rise and Restore" },
      { property: "og:description", content: "Founded by Pakistan's youngest research-based book writer." },
      { property: "og:image", content: founderImg },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Leadership — Rise and Restore" },
      { name: "twitter:description", content: "Founded by Pakistan's youngest research-based book writer." },
      { name: "twitter:image", content: founderImg },
    ],
  }),
  component: LeadershipPage,
});

const awards = [
  "Global Youth Leadership Award",
  "Global Recognition Award",
  "Connected Pakistan 30 Under 30 Award 2026",
  "Pride of Pakistan Award",
  "Commonwealth Essay Competition Gold Honor",
  "SEAMO International Gold Medal",
  "MYCP Youth Excellence Award",
];

const sections = [
  {
    icon: BookOpen,
    title: "Authorship and Intellectual Contributions",
    body: "Shahzaib is the author of impactful research-based and philosophical works, including Voices Without Permission and Dialectic of Dissent. His writings explore critical themes such as freedom of expression, dissent, education reform, and gender equality.",
  },
  {
    icon: Globe,
    title: "International Recognition",
    body: "He has been recognized by Stanford University, MIT and Dartmouth College. Featured as one of the youngest contributors in an academic journal at Stanford University.",
  },
  {
    icon: Users,
    title: "Global Leadership",
    body: "Shahzaib serves as a Youth Ambassador linked with United Nations related initiatives and SDGs Ambassador for Pakistan. Engaged with TheirWorld and international youth leadership networks.",
  },
  {
    icon: GraduationCap,
    title: "Educational Vision",
    body: "Shahzaib is leading an initiative to develop a national curriculum focused on critical thinking for students from Grade Five to Grade Ten.",
  },
  {
    icon: Compass,
    title: "Mission and Vision",
    body: "His mission is to reform education systems, promote intellectual freedom, empower marginalized communities, and inspire youth to become leaders of positive change.",
  },
];

const testimonials = [
  { photo: tVeena, quote: "Rise and Restore is creating meaningful change by uplifting marginalized communities with dignity and purpose. Their work is deeply impactful.", name: "Veena Khan", role: "President, Wajood Society" },
  { photo: tIrish, quote: "Shahzaib Asmat has shown remarkable dedication. His support for transgender education is giving hope and opportunity.", name: "Irish Khan", role: "Principal, Transgender School Gujranwala" },
  { photo: null, quote: "The organization is shaping confident and aware young minds. This reflects true leadership and social responsibility.", name: "Sidra Asmat", role: "Principal" },
  { photo: tHina, quote: "The work highlights the importance of youth-led initiatives in advancing human rights.", name: "Hina Jilani", role: "Human Rights Activist" },
  { photo: tPernille, quote: "Such initiatives demonstrate how youth can contribute meaningfully to sustainable development.", name: "Pernille Ironside", role: "" },
  { photo: tIjaz, quote: "Shahzaib represents the true spirit of youth leadership and inspires thousands to create change.", name: "Ijaz Khan", role: "Chairman, World Youth Council" },
];

function LeadershipPage() {
  return (
    <>
      <section className="bg-gradient-dark text-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-pink">Leadership</span>
          <h1 className="mt-3 text-5xl sm:text-7xl font-black max-w-4xl leading-[1.05]">
            Founder and <span className="text-gradient">President</span>.
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
            <div className="lg:col-span-2 relative rounded-3xl overflow-hidden shadow-elegant min-h-[480px]">
              <img src={founderImg} alt="M. Shahzaib Asmat" loading="lazy" className="absolute inset-0 h-full w-full object-cover object-top" />
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
              <h2 className="mt-4 text-3xl sm:text-4xl font-black leading-tight">M. Shahzaib Asmat</h2>
              <div className="mt-5 space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  M. Shahzaib Asmat is a remarkable young Pakistani author, researcher, and globally
                  recognized youth leader whose work is redefining the role of young people in
                  education reform, intellectual discourse, and human rights advocacy.
                </p>
                <p>
                  At an exceptionally young age, he has emerged as one of the most influential youth
                  voices in Pakistan and internationally. He is widely recognized as Pakistan's
                  youngest research-based book writer and among the youngest writers in the
                  humanities field in recorded history.
                </p>
                <p>
                  As the Founder of Rise and Restore at the age of twelve, Shahzaib demonstrated
                  extraordinary vision and leadership. Through this initiative, he has worked
                  tirelessly to promote youth leadership, empower women, and provide education to
                  underprivileged communities.
                </p>
              </div>
              <a
                href="https://instagram.com/shahxaib__asmat"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-brand text-white font-semibold shadow-glow hover:scale-[1.03] transition-transform"
              >
                <InstagramIcon size={18} /> Follow on Instagram
              </a>
            </div>
          </motion.div>

          <div className="mt-10 grid md:grid-cols-2 gap-5">
            {sections.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="p-7 rounded-3xl bg-card border border-border shadow-card hover:-translate-y-1 transition-transform"
              >
                <div className="flex items-center gap-3">
                  <div className="h-11 w-11 rounded-xl bg-gradient-soft flex items-center justify-center text-purple">
                    <s.icon size={20} />
                  </div>
                  <h3 className="text-lg sm:text-xl font-black text-gradient leading-tight">{s.title}</h3>
                </div>
                <p className="mt-4 text-muted-foreground leading-relaxed text-sm sm:text-base">{s.body}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-10 p-7 sm:p-9 rounded-3xl bg-card border border-border shadow-card"
          >
            <div className="flex items-center gap-3">
              <div className="h-11 w-11 rounded-xl bg-gradient-soft flex items-center justify-center text-purple">
                <Award size={20} />
              </div>
              <h3 className="text-lg sm:text-xl font-black text-gradient leading-tight">Awards and Achievements</h3>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {awards.map((a) => (
                <span
                  key={a}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-full bg-gradient-brand text-white shadow-glow"
                >
                  <Award size={12} /> {a}
                </span>
              ))}
            </div>
            <p className="mt-5 text-sm text-muted-foreground">
              He also holds multiple international records recognizing his contributions.
            </p>
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
                <div className="mt-6 pt-5 border-t border-border flex items-center gap-3">
                  {t.photo ? (
                    <img
                      src={t.photo}
                      alt={t.name}
                      loading="lazy"
                      className="h-12 w-12 rounded-full object-cover ring-2 ring-purple/40"
                    />
                  ) : (
                    <div className="h-12 w-12 rounded-full bg-gradient-brand flex items-center justify-center text-white font-bold ring-2 ring-purple/40">
                      {t.name[0]}
                    </div>
                  )}
                  <div>
                    <div className="font-bold text-sm">{t.name}</div>
                    {t.role && <div className="text-xs text-muted-foreground mt-0.5">{t.role}</div>}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
