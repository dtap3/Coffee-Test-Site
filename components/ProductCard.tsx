import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '@/lib/products';
import { ArrowRight } from 'lucide-react';

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  return (
    <div className="bg-white group flex-shrink-0 w-80 md:w-96 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 320px, 384px"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-[var(--color-navy)] text-white text-xs font-semibold tracking-widest uppercase px-3 py-1">
            {product.roastLevel} Roast
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold text-[var(--color-navy)] mb-2">{product.name}</h3>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {product.notes.map((note) => (
            <span key={note} className="text-xs text-[var(--color-stone)] border border-gray-200 px-2 py-0.5 rounded-full">
              {note}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-[var(--color-navy)]">
            ${(product.price / 100).toFixed(2)}
          </span>
          <Link
            href={`/products/${product.slug}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-gold)] hover:text-[var(--color-navy)] transition-colors"
          >
            Shop Now <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}
