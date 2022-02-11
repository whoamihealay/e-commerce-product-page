import React, { useState } from 'react';
import IconCart from '../icons/IconCart';
import IconMinus from '../icons/IconMinus';
import IconPlus from '../icons/IconPlus';

function Main() {
  const [count, setCount] = useState(0);

  return (
    <main className="md:flex md:items-center md:justify-center">
      <div className="block max-h-80 overflow-hidden md:rounded-lg">
        <img
          src="./media/image-product-1.jpg"
          alt=""
          className="block max-w-full smm:object-cover"
        />
      </div>
      <div className="p-4">
        <h2 className="text-xs font-bold uppercase text-orange-500">Sneaker Company</h2>
        <h1 className="py-2 text-3xl font-bold">Fall Limited Edition Sneakers</h1>
        <p className="py-2 text-gray-500">
          These low-profile sneakers are your perfect casual wear companion. Featuring a durable
          rubber outer sole, they’ll withstand everything the weather can offer.
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="text-3xl font-bold">$125.00</div>
            <div className="rounded-lg bg-orange-100 px-2 font-bold text-orange-500">50%</div>
          </div>
          <div className="font-bold text-gray-400 line-through">$250.00</div>
        </div>
        <div className="my-4 flex items-center justify-between rounded-lg bg-gray-100">
          <button className="p-6" type="button" onClick={() => setCount(count - 1)}>
            <IconMinus />
          </button>
          {count}
          <button className="p-6" type="button" onClick={() => setCount(count + 1)}>
            <IconPlus />
          </button>
        </div>
        <button
          type="button"
          className="flex w-full items-center justify-center gap-4 rounded-lg bg-orange-500 py-4 font-bold text-white hover:opacity-70"
        >
          <IconCart />
          Add to cart
        </button>
      </div>
    </main>
  );
}

export default Main;
