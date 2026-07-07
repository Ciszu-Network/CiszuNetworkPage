'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { I, NAV_LINKS } from '@/config/navigation';
import { useAppStore } from '@/store';

export const NavbarContent = () => {
  const pathname = usePathname();
  const { isMenuOpen, setIsMenuOpen } = useAppStore();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname, setIsMenuOpen]);

  const isActive = (href: string) => pathname === href;

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-2xl border-b border-brand/20' : 'bg-transparent'}`}>
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="flex items-center justify-between h-[64px]">
            <Link href="/" className="flex items-center gap-3 group">
              <Image
                src="/logos/imagen/outline/isotipo/monocroma/ciszuko_logo_isotipo_outline_zblack_cwhite.svg"
                alt="Ciszu Network"
                width={32}
                height={32}
                className="group-hover:drop-shadow-[0_0_10px_rgba(35,63,146,0.8)] transition-all"
              />
              <span className="font-header font-bold text-base tracking-tight hidden sm:block text-white/90 group-hover:text-brand-light transition-colors">
                Ciszu Network
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link key={link.href} href={link.href}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-header font-bold text-sm transition-all ${
                      active
                        ? 'bg-brand/20 text-brand-light border border-brand/30'
                        : 'text-white/70 hover:text-brand-light hover:bg-brand/5 border border-transparent'
                    }`}
                  >
                    {link.icon} {link.name}
                  </Link>
                );
              })}
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg border border-white/20 text-white hover:bg-brand/10 hover:border-brand/30 transition-all"
            >
              {isMenuOpen ? I.close : I.menu}
            </button>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="fixed inset-0 z-[100] md:hidden">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)} />
          <div className="absolute top-[64px] right-0 w-[280px] h-[calc(100vh-64px)] bg-[#05050a]/95 backdrop-blur-3xl border-l border-brand/20 p-6 animate-slide-right-fade">
            <div className="space-y-2">
              {NAV_LINKS.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl font-header font-bold transition-all ${
                      active
                        ? 'bg-brand/20 text-brand-light border border-brand/30'
                        : 'text-white/70 hover:text-brand-light hover:bg-brand/5 border border-transparent'
                    }`}
                  >
                    {link.icon} {link.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const Navbar = () => {
  return (
    <React.Suspense fallback={<div className="h-16 bg-black/50 animate-pulse" />}>
      <NavbarContent />
    </React.Suspense>
  );
};

export default Navbar;