'use client';

import { useCartStore } from '@/store/cartStore';
import CartItem from '@/components/CartItem';
import CartSummary from '@/components/CartSummary';
import Link from 'next/link';
import { ShoppingBag, CheckCircle, XCircle } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function CartContent() {
  const { items, clearCart } = useCartStore();
  const searchParams = useSearchParams();
  const success = searchParams.get('success');
  const canceled = searchParams.get('canceled');

  if (success === 'true') {
    clearCart();
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
        <CheckCircle size={56} className="text-green-500 mb-6" />
        <h1 className="text-4xl font-bold text-[var(--color-navy)] mb-4">Order Confirmed!</h1>
        <p className="text-[var(--color-stone)] text-lg mb-8 max-w-md">
          Thank you for your order. You&apos;ll receive a confirmation email shortly.
        </p>
        <Link
          href="/"
          className="px-8 py-4 bg-[var(--color-navy)] text-white text-sm font-semibold tracking-wide uppercase hover:bg-[var(--color-gold)] transition-colors"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  if (canceled === 'true') {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
        <XCircle size={56} className="text-[var(--color-stone)] mb-6" />
        <h1 className="text-4xl font-bold text-[var(--color-navy)] mb-4">Checkout Canceled</h1>
        <p className="text-[var(--color-stone)] text-lg mb-8">
          No worries — your cart is still waiting for you.
        </p>
        <Link
          href="/cart"
          className="px-8 py-4 bg-[var(--color-navy)] text-white text-sm font-semibold tracking-wide uppercase hover:bg-[var(--color-gold)] transition-colors"
        >
          Return to Cart
        </Link>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
        <ShoppingBag size={56} className="text-gray-300 mb-6" />
        <h1 className="text-4xl font-bold text-[var(--color-navy)] mb-4">Your Cart is Empty</h1>
        <p className="text-[var(--color-stone)] text-lg mb-8">
          Discover our roasts and find your perfect cup.
        </p>
        <Link
          href="/"
          className="px-8 py-4 bg-[var(--color-navy)] text-white text-sm font-semibold tracking-wide uppercase hover:bg-[var(--color-gold)] transition-colors"
        >
          Shop Coffee
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-[var(--color-navy)] mb-12">Your Cart</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          {items.map((item) => (
            <CartItem key={item.product.id} item={item} />
          ))}
          <Link
            href="/"
            className="inline-block mt-6 text-sm font-medium text-[var(--color-stone)] hover:text-[var(--color-navy)] transition-colors underline underline-offset-4"
          >
            ← Continue Shopping
          </Link>
        </div>
        <div>
          <CartSummary />
        </div>
      </div>
    </div>
  );
}

export default function CartPage() {
  return (
    <Suspense>
      <CartContent />
    </Suspense>
  );
}
