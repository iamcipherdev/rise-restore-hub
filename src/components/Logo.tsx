import logo from "@/assets/logo.jpg";
import { Link } from "@tanstack/react-router";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-3 group">
      <div className="relative h-11 w-11 overflow-hidden rounded-xl shadow-card ring-1 ring-black/5">
        <img src={logo} alt="Rise and Restore logo" className="h-full w-full object-cover" />
      </div>
      <div className="leading-tight">
        <div className={`font-bold text-base sm:text-lg ${light ? "text-white" : "text-foreground"}`}>
          Rise <span className="text-gradient">and Restore</span>
        </div>
        <div className={`text-[10px] sm:text-[11px] uppercase tracking-[0.2em] ${light ? "text-white/60" : "text-muted-foreground"}`}>
          Together we Rise
        </div>
      </div>
    </Link>
  );
}
