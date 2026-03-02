import React from 'react';
import { render, screen } from '@testing-library/react';
import { TableHeader } from './TableHeader';

describe('TableHeader', () => {
  test('is visible', () => {
    render(
      <table>
        <TableHeader>
          <tr>
            <th>Name</th>
          </tr>
        </TableHeader>
      </table>
    );
    expect(screen.getByText(/name/i)).toBeInTheDocument();
  });

  test('changes style when disabled', () => {
    render(
      <table>
        <TableHeader disabled>
          <tr>
            <th>Disabled</th>
          </tr>
        </TableHeader>
      </table>
    );
    const el = screen.getByText(/disabled/i);
    expect(el.closest('thead')).toHaveStyle('opacity: 0.5');
  });
});