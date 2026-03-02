import React from 'react';
import { render, screen } from '@testing-library/react';
import { TableRow } from './TableRow';

describe('TableRow', () => {
  test('is visible', () => {
    render(
      <table>
        <tbody>
          <TableRow>
            <td>Test Row</td>
          </TableRow>
        </tbody>
      </table>
    );
    expect(screen.getByText(/test row/i)).toBeInTheDocument();
  });

  test('changes style when disabled', () => {
    render(
      <table>
        <tbody>
          <TableRow disabled>
            <td>Disabled Row</td>
          </TableRow>
        </tbody>
      </table>
    );
    const el = screen.getByText(/disabled row/i);
    expect(el.closest('tr')).toHaveStyle('opacity: 0.5');
  });
});