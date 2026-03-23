import React from 'react';
import { render, screen } from '@testing-library/react';
import { Card } from './Card';

describe('Card', () => {
  test('is visible', () => {
    render(<Card title="My Card" body="Body text" />);
    expect(screen.getByText(/my card/i)).toBeInTheDocument();
    expect(screen.getByText(/body text/i)).toBeInTheDocument();
  });

  test('changes style when disabled', () => {
    render(<Card title="Disabled Card" body="Body" disabled />);
    const titleEl = screen.getByText(/disabled card/i);
    const wrapper = titleEl.closest('div');
    expect(wrapper).toHaveStyle('opacity: 0.5');
    expect(wrapper).toHaveStyle('cursor: not-allowed');
  });
});
