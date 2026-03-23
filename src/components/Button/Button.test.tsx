import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  test('is visible', () => {
    render(<Button label="Hello" />);
    expect(screen.getByRole('button', { name: /hello/i })).toBeInTheDocument();
  });

  test('changes background style when disabled (greyed out)', () => {
    render(<Button label="Disabled" disabled />);
    const btn = screen.getByRole('button', { name: /disabled/i });

    // We use opacity change for "greyed out" effect:
    expect(btn).toHaveStyle('opacity: 0.5');
    expect(btn).toHaveStyle('cursor: not-allowed');
  });
});
