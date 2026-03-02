import React from 'react';
import styled from 'styled-components';
import type { LabelProps } from './Label.types';

const StyledLabel = styled.span<{
  $disabled?: boolean;
  $color?: string;
  $bg?: string;
}>`
  display: inline-block;
  padding: 0.35rem 0.6rem;
  border-radius: 999px;
  font-size: 0.95rem;
  line-height: 1.2;

  color: ${({ $color }) => $color ?? '#111827'};
  background: ${({ $bg }) => $bg ?? '#e5e7eb'};

  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'default')};
  opacity: ${({ $disabled }) => ($disabled ? 0.5 : 1)};

  /* Responsive: slightly larger on bigger screens */
  @media (min-width: 640px) {
    font-size: 1rem;
    padding: 0.4rem 0.7rem;
  }
`;

export const Label: React.FC<LabelProps> = ({
  text,
  disabled = false,
  color,
  backgroundColor,
}) => {
  return (
    <StyledLabel
      $disabled={disabled}
      $color={color}
      $bg={backgroundColor}
      aria-disabled={disabled}
    >
      {text}
    </StyledLabel>
  );
};

export default Label;