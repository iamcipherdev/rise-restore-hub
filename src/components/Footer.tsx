import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { Mail, Phone, Globe, Send, Camera, Users } from "lucide-react";

const socialIcons = [Globe, Camera, Send, Users];

export function Footer() {
  return (
    <footer className="bg-gradient-dark text-white mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2 space-y-4">
          <Logo light />
          <p className="text-white/70 max-w-sm text-sm leading-relaxed">
            A youth-led movement empowering women, advancing inclusive education, and championing
            transgender rights across Pakistan.
          </p>
          <div className="flex gap-3 pt-2">
            {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
              <a key={i} href="#" aria-label="social" className="h-10 w-10 inline-flex items-center justify-center rounded-full bg-white/10 hover:bg-gradient-brand transition-all">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white/60 mb-4">Explore</h4>
          <ul className="space-y-2.5 text-sm">
            <li><Link to="/" className="hover:text-pink transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-pink transition-colors">About</Link></li>
            <li><Link to="/programs" className="hover:text-pink transition-colors">Programs</Link></li>
            <li><Link to="/leadership" className="hover:text-pink transition-colors">Leadership</Link></li>
            <li><Link to="/contact" className="hover:text-pink transition-colors">Get Involved</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white/60 mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-white/80">
            <li className="flex items-center gap-2"><Phone size={14} /> +92 321 5962003</li>
            <li className="flex items-center gap-2"><Mail size={14} /> riseandrestore.org@gmail.com</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/50">
          <p>© 2026 Rise and Restore. All rights reserved.</p>
          <p>Together we Rise.</p>
        </div>
      </div>
    </footer>
  );
}
