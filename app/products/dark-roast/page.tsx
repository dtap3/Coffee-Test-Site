import type { Metadata } from 'next';
import { getProductBySlug } from '@/lib/products';
import ProductPageLayout from '@/components/ProductPageLayout';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Dark Roast',
  description:
    'Bold, smoky, and deeply satisfying. Brewed Bliss Dark Roast — 12 oz bag with notes of cedar, molasses, and bittersweet cocoa.',
};

export default function DarkRoastPage() {
  const product = getProductBySlug('dark-roast');
  if (!product) notFound();
  return <ProductPageLayout product={product} />;
}
