import Link from "next/link";
import Image from "next/image";
import { Users, Mail, Phone, MapPin, ArrowRight, ExternalLink } from "lucide-react";

export default function TeamPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-brand/10 text-brand-light mb-6">
            <Users className="w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-6xl font-header font-black bg-gradient-to-r from-brand-light to-brand-accent bg-clip-text text-transparent uppercase tracking-tighter mb-4">
            Equipo
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto text-sm uppercase tracking-widest">
            La visión detrás de Ciszu Network
          </p>
        </div>

        {/* CEO */}
        <div className="p-10 md:p-14 rounded-[2.5rem] bg-brand/5 border border-brand/20 text-center mb-12 relative overflow-hidden group hover:border-brand-light/30 transition-all">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand/10 rounded-full blur-[80px] group-hover:bg-brand-light/10 transition-all" />
          <div className="relative z-10">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-brand to-brand-light mx-auto mb-6 flex items-center justify-center shadow-[0_0_30px_rgba(35,63,146,0.4)]">
              <span className="text-3xl font-black text-white">CA</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-header font-black text-white mb-2 uppercase tracking-tighter">
              Ciszuko Antony
            </h2>
            <p className="text-brand-light font-black text-xs uppercase tracking-[0.4em] mb-6">
              CEO & Fundador
            </p>
            <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8">
              Visionario digital y desarrollador full-stack. Fundador de Ciszu Network, 
              lidera la creación de soluciones tecnológicas con un enfoque en rendimiento, 
              estética y experiencia de usuario. Creador de MuzicMania y otros proyectos innovadores.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {["Next.js", "React", "TypeScript", "Tailwind", "UI/UX", "Arquitectura Cloud"].map((skill) => (
                <span key={skill} className="px-4 py-2 rounded-full bg-brand/10 border border-brand/30 text-xs font-bold text-brand-light">
                  {skill}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-brand/20 border border-brand/40 text-brand-light rounded-xl font-bold text-sm hover:bg-brand hover:text-white transition-all">
                <Mail className="w-4 h-4" /> Contactar
              </Link>
              <a href="https://beacons.ai/ciszuko" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/20 text-white rounded-xl font-bold text-sm hover:bg-white/10 transition-all">
                <ExternalLink className="w-4 h-4" /> Portafolio
              </a>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: Mail, label: "Email", value: "ciszunetwork@gmail.com" },
            { icon: Phone, label: "WhatsApp", value: "+58 412 6858111" },
            { icon: MapPin, label: "Ubicación", value: "Coro, Falcón, Venezuela" },
          ].map((item, i) => (
            <div key={i} className="p-6 rounded-2xl bg-brand/5 border border-brand/20 text-center group hover:border-brand-light/30 transition-all">
              <item.icon className="w-8 h-8 text-brand-light mx-auto mb-4" />
              <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-1">{item.label}</p>
              <p className="text-white font-bold text-sm">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}