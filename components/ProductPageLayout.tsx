import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '@/lib/products';
import AddToCartButton from './AddToCartButton';
import { ArrowLeft } from 'lucide-react';

type Props = {
  product: Product;
};

export default function ProductPageLayout({ product }: Props) {
  return (
    <div className="bg-[var(--color-cream)] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Breadcrumb */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-[var(--color-stone)] hover:text-[var(--color-navy)] transition-colors mb-12"
        >
          <ArrowLeft size={14} />
          Back to Home
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Image */}
          <div className="relative aspect-square bg-white rounded-sm overflow-hidden shadow-sm">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>

          {/* Info */}
          <div className="lg:sticky lg:top-24">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--color-gold)] mb-3">
              {product.roastLevel} Roast
            </p>
            <h1 className="text-5xl md:text-6xl font-bold text-[var(--color-navy)] leading-tight mb-6">
              {product.name}
            </h1>
            <p className="text-[var(--color-stone)] text-lg leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Details grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-white p-4 rounded-sm">
                <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-gold)] mb-1">
                  Origin
                </p>
                <p className="text-[var(--color-navy)] font-medium text-sm">{product.origin}</p>
              </div>
              <div className="bg-white p-4 rounded-sm">
                <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-gold)] mb-1">
                  Process
                </p>
                <p className="text-[var(--color-navy)] font-medium text-sm">{product.process}</p>
              </div>
            </div>

            {/* Tasting notes */}
            <div className="mb-10">
              <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-stone)] mb-3">
                Tasting Notes
              </p>
              <div className="flex flex-wrap gap-2">
                {product.notes.map((note) => (
                  <span
                    key={note}
                    className="px-4 py-1.5 border border-[var(--color-gold)] text-[var(--color-navy)] text-sm font-medium rounded-full"
                  >
                    {note}
                  </span>
                ))}
              </div>
            </div>

            {/* Price */}
            <p className="text-3xl font-bold text-[var(--color-navy)] mb-6">
              ${(product.price / 100).toFixed(2)}
              <span className="text-base font-normal text-[var(--color-stone)] ml-2">/ 12 oz bag</span>
            </p>

            <AddToCartButton product={product} className="w-full" />

            <p className="text-xs text-center text-[var(--color-stone)] mt-4">
              Free shipping on orders over $45
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
