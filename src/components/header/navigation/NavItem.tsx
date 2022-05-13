import React from 'react';

type Props = {
  children: any;
  // eslint-disable-next-line react/require-default-props
  link?: string;
};

function NavItem({ children, link }: Props) {
  return (
    <li>
      <a href={link} className="hover:cursor-pointer">
        {children}
      </a>
    </li>
  );
}

export default NavItem;
