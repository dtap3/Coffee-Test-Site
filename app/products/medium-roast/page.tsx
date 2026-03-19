import type { Metadata } from 'next';
import { getProductBySlug } from '@/lib/products';
import ProductPageLayout from '@/components/ProductPageLayout';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Medium Roast',
  description:
    'A beautifully balanced cup with caramel, citrus, and dark chocolate notes. Brewed Bliss Medium Roast — 12 oz bag.',
};

export default function MediumRoastPage() {
  const product = getProductBySlug('medium-roast');
  if (!product) notFound();
  return <ProductPageLayout product={product} />;
}
