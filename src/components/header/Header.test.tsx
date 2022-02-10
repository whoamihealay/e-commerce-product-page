import React, { useState } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import Header from './Header';

describe('Header', () => {
  render(<Header />);
  test('should render Header and sub components', () => {
    userEvent.click(screen.getByRole('button'));
  });
});
