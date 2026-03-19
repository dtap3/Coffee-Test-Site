import Link from 'next/link';
import SectionHeading from './SectionHeading';
import { ArrowRight } from 'lucide-react';

export default function BrandStoryTeaser() {
  return (
    <section className="bg-[var(--color-navy)] text-white py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <div>
          <SectionHeading
            eyebrow="Our Story"
            title="Coffee is our craft. Sourcing is our obsession."
            light
          />
          <p className="text-gray-400 leading-relaxed mt-6 mb-8">
            Brewed Bliss was born from a simple belief: great coffee starts long before the roaster. We work directly with farmers, pay above market prices, and roast every batch with the care it deserves.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-[var(--color-gold)] text-sm font-semibold tracking-wide uppercase hover:gap-4 transition-all"
          >
            Read Our Story <ArrowRight size={14} />
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-6">
          {[
            { stat: '100%', label: 'Direct Trade' },
            { stat: '2', label: 'Signature Blends' },
            { stat: 'Weekly', label: 'Fresh Roasting' },
            { stat: '∞', label: 'Cups of Joy' },
          ].map(({ stat, label }) => (
            <div key={label} className="border border-white/10 p-6 rounded-sm">
              <p className="font-display text-4xl font-bold text-[var(--color-gold)] mb-2">{stat}</p>
              <p className="text-gray-400 text-sm tracking-wide">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
