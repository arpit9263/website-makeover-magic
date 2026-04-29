import { Link } from "react-router-dom";
import { ArrowRight, Award, HeartPulse, Users2, Sparkles, ShieldCheck, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { hospitalInfo } from "@/data/hospital";

const pillars = [
  { icon: HeartPulse, title: "Compassionate Care", desc: "Every patient treated with dignity, empathy and respect." },
  { icon: Award, title: "Clinical Excellence", desc: "Experienced specialists, advanced equipment, proven outcomes." },
  { icon: Users2, title: "Patient-First Team", desc: "Multi-disciplinary doctors collaborating for your wellbeing." },
  { icon: ShieldCheck, title: "Trusted & Accredited", desc: "NABH-aligned protocols and PM-JAY empanelment." },
];

const AboutSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Soft background accents */}
      <div className="absolute top-20 -left-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-[500px] h-[500px] rounded-full bg-yellow-300/10 blur-3xl pointer-events-none" />

      <div className="container-tight relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image collage */}
          <div className="relative">
            {/* Main image */}
            <div className="relative rounded-[2rem] overflow-hidden shadow-strong group">
              <img
                src={hospitalInfo.images.exteriorWide}
                alt="Kamla Hospital exterior"
                className="w-full h-[440px] md:h-[520px] object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />

              {/* Years badge — top left */}
              <div className="absolute top-5 left-5 bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-medium border border-white/60">
                <p className="font-display text-3xl font-extrabold text-primary leading-none">40<span className="text-yellow-500">+</span></p>
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold mt-1">Years of trust</p>
              </div>

              {/* Play card — bottom right */}
              <Link
                to="/gallery"
                className="absolute bottom-5 right-5 flex items-center gap-3 bg-white/95 backdrop-blur-sm rounded-full pl-2 pr-5 py-2 shadow-medium border border-white/60 hover:bg-white transition-colors group/play"
              >
                <span className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center group-hover/play:scale-110 transition-transform">
                  <PlayCircle className="w-5 h-5" />
                </span>
                <span className="text-xs font-bold text-foreground">Take a virtual tour</span>
              </Link>
            </div>

            {/* Floating secondary card */}
            <div className="hidden md:block absolute -bottom-8 -left-8 w-56 bg-card rounded-2xl shadow-strong border border-border p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-11 h-11 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-display font-extrabold text-sm">PM-JAY</p>
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Empaneled</p>
                </div>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Cashless treatment up to <span className="font-bold text-emerald-700">₹5 Lakh/year</span> for eligible families.
              </p>
            </div>

            {/* Stats card top right floating */}
            <div className="hidden md:flex absolute -top-6 -right-4 items-center gap-3 bg-primary text-white rounded-2xl shadow-strong px-5 py-3.5">
              <Sparkles className="w-5 h-5 text-yellow-300" />
              <div className="leading-tight">
                <p className="font-display text-base font-extrabold">10+ Specialists</p>
                <p className="text-[10px] uppercase tracking-wider opacity-80">Under one roof</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-primary mb-4">
              <span className="w-8 h-px bg-primary" /> About Kamla Hospital
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-extrabold leading-tight mb-5">
              Compassion-led healthcare <br className="hidden md:inline" />
              for the people of <span className="text-gradient-gold">Jhansi</span>.
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-5">
              For over four decades, Kamla Hospital has been a trusted name in multi-specialty
              healthcare — bringing together experienced specialists, modern diagnostics and a
              patient-first culture under one roof. From routine OPD to round-the-clock emergency
              care, we are committed to making quality treatment accessible and affordable.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed mb-8">
              As an Ayushman Bharat (PM-JAY) empaneled hospital, we proudly serve eligible
              beneficiaries with cashless treatment, ensuring no family delays care for financial reasons.
            </p>

            {/* Pillars grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {pillars.map((p) => (
                <div
                  key={p.title}
                  className="group flex gap-3 p-4 rounded-2xl border border-border bg-card hover:border-primary/30 hover:shadow-soft transition-all"
                >
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                    <p.icon className="w-5 h-5" />
                  </div>
                  <div className="leading-tight">
                    <p className="font-display font-bold text-sm mb-1">{p.title}</p>
                    <p className="text-xs text-muted-foreground">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-primary text-white rounded-full shadow-medium hover:bg-primary/90">
                <Link to="/about">
                  Learn more about us <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full border-primary/30 text-primary hover:bg-primary hover:text-white">
                <Link to="/doctors">Meet our doctors</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
