import React from 'react';
import { render, screen } from '@testing-library/react';
import { Text } from './Text';

describe('Text', () => {
  test('is visible', () => {
    render(<Text text="Hello Text" />);
    expect(screen.getByText(/hello text/i)).toBeInTheDocument();
  });

  test('changes style when disabled (greyed out)', () => {
    render(<Text text="Disabled Text" disabled />);
    const el = screen.getByText(/disabled text/i);

    expect(el).toHaveStyle('opacity: 0.5');
    expect(el).toHaveStyle('cursor: not-allowed');
  });
});
