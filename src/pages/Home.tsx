import { useState } from 'react';
import { Cart, Minus, Plus } from '../assets/Icons';
import { PreviewContainer } from '../components/ProductPreview';

import { product } from '../constants';

function Home() {
  const [count, setCount] = useState(0);

  return (
    <main className="md:flex md:items-center md:justify-center md:gap-12 md:px-4 xl:gap-24">
      <PreviewContainer images={product.images} />
      <div className="w-full p-4">
        <h2 className="text-xs font-bold uppercase text-orange-500">{product.brand}</h2>
        <h1 className="py-2 text-3xl font-bold">{product.title}</h1>
        <p className="py-2 text-gray-500">{product.description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="text-3xl font-bold">${product.price * product.discount}</div>
            <div className="rounded-lg bg-orange-100 px-2 font-bold text-orange-500">
              {product.discount * 100}%
            </div>
          </div>
          <div className="font-bold text-gray-400 line-through">${product.price}</div>
        </div>
        <div>
          <div className="my-4 flex items-center justify-between rounded-lg bg-gray-100">
            <button className="p-6" type="button" onClick={() => setCount((prev) => prev - 1)}>
              <Minus />
            </button>
            {count}
            <button className="p-6" type="button" onClick={() => setCount((prev) => prev + 1)}>
              <Plus />
            </button>
          </div>
          <button
            type="button"
            className="flex w-full items-center justify-center gap-4 rounded-lg bg-orange-500 py-4 font-bold text-white hover:opacity-70"
          >
            <Cart />
            Add to cart
          </button>
        </div>
      </div>
    </main>
  );
}

export default Home;
