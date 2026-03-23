import React from 'react';
import styled from 'styled-components';
import type { TableCellProps } from './TableCell.types';

const StyledCell = styled.td<{ $disabled?: boolean }>`
  padding: 0.75rem;
  border: 1px solid #e5e7eb;

  opacity: ${({ $disabled }) => ($disabled ? 0.5 : 1)};
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'default')};

  @media (min-width: 640px) {
    padding: 1rem;
  }
`;

export const TableCell: React.FC<TableCellProps> = ({
  children,
  disabled = false,
}) => {
  return (
    <StyledCell $disabled={disabled} aria-disabled={disabled}>
      {children}
    </StyledCell>
  );
};

export default TableCell;
