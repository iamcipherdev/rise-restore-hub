import { useEffect, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/programs", label: "Programs" },
  { to: "/leadership", label: "Leadership" },
  { to: "/contact", label: "Get Involved" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled || open ? "glass border-b border-border/60" : ""}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 sm:h-18 flex items-center justify-between">
        <Logo />
        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="px-4 py-2 text-sm font-medium text-foreground/70 hover:text-foreground rounded-full transition-colors"
              activeProps={{ className: "px-4 py-2 text-sm font-semibold text-foreground bg-secondary rounded-full" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="ml-2 px-5 py-2.5 text-sm font-semibold text-white rounded-full bg-gradient-brand shadow-glow hover:opacity-95 transition-opacity"
          >
            Donate
          </Link>
        </nav>
        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden h-10 w-10 inline-flex items-center justify-center rounded-full bg-secondary"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden glass border-t border-border/60"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="px-4 py-3 text-base font-medium rounded-xl hover:bg-secondary"
                  activeProps={{ className: "px-4 py-3 text-base font-semibold rounded-xl bg-gradient-soft text-foreground" }}
                  activeOptions={{ exact: l.to === "/" }}
                >
                  {l.label}
                </Link>
              ))}
              <Link to="/contact" className="mt-2 px-4 py-3 text-center text-base font-semibold text-white rounded-xl bg-gradient-brand">
                Donate
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
