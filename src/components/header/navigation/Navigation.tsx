import React from 'react';
import NavItem from './NavItem';

type Props = {
  isOpen: boolean;
};

function Nav({ isOpen }: Props) {
  const isHidden = isOpen ? 'smm:absolute' : 'smm:hidden';

  return (
    <nav id="nagivation menu" className={`${isHidden} smm:inset-0 smm:w-full smm:bg-black/40`}>
      <ul
        id="nagivation menu"
        className="flex gap-4 bg-white text-gray-700 smm:h-full smm:w-3/4 smm:flex-col smm:py-20 smm:px-6 smm:font-bold"
      >
        <NavItem>Collections</NavItem>
        <NavItem>Men</NavItem>
        <NavItem>Women</NavItem>
        <NavItem>About</NavItem>
        <NavItem>Contact</NavItem>
      </ul>
    </nav>
  );
}

export default Nav;
