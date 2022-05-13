import { useState } from 'react';
import Avatar from './profile/Avatar';
import { Close, Hamburger, Logo, Cart } from '../../assets/Icons/';
import Navigation from './navigation/Navigation';
import CartDropdown from './cart/CartDropdown';
import { profile } from '../../constants';

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
          <Cart />
        </button>
        {isCart && <CartDropdown />}
        <Avatar src={profile.avatar} />
      </div>
    </header>
  );
}

export default Header;
