import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Footer from './Footer';

describe('Footer', () => {
  test('should have the correct text', () => {
    render(<Footer />);
    expect(screen.getByRole('contentinfo')).toHaveTextContent(
      'Challenge by Frontend Mentor. Coded by Andrew.'
    );
  });

  test('should have the correct links', () => {
    render(<Footer />);
    expect(screen.getByRole('link', { name: /frontend mentor/i })).toHaveAttribute(
      'href',
      'https://www.frontendmentor.io?ref=challenge'
    );
    expect(screen.getByRole('link', { name: /frontend mentor/i })).toHaveAttribute(
      'target',
      '_blank'
    );
    expect(screen.getByRole('link', { name: /frontend mentor/i })).toHaveAttribute(
      'rel',
      'noreferrer'
    );
    expect(screen.getByRole('link', { name: /Andrew/i })).toHaveAttribute(
      'href',
      'https://www.frontendmentor.io/profile/whoamihealay'
    );
    expect(screen.getByRole('link', { name: /Andrew/i })).toHaveAttribute('target', '_blank');
    expect(screen.getByRole('link', { name: /Andrew/i })).toHaveAttribute('rel', 'noreferrer');
  });
});
