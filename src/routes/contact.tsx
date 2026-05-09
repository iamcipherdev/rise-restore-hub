import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { z } from "zod";
import { UserPlus, HeartHandshake, Building2, DollarSign, Phone, Mail, Send, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Get Involved & Contact — Rise and Restore" },
      { name: "description", content: "Become an ambassador, volunteer, partner with us, or support through funding. Reach Rise and Restore today." },
      { property: "og:title", content: "Get Involved — Rise and Restore" },
      { property: "og:description", content: "Four ways to join the movement. Together, we rise." },
    ],
  }),
  component: ContactPage,
});

const ways = [
  { icon: UserPlus, title: "Become an Ambassador", desc: "Champion our mission in your community and amplify the voices that need to be heard." },
  { icon: HeartHandshake, title: "Volunteer in Programs", desc: "Give your time and skills to programs delivering real change on the ground." },
  { icon: Building2, title: "Partner With Us", desc: "Collaborate with us as an organization to scale collective impact." },
  { icon: DollarSign, title: "Support Through Funding", desc: "Fuel education, advocacy and empowerment work across Pakistan." },
];

const formSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  help: z.string().trim().min(1, "Please choose how you want to help").max(100),
  message: z.string().trim().min(1, "Message required").max(1000),
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      help: String(fd.get("help") ?? ""),
      message: String(fd.get("message") ?? ""),
    };
    const result = formSchema.safeParse(data);
    if (!result.success) {
      const fe: Record<string, string> = {};
      result.error.issues.forEach((i) => (fe[String(i.path[0])] = i.message));
      setErrors(fe);
      return;
    }
    setErrors({});
    setSubmitted(true);
  }

  return (
    <>
      <section className="bg-gradient-dark text-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-pink">Join Us</span>
          <h1 className="mt-3 text-5xl sm:text-7xl font-black max-w-4xl leading-[1.05]">
            Be part of the <span className="text-gradient">change</span>.
          </h1>
          <p className="mt-6 text-lg text-white/70 max-w-2xl">
            Whether you bring time, skills or resources — there's a place for you in the Rise and Restore movement.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {ways.map((w, i) => (
            <motion.div
              key={w.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group p-7 rounded-3xl bg-card border border-border shadow-card hover:shadow-glow hover:-translate-y-1 transition-all"
            >
              <div className="h-14 w-14 rounded-2xl bg-gradient-brand flex items-center justify-center text-white shadow-glow">
                <w.icon size={26} />
              </div>
              <h3 className="mt-5 text-lg font-bold leading-tight">{w.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{w.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-5">
            <h2 className="text-4xl font-black leading-tight">Let's talk.</h2>
            <p className="text-muted-foreground">Reach out — we read every message.</p>
            <a href="tel:+923215962003" className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-border shadow-card hover:border-purple transition-colors">
              <div className="h-12 w-12 rounded-xl bg-gradient-soft text-purple flex items-center justify-center"><Phone size={20} /></div>
              <div>
                <div className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">Phone</div>
                <div className="font-bold mt-0.5">+92 321 5962003</div>
              </div>
            </a>
            <a href="mailto:riseandrestore.org@gmail.com" className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-border shadow-card hover:border-purple transition-colors">
              <div className="h-12 w-12 rounded-xl bg-gradient-soft text-purple flex items-center justify-center"><Mail size={20} /></div>
              <div className="min-w-0">
                <div className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">Email</div>
                <div className="font-bold mt-0.5 truncate">riseandrestore.org@gmail.com</div>
              </div>
            </a>
          </div>

          <div className="lg:col-span-3 p-8 sm:p-10 rounded-3xl bg-card border border-border shadow-elegant">
            {submitted ? (
              <div className="text-center py-10">
                <div className="mx-auto h-16 w-16 rounded-full bg-gradient-brand flex items-center justify-center text-white shadow-glow">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="mt-5 text-2xl font-black">Thank you!</h3>
                <p className="mt-2 text-muted-foreground">We've received your message and will get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5">
                <Field label="Full name" name="name" error={errors.name} />
                <Field label="Email" name="email" type="email" error={errors.email} />
                <div>
                  <label className="block text-sm font-semibold mb-2">How would you like to help?</label>
                  <select name="help" defaultValue="" className="w-full h-12 px-4 rounded-xl bg-secondary border border-border focus:outline-none focus:ring-2 focus:ring-purple text-foreground">
                    <option value="" disabled>Select an option…</option>
                    <option>Become an Ambassador</option>
                    <option>Volunteer</option>
                    <option>Partner with us</option>
                    <option>Donate / Fund a program</option>
                    <option>Something else</option>
                  </select>
                  {errors.help && <p className="mt-1.5 text-xs text-destructive">{errors.help}</p>}
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Your message</label>
                  <textarea name="message" rows={5} maxLength={1000} className="w-full p-4 rounded-xl bg-secondary border border-border focus:outline-none focus:ring-2 focus:ring-purple resize-none" placeholder="Tell us a little about yourself…" />
                  {errors.message && <p className="mt-1.5 text-xs text-destructive">{errors.message}</p>}
                </div>
                <button type="submit" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-gradient-brand text-white font-semibold shadow-glow hover:scale-[1.02] transition-transform">
                  Send Message <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", error }: { label: string; name: string; type?: string; error?: string }) {
  return (
    <div>
      <label className="block text-sm font-semibold mb-2">{label}</label>
      <input
        name={name}
        type={type}
        maxLength={255}
        className="w-full h-12 px-4 rounded-xl bg-secondary border border-border focus:outline-none focus:ring-2 focus:ring-purple"
      />
      {error && <p className="mt-1.5 text-xs text-destructive">{error}</p>}
    </div>
  );
}
