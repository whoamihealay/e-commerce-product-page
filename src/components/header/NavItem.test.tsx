import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import NavItem from './NavItem';

describe('Navigation Item', () => {
  render(<NavItem link="/test">test</NavItem>);
  test('should first', () => {
    expect(screen.getByText(/test/i));
  });
});
