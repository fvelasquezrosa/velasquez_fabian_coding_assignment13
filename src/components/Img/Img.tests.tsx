import React from 'react';
import { render, screen } from '@testing-library/react';
import { Img } from './Img';

describe('Img', () => {
  test('is visible', () => {
    render(<Img src="https://placehold.co/300x150/png" alt="Test image" />);
    expect(screen.getByAltText(/test image/i)).toBeInTheDocument();
  });

  test('changes style when disabled', () => {
    render(<Img src="https://placehold.co/300x150/png" alt="Disabled image" disabled />);
    const img = screen.getByAltText(/disabled image/i);
    expect(img).toHaveStyle('opacity: 0.5');
    expect(img).toHaveStyle('cursor: not-allowed');
  });
});