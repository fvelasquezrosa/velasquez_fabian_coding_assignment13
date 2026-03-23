import React from 'react';
import styled from 'styled-components';
import type { TableFooterProps } from './TableFooter.types';

const StyledTfoot = styled.tfoot<{ $disabled?: boolean }>`
  background-color: #f9fafb;
  font-weight: 600;

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

export const TableFooter: React.FC<TableFooterProps> = ({
  children,
  disabled = false,
}) => {
  return (
    <StyledTfoot $disabled={disabled} aria-disabled={disabled}>
      {children}
    </StyledTfoot>
  );
};

export default TableFooter;
