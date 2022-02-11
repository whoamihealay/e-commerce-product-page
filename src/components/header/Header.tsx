import React, { useState } from 'react';
import Avatar from './Avatar';
import Close from './Close';
import Hamburger from './Hamburger';
import Logo from './Logo';
import Navigation from './Navigation';
import IconCart from '../icons/IconCart';
import CartDropdown from './CartDropdown';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCart, setIsCart] = useState(false);

  return (
    <header className="flex items-center justify-between py-4 px-6 md:py-8">
      <div className="flex items-center gap-4 md:gap-10">
        <button
          aria-expanded={isOpen}
          aria-controls="navigation-menu"
          type="button"
          className="z-50 sm:hidden"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          {isOpen ? <Close /> : <Hamburger />}
        </button>
        <Logo />
        <Navigation isOpen={isOpen} />
      </div>
      <div className="flex items-center gap-4 md:relative">
        <button className="text-gray-400" type="button" onClick={() => setIsCart(!isCart)}>
          <IconCart />
        </button>
        {isCart && <CartDropdown />}
        <Avatar />
      </div>
    </header>
  );
}

export default Header;
