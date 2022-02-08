import React, { useState } from 'react';
import Avatar from './Avatar';
import Cart from './Cart';
import Close from './Close';
import Hamburger from './Hamburger';
import Logo from './Logo';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex items-center justify-between p-2 py-4">
      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          {isOpen ? <Close /> : <Hamburger />}
        </button>
        <Logo />
        {/* <Navigation /> */}
      </div>
      <div className="flex items-center gap-4">
        <Cart />
        <Avatar />
      </div>
    </header>
  );
}

export default Header;
