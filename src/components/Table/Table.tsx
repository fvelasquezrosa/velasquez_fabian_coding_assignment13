import React from 'react';
import styled from 'styled-components';
import type { TableProps } from './Table.types';

const StyledTable = styled.table<{ $disabled?: boolean }>`
  width: 100%;
  border-collapse: collapse;
  margin: 1rem 0;

  opacity: ${({ $disabled }) => ($disabled ? 0.5 : 1)};
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'default')};

  @media (min-width: 640px) {
    font-size: 1rem;
  }
`;

export const Table: React.FC<TableProps> = ({ children, disabled = false }) => {
  return (
    <StyledTable $disabled={disabled} aria-disabled={disabled}>
      {children}
    </StyledTable>
  );
};

export default Table;
