'use client';

import { useState } from 'react';
import { useCartStore } from '@/store/cartStore';
import type { Product } from '@/lib/products';
import { ShoppingBag, Check } from 'lucide-react';

type Props = {
  product: Product;
  className?: string;
};

export default function AddToCartButton({ product, className = '' }: Props) {
  const [added, setAdded] = useState(false);
  const addToCart = useCartStore((s) => s.addToCart);

  const handleClick = () => {
    addToCart(product, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <button
      onClick={handleClick}
      className={`flex items-center justify-center gap-2 px-8 py-4 font-semibold text-sm tracking-wide uppercase transition-all duration-300 ${
        added
          ? 'bg-green-600 text-white'
          : 'bg-[var(--color-navy)] text-white hover:bg-[var(--color-gold)]'
      } ${className}`}
    >
      {added ? (
        <>
          <Check size={16} />
          Added to Cart
        </>
      ) : (
        <>
          <ShoppingBag size={16} />
          Add to Cart — ${(product.price / 100).toFixed(2)}
        </>
      )}
    </button>
  );
}
