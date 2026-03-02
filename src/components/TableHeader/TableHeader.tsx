import React from 'react';
import styled from 'styled-components';
import type { TableHeaderProps } from './TableHeader.types';

const StyledThead = styled.thead<{ $disabled?: boolean }>`
  background-color: #f3f4f6;

  opacity: ${({ $disabled }) => ($disabled ? 0.5 : 1)};
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'default')};

  th {
    padding: 0.75rem;
    text-align: left;
    font-weight: 600;
  }

  @media (min-width: 640px) {
    th {
      padding: 1rem;
    }
  }
`;

export const TableHeader: React.FC<TableHeaderProps> = ({
  children,
  disabled = false,
}) => {
  return (
    <StyledThead $disabled={disabled} aria-disabled={disabled}>
      {children}
    </StyledThead>
  );
};

export default TableHeader;