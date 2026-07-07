import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FOOTER_NAV } from '@/config/navigation';

export const Footer = () => {
  return (
    <footer className="relative bg-black border-t border-brand/20 py-12 px-4">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <div className="flex items-center gap-3 justify-center md:justify-start mb-4">
              <Image
                src="/logos/imagen/outline/isotipo/monocroma/ciszuko_logo_isotipo_outline_zblack_cwhite.svg"
                alt="Ciszu Network"
                width={28}
                height={28}
              />
              <span className="font-header font-bold text-base text-brand-light">
                Ciszu Network
              </span>
            </div>
            <p className="text-gray-500 text-xs max-w-xs">
              Innovación digital y desarrollo de software de alto rendimiento.
            </p>
          </div>

          <div className="flex gap-8">
            {FOOTER_NAV.map((section) => (
              <div key={section.title} className="flex flex-col gap-3">
                <span className="text-brand-light text-xs font-black uppercase tracking-widest">{section.title}</span>
                {section.links.map((link) => (
                  <Link key={link.name} href={link.href}
                    className="flex items-center gap-2 text-gray-400 hover:text-brand-light transition-colors text-sm"
                  >
                    {link.icon} {link.name}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-brand/10 text-center">
          <p className="text-gray-600 text-xs font-bold uppercase tracking-widest">
            &copy; {new Date().getFullYear()} <span className="text-brand-light">Ciszu Network</span>. Todos los derechos reservados.<br />
            &ldquo;Bright Future Promised&rdquo; — Liderado por <span className="text-brand-light">Ciszuko Antony</span>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;