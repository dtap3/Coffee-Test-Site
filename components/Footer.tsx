import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[var(--color-navy)] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.png"
                alt="Brewed Bliss Coffee Company"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="font-display font-bold text-lg">Brewed Bliss</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Small-batch specialty coffee roasted with intention. Every bag tells the story of where it came from.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-[var(--color-gold)] mb-4">
              Shop
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products/medium-roast" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Medium Roast
                </Link>
              </li>
              <li>
                <Link href="/products/dark-roast" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Dark Roast
                </Link>
              </li>
              <li>
                <Link href="/cart" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Cart
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-[var(--color-gold)] mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white text-sm transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} Brewed Bliss Coffee Company. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs">Roasted with care. Shipped with love.</p>
        </div>
      </div>
    </footer>
  );
}
