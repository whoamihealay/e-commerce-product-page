import React from 'react';

function CartDropdown() {
  return (
    <div className="absolute top-16 rounded-2xl bg-white shadow-2xl shadow-black md:top-8 md:right-0 smm:left-2 mdm:right-2">
      <h2 className="p-4 font-bold text-black">Cart</h2>
      <hr />
      <div className="flex h-48 items-center justify-center font-bold text-gray-500 sm:w-80">
        Your cart is empty
      </div>
    </div>
  );
}

export default CartDropdown;
