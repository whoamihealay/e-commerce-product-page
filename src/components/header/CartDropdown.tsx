import React from 'react';

function CartDropdown() {
  return (
    <div className="absolute top-16 rounded-2xl bg-white shadow-2xl shadow-black md:right-0 md:top-8 smm:left-2 smm:right-2">
      <h2 className="p-4 font-bold text-black">Cart</h2>
      <hr />
      <div className="flex h-48 items-center justify-center font-bold text-gray-500 md:w-80">
        Your cart is empty
      </div>
    </div>
  );
}

export default CartDropdown;
