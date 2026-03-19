'use client';

import Image from 'next/image';
import { useCartStore, type CartItem as CartItemType } from '@/store/cartStore';
import { Minus, Plus, X } from 'lucide-react';

type Props = {
  item: CartItemType;
};

export default function CartItem({ item }: Props) {
  const { updateQty, removeFromCart } = useCartStore();

  return (
    <div className="flex gap-4 py-6 border-b border-gray-100">
      {/* Image */}
      <div className="relative w-20 h-20 bg-[var(--color-cream)] rounded-sm flex-shrink-0 overflow-hidden">
        <Image
          src={item.product.image}
          alt={item.product.name}
          fill
          className="object-cover"
          sizes="80px"
        />
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start gap-2">
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-gold)] mb-0.5">
              {item.product.roastLevel} Roast
            </p>
            <h3 className="font-bold text-[var(--color-navy)]">{item.product.name}</h3>
          </div>
          <button
            onClick={() => removeFromCart(item.product.id)}
            aria-label={`Remove ${item.product.name}`}
            className="text-gray-400 hover:text-red-500 transition-colors p-1"
          >
            <X size={16} />
          </button>
        </div>

        <div className="flex items-center justify-between mt-3">
          {/* Qty controls */}
          <div className="flex items-center border border-gray-200">
            <button
              onClick={() => updateQty(item.product.id, item.quantity - 1)}
              aria-label="Decrease quantity"
              className="w-8 h-8 flex items-center justify-center text-[var(--color-stone)] hover:bg-gray-50 transition-colors"
            >
              <Minus size={12} />
            </button>
            <span className="w-8 h-8 flex items-center justify-center text-sm font-medium text-[var(--color-navy)]">
              {item.quantity}
            </span>
            <button
              onClick={() => updateQty(item.product.id, item.quantity + 1)}
              aria-label="Increase quantity"
              className="w-8 h-8 flex items-center justify-center text-[var(--color-stone)] hover:bg-gray-50 transition-colors"
            >
              <Plus size={12} />
            </button>
          </div>

          <p className="font-bold text-[var(--color-navy)]">
            ${((item.product.price * item.quantity) / 100).toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
}
