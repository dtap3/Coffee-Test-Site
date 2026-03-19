'use client';

import { useState } from 'react';
import { useCartStore } from '@/store/cartStore';
import { Loader2 } from 'lucide-react';

const FREE_SHIPPING_THRESHOLD = 4500; // $45.00 in cents

export default function CartSummary() {
  const { subtotal, items } = useCartStore();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const subtotalCents = subtotal();
  const shipping = subtotalCents >= FREE_SHIPPING_THRESHOLD ? 0 : 599;
  const total = subtotalCents + shipping;

  const handleCheckout = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items: items }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Checkout failed');
      }

      const { url } = await res.json();
      if (url) window.location.href = url;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
      setLoading(false);
    }
  };

  return (
    <div className="bg-[var(--color-cream)] p-6 rounded-sm">
      <h2 className="font-bold text-lg text-[var(--color-navy)] mb-6">Order Summary</h2>

      <div className="space-y-3 text-sm mb-6">
        <div className="flex justify-between text-[var(--color-stone)]">
          <span>Subtotal</span>
          <span>${(subtotalCents / 100).toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-[var(--color-stone)]">
          <span>Shipping</span>
          <span>
            {shipping === 0 ? (
              <span className="text-green-600 font-medium">Free</span>
            ) : (
              `$${(shipping / 100).toFixed(2)}`
            )}
          </span>
        </div>
        {subtotalCents < FREE_SHIPPING_THRESHOLD && (
          <p className="text-xs text-[var(--color-stone)]">
            Add ${((FREE_SHIPPING_THRESHOLD - subtotalCents) / 100).toFixed(2)} more for free shipping
          </p>
        )}
        <div className="border-t border-gray-200 pt-3 flex justify-between font-bold text-base text-[var(--color-navy)]">
          <span>Total</span>
          <span>${(total / 100).toFixed(2)}</span>
        </div>
      </div>

      {error && (
        <p className="text-red-500 text-sm mb-4 bg-red-50 p-3 rounded">{error}</p>
      )}

      <button
        onClick={handleCheckout}
        disabled={loading}
        className="w-full py-4 bg-[var(--color-navy)] text-white text-sm font-semibold tracking-wide uppercase hover:bg-[var(--color-gold)] transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {loading ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Processing...
          </>
        ) : (
          'Proceed to Checkout'
        )}
      </button>

      <p className="text-xs text-center text-[var(--color-stone)] mt-3">
        Secure checkout powered by Stripe
      </p>
    </div>
  );
}
