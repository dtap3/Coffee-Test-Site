'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useCartStore } from '@/store/cartStore';

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const totalItems = useCartStore((s) => s.totalItems());

  const links = [
    { href: '/', label: 'Home' },
    { href: '/products/medium-roast', label: 'Medium Roast' },
    { href: '/products/dark-roast', label: 'Dark Roast' },
    { href: '/about', label: 'About' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image
            src="/logo.png"
            alt="Brewed Bliss Coffee Company"
            width={44}
            height={44}
            className="rounded-full"
          />
          <span className="hidden sm:block font-display font-bold text-[var(--color-navy)] text-sm leading-tight">
            Brewed Bliss<br />
            <span className="font-normal text-xs text-[var(--color-stone)] tracking-widest uppercase">
              Coffee Co.
            </span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-sm font-medium text-[var(--color-stone)] hover:text-[var(--color-navy)] transition-colors"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Cart + mobile toggle */}
        <div className="flex items-center gap-4">
          <Link
            href="/cart"
            aria-label={`Cart (${totalItems} items)`}
            className="relative p-2 text-[var(--color-navy)] hover:text-[var(--color-gold)] transition-colors"
          >
            <ShoppingBag size={22} />
            {totalItems > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-[var(--color-gold)] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {totalItems > 9 ? '9+' : totalItems}
              </span>
            )}
          </Link>

          <button
            className="md:hidden p-2 text-[var(--color-navy)]"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 pb-6">
          <ul className="flex flex-col gap-4 pt-4">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-base font-medium text-[var(--color-navy)] hover:text-[var(--color-gold)] transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
