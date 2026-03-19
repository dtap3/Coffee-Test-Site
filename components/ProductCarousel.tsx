'use client';

import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { Product } from '@/lib/products';
import ProductCard from './ProductCard';

type Props = {
  products: Product[];
};

export default function ProductCarousel({ products }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'center', containScroll: 'trimSnaps' },
    [Autoplay({ delay: 4000, stopOnInteraction: true })]
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6 py-4 px-2">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={scrollPrev}
        aria-label="Previous product"
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center text-[var(--color-navy)] hover:bg-[var(--color-navy)] hover:text-white transition-colors z-10"
      >
        <ChevronLeft size={18} />
      </button>
      <button
        onClick={scrollNext}
        aria-label="Next product"
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center text-[var(--color-navy)] hover:bg-[var(--color-navy)] hover:text-white transition-colors z-10"
      >
        <ChevronRight size={18} />
      </button>
    </div>
  );
}
