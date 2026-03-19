import Hero from '@/components/Hero';
import ProductCarousel from '@/components/ProductCarousel';
import BrandStoryTeaser from '@/components/BrandStoryTeaser';
import SectionHeading from '@/components/SectionHeading';
import { products } from '@/lib/products';

export default function Home() {
  return (
    <>
      <Hero />

      {/* Product Gallery */}
      <section className="py-24 bg-[var(--color-cream)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <SectionHeading
              eyebrow="Our Roasts"
              title="Find Your Perfect Cup"
              subtitle="Two distinct roast profiles. One standard: exceptional."
            />
          </div>
          <ProductCarousel products={products} />
        </div>
      </section>

      <BrandStoryTeaser />

      {/* Bottom CTA */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-2xl mx-auto px-6">
          <SectionHeading
            eyebrow="Ready to Brew?"
            title="Your next favorite coffee is one click away."
            centered
          />
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <a
              href="/products/medium-roast"
              className="px-8 py-4 bg-[var(--color-navy)] text-white text-sm font-semibold tracking-wide uppercase hover:bg-[var(--color-gold)] transition-colors"
            >
              Medium Roast
            </a>
            <a
              href="/products/dark-roast"
              className="px-8 py-4 border-2 border-[var(--color-navy)] text-[var(--color-navy)] text-sm font-semibold tracking-wide uppercase hover:bg-[var(--color-navy)] hover:text-white transition-colors"
            >
              Dark Roast
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
