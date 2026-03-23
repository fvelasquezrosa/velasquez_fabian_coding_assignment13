import React from 'react';
import { render, screen } from '@testing-library/react';
import { TableFooter } from './TableFooter';

describe('TableFooter', () => {
  test('is visible', () => {
    render(
      <table>
        <TableFooter>
          <tr>
            <td>Footer</td>
          </tr>
        </TableFooter>
      </table>,
    );

    expect(screen.getByText(/footer/i)).toBeInTheDocument();
  });

  test('changes style when disabled', () => {
    render(
      <table>
        <TableFooter disabled>
          <tr>
            <td>Disabled Footer</td>
          </tr>
        </TableFooter>
      </table>,
    );

    const el = screen.getByText(/disabled footer/i);
    expect(el.closest('tfoot')).toHaveStyle('opacity: 0.5');
  });
});
