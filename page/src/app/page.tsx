import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Code, Shield, Zap, Users, Globe, Star, Gamepad2, Music, ExternalLink } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Desarrollo Web",
    desc: "Aplicaciones web modernas con Next.js, React y TypeScript. Rendimiento, escalabilidad y diseño de alto nivel.",
  },
  {
    icon: Shield,
    title: "Infraestructura Digital",
    desc: "Arquitectura cloud, despliegue continuo y seguridad enterprise. Vercel, AWS y herramientas modernas.",
  },
  {
    icon: Zap,
    title: "Experiencia de Usuario",
    desc: "Interfaces intuitivas con estética cuidada. Animaciones fluidas y diseño responsivo.",
  },
];

const projects = [
  {
    name: "MuzicMania",
    tagline: "Juego de Ritmo Definitivo",
    desc: "Plataforma de juego rítmico en la web con estética futurista, desarrollada por Ciszu Network.",
    href: "https://muzicmania.com",
    icon: Music,
    color: "from-brand to-neon-blue",
  },
  {
    name: "Shigamens Network",
    tagline: "Comunidad & Entretenimiento",
    desc: "Red de comunidades digitales, servidores de juego y experiencias interactivas multiplataforma.",
    href: "#",
    icon: Gamepad2,
    color: "from-brand to-neon-purple",
  },
];

