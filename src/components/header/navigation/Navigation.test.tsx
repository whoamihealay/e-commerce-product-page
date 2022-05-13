import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Navigation from './Navigation';

describe('Navigation', () => {
  render(<Navigation isOpen />);
  test('if isOpen is true, isHidden should be equale to smm:absolute', () => {
    const isOpen = true;
    const isHidden = isOpen ? 'smm:absolute' : 'smm:hidden';
    expect(isHidden).toEqual('smm:absolute');
  });
});
