import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import SectionHeading from '@/components/SectionHeading';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn the story behind Brewed Bliss Coffee Company — our mission, values, and passion for specialty coffee.',
};

const values = [
  {
    title: 'Direct Trade',
    description:
      'We source directly from farming families, paying above-market prices and building long-term relationships. Better prices mean better practices — for the land and the people who tend it.',
  },
  {
    title: 'Small-Batch Roasting',
    description:
      'We roast in small batches — never more than we can ship that week. Freshness isn\'t a marketing term for us. It\'s the only way we know how to do it.',
  },
  {
    title: 'Intentional Craft',
    description:
      'Every roasting decision is deliberate. We develop roast profiles for each origin to honor its character rather than mask it. The result: coffee that tastes like somewhere.',
  },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/product.png"
            alt="Brewed Bliss Coffee"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy)] via-[var(--color-navy)]/50 to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 pb-16 w-full">
          <p className="text-[var(--color-gold)] text-xs font-semibold tracking-[0.25em] uppercase mb-3">
            Who We Are
          </p>
          <h1 className="text-white text-5xl md:text-6xl font-bold">Our Story</h1>
        </div>
      </section>

      {/* Origin story */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <SectionHeading
            eyebrow="The Beginning"
            title="Born from an obsession with a better cup."
          />
          <div className="mt-8 space-y-6 text-[var(--color-stone)] text-lg leading-relaxed">
            <p>
              Brewed Bliss started at a kitchen table with a cheap burr grinder and an impossible standard: every morning cup should feel like a small discovery. We couldn't find coffee that consistently delivered that, so we learned to roast our own.
            </p>
            <p>
              What began as a personal obsession became a roastery. We started talking directly to farmers, visiting farms, and learning the full arc of what it takes to get exceptional green coffee into a bag. The more we learned, the more we knew we couldn't go back to buying from a broker.
            </p>
            <p>
              Today, Brewed Bliss is a small but fierce operation. Two roast profiles. Two products. All of our focus on making them as good as they can possibly be.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[var(--color-cream)] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="What We Stand For"
            title="Our Values"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {values.map((v) => (
              <div key={v.title} className="bg-white p-8 rounded-sm">
                <div className="w-8 h-0.5 bg-[var(--color-gold)] mb-6" />
                <h3 className="text-xl font-bold text-[var(--color-navy)] mb-4">{v.title}</h3>
                <p className="text-[var(--color-stone)] leading-relaxed text-sm">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--color-navy)] py-20 px-6 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-white text-4xl font-bold mb-4">Ready to taste the difference?</h2>
          <p className="text-gray-400 mb-8">Every bag ships within 48 hours of roasting.</p>
          <Link
            href="/"
            className="px-8 py-4 bg-[var(--color-gold)] text-white text-sm font-semibold tracking-wide uppercase hover:bg-white hover:text-[var(--color-navy)] transition-colors inline-block"
          >
            Shop Our Roasts
          </Link>
        </div>
      </section>
    </div>
  );
}