const stats = [
  { value: "5+", label: "Proyectos Lanzados" },
  { value: "100%", label: "Compromiso" },
  { value: "24/7", label: "Soporte Técnico" },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center text-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(35,63,146,0.3)_0%,rgba(0,10,30,0.2)_60%,transparent_100%)]" />
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'linear-gradient(rgba(35,63,146,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(35,63,146,0.1) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }} />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand/20 rounded-full blur-[120px] animate-blob" />
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-brand-light/10 rounded-full blur-[100px] animate-blob animation-delay-2000" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-6 mb-6">
            <Image
              src="/logos/imagen/outline/isotipo/monocroma/ciszuko_logo_isotipo_outline_zblack_cwhite.svg"
              alt="Ciszu Network"
              width={80}
              height={80}
              className="drop-shadow-brand"
            />
          </div>
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-brand/10 border border-brand/30 text-xs font-bold uppercase tracking-widest text-brand-light mb-6">
            <Star className="w-3 h-3" /> BRIGHT FUTURE PROMISED
          </div>
          <h1 className="text-5xl md:text-7xl font-header font-black tracking-tighter mb-6">
            <span className="bg-gradient-to-r from-brand-light via-brand-accent to-brand-light bg-clip-text text-transparent">
              Ciszu Network
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 font-accent">
            Innovación digital con propósito. Desarrollamos soluciones de alto rendimiento 
            que combinan tecnología de punta con una estética inconfundible.
          </p>
          <div className="flex gap-4 flex-wrap justify-center">
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-brand/20 text-white font-black rounded-xl border-2 border-brand/50 hover:bg-brand hover:scale-105 transition-all text-lg font-header shadow-[0_0_20px_rgba(35,63,146,0.3)] hover:shadow-[0_0_30px_rgba(35,63,146,0.5)]">
              Contáctanos <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="#projects" className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 text-white font-black rounded-xl border-2 border-white/20 hover:bg-white/10 hover:scale-105 transition-all text-lg font-header">
              Nuestros Proyectos
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {stats.map((s, i) => (
              <div key={i} className="text-center p-8 rounded-2xl bg-brand/5 border border-brand/20 hover:border-brand/40 transition-all">
                <div className="text-5xl font-header font-black text-brand-light mb-2">{s.value}</div>
                <div className="text-gray-400 text-sm font-bold uppercase tracking-widest">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-header font-black bg-gradient-to-r from-brand-light via-brand-accent to-brand-light bg-clip-text text-transparent uppercase tracking-tighter">
              Servicios
            </h2>
            <p className="text-gray-400 mt-4 max-w-xl mx-auto text-sm uppercase tracking-widest">
              Tecnología de punta para proyectos ambiciosos
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {services.map((s, i) => (
              <div key={i} className="p-8 rounded-2xl bg-brand/5 border border-brand/20 hover:border-brand-light/30 transition-all group hover:-translate-y-1">
                <s.icon className="w-12 h-12 text-brand-light mb-6" />
                <h3 className="text-xl font-header font-bold mb-3 text-white">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 bg-gradient-to-b from-transparent to-black/80 border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-header font-black bg-gradient-to-r from-brand-light via-brand-accent to-brand-light bg-clip-text text-transparent uppercase tracking-tighter">
              Proyectos
            </h2>
            <p className="text-gray-400 mt-4 max-w-xl mx-auto text-sm uppercase tracking-widest">
              Soluciones digitales creadas por Ciszu Network
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {projects.map((p, i) => (
              <a key={i} href={p.href} target="_blank" rel="noopener noreferrer"
                className="group relative p-[1px] rounded-[2rem] bg-gradient-to-br from-brand/40 via-brand-light/20 to-transparent hover:from-brand-light/60 transition-all duration-500 overflow-hidden"
              >
                <div className="bg-[#0a0a0f] rounded-[2rem] p-8 h-full flex flex-col">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${p.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                    <p.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-header font-bold text-white mb-1 group-hover:text-brand-light transition-colors">
                    {p.name}
                  </h3>
                  <p className="text-brand-light text-xs font-bold uppercase tracking-widest mb-4">
                    {p.tagline}
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed flex-grow">
                    {p.desc}
                  </p>
                  <div className="flex items-center gap-2 text-brand-light text-xs font-bold uppercase tracking-widest mt-6 group-hover:gap-3 transition-all">
                    Conocer más <ExternalLink className="w-3 h-3" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CEO */}
      <section className="py-24 border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto p-10 md:p-14 rounded-[2.5rem] bg-gradient-to-br from-brand/10 via-brand-dark/10 to-transparent border border-brand/30 text-center relative overflow-hidden group">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand/10 rounded-full blur-[80px] group-hover:bg-brand-light/10 transition-all" />
            <div className="relative z-10">
              <div className="w-24 h-24 rounded-full bg-brand-gradient mx-auto mb-6 flex items-center justify-center shadow-[0_0_30px_rgba(35,63,146,0.4)]">
                <Users className="w-12 h-12 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-header font-black text-white mb-2 uppercase tracking-tighter">
                Ciszuko Antony
              </h2>
              <p className="text-brand-light font-black text-xs uppercase tracking-[0.4em] mb-6">
                CEO & Fundador — Ciszu Network
              </p>
              <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8">
                Visionario digital y desarrollador full-stack. Fundador de Ciszu Network y creador de MuzicMania. 
                Lidera con una visión centrada en la innovación, la calidad técnica y la experiencia de usuario.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {["Next.js", "React", "TypeScript", "UI/UX", "Arquitectura Cloud", "Liderazgo"].map((skill) => (
                  <span key={skill} className="px-4 py-2 rounded-full bg-brand/10 border border-brand/30 text-xs font-bold text-brand-light">
                    {skill}
                  </span>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-brand/20 border border-brand/40 text-brand-light rounded-xl font-bold text-sm hover:bg-brand hover:text-white transition-all">
                  Contactar <ArrowRight className="w-4 h-4" />
                </Link>
                <a href="https://beacons.ai/ciszuko" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/20 text-white rounded-xl font-bold text-sm hover:bg-white/10 transition-all">
                  <ExternalLink className="w-4 h-4" /> Portafolio
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-white/5">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto p-12 rounded-[2rem] bg-gradient-to-r from-brand/20 via-brand-dark/10 to-transparent border border-brand/30">
            <Globe className="w-16 h-16 text-brand-light mx-auto mb-6 drop-shadow-brand" />
            <h2 className="text-4xl md:text-5xl font-header font-black bg-gradient-to-r from-white via-brand-light to-brand-accent bg-clip-text text-transparent uppercase tracking-tighter mb-4">
              Construyamos el Futuro
            </h2>
            <p className="text-gray-400 mb-8 max-w-md mx-auto text-sm uppercase tracking-widest">
              ¿Tienes un proyecto en mente? Hablemos.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-3 px-10 py-5 bg-brand text-white font-black rounded-2xl hover:bg-brand-light hover:scale-105 transition-all uppercase tracking-widest shadow-brand">
              Iniciar Proyecto <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}