import React from 'react';
import { render, screen } from '@testing-library/react';
import { Table } from './Table';

describe('Table', () => {
  test('is visible', () => {
    render(
      <Table>
        <tbody>
          <tr>
            <td>Test</td>
          </tr>
        </tbody>
      </Table>
    );
    expect(screen.getByText(/test/i)).toBeInTheDocument();
  });

  test('changes style when disabled', () => {
    render(
      <Table disabled>
        <tbody>
          <tr>
            <td>Disabled</td>
          </tr>
        </tbody>
      </Table>
    );
    const el = screen.getByText(/disabled/i);
    expect(el.closest('table')).toHaveStyle('opacity: 0.5');
  });
});