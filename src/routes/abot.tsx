import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Target, Eye, Award, BookOpen, HandHeart, School, Megaphone } from "lucide-react";
import womenImg from "@/assets/hero-women.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Rise and Restore" },
      { name: "description", content: "Our mission, vision and impact: advancing women's rights, education, and inclusion across Pakistan." },
      { property: "og:title", content: "About Rise and Restore" },
      { property: "og:description", content: "A just and inclusive society where every individual has equal opportunity to thrive." },
      { property: "og:image", content: womenImg },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "About Rise and Restore" },
      { name: "twitter:description", content: "Mission, vision and impact across Pakistan." },
      { name: "twitter:image", content: womenImg },
    ],
  }),
  component: AboutPage,
});

const impacts = [
  { icon: Award, title: "60,000+ Youth Empowered", desc: "Trained through leadership and skill-development programs." },
  { icon: BookOpen, title: "200+ Children Educated", desc: "Free education delivered to underprivileged children." },
  { icon: HandHeart, title: "PKR 2.5M+ Raised", desc: "Mobilized for social development initiatives." },
  { icon: School, title: "Transgender Education", desc: "Dedicated learning support in Gujranwala." },
  { icon: Megaphone, title: "Awareness in Schools", desc: "Sessions delivered across Pakistan to spark change." },
];

import pWajood from "@/assets/p-wajood.jpg";
import pMycp from "@/assets/p-mycp.jpg";
import pIoy from "@/assets/p-ioy.jpg";
import pCcc from "@/assets/p-ccc.jpg";
import pUndp from "@/assets/p-undp.jpg";
import pStateOfYouth from "@/assets/p-stateofyouth.jpg";
import pChildcare from "@/assets/p-childcare.jpg";
import pWomen from "@/assets/p-women.jpg";
import pIlo from "@/assets/p-ilo.jpg";
import pHrn from "@/assets/p-hrn.jpg";

const partners: { name: string; logo?: string }[] = [
  { name: "Wajood Society", logo: pWajood },
  { name: "MYCP", logo: pMycp },
  { name: "International Organization of Youth", logo: pIoy },
  { name: "State of Youth", logo: pStateOfYouth },
  { name: "Community Care Collective", logo: pCcc },
  { name: "UNDP Pakistan", logo: pUndp },
  { name: "ChildCare Initiative", logo: pChildcare },
  { name: "Women Focus Advocacy Platform", logo: pWomen },
  { name: "International Labour Organization", logo: pIlo },
  { name: "Human Rights Networks", logo: pHrn },
];

function AboutPage() {
  return (
    <>
      <section className="relative bg-gradient-dark text-white overflow-hidden">
        <div className="absolute inset-0">
          <img src={womenImg} alt="" className="h-full w-full object-cover opacity-25" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/70 to-ink" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <span className="text-xs font-bold uppercase tracking-widest text-pink">Who We Are</span>
          <h1 className="mt-3 text-5xl sm:text-7xl font-black max-w-4xl leading-[1.05]">
            A movement built on <span className="text-gradient">dignity, equity</span> and hope.
          </h1>
          <p className="mt-6 text-lg text-white/70 max-w-2xl">
            Founded by Pakistan's youngest research-based author, Rise and Restore is rewriting what's
            possible for women, children and transgender communities.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8">
          {[
            { icon: Target, title: "Our Mission", body: "To advance women's rights, promote access to quality education, and ensure equal opportunities for transgender individuals — enabling them to live with dignity, confidence and independence." },
            { icon: Eye, title: "Our Vision", body: "To build a just and inclusive society where every individual, regardless of gender or background, has access to education, equal rights, and opportunities for growth." },
          ].map((m, i) => (
            <motion.div
              key={m.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative p-10 rounded-3xl bg-card border border-border shadow-card overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-gradient-brand opacity-10" />
              <div className="relative">
                <div className="h-14 w-14 rounded-2xl bg-gradient-brand flex items-center justify-center text-white shadow-glow">
                  <m.icon size={26} />
                </div>
                <h2 className="mt-6 text-3xl font-black">{m.title}</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">{m.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-pink">Our Impact</span>
            <h2 className="mt-3 text-4xl sm:text-5xl font-black">Real change, measured in lives.</h2>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {impacts.map((it, i) => (
              <motion.div
                key={it.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="p-7 rounded-3xl bg-card border border-border shadow-card hover:-translate-y-1 transition-transform"
              >
                <div className="h-12 w-12 rounded-xl bg-gradient-soft flex items-center justify-center text-purple">
                  <it.icon size={22} />
                </div>
                <h3 className="mt-5 text-lg font-bold">{it.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-pink">Collaborations</span>
            <h2 className="mt-3 text-4xl sm:text-5xl font-black">Trusted by changemakers worldwide.</h2>
          </div>
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {partners.map((p) => (
              <div
                key={p.name}
                className="rounded-2xl border-2 border-purple bg-card p-5 flex flex-col items-center justify-center gap-3 text-center hover:-translate-y-1 hover:text-purple transition-all duration-300"
                style={{ transitionProperty: "transform, box-shadow, color" }}
                onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 12px 30px -8px rgba(106,13,173,0.45)")}
                onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "")}
              >
                <div className="h-20 w-full flex items-center justify-center">
                  {p.logo ? (
                    <img src={p.logo} alt={p.name} loading="lazy" className="max-h-20 max-w-full object-contain" />
                  ) : (
                    <div className="h-16 w-16 rounded-full bg-gradient-soft flex items-center justify-center text-purple font-black text-xl">
                      {p.name.split(" ").map((w) => w[0]).slice(0, 2).join("")}
                    </div>
                  )}
                </div>
                <div className="text-sm font-semibold text-foreground/80">{p.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
