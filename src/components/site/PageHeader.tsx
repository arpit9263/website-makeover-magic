import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import exteriorWide from "@/assets/kamla-exterior-wide.jpeg";

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
  /** Optional background image override */
  backgroundImage?: string;
};

const PageHeader = ({ eyebrow, title, subtitle, children, backgroundImage }: Props) => {
  const { pathname } = useLocation();
  const segments = pathname.split("/").filter(Boolean);
  const bg = backgroundImage || exteriorWide;

  return (
    <section className="relative overflow-hidden">
      {/* Background image with ken-burns */}
      <div className="absolute inset-0">
        <img
          src={bg}
          alt=""
          className="w-full h-full object-cover animate-ken-burns"
          aria-hidden="true"
        />
      </div>

      {/* Multi-layer overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-primary/70" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" aria-hidden="true" />
      <div className="absolute inset-0 bg-grid-soft opacity-40" aria-hidden="true" />

      {/* Floating decorative orbs */}
      <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-primary-glow/30 blur-3xl animate-blob" aria-hidden="true" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-yellow-400/15 blur-3xl animate-blob" style={{ animationDelay: "5s" }} aria-hidden="true" />

      <div className="container-tight relative z-10 py-24 md:py-32 text-center text-white">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-1.5 text-xs text-white/70 mb-5 animate-fade-in">
          <Link to="/" className="flex items-center gap-1 hover:text-yellow-300 transition-colors">
            <Home className="w-3 h-3" /> Home
          </Link>
          {segments.map((seg, i) => (
            <span key={seg} className="flex items-center gap-1.5">
              <ChevronRight className="w-3 h-3 text-white/40" />
              <span className={i === segments.length - 1 ? "text-yellow-300 font-semibold capitalize" : "capitalize"}>
                {decodeURIComponent(seg).replace(/-/g, " ")}
              </span>
            </span>
          ))}
        </nav>

        {eyebrow && (
          <p className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-xs font-bold uppercase tracking-[0.22em] text-yellow-300 mb-5">
            <span className="h-1.5 w-1.5 rounded-full bg-yellow-300 animate-pulse" />
            {eyebrow}
          </p>
        )}
        <h1 className="font-display text-4xl md:text-6xl font-extrabold mb-4 animate-fade-in-up" style={{ textShadow: "0 2px 24px hsl(0 0% 0% / 0.4)" }}>
          {title}
        </h1>
        {subtitle && (
          <p className="text-base md:text-lg text-white/85 max-w-2xl mx-auto leading-relaxed" style={{ textShadow: "0 1px 8px hsl(0 0% 0% / 0.4)" }}>
            {subtitle}
          </p>
        )}
        {children && <div className="mt-7">{children}</div>}
      </div>

      {/* Bottom curve divider */}
      <svg className="absolute bottom-0 left-0 right-0 w-full text-background" viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden="true">
        <path fill="currentColor" d="M0,40 C360,90 1080,0 1440,40 L1440,80 L0,80 Z" />
      </svg>
    </section>
  );
};

export default PageHeader;
