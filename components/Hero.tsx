import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/product.png"
          alt="Brewed Bliss Coffee"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-navy)]/85 via-[var(--color-navy)]/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-xl">
          <p className="text-[var(--color-gold)] text-xs font-semibold tracking-[0.25em] uppercase mb-5">
            Small-Batch Specialty Coffee
          </p>
          <h1 className="text-white text-6xl md:text-7xl lg:text-8xl font-bold leading-none mb-6">
            Roasted<br />
            with<br />
            <span className="text-[var(--color-gold)]">Purpose.</span>
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed mb-10 max-w-md">
            Every batch is a meditation. We source, roast, and ship coffee that connects you to where it came from.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/products/medium-roast"
              className="px-8 py-4 bg-[var(--color-gold)] text-white text-sm font-semibold tracking-wide uppercase hover:bg-white hover:text-[var(--color-navy)] transition-colors"
            >
              Shop Medium Roast
            </Link>
            <Link
              href="/products/dark-roast"
              className="px-8 py-4 border border-white/50 text-white text-sm font-semibold tracking-wide uppercase hover:border-[var(--color-gold)] hover:text-[var(--color-gold)] transition-colors"
            >
              Shop Dark Roast
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
