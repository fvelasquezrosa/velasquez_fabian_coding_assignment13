import React from 'react';
import { render, screen } from '@testing-library/react';
import { Label } from './Label';

describe('Label', () => {
  test('is visible', () => {
    render(<Label text="Hello Label" />);
    expect(screen.getByText(/hello label/i)).toBeInTheDocument();
  });

  test('changes style when disabled (greyed out)', () => {
    render(<Label text="Disabled Label" disabled />);
    const el = screen.getByText(/disabled label/i);

    expect(el).toHaveStyle('opacity: 0.5');
    expect(el).toHaveStyle('cursor: not-allowed');
  });
});
