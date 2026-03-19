import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6">
      <p className="text-[var(--color-gold)] text-xs font-semibold tracking-[0.25em] uppercase mb-4">404</p>
      <h1 className="text-5xl font-bold text-[var(--color-navy)] mb-4">Page Not Found</h1>
      <p className="text-[var(--color-stone)] text-lg mb-10">
        Looks like this page went the way of over-extracted espresso.
      </p>
      <Link
        href="/"
        className="px-8 py-4 bg-[var(--color-navy)] text-white text-sm font-semibold tracking-wide uppercase hover:bg-[var(--color-gold)] transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
}
