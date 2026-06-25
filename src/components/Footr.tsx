import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { Mail, Phone } from "lucide-react";

const FacebookIcon = (p: { size?: number }) => (
  <svg width={p.size ?? 16} height={p.size ?? 16} viewBox="0 0 24 24" fill="currentColor"><path d="M22 12.07C22 6.51 17.52 2 12 2S2 6.51 2 12.07c0 5 3.66 9.15 8.44 9.93v-7.02H7.9v-2.91h2.54V9.84c0-2.52 1.49-3.91 3.78-3.91 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.44 2.91h-2.34V22c4.78-.78 8.43-4.93 8.43-9.93z"/></svg>
);
const InstagramIcon = (p: { size?: number }) => (
  <svg width={p.size ?? 16} height={p.size ?? 16} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zm0 1.62c-3.15 0-3.5.01-4.74.07-.95.04-1.46.2-1.81.34-.46.18-.78.4-1.12.74-.34.34-.56.66-.74 1.12-.13.34-.3.86-.34 1.81C3.19 8.5 3.18 8.85 3.18 12s.01 3.5.07 4.74c.04.95.2 1.46.34 1.81.18.46.4.78.74 1.12.34.34.66.56 1.12.74.34.13.86.3 1.81.34 1.24.06 1.59.07 4.74.07s3.5-.01 4.74-.07c.95-.04 1.46-.2 1.81-.34.46-.18.78-.4 1.12-.74.34-.34.56-.66.74-1.12.13-.34.3-.86.34-1.81.06-1.24.07-1.59.07-4.74s-.01-3.5-.07-4.74c-.04-.95-.2-1.46-.34-1.81a3.02 3.02 0 0 0-.74-1.12 3.02 3.02 0 0 0-1.12-.74c-.34-.13-.86-.3-1.81-.34-1.24-.06-1.59-.07-4.74-.07zm0 2.76a5.46 5.46 0 1 1 0 10.92 5.46 5.46 0 0 1 0-10.92zm0 9a3.54 3.54 0 1 0 0-7.08 3.54 3.54 0 0 0 0 7.08zm5.68-9.16a1.28 1.28 0 1 1-2.56 0 1.28 1.28 0 0 1 2.56 0z"/></svg>
);
const XIcon = (p: { size?: number }) => (
  <svg width={p.size ?? 16} height={p.size ?? 16} viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
);
const LinkedInIcon = (p: { size?: number }) => (
  <svg width={p.size ?? 16} height={p.size ?? 16} viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"/></svg>
);

const socials = [
  { Icon: FacebookIcon, href: "#", label: "Facebook" },
  { Icon: InstagramIcon, href: "https://instagram.com/riseandrestore.io", label: "Instagram" },
  { Icon: XIcon, href: "#", label: "Twitter / X" },
  { Icon: LinkedInIcon, href: "#", label: "LinkedIn" },
];

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
            {socials.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={label}
                className="h-10 w-10 inline-flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-gradient-brand hover:scale-110 transition-all duration-300"
              >
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
          <p className="text-[10px] text-white/40">Made by cipher</p>
        </div>
      </div>
    </footer>
  );
}
