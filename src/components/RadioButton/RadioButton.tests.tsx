import React from 'react';
import { render, screen } from '@testing-library/react';
import { RadioButton } from './RadioButton';

describe('RadioButton', () => {
  test('is visible', () => {
    render(<RadioButton label="Option A" name="test" />);
    expect(screen.getByText(/option a/i)).toBeInTheDocument();
    expect(screen.getByRole('radio')).toBeInTheDocument();
  });

  test('changes style when disabled (greyed out)', () => {
    render(<RadioButton label="Disabled option" name="test" disabled />);
    const labelEl = screen.getByText(/disabled option/i).closest('label');
    expect(labelEl).toHaveStyle('opacity: 0.5');
    expect(labelEl).toHaveStyle('cursor: not-allowed');
  });
});