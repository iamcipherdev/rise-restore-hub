import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  AlertTriangle,
  Globe,
  Clock3,
  RefreshCw,
  ShieldAlert,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Domain Expired | risenrestore.org" },
      {
        name: "description",
        content:
          "The domain for risenrestore.org has expired or is temporarily unavailable.",
      },
      { property: "og:title", content: "Domain Expired" },
      {
        property: "og:description",
        content:
          "The domain for risenrestore.org has expired or is temporarily unavailable.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: ExpiredPage,
});

const infoCards = [
  {
    icon: Clock3,
    title: "Registration Ended",
    desc: "The domain registration period may have reached its expiration date.",
  },
  {
    icon: RefreshCw,
    title: "Renewal Pending",
    desc: "The owner may currently be processing a renewal request.",
  },
  {
    icon: ShieldAlert,
    title: "Temporary Suspension",
    desc: "DNS or hosting configuration may currently be unavailable.",
  },
];

function ExpiredPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden bg-[#050816] text-white flex items-center">

        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#7c3aed25,transparent_35%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,#ef444425,transparent_35%)]" />
          <div className="absolute top-0 left-0 h-[600px] w-[600px] rounded-full bg-purple-500/10 blur-[150px]" />
          <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-red-500/10 blur-[150px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-20">

          <motion.div
            initial={{ opacity:0, y:20 }}
            animate={{ opacity:1, y:0 }}
            transition={{ duration:0.7 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm backdrop-blur">
              <Globe size={15}/>
              Domain Status
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity:0, y:25 }}
            animate={{ opacity:1, y:0 }}
            transition={{ delay:0.15 }}
          >
            <h1 className="mt-8 text-5xl sm:text-7xl lg:text-8xl font-black leading-[0.95] max-w-5xl">
              <span className="block">
                Domain
              </span>

              <span className="block text-red-400">
                Expired
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            transition={{ delay:0.3 }}
            className="mt-8 max-w-2xl text-lg text-white/70 leading-relaxed"
          >
            The domain registration for{" "}
            <span className="font-bold text-white">
              risenrestore.org
            </span>{" "}
            appears to have expired or is currently unavailable.
            Services linked to this domain may not function until it
            is renewed.
          </motion.p>

          <motion.div
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            transition={{ delay:0.4 }}
            className="mt-10"
          >
            <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-red-500/10 border border-red-500/20 backdrop-blur">

              <AlertTriangle
                size={22}
                className="text-red-400"
              />

              <span className="font-medium">
                risenrestore.org unavailable
              </span>

            </div>
          </motion.div>

        </div>
      </section>

      {/* INFO CARDS */}

      <section className="-mt-24 relative z-20 pb-28">

        <div className="mx-auto max-w-7xl px-6">

          <div className="grid md:grid-cols-3 gap-6">

            {infoCards.map((card,i)=>(

              <motion.div
                key={card.title}
                initial={{ opacity:0, y:20 }}
                whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true }}
                transition={{
                  duration:0.5,
                  delay:i*0.1
                }}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl hover:-translate-y-2 transition-all"
              >

                <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-purple-500 to-red-500 flex items-center justify-center">

                  <card.icon size={25}/>

                </div>

                <h3 className="mt-6 text-xl font-bold">
                  {card.title}
                </h3>

                <p className="mt-3 text-white/60 leading-relaxed">
                  {card.desc}
                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>
    </>
  );
}
