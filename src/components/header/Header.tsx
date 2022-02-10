import React, { useState } from 'react';
import Avatar from './Avatar';
import Close from './Close';
import Hamburger from './Hamburger';
import Logo from './Logo';
import Navigation from './Navigation';
import IconCart from '../icons/IconCart';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex items-center justify-between py-4 px-6">
      <div className="flex items-center gap-4 md:gap-24">
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
      <div className="flex items-center gap-4 text-gray-400">
        <IconCart />
        <Avatar />
      </div>
    </header>
  );
}

export default Header;
