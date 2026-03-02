import React from 'react';
import styled from 'styled-components';
import type { ButtonProps } from './Button.types';

const StyledButton = styled.button<{ $bg?: string; $disabled?: boolean }>`
  padding: 0.75rem 1rem;
  border-radius: 10px;
  border: none;
  width: 100%;
  max-width: 280px;

  font-size: 1rem;

  background: ${({ $bg }) => $bg ?? '#2563eb'};
  color: white;

  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ $disabled }) => ($disabled ? 0.5 : 1)};

  @media (min-width: 640px) {
    width: auto;
  }
`;

export const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled = false,
  backgroundColor,
}) => {
  return (
    <StyledButton
      type="button"
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      $disabled={disabled}
      $bg={backgroundColor}
      aria-disabled={disabled}
    >
      {label}
    </StyledButton>
  );
};

export default Button;