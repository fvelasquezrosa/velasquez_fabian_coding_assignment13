import React from 'react';
import { render, screen } from '@testing-library/react';
import { HeroImage } from './HeroImage';

describe('HeroImage', () => {
  test('is visible', () => {
    render(
      <HeroImage
        imageUrl="https://placehold.co/1200x600/png"
        title="Welcome"
        subtitle="Subtitle"
      />,
    );
    expect(screen.getByText(/welcome/i)).toBeInTheDocument();
    expect(screen.getByText(/subtitle/i)).toBeInTheDocument();
  });

  test('changes style when disabled', () => {
    render(
      <HeroImage
        imageUrl="https://placehold.co/1200x600/png"
        title="Disabled Hero"
        disabled
      />,
    );
    const titleEl = screen.getByText(/disabled hero/i);
    const wrapper = titleEl.closest('section');
    expect(wrapper).toHaveStyle('opacity: 0.5');
    expect(wrapper).toHaveStyle('cursor: not-allowed');
  });
});
