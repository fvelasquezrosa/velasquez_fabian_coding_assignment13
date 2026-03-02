import React from 'react';
import styled from 'styled-components';
import type { TableRowProps } from './TableRow.types';

const StyledRow = styled.tr<{ $disabled?: boolean }>`
  border-bottom: 1px solid #e5e7eb;

  opacity: ${({ $disabled }) => ($disabled ? 0.5 : 1)};
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'default')};

  td {
    padding: 0.75rem;
  }

  @media (min-width: 640px) {
    td {
      padding: 1rem;
    }
  }
`;

export const TableRow: React.FC<TableRowProps> = ({
  children,
  disabled = false,
}) => {
  return (
    <StyledRow $disabled={disabled} aria-disabled={disabled}>
      {children}
    </StyledRow>
  );
};

export default TableRow;