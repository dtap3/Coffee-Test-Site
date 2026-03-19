export type Product = {
  id: string;
  slug: string;
  name: string;
  roastLevel: 'Medium' | 'Dark';
  price: number; // in cents
  stripePriceId: string; // Stripe test mode Price ID
  image: string;
  description: string;
  notes: string[];
  origin: string;
  process: string;
};

export const products: Product[] = [
  {
    id: 'medium-roast',
    slug: 'medium-roast',
    name: 'Medium Roast',
    roastLevel: 'Medium',
    price: 1800,
    stripePriceId: process.env.STRIPE_PRICE_MEDIUM || 'price_test_medium',
    image: '/product.png',
    description:
      'A beautifully balanced cup with a smooth, approachable profile. Our medium roast is crafted for those who appreciate nuance — bright enough to reveal origin character, developed enough for a satisfying richness.',
    notes: ['Caramel', 'Citrus Zest', 'Dark Chocolate'],
    origin: 'Ethiopia & Colombia Blend',
    process: 'Washed',
  },
  {
    id: 'dark-roast',
    slug: 'dark-roast',
    name: 'Dark Roast',
    roastLevel: 'Dark',
    price: 1800,
    stripePriceId: process.env.STRIPE_PRICE_DARK || 'price_test_dark',
    image: '/product.png',
    description:
      'Bold, commanding, and deeply satisfying. Our dark roast is roasted to bring out the full body and intensity that serious coffee lovers crave — perfect as an espresso or a robust morning cup.',
    notes: ['Smoky Cedar', 'Dark Molasses', 'Bittersweet Cocoa'],
    origin: 'Sumatra & Guatemala Blend',
    process: 'Natural',
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
