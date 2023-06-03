'use client';

import { gtm } from '@/lib/tracking/gtm';

export default function Products() {
  const trackAddToCart = () => {
    gtm.fireCustomEvent('add_to_cart');
  };

  return (
    <main className="flex min-h-screen p-6 flex-col">
      <h1 className="mb-6">Products Page</h1>
      <button className='border py-2 px-4 rounded hover:bg-neutral-950 fixed bottom-6 right-6' onClick={trackAddToCart}>Add To Cart</button>
    </main>
  )
}
