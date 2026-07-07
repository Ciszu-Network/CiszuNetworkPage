import { Mail, Phone, MapPin, Clock, Send, ArrowRight } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-brand/10 text-brand-light mb-6">
            <Mail className="w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-6xl font-header font-black bg-gradient-to-r from-brand-light to-brand-accent bg-clip-text text-transparent uppercase tracking-tighter mb-4">
            Contacto
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto text-sm uppercase tracking-widest">
            Estamos listos para escuchar tu proyecto
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            {[
              { icon: Mail, label: "Email Principal", value: "ciszunetwork@gmail.com" },
              { icon: Mail, label: "Email Secundario", value: "ciszunetwork@outlook.com" },
              { icon: Phone, label: "WhatsApp Directo", value: "+58 412 6858111" },
              { icon: MapPin, label: "Ubicación", value: "Coro, Falcón, Venezuela" },
              { icon: Clock, label: "Disponibilidad", value: "24/7 — GMT-4" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-brand/5 border border-brand/20 group hover:border-brand-light/30 transition-all">
                <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand-light flex items-center justify-center">
                  <item.icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">{item.label}</p>
                  <p className="text-white font-bold text-sm">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-8 md:p-10 rounded-[2rem] bg-gradient-to-br from-brand/20 via-brand-dark/10 to-transparent border border-brand/30 flex flex-col items-center justify-center text-center">
            <Send className="w-12 h-12 text-brand-light mb-6 drop-shadow-brand" />
            <h2 className="text-2xl md:text-3xl font-header font-black text-white uppercase tracking-tighter mb-4">
              ¿Hablamos?
            </h2>
            <p className="text-gray-400 text-sm mb-8 max-w-xs">
              Cuéntanos sobre tu proyecto y te responderemos a la brevedad.
            </p>
            <a
              href="mailto:ciszunetwork@gmail.com"
              className="inline-flex items-center gap-3 px-8 py-4 bg-brand/20 border-2 border-brand/50 text-white font-black rounded-xl hover:bg-brand hover:scale-105 transition-all text-sm uppercase tracking-widest shadow-[0_0_20px_rgba(35,63,146,0.3)]"
            >
              Enviar Correo <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}