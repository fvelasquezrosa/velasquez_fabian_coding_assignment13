import React from 'react';
import styled from 'styled-components';
import type { DropdownProps } from './Dropdown.types';

const StyledSelect = styled.select<{
  $disabled?: boolean;
  $bg?: string;
}>`
  padding: 0.6rem 0.75rem;
  border-radius: 8px;
  border: 1px solid #d1d5db;
  width: 100%;
  max-width: 280px;

  background: ${({ $bg }) => $bg ?? '#ffffff'};

  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ $disabled }) => ($disabled ? 0.5 : 1)};

  @media (min-width: 640px) {
    width: auto;
  }
`;

export const Dropdown: React.FC<DropdownProps> = ({
  options,
  disabled = false,
  backgroundColor,
}) => {
  return (
    <StyledSelect
      disabled={disabled}
      $disabled={disabled}
      $bg={backgroundColor}
      aria-disabled={disabled}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </StyledSelect>
  );
};

export default Dropdown;
