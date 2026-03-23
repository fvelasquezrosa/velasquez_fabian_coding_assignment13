import React from 'react';
import { render, screen } from '@testing-library/react';
import { Dropdown } from './Dropdown';

const options = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
];

describe('Dropdown', () => {
  test('is visible', () => {
    render(<Dropdown options={options} />);
    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });

  test('changes style when disabled', () => {
    render(<Dropdown options={options} disabled />);
    const select = screen.getByRole('combobox');
    expect(select).toHaveStyle('opacity: 0.5');
    expect(select).toHaveStyle('cursor: not-allowed');
  });
});
