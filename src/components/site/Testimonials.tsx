import { Star, Quote } from "lucide-react";
import { testimonials } from "@/data/hospital";

const extendedTestimonials = [
  ...testimonials,
  { name: "Surgery Patient", role: "Orthopedic Surgery", text: "The surgical team at Kamla Hospital was professional and the recovery guidance was exceptional.", rating: 5 },
  { name: "OPD Visit", role: "General Consultation", text: "Quick appointment, minimal waiting time, and the doctor explained the diagnosis very clearly.", rating: 5 },
  { name: "Family Member", role: "Emergency Care", text: "Emergency response was fast and efficient. We are very grateful for the prompt medical attention.", rating: 5 },
  { name: "Cardiac Patient", role: "Cardiology", text: "The cardiac evaluation was thorough and the doctor explained every step clearly.", rating: 5 },
  { name: "Maternity", role: "Gynecology", text: "Caring nurses and doctors made my pregnancy journey smooth and reassuring.", rating: 5 },
];

const TestimonialCard = ({ t }: { t: typeof extendedTestimonials[number] }) => (
  <div className="w-[340px] sm:w-[380px] shrink-0 mx-3">
    <div className="relative h-full p-6 rounded-2xl bg-white/8 backdrop-blur-md border border-white/15 hover:bg-white/12 hover:border-white/25 transition-all duration-300">
      <Quote className="w-7 h-7 text-yellow-300/40 mb-3" />
      <div className="flex gap-0.5 mb-3">
        {Array.from({ length: t.rating }).map((_, idx) => (
          <Star key={idx} className="w-3.5 h-3.5 fill-yellow-300 text-yellow-300" />
        ))}
      </div>
      <p className="text-white/90 mb-5 leading-relaxed text-sm min-h-[80px]">"{t.text}"</p>
      <div className="flex items-center gap-3 pt-3 border-t border-white/15">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-300 to-amber-500 flex items-center justify-center text-primary font-extrabold text-sm shrink-0">
          {t.name[0]}
        </div>
        <div>
          <p className="font-display font-bold text-white text-sm">{t.name}</p>
          <p className="text-xs text-white/55">{t.role}</p>
        </div>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  // Duplicate the list so the marquee can loop seamlessly
  const loopRow = [...extendedTestimonials, ...extendedTestimonials];

  return (
    <section className="section-padding bg-animated-hero relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-soft opacity-50" />
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-primary-glow/20 blur-3xl animate-blob" />
      <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-yellow-400/10 blur-3xl animate-blob" style={{ animationDelay: "6s" }} />

      <div className="container-tight relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-yellow-300 mb-3">★ Patient Stories</p>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold text-white mb-4">
            Trusted by thousands of families
          </h2>
          <p className="text-white/70">Real experiences from real patients who chose Kamla Hospital.</p>
        </div>
      </div>

      {/* Marquee row */}
      <div className="relative z-10 mask-fade-x">
        <div className="marquee-track flex w-max animate-marquee">
          {loopRow.map((t, i) => <TestimonialCard key={i} t={t} />)}
        </div>
      </div>

      {/* Second row going the other direction */}
      <div className="relative z-10 mask-fade-x mt-5 hidden sm:block">
        <div className="marquee-track flex w-max animate-marquee-reverse">
          {[...loopRow].reverse().map((t, i) => <TestimonialCard key={i} t={t} />)}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
