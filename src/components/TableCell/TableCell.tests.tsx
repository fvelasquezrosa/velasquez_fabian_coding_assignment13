import React from 'react';
import { render, screen } from '@testing-library/react';
import { TableCell } from './TableCell';

describe('TableCell', () => {
  test('is visible', () => {
    render(
      <table>
        <tbody>
          <tr>
            <TableCell>Cell Content</TableCell>
          </tr>
        </tbody>
      </table>
    );
    expect(screen.getByText(/cell content/i)).toBeInTheDocument();
  });

  test('changes style when disabled', () => {
    render(
      <table>
        <tbody>
          <tr>
            <TableCell disabled>Disabled Cell</TableCell>
          </tr>
        </tbody>
      </table>
    );
    const el = screen.getByText(/disabled cell/i);
    expect(el.closest('td')).toHaveStyle('opacity: 0.5');
  });
});